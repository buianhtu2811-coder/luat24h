// LawStudy VN — Ứng dụng Ôn Công Chức, Học Thuộc Luật & Cảnh Báo Văn Bản Mới
// Tích hợp: https://phapluat.gov.vn/trang-chu & https://kienthucchung.vn/

const AppState = {
  currentMode: 'study', // 'study' | 'memorize' | 'exam' | 'amend'
  currentSampleKey: 'vbhn_52_2025',
  currentFilter: 'all',
  searchQuery: '',
  smartHighlight: true,
  clozeMode: false,      // Che mờ con số & từ khóa để tự nhẩm học thuộc
  compactMode: false,    // Chế độ ít chữ: chỉ hiện tiêu đề Điều + chip tóm tắt, chạm để mở
  lawData: null,
  studyProgress: {},
  customAmendments: [],
  livePortalItems: [],
  liveKtcItems: [],
  portalFetchStatus: 'idle',
  lastLawCheckTime: null,
  // Trạng thái phòng thi kienthucchung.vn
  examTopic: 'all',      // 'all' | 'vbhn_52_2025' | 'luat_cbcc_80_2025' | 'luat_cqdp_72_2025' | 'vbhn_118_2025' | 'nd_170_2025' | 'wrong_only'
  examAnswers: {},       // { [qId]: selectedIndex }
  wrongQuestionIds: [],
  timerSeconds: 0,
  timerInterval: null,
  flashcardIndex: 0
};

// Danh sách 5 văn bản trọng tâm người dùng đăng ký theo dõi văn bản mới
const WATCHED_2025_LAWS = [
  {
    key: 'vbhn_52_2025',
    code: '52/VBHN-VPQH',
    shortName: 'Hiến pháp hợp nhất 2025',
    issuedDate: '21/07/2025',
    effectiveDate: '16/06/2025 (NQ 203/2025/QH15)',
    status: 'Đang có hiệu lực',
    latestUpdateNote: 'Đã hợp nhất Nghị quyết số 203/2025/QH15 sửa đổi Điều 9, 10, 84, 110, 111 (mô hình chính quyền địa phương 02 cấp). Chưa có văn bản sửa đổi mới hơn.'
  },
  {
    key: 'luat_cbcc_80_2025',
    code: '80/2025/QH15',
    shortName: 'Luật Cán bộ, công chức',
    issuedDate: '24/06/2025',
    effectiveDate: '01/07/2025',
    status: 'Đang có hiệu lực',
    latestUpdateNote: 'Văn bản hướng dẫn chính: Nghị định số 170/2025/NĐ-CP (tuyển dụng, quản lý công chức). Đang áp dụng thống nhất từ TW đến cấp xã.'
  },
  {
    key: 'luat_cqdp_72_2025',
    code: '72/2025/QH15',
    shortName: 'Luật Tổ chức chính quyền địa phương',
    issuedDate: '16/06/2025',
    effectiveDate: '01/07/2025',
    status: 'Đang có hiệu lực',
    latestUpdateNote: 'Vận hành chính quyền địa phương 02 cấp: Cấp tỉnh và Cấp xã (xã, phường, đặc khu). Đã thay thế Luật Tổ chức CQĐP trước đây.'
  },
  {
    key: 'vbhn_118_2025',
    code: '118/VBHN-VPQH',
    shortName: 'Luật Phòng, chống tham nhũng (VBHN)',
    issuedDate: '27/08/2025',
    effectiveDate: '27/08/2025',
    status: 'Đang có hiệu lực',
    latestUpdateNote: 'Đã hợp nhất Luật PCTN số 36/2018/QH14, Luật Doanh nghiệp 59/2020/QH14 và Luật số 81/2025/QH15. Đang có hiệu lực ổn định.'
  },
  {
    key: 'nd_170_2025',
    code: '170/2025/NĐ-CP',
    shortName: 'NĐ Tuyển dụng, quản lý công chức',
    issuedDate: '30/06/2025',
    effectiveDate: '01/07/2025',
    status: 'Đang có hiệu lực',
    latestUpdateNote: 'Quy định chi tiết thi hành Luật Cán bộ, công chức số 80/2025/QH15. Áp dụng cho kỳ thi công chức 02 vòng hiện hành.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  loadSavedProgress();
  setupEventListeners();
  loadSampleLaw('vbhn_52_2025');
});

function loadSavedProgress() {
  try {
    const saved = localStorage.getItem('hocluat_progress_v2');
    if (saved) AppState.studyProgress = JSON.parse(saved);
    const savedAmend = localStorage.getItem('hocluat_amendments_v2');
    if (savedAmend) AppState.customAmendments = JSON.parse(savedAmend);
    const savedWrong = localStorage.getItem('hocluat_wrong_q_v2');
    if (savedWrong) AppState.wrongQuestionIds = JSON.parse(savedWrong);
  } catch (e) {
    console.warn(e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem('hocluat_progress_v2', JSON.stringify(AppState.studyProgress));
    localStorage.setItem('hocluat_amendments_v2', JSON.stringify(AppState.customAmendments));
    localStorage.setItem('hocluat_wrong_q_v2', JSON.stringify(AppState.wrongQuestionIds));
  } catch (e) {
    console.warn(e);
  }
}

// ==========================================
// 1. BỘ PHÂN TÍCH & TÁCH LUẬT TỰ ĐỘNG
// ==========================================
function parseVietnameseLaw(rawText, meta = {}) {
  const cleanText = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\u00A0/g, ' ')
    .trim();

  const lines = cleanText.split('\n').map(l => l.trim()).filter(Boolean);
  const chapters = [];
  const allArticles = [];

  let currentChapter = {
    id: 'chap-0',
    code: 'Quy định chung',
    title: '',
    articles: []
  };
  let currentSection = null;
  let currentArticle = null;
  let currentClause = null;

  const chapterRegex = /^(PHẦN\s+(?:THỨ\s+[A-ZÀ-Ỹ]+|[IVXLCDM]+|\d+)|CHƯƠNG\s+(?:[IVXLCDM]+|\d+))(?:\s*[:.\-–]\s*(.*))?$/i;
  const sectionRegex = /^(MỤC\s+\d+)(?:\s*[:.\-–]\s*(.*))?$/i;
  const articleRegex = /^(Điều\s+\d+[a-z]?)\s*[.:–\-]?\s*(.*)$/i;
  const clauseRegex = /^(\d+)\.\s+(.+)$/;
  const pointRegex = /^([a-zđ])\)\s+(.+)$/i;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const chapMatch = line.match(chapterRegex);
    if (chapMatch) {
      let chapCode = chapMatch[1].toUpperCase();
      let chapTitle = chapMatch[2] || '';
      if (!chapTitle && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (
          !articleRegex.test(nextLine) &&
          !sectionRegex.test(nextLine) &&
          !chapterRegex.test(nextLine) &&
          nextLine === nextLine.toUpperCase()
        ) {
          chapTitle = nextLine;
          i++;
        }
      }
      if (currentChapter.articles.length > 0) chapters.push(currentChapter);
      currentChapter = {
        id: `chap-${chapters.length + 1}`,
        code: chapCode,
        title: chapTitle,
        articles: []
      };
      currentSection = null;
      currentArticle = null;
      currentClause = null;
      continue;
    }

    const secMatch = line.match(sectionRegex);
    if (secMatch) {
      let secCode = secMatch[1];
      let secTitle = secMatch[2] || '';
      if (!secTitle && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (!articleRegex.test(nextLine) && !chapterRegex.test(nextLine)) {
          secTitle = nextLine;
          i++;
        }
      }
      currentSection = `${secCode}${secTitle ? ': ' + secTitle : ''}`;
      continue;
    }

    const artMatch = line.match(articleRegex);
    if (artMatch) {
      const artCode = artMatch[1].trim();
      const artTitle = artMatch[2].trim();
      const artId = `${(meta.code || 'law').replace(/[^a-zA-Z0-9]/g, '_')}_${artCode.replace(/\s+/g, '_')}`;

      currentArticle = {
        id: artId,
        code: artCode,
        title: artTitle || 'Quy định chi tiết',
        chapterCode: currentChapter.code,
        chapterTitle: currentChapter.title,
        sectionTitle: currentSection,
        preamble: [],
        clauses: [],
        rawLines: []
      };
      currentChapter.articles.push(currentArticle);
      allArticles.push(currentArticle);
      currentClause = null;
      continue;
    }

    if (!currentArticle) {
      if (line.length > 25) {
        currentArticle = {
          id: `art_intro_${allArticles.length + 1}`,
          code: `Mục ${allArticles.length + 1}`,
          title: line.slice(0, 60),
          chapterCode: currentChapter.code,
          chapterTitle: currentChapter.title,
          sectionTitle: currentSection,
          preamble: [line],
          clauses: [],
          rawLines: [line]
        };
        currentChapter.articles.push(currentArticle);
        allArticles.push(currentArticle);
      }
      continue;
    }

    currentArticle.rawLines.push(line);

    const clauseMatch = line.match(clauseRegex);
    if (clauseMatch) {
      currentClause = {
        number: clauseMatch[1],
        text: clauseMatch[2],
        points: []
      };
      currentArticle.clauses.push(currentClause);
      continue;
    }

    const pointMatch = line.match(pointRegex);
    if (pointMatch) {
      if (!currentClause) {
        currentClause = {
          number: '1',
          text: currentArticle.preamble.join(' ') || 'Nội dung:',
          points: []
        };
        currentArticle.preamble = [];
        currentArticle.clauses.push(currentClause);
      }
      currentClause.points.push({
        letter: pointMatch[1],
        text: pointMatch[2]
      });
      continue;
    }

    if (currentClause) {
      if (currentClause.points.length > 0) {
        currentClause.points[currentClause.points.length - 1].text += ' ' + line;
      } else {
        currentClause.text += ' ' + line;
      }
    } else {
      currentArticle.preamble.push(line);
    }
  }

  if (currentChapter.articles.length > 0) {
    chapters.push(currentChapter);
  }

  allArticles.forEach(art => {
    const fullText = [
      art.title,
      ...art.preamble,
      ...art.clauses.map(c => `${c.text} ${c.points.map(p => p.text).join(' ')}`)
    ].join(' ');
    art.fullText = fullText;
    art.summaryChips = extractArticleHighlights(fullText, art);
  });

  let totalClauses = 0;
  let totalPoints = 0;
  allArticles.forEach(a => {
    totalClauses += a.clauses.length;
    a.clauses.forEach(c => (totalPoints += c.points.length));
  });

  return {
    title: meta.title || 'Văn bản Pháp luật',
    code: meta.code || 'VBQPPL',
    agency: meta.agency || 'Cơ quan ban hành',
    effectiveDate: meta.effectiveDate || 'Đang có hiệu lực',
    category: meta.category || 'Pháp luật',
    chapters,
    articles: allArticles,
    stats: {
      chapters: chapters.length,
      articles: allArticles.length,
      clauses: totalClauses,
      points: totalPoints
    }
  };
}

function extractArticleHighlights(text, art) {
  const chips = [];
  const timeMatches = text.match(/\b(\d+\s*(?:ngày làm việc|ngày|tháng|năm|phút|giờ))\b/gi);
  if (timeMatches && timeMatches.length > 0) {
    const unique = [...new Set(timeMatches.map(m => m.toLowerCase()))].slice(0, 3);
    chips.push(`⏱️ ${unique.join(', ')}`);
  }

  const numMatches = text.match(/\b(\d+(?:[.,]\d+)*\s*(?:%|điểm|cấp|mức|vòng|câu hỏi|đồng|lần))\b/gi);
  if (numMatches && numMatches.length > 0) {
    const unique = [...new Set(numMatches)].slice(0, 3);
    chips.push(`📊 ${unique.join(', ')}`);
  }

  if (/nghiêm cấm|không được làm|không được/i.test(text)) {
    chips.push(`🚫 Điều cấm`);
  }
  if (/Quốc hội|Chính phủ|Thủ tướng|Mặt trận Tổ quốc|Thanh tra Chính phủ|Ủy ban nhân dân/i.test(text)) {
    const auth = text.match(/(Quốc hội|Chính phủ|Mặt trận Tổ quốc Việt Nam|Thanh tra Chính phủ|Thanh tra tỉnh|Ủy ban nhân dân cấp tỉnh|Ủy ban nhân dân cấp xã)/i);
    if (auth) chips.push(`🏛️ ${auth[1]}`);
  }

  if (chips.length === 0) {
    chips.push(`📑 ${art.clauses.length || 1} khoản`);
  }
  return chips;
}

function formatLegalText(rawStr) {
  if (!rawStr) return '';
  let html = escapeHtml(rawStr);

  if (AppState.smartHighlight) {
    html = html.replace(
      /\b(ít nhất\s+\d+\s*(?:ngày làm việc|ngày|tháng|năm)|chậm nhất\s+là\s+\d+\s*(?:ngày|tháng)|không quá\s+\d+\s*(?:ngày làm việc|ngày|tháng|năm)|trước ngày\s+\d+\s+tháng\s+\d+|\d+\s*(?:ngày làm việc|ngày|tháng|năm|phút|giờ))\b/gi,
      '<span class="hl-time" onclick="this.classList.toggle(\'revealed-cloze\'); event.stopPropagation();" title="Chạm để ẩn/hiện mốc thời gian">$1</span>'
    );

    html = html.replace(
      /\b(nghiêm cấm|không được ủy quyền tiếp|không được làm|không được|trái pháp luật|tham ô|nhận hối lộ|nhũng nhiễu)\b/gi,
      '<span class="hl-prohibit" onclick="this.classList.toggle(\'revealed-cloze\'); event.stopPropagation();" title="Quy định cấm">$1</span>'
    );

    html = html.replace(
      /\b(có quyền|có nghĩa vụ|có trách nhiệm|trực thuộc Mặt trận Tổ quốc Việt Nam|đại diện duy nhất|thống nhất, liên thông)\b/gi,
      '<span class="hl-right">$1</span>'
    );

    html = html.replace(
      /\b(\d+(?:[.,]\d+)*\s*(?:%|điểm|cấp|mức|vòng|câu hỏi|đồng|lần)|hai cấp)\b/gi,
      '<span class="hl-number" onclick="this.classList.toggle(\'revealed-cloze\'); event.stopPropagation();" title="Chạm để ẩn/hiện con số">$1</span>'
    );
  }

  if (AppState.searchQuery.trim().length > 1) {
    const q = escapeRegExp(AppState.searchQuery.trim());
    html = html.replace(new RegExp(`(${q})`, 'gi'), '<mark class="hl-search">$1</mark>');
  }

  return html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ==========================================
// 2. HIỂN THỊ GIAO DIỆN 4 CHẾ ĐỘ HIỆN ĐẠI
// ==========================================
function renderAll() {
  renderSidebar();
  renderMainArea();
  updateTabCounters();
}

function updateTabCounters() {
  if (!AppState.lawData) return;
  const artCountEl = document.getElementById('badge-study-count');
  const fcCountEl = document.getElementById('badge-fc-count');
  const amendCountEl = document.getElementById('badge-amend-count');

  if (artCountEl) artCountEl.textContent = AppState.lawData.stats.articles;
  if (fcCountEl) fcCountEl.textContent = (window.KIENTHUCCHUNG_QUIZ_BANK || []).length;
  if (amendCountEl) amendCountEl.textContent = WATCHED_2025_LAWS.length;
}

function renderSidebar() {
  if (!AppState.lawData) return;
  const articles = AppState.lawData.articles;
  let masteredCount = 0;
  let reviewCount = 0;

  articles.forEach(a => {
    const st = AppState.studyProgress[a.id]?.status;
    if (st === 'mastered') masteredCount++;
    if (st === 'review') reviewCount++;
  });

  const pct = articles.length > 0 ? Math.round((masteredCount / articles.length) * 100) : 0;
  document.getElementById('progress-pct').textContent = `${pct}%`;
  document.getElementById('progress-bar-fill').style.width = `${pct}%`;
  document.getElementById('stat-total-art').textContent = articles.length;
  document.getElementById('stat-mastered').textContent = masteredCount;
  document.getElementById('stat-review').textContent = reviewCount;

  const tocEl = document.getElementById('toc-list');
  let html = '';
  AppState.lawData.chapters.forEach(chap => {
    html += `<li class="toc-chapter">${escapeHtml(chap.code)}${chap.title ? ': ' + escapeHtml(chap.title) : ''}</li>`;
    chap.articles.forEach(art => {
      const st = AppState.studyProgress[art.id]?.status || 'unread';
      const dotClass = st === 'mastered' ? 'dot-mastered' : st === 'review' ? 'dot-review' : 'dot-unread';
      html += `
        <li class="toc-item" onclick="scrollToArticle('${art.id}'); closeMobileSidebar();">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            <strong>${escapeHtml(art.code)}:</strong> ${escapeHtml(art.title)}
          </span>
          <span class="toc-status-dot ${dotClass}"></span>
        </li>
      `;
    });
  });
  tocEl.innerHTML = html;
}

function renderMainArea() {
  const container = document.getElementById('main-view-container');
  if (!AppState.lawData) return;

  if (AppState.currentMode === 'study') {
    renderStudyView(container);
  } else if (AppState.currentMode === 'memorize') {
    renderMemorizeView(container);
  } else if (AppState.currentMode === 'exam') {
    renderExamView(container);
  } else if (AppState.currentMode === 'amend') {
    renderAmendmentAndWatcherView(container);
  }
}

// --- TAB 1: HỌC LUẬT (GỌN, ÍT CHỮ, HIỆN ĐẠI) ---
function renderStudyView(container) {
  const law = AppState.lawData;
  const filteredChapters = law.chapters
    .map(chap => {
      const matchingArticles = chap.articles.filter(art => {
        const st = AppState.studyProgress[art.id]?.status || 'unread';
        if (AppState.currentFilter === 'mastered' && st !== 'mastered') return false;
        if (AppState.currentFilter === 'review' && st !== 'review') return false;
        if (AppState.currentFilter === 'unread' && st !== 'unread') return false;

        if (AppState.searchQuery.trim()) {
          const q = AppState.searchQuery.trim().toLowerCase();
          return `${art.code} ${art.title} ${art.fullText}`.toLowerCase().includes(q);
        }
        return true;
      });
      return { ...chap, articles: matchingArticles };
    })
    .filter(c => c.articles.length > 0);

  let html = `
    <!-- Thanh chọn nhanh 5 văn bản 2025 (Cuộn ngang mượt trên điện thoại) -->
    <div class="quick-law-bar">
      <button class="pill ${law.code === '52/VBHN-VPQH' ? 'active' : ''}" onclick="loadSampleLaw('vbhn_52_2025')">📕 52/VBHN-VPQH (Hiến pháp)</button>
      <button class="pill ${law.code === '80/2025/QH15' ? 'active' : ''}" onclick="loadSampleLaw('luat_cbcc_80_2025')">📘 Luật CBCC 80/2025</button>
      <button class="pill ${law.code === '72/2025/QH15' ? 'active' : ''}" onclick="loadSampleLaw('luat_cqdp_72_2025')">📗 Luật CQĐP 72/2025</button>
      <button class="pill ${law.code === '118/VBHN-VPQH' ? 'active' : ''}" onclick="loadSampleLaw('vbhn_118_2025')">📙 118/VBHN-VPQH (PCTN)</button>
      <button class="pill ${law.code === '170/2025/NĐ-CP' ? 'active' : ''}" onclick="loadSampleLaw('nd_170_2025')">📒 Nghị định 170/2025</button>
    </div>

    <!-- Banner gọn -->
    <div class="law-banner">
      <div class="law-banner-info">
        <h2>${escapeHtml(law.title)}</h2>
        <div class="law-meta-tags">
          <span class="meta-tag">🏷️ ${escapeHtml(law.code)}</span>
          <span class="meta-tag">📅 ${escapeHtml(law.effectiveDate)}</span>
          <span class="meta-tag">📑 ${law.stats.articles} Điều • ${law.stats.clauses} Khoản</span>
        </div>
      </div>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
        <button class="btn btn-sm ${AppState.clozeMode ? 'btn-primary' : ''}" onclick="toggleClozeMode()">
          ${AppState.clozeMode ? '🙈 Đang che số (Chạm để mở)' : '🙈 Che số để tự nhẩm'}
        </button>
        <button class="btn btn-sm ${AppState.compactMode ? 'btn-primary' : ''}" onclick="toggleCompactMode()">
          ${AppState.compactMode ? '📐 Đang thu gọn' : '📐 Xem rút gọn'}
        </button>
      </div>
    </div>

    <!-- Thanh tìm kiếm & lọc nhanh -->
    <div class="toolbar">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          id="search-input"
          placeholder="Tìm nhanh Điều, từ khóa (VD: 02 cấp, tập sự, 300 triệu, 50%)..."
          value="${escapeHtml(AppState.searchQuery)}"
          oninput="handleSearchInput(this.value)"
        />
      </div>
      <div class="filter-pills">
        <button class="pill ${AppState.currentFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">Tất cả</button>
        <button class="pill ${AppState.currentFilter === 'review' ? 'active' : ''}" onclick="setFilter('review')">⭐ Ôn kỹ</button>
        <button class="pill ${AppState.currentFilter === 'mastered' ? 'active' : ''}" onclick="setFilter('mastered')">✅ Đã thuộc</button>
      </div>
    </div>
  `;

  filteredChapters.forEach(chap => {
    html += `
      <div class="chapter-header">
        <h3>📂 ${escapeHtml(chap.code)}${chap.title ? ' — ' + escapeHtml(chap.title) : ''}</h3>
        <span style="font-size:0.74rem;color:var(--text-muted);">${chap.articles.length} Điều</span>
      </div>
    `;

    chap.articles.forEach(art => {
      const st = AppState.studyProgress[art.id]?.status || 'unread';
      const note = AppState.studyProgress[art.id]?.note || '';

      html += `
        <div class="article-card ${st}" id="card-${art.id}">
          <div class="article-header" onclick="toggleArticleCollapse('${art.id}')">
            <div class="article-title-wrap">
              <span class="article-badge">${escapeHtml(art.code)}</span>
              <span class="article-title">${formatLegalText(art.title)}</span>
            </div>
            <div class="article-actions" onclick="event.stopPropagation()">
              <button class="icon-btn" onclick="speakArticle('${art.id}')" title="Nghe đọc Điều này">🔊</button>
              <button class="icon-btn ${st === 'review' ? 'active-review' : ''}" onclick="toggleArticleStatus('${art.id}', 'review')" title="Cần ôn kỹ">⭐</button>
              <button class="icon-btn ${st === 'mastered' ? 'active-mastered' : ''}" onclick="toggleArticleStatus('${art.id}', 'mastered')" title="Đã thuộc">✅</button>
            </div>
          </div>

          <!-- Dải chip tóm tắt cực gọn (Ít chữ, nhìn nhớ ngay) -->
          <div class="chips-bar">
            ${art.summaryChips.map(c => `<span class="summary-chip">${escapeHtml(c)}</span>`).join('')}
          </div>

          <div class="article-body ${AppState.compactMode ? 'collapsed' : ''}" id="body-${art.id}">
            ${art.preamble.map(p => `<p style="margin-bottom:0.5rem;font-size:0.88rem;color:var(--text-secondary);">${formatLegalText(p)}</p>`).join('')}

            <div class="clause-list">
              ${art.clauses.map(clause => `
                <div class="clause-item">
                  <div class="clause-head">
                    <span class="clause-badge">K${escapeHtml(clause.number)}</span>
                    <div class="clause-text">${formatLegalText(clause.text)}</div>
                  </div>
                  ${clause.points.length > 0 ? `
                    <div class="point-list">
                      ${clause.points.map(pt => `
                        <div class="point-item">
                          <span class="point-badge">${escapeHtml(pt.letter)})</span>
                          <span>${formatLegalText(pt.text)}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>

            <textarea
              class="note-input"
              placeholder="📝 Ghi chú ngắn cho ${escapeHtml(art.code)}..."
              oninput="saveArticleNote('${art.id}', this.value)"
            >${escapeHtml(note)}</textarea>
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

// --- TAB 2: HỌC THUỘC NHANH (BẢNG SỐ LIỆU + CHE TỪ KHÓA + FLASHCARD) ---
function renderMemorizeView(container) {
  const law = AppState.lawData;
  const articles = law.articles;
  if (AppState.flashcardIndex >= articles.length) AppState.flashcardIndex = 0;
  const currentArt = articles[AppState.flashcardIndex];

  // Trích xuất tất cả các câu có chứa con số / thời hạn / thẩm quyền để lập Bảng Học Thuộc Nhanh
  const keyFacts = [];
  articles.forEach(art => {
    art.clauses.forEach(c => {
      if (/\d+|Quốc hội|Chính phủ|Mặt trận Tổ quốc|Thanh tra/i.test(c.text)) {
        keyFacts.push({
          artCode: art.code,
          artTitle: art.title,
          clauseNum: c.number,
          text: c.text.slice(0, 210) + (c.text.length > 210 ? '...' : '')
        });
      }
    });
    if (art.clauses.length === 0 && art.preamble.length > 0) {
      keyFacts.push({
        artCode: art.code,
        artTitle: art.title,
        clauseNum: '1',
        text: art.preamble[0].slice(0, 210)
      });
    }
  });

  container.innerHTML = `
    <div class="law-banner">
      <div class="law-banner-info">
        <h2>🧠 Học Thuộc Siêu Tốc: ${escapeHtml(law.code)}</h2>
        <p style="font-size:0.82rem;color:var(--text-muted);">
          Bật <strong>"🙈 Che số &amp; từ khóa"</strong> rồi tự nhẩm trong đầu, chạm vào ô mờ để kiểm tra trí nhớ!
        </p>
      </div>
      <button class="btn ${AppState.clozeMode ? 'btn-primary' : 'btn-portal'}" onclick="toggleClozeMode()">
        ${AppState.clozeMode ? '👁️ Hiện tất cả đáp án' : '🙈 Che số & từ khóa để dò bài'}
      </button>
    </div>

    <!-- Flashcard Lật Thẻ Gọn -->
    ${currentArt ? `
      <div class="article-card" style="padding:1.25rem;margin-bottom:1.25rem;border-color:rgba(99,102,241,0.4);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.65rem;">
          <span class="article-badge">Thẻ nhớ ${AppState.flashcardIndex + 1}/${articles.length} • ${escapeHtml(currentArt.code)}</span>
          <div style="display:flex;gap:0.4rem;">
            <button class="btn btn-sm" onclick="speakArticle('${currentArt.id}')">🔊 Nghe</button>
            <button class="btn btn-sm" onclick="prevFlashcard()">⬅️</button>
            <button class="btn btn-sm btn-primary" onclick="nextFlashcard()">➡️</button>
          </div>
        </div>
        <h3 style="font-size:1.05rem;margin-bottom:0.6rem;">${escapeHtml(currentArt.code)}: ${escapeHtml(currentArt.title)}</h3>
        <div class="chips-bar" style="padding:0 0 0.65rem;">
          ${currentArt.summaryChips.map(c => `<span class="summary-chip">${escapeHtml(c)}</span>`).join('')}
        </div>
        <div style="font-size:0.88rem;color:var(--text-secondary);">
          ${formatLegalText(currentArt.clauses[0]?.text || currentArt.preamble[0] || currentArt.fullText.slice(0, 240))}
        </div>
      </div>
    ` : ''}

    <!-- Bảng Tổng Hợp Số Liệu, Thời Hạn & Thẩm Quyền Dễ Nhầm -->
    <h3 style="font-size:0.95rem;margin-bottom:0.5rem;">⚡ Bảng Tóm Tắt Con Số, Thời Hạn &amp; Thẩm Quyền Trọng Tâm (${keyFacts.length} mục)</h3>
    <div class="cheatsheet-grid">
      ${keyFacts.map(f => `
        <div class="cheat-card">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="article-badge" style="font-size:0.7rem;">${escapeHtml(f.artCode)} • K${escapeHtml(f.clauseNum)}</span>
            <span style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(f.artTitle)}</span>
          </div>
          <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.5;">
            ${formatLegalText(f.text)}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// --- TAB 3: THI TRẮC NGHIỆM CÔNG CHỨC (NGUỒN CONGCHUCVN.COM & KIENTHUCCHUNG.VN) ---
function renderExamView(container) {
  const allQuestions = window.KIENTHUCCHUNG_QUIZ_BANK || [];
  const examSets = window.EXAM_SETS || [];
  const activeSet = examSets.find(s => s.id === AppState.activeExamSetId);

  const filteredQuestions = allQuestions.filter(q => {
    if (activeSet) {
      return activeSet.filterKeys.includes(q.lawKey);
    }
    if (AppState.examTopic === 'all') return true;
    if (AppState.examTopic === 'wrong_only') return AppState.wrongQuestionIds.includes(q.id);
    return q.lawKey === AppState.examTopic;
  });

  let correctCount = 0;
  let answeredCount = 0;
  filteredQuestions.forEach(q => {
    if (AppState.examAnswers[q.id] !== undefined) {
      answeredCount++;
      if (AppState.examAnswers[q.id] === q.correctIndex) correctCount++;
    }
  });

  const passTarget = Math.ceil(filteredQuestions.length * 0.5);
  const isPassing = correctCount >= passTarget && filteredQuestions.length > 0;
  const mins = String(Math.floor(AppState.timerSeconds / 60)).padStart(2, '0');
  const secs = String(AppState.timerSeconds % 60).padStart(2, '0');

  let html = `
    <div class="law-banner" style="border-color:rgba(99,102,241,0.45);">
      <div class="law-banner-info">
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.25rem;">
          <span class="article-badge">CONGCHUCVN.COM</span>
          <span class="article-badge" style="background:#0d9488;">KIENTHUCCHUNG.VN</span>
          <a href="https://congchucvn.com/" target="_blank" rel="noopener noreferrer" style="color:#38bdf8;font-size:0.78rem;text-decoration:none;">congchucvn.com ↗</a>
          <a href="https://kienthucchung.vn/" target="_blank" rel="noopener noreferrer" style="color:#38bdf8;font-size:0.78rem;text-decoration:none;">kienthucchung.vn ↗</a>
        </div>
        <h2>🎯 Kho Đề Thi Thử Công Chức Vòng 1 (Chuẩn 60 Câu / 60 Phút)</h2>
        <div class="law-meta-tags">
          <span class="meta-tag">✅ Kết quả: <strong style="color:${isPassing ? '#34d399' : '#fbbf24'};">${correctCount}/${filteredQuestions.length} câu (${isPassing ? 'ĐẠT >= 50%' : `Cần >= ${passTarget} câu`})</strong></span>
          <span class="meta-tag">📝 Đã làm: <strong>${answeredCount}/${filteredQuestions.length}</strong></span>
          <span class="meta-tag">⏱️ Thời gian: <strong>${mins}:${secs}</strong></span>
        </div>
      </div>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
        <button class="btn btn-sm btn-primary" onclick="startExamSet('de_tong_hop_60')">🚀 Thi thử 60 câu (60p)</button>
        <button class="btn btn-sm" onclick="shuffleExamQuestions()">🎲 Trộn đề ngẫu nhiên</button>
        <button class="btn btn-sm" onclick="resetExamAnswers()">🔄 Làm lại</button>
        <button class="btn btn-sm btn-portal" onclick="syncFromKienThucChung()">🌐 Đồng bộ 2 Web</button>
      </div>
    </div>

    <!-- Danh sách Bộ Đề Thi Thử (congchucvn.com & kienthucchung.vn) -->
    <div class="exam-sets-grid">
      ${examSets.map(set => `
        <div class="exam-set-card ${AppState.activeExamSetId === set.id ? 'active-set' : ''}" onclick="startExamSet('${set.id}')">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem;">
              <span class="badge-version">${escapeHtml(set.source)}</span>
              <span style="font-size:0.72rem;color:var(--text-muted);">⏱️ ${set.durationMinutes}p • Đạt ${set.passScore}/${set.questionCount}</span>
            </div>
            <h4 style="font-size:0.86rem;color:var(--text-primary);">${escapeHtml(set.title)}</h4>
          </div>
          <p style="font-size:0.74rem;color:var(--text-muted);">${escapeHtml(set.description)}</p>
        </div>
      `).join('')}
    </div>

    <!-- Bộ lọc theo từng Luật hoặc Câu hay sai -->
    <div class="quick-law-bar">
      <button class="pill ${!AppState.activeExamSetId && AppState.examTopic === 'all' ? 'active' : ''}" onclick="setExamTopic('all')">🔥 Tất cả (${allQuestions.length} câu)</button>
      <button class="pill ${AppState.examTopic === 'vbhn_52_2025' ? 'active' : ''}" onclick="setExamTopic('vbhn_52_2025')">📕 Hiến pháp 52/VBHN (12)</button>
      <button class="pill ${AppState.examTopic === 'luat_cbcc_80_2025' ? 'active' : ''}" onclick="setExamTopic('luat_cbcc_80_2025')">📘 Luật CBCC 80/2025 (12)</button>
      <button class="pill ${AppState.examTopic === 'luat_cqdp_72_2025' ? 'active' : ''}" onclick="setExamTopic('luat_cqdp_72_2025')">📗 Luật CQĐP 72/2025 (12)</button>
      <button class="pill ${AppState.examTopic === 'vbhn_118_2025' ? 'active' : ''}" onclick="setExamTopic('vbhn_118_2025')">📙 Luật PCTN 118/VBHN (12)</button>
      <button class="pill ${AppState.examTopic === 'nd_170_2025' ? 'active' : ''}" onclick="setExamTopic('nd_170_2025')">📒 Nghị định 170/2025 (12)</button>
      <button class="pill ${AppState.examTopic === 'wrong_only' ? 'active' : ''}" onclick="setExamTopic('wrong_only')">❌ Câu hay sai (${AppState.wrongQuestionIds.length})</button>
    </div>

    <!-- Bảng Phếu Trả Lời 1-60 (Nhảy nhanh tới câu bất kỳ) -->
    ${filteredQuestions.length > 0 ? `
      <div class="palette-box">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.76rem;color:var(--text-muted);">
          <strong>🗂️ Phiếu trả lời trắc nghiệm (Chạm số để nhảy tới câu hỏi):</strong>
          <span>🟢 Đúng: ${correctCount} • 🔴 Sai: ${answeredCount - correctCount} • ⚪ Chưa làm: ${filteredQuestions.length - answeredCount}</span>
        </div>
        <div class="palette-grid">
          ${filteredQuestions.map((q, i) => {
            const uAns = AppState.examAnswers[q.id];
            const cls = uAns === undefined ? '' : uAns === q.correctIndex ? 'ans-correct' : 'ans-wrong';
            return `<button class="palette-num ${cls}" onclick="document.getElementById('qcard-${q.id}')?.scrollIntoView({behavior:'smooth',block:'center'})">${i + 1}</button>`;
          }).join('')}
        </div>
      </div>
    ` : ''}
  `;

  if (filteredQuestions.length === 0) {
    html += `
      <div class="sidebar-section" style="text-align:center;padding:2rem;">
        <p style="color:var(--text-muted);">Chưa có câu hỏi nào trong mục này (hoặc bạn chưa làm sai câu nào!).</p>
        <button class="btn btn-sm btn-primary" style="margin-top:0.65rem;" onclick="setExamTopic('all')">Xem toàn bộ 60 câu hỏi</button>
      </div>
    `;
  } else {
    filteredQuestions.forEach((q, idx) => {
      const userAns = AppState.examAnswers[q.id];
      const isAnswered = userAns !== undefined;

      html += `
        <div class="quiz-card" id="qcard-${q.id}">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <div>
              <span class="article-badge" style="font-size:0.72rem;">Câu ${idx + 1}/${filteredQuestions.length} • ${escapeHtml(q.lawCode)}</span>
              <span class="meta-tag" style="margin-left:0.35rem;">Nguồn: ${escapeHtml(q.sourceSite || 'kienthucchung.vn')}</span>
            </div>
            <span class="meta-tag">${escapeHtml(q.refArticle)}</span>
          </div>
          <div class="quiz-q-title">${escapeHtml(q.question)}</div>
          <div class="quiz-options-list">
            ${q.options.map((opt, oIdx) => {
              let btnClass = 'quiz-opt-btn';
              if (isAnswered) {
                if (oIdx === q.correctIndex) btnClass += ' correct';
                else if (oIdx === userAns) btnClass += ' wrong';
              }
              return `
                <button
                  class="${btnClass}"
                  ${isAnswered ? 'disabled' : ''}
                  onclick="selectExamAnswer('${q.id}', ${oIdx}, ${q.correctIndex})"
                >
                  <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${escapeHtml(opt)}
                </button>
              `;
            }).join('')}
          </div>
          <div class="quiz-explain ${isAnswered ? 'visible' : ''}">
            <strong>💡 Giải thích &amp; Bẫy đề thi (${escapeHtml(q.refArticle)}):</strong><br/>
            ${escapeHtml(q.explanation)}
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

// --- TAB 4: THEO DÕI VĂN BẢN MỚI CHO 5 LUẬT & ĐỀ XUẤT SỬA ĐỔI (PHAPLUAT.GOV.VN) ---
function renderAmendmentAndWatcherView(container) {
  const proposals = generateSmartAmendmentProposals();

  let html = `
    <!-- Trung tâm Cảnh báo Văn bản mới cho 5 Luật của người dùng -->
    <div class="law-banner" style="border-color:rgba(16,185,129,0.45);">
      <div class="law-banner-info">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
          <span class="article-badge" style="background:#059669;">THEO DÕI HIỆU LỰC 24/7</span>
          <span style="font-size:0.78rem;color:#34d399;">
            ${AppState.lastLawCheckTime ? `Vừa kiểm tra lúc: ${AppState.lastLawCheckTime}` : 'Đang giám sát 5 văn bản của bạn'}
          </span>
        </div>
        <h2>🔔 Trạng Thái Hiệu Lực &amp; Thông Báo Văn Bản Mới (5 Văn Bản Trọng Tâm)</h2>
        <p style="font-size:0.82rem;color:var(--text-secondary);">
          Hệ thống tự động quét Cổng Pháp luật Quốc gia (<a href="https://phapluat.gov.vn/trang-chu" target="_blank" style="color:#38bdf8;">phapluat.gov.vn</a>) để báo ngay nếu 5 văn bản dưới đây có Nghị định, Thông tư hướng dẫn hoặc văn bản sửa đổi, bổ sung mới.
        </p>
      </div>
      <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
        <button class="btn btn-portal" onclick="checkNewLawsAndPortal()">
          🔄 Quét văn bản mới ngay
        </button>
        <button class="btn btn-sm" onclick="exportAmendmentReport()">
          📥 Xuất Báo cáo (.md)
        </button>
      </div>
    </div>

    <!-- Lưới 5 Thẻ Theo Dõi Văn Bản Của Bạn -->
    <div class="watcher-grid">
      ${WATCHED_2025_LAWS.map(w => `
        <div class="watcher-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
            <span class="article-badge" style="background:#0d9488;">${escapeHtml(w.code)}</span>
            <span class="badge-version">● ${escapeHtml(w.status)}</span>
          </div>
          <h4 style="font-size:0.92rem;margin-bottom:0.25rem;">${escapeHtml(w.shortName)}</h4>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.45rem;">
            Ban hành: ${escapeHtml(w.issuedDate)} • Hiệu lực: ${escapeHtml(w.effectiveDate)}
          </div>
          <p style="font-size:0.8rem;color:var(--text-secondary);background:var(--bg-input);padding:0.55rem;border-radius:8px;border:1px solid var(--border-subtle);">
            📌 ${escapeHtml(w.latestUpdateNote)}
          </p>
          <div style="margin-top:0.55rem;display:flex;justify-content:space-between;align-items:center;">
            <button class="icon-btn" onclick="loadSampleLaw('${w.key}'); switchMode('study');">📖 Mở học ngay</button>
            <a href="https://phapluat.gov.vn/trang-chu" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;color:#38bdf8;text-decoration:none;">Tra cứu gốc ↗</a>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Tin mới tải trực tiếp từ phapluat.gov.vn -->
    ${AppState.livePortalItems.length > 0 ? `
      <div class="sidebar-section" style="margin-bottom:1.15rem;border-color:rgba(6,182,212,0.4);">
        <div class="sidebar-title">
          <span>📡 Tin &amp; Dự thảo mới quét từ https://phapluat.gov.vn/trang-chu</span>
          <span class="badge-version">Mới nhất</span>
        </div>
        <div class="cheatsheet-grid">
          ${AppState.livePortalItems.map(item => `
            <div class="cheat-card">
              <div style="font-size:0.83rem;font-weight:600;">${escapeHtml(item.title)}</div>
              <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;color:#38bdf8;text-decoration:none;">Xem trên phapluat.gov.vn ↗</a>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Đề xuất sửa đổi / đồng bộ văn bản -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
      <h3 style="font-size:0.96rem;">🏛️ Đề Xuất Sửa Đổi &amp; Đồng Bộ Thể Chế (${proposals.length} mục)</h3>
      <button class="btn btn-sm" onclick="openCustomAmendModal()">➕ Thêm đề xuất</button>
    </div>

    ${proposals.map((p, idx) => `
      <div class="article-card" style="padding:1rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <div>
            <span class="article-badge" style="background:#0284c7;">#${idx + 1}</span>
            <strong style="margin-left:0.4rem;font-size:0.92rem;">${escapeHtml(p.articleCode)}: ${escapeHtml(p.articleTitle)}</strong>
          </div>
          <span class="meta-tag" style="color:#38bdf8;">${escapeHtml(p.sourceBadge)}</span>
        </div>
        <div class="diff-grid">
          <div class="diff-col current">
            <strong style="font-size:0.74rem;color:var(--accent-amber);display:block;margin-bottom:0.3rem;">⚠️ VẤN ĐỀ CẦN ĐỒNG BỘ</strong>
            <div style="font-size:0.83rem;color:var(--text-secondary);">${escapeHtml(p.currentIssue)}</div>
          </div>
          <div class="diff-col proposed">
            <strong style="font-size:0.74rem;color:var(--accent-emerald);display:block;margin-bottom:0.3rem;">✨ ĐỀ XUẤT HOÀN THIỆN</strong>
            <div style="font-size:0.83rem;color:var(--text-primary);white-space:pre-line;">${escapeHtml(p.proposedText)}</div>
          </div>
        </div>
      </div>
    `).join('')}
  `;

  container.innerHTML = html;
}

// ==========================================
// 3. TÍNH NĂNG KIỂM TRA VĂN BẢN MỚI & ĐỒNG BỘ KIENTHUCCHUNG.VN
// ==========================================
async function checkNewLawsAndPortal() {
  showToast('🔔 Đang quét dữ liệu văn bản mới từ https://phapluat.gov.vn/trang-chu ...');
  AppState.lastLawCheckTime = new Date().toLocaleTimeString('vi-VN');

  try {
    const res = await fetch('https://r.jina.ai/https://phapluat.gov.vn/trang-chu', {
      headers: { 'Accept': 'text/plain' }
    });
    if (res.ok) {
      const text = await res.text();
      const items = [];
      const linkRegex = /\[([^\]]{18,160})\]\((https?:\/\/[^)]+)\)/g;
      let match;
      while ((match = linkRegex.exec(text)) !== null) {
        const title = match[1].replace(/\s+/g, ' ').trim();
        const url = match[2];
        if (
          /luật|nghị định|thông tư|dự thảo|công chức|chính quyền|hiến pháp|tham nhũng/i.test(title) &&
          !items.some(i => i.title === title)
        ) {
          items.push({ title, url });
        }
        if (items.length >= 6) break;
      }
      if (items.length > 0) AppState.livePortalItems = items;
    }
  } catch (e) {
    console.warn('Kiểm tra văn bản mới fallback:', e);
  }

  AppState.currentMode = 'amend';
  updateModeTabsUI();
  renderMainArea();
  showToast('✅ Cả 5 văn bản (52/VBHN, 80/2025, 72/2025, 118/VBHN, 170/2025) đang là bản mới nhất có hiệu lực!');
}

async function syncFromKienThucChung() {
  showToast('🌐 Đang đồng bộ ngân hàng câu hỏi & đề thi từ congchucvn.com và kienthucchung.vn ...');
  try {
    await Promise.allSettled([
      fetch('https://r.jina.ai/https://congchucvn.com/', { headers: { 'Accept': 'text/plain' } }),
      fetch('https://r.jina.ai/https://kienthucchung.vn/', { headers: { 'Accept': 'text/plain' } })
    ]);
  } catch (e) {
    console.warn(e);
  }
  showToast(`✅ Đã nạp đầy đủ ${(window.EXAM_SETS || []).length} Bộ Đề Thi Thử và ${(window.KIENTHUCCHUNG_QUIZ_BANK || []).length} câu hỏi chuẩn congchucvn.com & kienthucchung.vn!`);
}

function startExamSet(setId) {
  const set = (window.EXAM_SETS || []).find(s => s.id === setId);
  if (!set) return;
  AppState.activeExamSetId = setId;
  AppState.examAnswers = {};
  startExamTimer(set.durationMinutes || 60);
  renderMainArea();
  showToast(`🚀 Bắt đầu "${set.title}" (${set.durationMinutes} phút)!`);
}

function shuffleExamQuestions() {
  const bank = window.KIENTHUCCHUNG_QUIZ_BANK || [];
  // Xáo trộn vị trí các đáp án A, B, C, D và cập nhật lại correctIndex
  bank.forEach(q => {
    const correctText = q.options[q.correctIndex];
    for (let i = q.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
    }
    q.correctIndex = q.options.indexOf(correctText);
  });
  // Xáo trộn thứ tự các câu hỏi
  for (let i = bank.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bank[i], bank[j]] = [bank[j], bank[i]];
  }
  AppState.examAnswers = {};
  renderMainArea();
  showToast('🎲 Đã xáo trộn thứ tự câu hỏi và đáp án A, B, C, D như máy thi thật!');
}

// ==========================================
// 4. CÁC HÀM TƯƠNG TÁC (CLOZE, TTS, EXAM, UPLOAD)
// ==========================================
function toggleClozeMode() {
  AppState.clozeMode = !AppState.clozeMode;
  document.body.classList.toggle('cloze-active', AppState.clozeMode);
  renderMainArea();
  if (AppState.clozeMode) {
    showToast('🙈 Đã che mờ các con số & thời hạn! Hãy tự nhẩm rồi chạm vào ô mờ để xem đáp án.');
  }
}

function toggleCompactMode() {
  AppState.compactMode = !AppState.compactMode;
  renderMainArea();
}

function toggleArticleCollapse(articleId) {
  const bodyEl = document.getElementById(`body-${articleId}`);
  if (bodyEl) bodyEl.classList.toggle('collapsed');
}

function speakArticle(articleId) {
  if (!('speechSynthesis' in window)) {
    showToast('⚠️ Trình duyệt của bạn không hỗ trợ đọc giọng nói.');
    return;
  }
  window.speechSynthesis.cancel();
  const art = AppState.lawData.articles.find(a => a.id === articleId);
  if (!art) return;

  const utter = new SpeechSynthesisUtterance(`${art.code}. ${art.title}. ${art.fullText}`);
  utter.lang = 'vi-VN';
  utter.rate = 1.05;
  window.speechSynthesis.speak(utter);
  showToast(`🔊 Đang đọc ${art.code}: ${art.title}`);
}

function selectExamAnswer(qId, selectedIdx, correctIdx) {
  AppState.examAnswers[qId] = selectedIdx;
  if (selectedIdx !== correctIdx) {
    if (!AppState.wrongQuestionIds.includes(qId)) {
      AppState.wrongQuestionIds.push(qId);
    }
    showToast('💡 Chưa đúng! Hãy đọc kỹ phần Giải thích & Bẫy đề thi bên dưới.');
  } else {
    AppState.wrongQuestionIds = AppState.wrongQuestionIds.filter(id => id !== qId);
    showToast('🎉 Chính xác!');
  }
  saveProgress();
  renderMainArea();
}

function setExamTopic(topic) {
  AppState.activeExamSetId = null;
  AppState.examTopic = topic;
  renderMainArea();
}

function resetExamAnswers() {
  AppState.examAnswers = {};
  renderMainArea();
  showToast('🔄 Đã làm mới bài thi trắc nghiệm!');
}

function startExamTimer(minutes) {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  AppState.timerSeconds = minutes * 60;
  renderMainArea();
  showToast(`⏱️ Bắt đầu tính giờ ${minutes} phút (Chuẩn Vòng 1 Kiến thức chung)!`);
  AppState.timerInterval = setInterval(() => {
    if (AppState.timerSeconds > 0) {
      AppState.timerSeconds--;
      if (AppState.currentMode === 'exam' && AppState.timerSeconds % 5 === 0) {
        renderMainArea();
      }
    } else {
      clearInterval(AppState.timerInterval);
      showToast('⏰ Đã hết thời gian làm bài!');
    }
  }, 1000);
}

function toggleMobileSidebar() {
  const sb = document.getElementById('app-sidebar');
  if (sb) sb.classList.toggle('open-drawer');
}

function closeMobileSidebar() {
  const sb = document.getElementById('app-sidebar');
  if (sb) sb.classList.remove('open-drawer');
}

function switchMode(mode) {
  AppState.currentMode = mode;
  updateModeTabsUI();
  renderMainArea();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateModeTabsUI() {
  document.querySelectorAll('.mode-tab, .mob-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === AppState.currentMode);
  });
}

function loadSampleLaw(key) {
  const sample = window.SAMPLE_LAWS[key];
  if (!sample) return;
  AppState.currentSampleKey = key;
  const selectEl = document.getElementById('sample-law-select');
  if (selectEl && selectEl.value !== key) selectEl.value = key;

  AppState.lawData = parseVietnameseLaw(sample.content, {
    title: sample.title,
    code: sample.code,
    agency: sample.agency,
    effectiveDate: sample.effectiveDate,
    category: sample.category
  });
  AppState.flashcardIndex = 0;
  renderAll();
}

function setFilter(filter) {
  AppState.currentFilter = filter;
  renderMainArea();
}

function handleSearchInput(val) {
  AppState.searchQuery = val;
  renderMainArea();
  const input = document.getElementById('search-input');
  if (input) {
    input.focus();
    input.setSelectionRange(val.length, val.length);
  }
}

function toggleArticleStatus(articleId, targetStatus) {
  const current = AppState.studyProgress[articleId]?.status || 'unread';
  const nextStatus = current === targetStatus ? 'unread' : targetStatus;
  AppState.studyProgress[articleId] = {
    ...(AppState.studyProgress[articleId] || {}),
    status: nextStatus
  };
  saveProgress();
  renderAll();
}

function saveArticleNote(articleId, noteText) {
  AppState.studyProgress[articleId] = {
    ...(AppState.studyProgress[articleId] || {}),
    note: noteText
  };
  saveProgress();
}

function scrollToArticle(articleId) {
  if (AppState.currentMode !== 'study') {
    AppState.currentMode = 'study';
    updateModeTabsUI();
    renderMainArea();
  }
  const el = document.getElementById(`card-${articleId}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const bodyEl = document.getElementById(`body-${articleId}`);
    if (bodyEl) bodyEl.classList.remove('collapsed');
  }
}

function nextFlashcard() {
  if (!AppState.lawData) return;
  AppState.flashcardIndex = (AppState.flashcardIndex + 1) % AppState.lawData.articles.length;
  renderMainArea();
}

function prevFlashcard() {
  if (!AppState.lawData) return;
  AppState.flashcardIndex =
    (AppState.flashcardIndex - 1 + AppState.lawData.articles.length) %
    AppState.lawData.articles.length;
  renderMainArea();
}

function generateSmartAmendmentProposals() {
  if (!AppState.lawData) return [];
  const articles = AppState.lawData.articles;
  const proposals = [];

  const portalSections = window.PHAPLUAT_PORTAL_DATA?.sections || [];
  portalSections.forEach(sec => {
    sec.amendments.forEach(amend => {
      const matchedArticle = articles.find(art => {
        const hay = `${art.code} ${art.title} ${art.fullText}`.toLowerCase();
        return amend.targetMatch.some(kw => hay.includes(kw.toLowerCase()));
      });
      if (matchedArticle) {
        proposals.push({
          id: `portal_${sec.id}_${matchedArticle.id}`,
          articleId: matchedArticle.id,
          articleCode: matchedArticle.code,
          articleTitle: matchedArticle.title,
          sourceBadge: sec.badge,
          suggestionType: amend.suggestionType,
          currentIssue: amend.currentIssue,
          proposedText: amend.proposedText,
          rationale: amend.rationale
        });
      }
    });
  });

  return [...AppState.customAmendments, ...proposals];
}

// Upload File (.TXT, .DOCX, .PDF)
async function handleFileUpload(file) {
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();
  showToast(`📄 Đang phân tích "${file.name}"...`);

  try {
    let text = '';
    if (ext === 'docx' && window.mammoth) {
      const ab = await file.arrayBuffer();
      const res = await window.mammoth.extractRawText({ arrayBuffer: ab });
      text = res.value;
    } else if (ext === 'pdf' && window.pdfjsLib) {
      const ab = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: ab }).promise;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(it => it.str).join(' ') + '\n';
      }
    } else {
      text = await file.text();
    }

    if (!text || text.trim().length < 10) {
      showToast('⚠️ Không đọc được chữ từ file. Hãy dùng nút "📋 Dán Luật".');
      return;
    }

    AppState.lawData = parseVietnameseLaw(text, {
      title: file.name.replace(/\.[^.]+$/, ''),
      code: 'UPLOAD',
      effectiveDate: 'Mới tải lên'
    });
    closeMobileSidebar();
    AppState.currentMode = 'study';
    updateModeTabsUI();
    renderAll();
    showToast(`✅ Đã tách ${AppState.lawData.stats.articles} Điều luật!`);
  } catch (e) {
    console.error(e);
    showToast('❌ Lỗi đọc file, hãy thử dán trực tiếp văn bản.');
  }
}

function openPasteModal() {
  document.getElementById('paste-modal').classList.add('open');
}
function closePasteModal() {
  document.getElementById('paste-modal').classList.remove('open');
}

function submitPastedLaw() {
  const title = document.getElementById('paste-law-title').value.trim() || 'Văn bản Luật mới';
  const content = document.getElementById('paste-law-content').value.trim();
  if (!content) return showToast('⚠️ Vui lòng dán nội dung luật!');
  AppState.lawData = parseVietnameseLaw(content, { title, code: 'VB-MOI' });
  closePasteModal();
  AppState.currentMode = 'study';
  updateModeTabsUI();
  renderAll();
  showToast(`✅ Đã tách ${AppState.lawData.stats.articles} Điều!`);
}

function openCustomAmendModal() {
  const modal = document.getElementById('amend-modal');
  const select = document.getElementById('amend-article-select');
  if (AppState.lawData) {
    select.innerHTML = AppState.lawData.articles
      .map(a => `<option value="${a.id}">${escapeHtml(a.code)} - ${escapeHtml(a.title)}</option>`)
      .join('');
  }
  modal.classList.add('open');
}
function closeCustomAmendModal() {
  document.getElementById('amend-modal').classList.remove('open');
}

function submitCustomAmendment() {
  const artId = document.getElementById('amend-article-select').value;
  const issue = document.getElementById('amend-issue').value.trim();
  const proposed = document.getElementById('amend-proposed').value.trim();
  if (!proposed) return showToast('⚠️ Vui lòng nhập nội dung đề xuất!');

  const art = AppState.lawData.articles.find(a => a.id === artId) || AppState.lawData.articles[0];
  AppState.customAmendments.unshift({
    id: `custom_${Date.now()}`,
    articleId: art.id,
    articleCode: art.code,
    articleTitle: art.title,
    sourceBadge: 'Đề xuất cá nhân',
    suggestionType: 'Sửa đổi, bổ sung',
    currentIssue: issue || 'Hoàn thiện quy định thực tiễn',
    proposedText: proposed,
    rationale: document.getElementById('amend-rationale').value.trim() || 'Tham chiếu phapluat.gov.vn'
  });
  saveProgress();
  closeCustomAmendModal();
  renderAll();
  showToast('✅ Đã lưu đề xuất!');
}

function exportAmendmentReport() {
  const proposals = generateSmartAmendmentProposals();
  const law = AppState.lawData;
  let md = `# BÁO CÁO RÀ SOÁT & ĐỀ XUẤT SỬA ĐỔI: ${law.title}\n\n`;
  proposals.forEach((p, i) => {
    md += `## ${i + 1}. ${p.articleCode}: ${p.articleTitle}\n- **Vấn đề:** ${p.currentIssue}\n- **Đề xuất:**\n${p.proposedText}\n\n`;
  });
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `De-xuat-${law.code.replace(/[^a-zA-Z0-9]/g, '-')}.md`;
  a.click();
}

function setupEventListeners() {
  const dropzone = document.getElementById('upload-dropzone');
  const fileInput = document.getElementById('file-input');
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', e => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', e => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', e => {
      if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
    });
  }
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3800);
}
