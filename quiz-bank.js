// Hệ thống Ngân hàng Câu hỏi & Bộ Đề Thi Thử Công Chức Vòng 1 (60 câu / 60 phút)
// Đồng bộ cấu trúc & dữ liệu từ: https://congchucvn.com/ và https://kienthucchung.vn/
// Bao phủ toàn diện 5 văn bản trọng tâm 2025:
// 1. Văn bản hợp nhất số 52/VBHN-VPQH (21/7/2025) - Hiến pháp
// 2. Luật Cán bộ, công chức số 80/2025/QH15
// 3. Luật Tổ chức chính quyền địa phương số 72/2025/QH15
// 4. Văn bản hợp nhất số 118/VBHN-VPQH (27/8/2025) - Luật Phòng, chống tham nhũng
// 5. Nghị định số 170/2025/NĐ-CP - Tuyển dụng, sử dụng và quản lý công chức

window.EXAM_SETS = [
  {
    id: "de_tong_hop_60",
    title: "Đề Tổng Hợp 60 Câu (Chuẩn Vòng 1)",
    durationMinutes: 60,
    passScore: 30,
    questionCount: 60,
    filterKeys: ["vbhn_52_2025", "luat_cbcc_80_2025", "luat_cqdp_72_2025", "vbhn_118_2025", "nd_170_2025"],
    description: "60 câu / 60 phút tổng hợp các văn bản trong chương trình học."
  },
  {
    id: "de_hp_52",
    title: "Đề Hiến Pháp (52/VBHN-VPQH)",
    durationMinutes: 15,
    passScore: 6,
    questionCount: 12,
    filterKeys: ["vbhn_52_2025"],
    description: "Chế độ chính trị, Mặt trận Tổ quốc, Quốc hội & Chính quyền địa phương."
  },
  {
    id: "de_cbcc_80",
    title: "Đề Luật Cán Bộ, Công Chức (80/2025/QH15)",
    durationMinutes: 15,
    passScore: 6,
    questionCount: 12,
    filterKeys: ["luat_cbcc_80_2025"],
    description: "Nền công vụ liên thông, nghĩa vụ, đạo đức công vụ & xếp loại công chức."
  },
  {
    id: "de_cqdp_72",
    title: "Đề Chính Quyền Địa Phương (72/2025/QH15)",
    durationMinutes: 15,
    passScore: 6,
    questionCount: 12,
    filterKeys: ["luat_cqdp_72_2025"],
    description: "Mô hình 02 cấp (tỉnh - xã), đặc khu, phân quyền, phân cấp, ủy quyền."
  },
  {
    id: "de_pctn_118",
    title: "Đề Phòng, Chống Tham Nhũng (118/VBHN)",
    durationMinutes: 15,
    passScore: 6,
    questionCount: 12,
    filterKeys: ["vbhn_118_2025"],
    description: "Các hành vi tham nhũng, quy tắc ứng xử, kê khai tài sản 10 ngày & 300 triệu."
  },
  {
    id: "de_nd_170",
    title: "Đề Nghị Định 170/2025/NĐ-CP (Tuyển Dụng & Quản Lý)",
    durationMinutes: 15,
    passScore: 6,
    questionCount: 12,
    filterKeys: ["nd_170_2025"],
    description: "Thi tuyển 2 vòng, thu hút nhân tài, tập sự 85% & bổ nhiệm 05 năm."
  },
  {
    id: "de_ke_toan_nhan_su",
    title: "Đề Nghiệp Vụ Kế Toán & Nhân Sự - Lao Động",
    durationMinutes: 15,
    passScore: 5,
    questionCount: 10,
    filterKeys: ["luat_ke_toan", "luat_lao_dong"],
    description: "Lưu trữ chứng từ kế toán, hợp đồng lao động, thử việc & chấm dứt HĐLĐ."
  }
];

window.KIENTHUCCHUNG_QUIZ_BANK = [
  // =========================================================================
  // PHẦN 1: HIẾN PHÁP HỢP NHẤT SỐ 52/VBHN-VPQH NGÀY 21/7/2025 (12 CÂU TRỌNG TÂM)
  // =========================================================================
  {
    id: "hp_01",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 1 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, lãnh thổ nước Cộng hòa xã hội chủ nghĩa Việt Nam bao gồm những bộ phận nào?",
    options: [
      "Bao gồm đất liền, hải đảo, vùng biển và vùng trời",
      "Bao gồm đất liền, quần đảo, lãnh hải và vùng trời",
      "Bao gồm đất liền, hải đảo, thềm lục địa và vùng đặc quyền kinh tế",
      "Bao gồm đất liền, vùng nước nội thủy, vùng biển và vùng trời"
    ],
    correctIndex: 0,
    refArticle: "Điều 1 (52/VBHN-VPQH)",
    explanation: "Bẫy đề thi trên congchucvn.com thường thay bằng 'thềm lục địa, vùng đặc quyền kinh tế'. Đáp án chuẩn Hiến pháp là 4 thành tố: 'đất liền, hải đảo, vùng biển và vùng trời'."
  },
  {
    id: "hp_02",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 2 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, tất cả quyền lực nhà nước thuộc về Nhân dân mà nền tảng là gì?",
    options: [
      "Liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức",
      "Liên minh giữa giai cấp công nhân với giai cấp nông dân và tầng lớp doanh nhân",
      "Khối đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng",
      "Sự thống nhất giữa Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 2 (52/VBHN-VPQH)",
    explanation: "Cụm từ cố định: 'liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức' (lưu ý trí thức là 'đội ngũ', không phải 'giai cấp' hay 'tầng lớp')."
  },
  {
    id: "hp_03",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 3 Điều 2 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, quyền lực nhà nước ở Việt Nam được tổ chức theo nguyên tắc nào?",
    options: [
      "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp",
      "Quyền lực nhà nước là phân립, kiểm soát chéo giữa ba nhánh lập pháp, hành pháp, tư pháp",
      "Quyền lực nhà nước là thống nhất, có sự phân cấp, ủy quyền giữa trung ương và địa phương",
      "Quyền lực nhà nước tập trung thống nhất vào Quốc hội và Chính phủ"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3 Điều 2 (52/VBHN-VPQH)",
    explanation: "Nhớ 4 từ khóa: Thống nhất - Phân công - Phối hợp - Kiểm soát."
  },
  {
    id: "hp_04",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 4 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, Đảng Cộng sản Việt Nam là đội tiên phong của ai?",
    options: [
      "Đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của Nhân dân lao động và của dân tộc Việt Nam",
      "Đội tiên phong của giai cấp công nhân và giai cấp nông dân Việt Nam",
      "Đội tiên phong của toàn thể Nhân dân Việt Nam và đội ngũ trí thức",
      "Đội tiên phong của khối liên minh công - nông - trí thức"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 4 (52/VBHN-VPQH)",
    explanation: "Điều 4 khẳng định đầy đủ 3 vế: Đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của Nhân dân lao động và của dân tộc Việt Nam."
  },
  {
    id: "hp_05",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 8 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, Nhà nước được tổ chức và hoạt động theo Hiến pháp và pháp luật, quản lý xã hội bằng Hiến pháp và pháp luật, thực hiện nguyên tắc nào?",
    options: [
      "Nguyên tắc tập trung dân chủ",
      "Nguyên tắc pháp chế xã hội chủ nghĩa",
      "Nguyên tắc tập thể lãnh đạo, cá nhân phụ trách",
      "Nguyên tắc phân công, phân cấp rõ ràng"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 8 (52/VBHN-VPQH)",
    explanation: "Khoản 1 Điều 8 quy định Nhà nước thực hiện 'nguyên tắc tập trung dân chủ'."
  },
  {
    id: "hp_06",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 9 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH (đã hợp nhất Nghị quyết 203/2025/QH15), 05 tổ chức chính trị - xã hội bao gồm những tổ chức nào và trực thuộc cơ quan nào?",
    options: [
      "Công đoàn Việt Nam, Hội Nông dân Việt Nam, Đoàn TNCS Hồ Chí Minh, Hội Liên hiệp Phụ nữ Việt Nam, Hội Cựu chiến binh Việt Nam; trực thuộc Mặt trận Tổ quốc Việt Nam",
      "Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ, Hội Chữ thập đỏ; trực thuộc Chính phủ",
      "Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ, Liên hiệp các Hội Khoa học Kỹ thuật; trực thuộc Mặt trận Tổ quốc",
      "Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ, Hội Cựu chiến binh; hoạt động độc lập ngoài Mặt trận Tổ quốc"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 9 (52/VBHN-VPQH)",
    explanation: "Điểm sửa đổi lớn năm 2025: 5 tổ chức chính trị - xã hội là các tổ chức trực thuộc Mặt trận Tổ quốc Việt Nam, được tổ chức và hoạt động thống nhất trong MTTQ Việt Nam."
  },
  {
    id: "hp_07",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 10 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, Công đoàn Việt Nam giữ vai trò đại diện như thế nào ở cấp quốc gia?",
    options: [
      "Là đại diện duy nhất của người lao động ở cấp quốc gia trong quan hệ lao động và quan hệ quốc tế về công đoàn",
      "Là một trong các tổ chức đại diện của người lao động ở cấp quốc gia cùng với Bộ Nội vụ",
      "Là cơ quan quản lý nhà nước về tiền lương và bảo hiểm xã hội ở cấp quốc gia",
      "Là tổ chức nghề nghiệp đại diện cho cả người lao động và người sử dụng lao động"
    ],
    correctIndex: 0,
    refArticle: "Điều 10 (52/VBHN-VPQH)",
    explanation: "Cụm từ mới được bổ sung tại Điều 10 (NQ 203/2025/QH15): 'trực thuộc Mặt trận Tổ quốc Việt Nam... là đại diện duy nhất của người lao động ở cấp quốc gia trong quan hệ lao động và quan hệ quốc tế về công đoàn'."
  },
  {
    id: "hp_08",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 84 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, chủ thể nào sau đây KHÔNG còn được liệt kê riêng là chủ thể trình dự án luật trước Quốc hội (do đã thống nhất vào Ủy ban trung ương Mặt trận Tổ quốc Việt Nam)?",
    options: [
      "Cơ quan trung ương của các tổ chức thành viên của Mặt trận",
      "Kiểm toán nhà nước",
      "Hội đồng dân tộc của Quốc hội",
      "Tòa án nhân dân tối cao và Viện kiểm sát nhân dân tối cao"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 84 (52/VBHN-VPQH)",
    explanation: "Nghị quyết 203/2025/QH15 đã sửa đổi khoản 1 Điều 84: Bỏ cụm từ 'Cơ quan trung ương của tổ chức thành viên của Mặt trận', thống nhất đầu mối trình dự án luật qua Ủy ban trung ương Mặt trận Tổ quốc Việt Nam."
  },
  {
    id: "hp_09",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 110 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH ngày 21/7/2025, các đơn vị hành chính của nước Cộng hòa xã hội chủ nghĩa Việt Nam được tổ chức như thế nào?",
    options: [
      "Được tổ chức thành hai cấp, gồm tỉnh, thành phố trực thuộc trung ương và các đơn vị hành chính dưới tỉnh, thành phố trực thuộc trung ương do luật định",
      "Được tổ chức thành ba cấp: tỉnh, huyện, xã",
      "Được tổ chức thành hai cấp: trung ương và địa phương",
      "Do Chính phủ quy định số cấp hành chính tùy theo từng thời kỳ"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 110 (52/VBHN-VPQH)",
    explanation: "Điều 110 đã sửa đổi năm 2025 hiến định mô hình đơn vị hành chính 02 cấp."
  },
  {
    id: "hp_10",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 3 Điều 110 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, việc thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính bắt buộc phải thực hiện thủ tục gì?",
    options: [
      "Phải lấy ý kiến Nhân dân địa phương và theo trình tự, thủ tục do luật định",
      "Phải tổ chức trưng cầu ý dân trên phạm vi toàn quốc",
      "Chỉ cần lấy ý kiến của Ủy ban nhân dân cấp tỉnh",
      "Do Chủ tịch Ủy ban nhân dân cấp tỉnh tự quyết định"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3 Điều 110 (52/VBHN-VPQH)",
    explanation: "Bắt buộc 'phải lấy ý kiến Nhân dân địa phương và theo trình tự, thủ tục do luật định'."
  },
  {
    id: "hp_11",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 2 Điều 111 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, cấp chính quyền địa phương gồm có Hội đồng nhân dân và Ủy ban nhân dân được tổ chức ở đơn vị hành chính phù hợp với đặc điểm nào?",
    options: [
      "Phù hợp với đặc điểm nông thôn, đô thị, hải đảo do luật định",
      "Chỉ phân biệt đặc điểm đồng bằng và miền núi",
      "Giống hệt nhau ở mọi đơn vị hành chính không phân biệt đô thị hay nông thôn",
      "Phù hợp với quy mô thu ngân sách của từng tỉnh"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 111 (52/VBHN-VPQH)",
    explanation: "Khoản 2 Điều 111 (sửa đổi năm 2025) quy định rõ: 'phù hợp với đặc điểm nông thôn, đô thị, hải đảo do luật định' (lược bỏ cụm từ 'đơn vị hành chính - kinh tế đặc biệt' ra thành khoản 3 riêng)."
  },
  {
    id: "hp_12",
    lawKey: "vbhn_52_2025",
    lawCode: "52/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 114 Văn bản hợp nhất Hiến pháp số 52/VBHN-VPQH, Ủy ban nhân dân ở cấp chính quyền địa phương có vị trí, tính chất pháp lý là gì?",
    options: [
      "Là cơ quan chấp hành của Hội đồng nhân dân, cơ quan hành chính nhà nước ở địa phương, chịu trách nhiệm trước Hội đồng nhân dân và cơ quan hành chính nhà nước cấp trên",
      "Là cơ quan quyền lực nhà nước ở địa phương, đại diện cho ý chí, nguyện vọng của Nhân dân địa phương",
      "Là cơ quan tư pháp và hành chính độc lập tại địa phương",
      "Là cơ quan trực thuộc Tỉnh ủy, chỉ chịu trách nhiệm trước Hội đồng nhân dân cùng cấp"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 114 (52/VBHN-VPQH)",
    explanation: "Phân biệt rõ: HĐND là 'cơ quan quyền lực nhà nước ở địa phương'; còn UBND là 'cơ quan chấp hành của HĐND, cơ quan hành chính nhà nước ở địa phương'."
  },

  // =========================================================================
  // PHẦN 2: LUẬT CÁN BỘ, CÔNG CHỨC SỐ 80/2025/QH15 (12 CÂU TRỌNG TÂM)
  // =========================================================================
  {
    id: "cbcc_01",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 1 Luật Cán bộ, công chức số 80/2025/QH15, phạm vi cán bộ, công chức thuộc đối tượng điều chỉnh của Luật bao gồm những cấp nào?",
    options: [
      "Cán bộ, công chức ở trung ương, ở cấp tỉnh và ở cấp xã (nền công vụ thống nhất, liên thông, đồng bộ từ trung ương đến cấp xã)",
      "Chỉ bao gồm cán bộ, công chức ở trung ương và cấp tỉnh",
      "Chia tách thành công chức nhà nước (tỉnh, huyện) và cán bộ bán chuyên trách cấp xã",
      "Bao gồm cả viên chức trong các đơn vị sự nghiệp công lập"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 1 Luật số 80/2025/QH15",
    explanation: "Luật số 80/2025/QH15 xây dựng nền công vụ thống nhất, liên thông từ trung ương, cấp tỉnh đến cấp xã (không còn cấp huyện và không còn tách chương riêng cho cán bộ, công chức cấp xã như Luật 2008)."
  },
  {
    id: "cbcc_02",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo Điều 2 Luật Cán bộ, công chức số 80/2025/QH15, có bao nhiêu nguyên tắc trong thi hành công vụ và nguyên tắc đầu tiên là gì?",
    options: [
      "05 nguyên tắc; nguyên tắc đầu tiên là 'Tuân thủ Hiến pháp và pháp luật'",
      "05 nguyên tắc; nguyên tắc đầu tiên là 'Bảo đảm sự lãnh đạo của Đảng Cộng sản Việt Nam'",
      "04 nguyên tắc; nguyên tắc đầu tiên là 'Công khai, minh bạch'",
      "06 nguyên tắc; nguyên tắc đầu tiên là 'Tập trung dân chủ'"
    ],
    correctIndex: 0,
    refArticle: "Điều 2 Luật số 80/2025/QH15",
    explanation: "Cần phân biệt Điều 2 (5 nguyên tắc thi hành công vụ -> mở đầu bằng 'Tuân thủ Hiến pháp và pháp luật') với Điều 3 (5 nguyên tắc quản lý CBCC -> mở đầu bằng 'Bảo đảm sự lãnh đạo của Đảng')."
  },
  {
    id: "cbcc_03",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 4 Điều 3 Luật Cán bộ, công chức số 80/2025/QH15, việc sử dụng, đánh giá, xếp loại chất lượng cán bộ, công chức phải dựa trên căn cứ nào?",
    options: [
      "Dựa trên phẩm chất chính trị, đạo đức và năng lực, kết quả thực thi nhiệm vụ được giao theo vị trí việc làm",
      "Chỉ dựa trên thâm niên công tác và bằng cấp đào tạo",
      "Dựa trên ngạch công chức và hệ số lương hiện hưởng",
      "Chỉ dựa trên phiếu tín nhiệm của đồng nghiệp trong đơn vị"
    ],
    correctIndex: 0,
    refArticle: "Khoản 4 Điều 3 Luật số 80/2025/QH15",
    explanation: "Luật 80/2025/QH15 nhấn mạnh xuyên suốt việc quản lý, sử dụng và đánh giá theo 'vị trí việc làm' và 'kết quả thực thi nhiệm vụ'."
  },
  {
    id: "cbcc_04",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 5 Luật Cán bộ, công chức số 80/2025/QH15, cán bộ, công chức năng động, sáng tạo, dám nghĩ, dám làm vì lợi ích chung được xem xét loại trừ, miễn hoặc giảm nhẹ trách nhiệm khi nào?",
    options: [
      "Khi đã thực hiện đúng quy trình, không có động cơ vụ lợi nhưng có thiệt hại do nguyên nhân khách quan",
      "Trong mọi trường hợp gây thiệt hại về tài sản nhà nước",
      "Khi tự ý làm trái quy trình mà không báo cáo cơ quan có thẩm quyền",
      "Chỉ được giảm nhẹ trách nhiệm, không bao giờ được loại trừ hay miễn trách nhiệm"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 5 Luật số 80/2025/QH15",
    explanation: "Luật hóa chủ trương bảo vệ cán bộ dám nghĩ, dám làm: được xem xét loại trừ, miễn hoặc giảm nhẹ trách nhiệm nếu đã báo cáo/thực hiện đúng quy trình, vì lợi ích chung, không vụ lợi."
  },
  {
    id: "cbcc_05",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 8 Luật Cán bộ, công chức số 80/2025/QH15, đâu là các nghĩa vụ của cán bộ, công chức đối với Đảng, Nhà nước và Nhân dân?",
    options: [
      "Trung thành với Đảng, Nhà nước; bảo vệ danh dự Tổ quốc; tôn trọng, tận tụy phục vụ Nhân dân; liên hệ chặt chẽ, lắng nghe và chịu sự giám sát của Nhân dân; chấp hành đường lối của Đảng, pháp luật của Nhà nước",
      "Chủ động phối hợp trong thi hành công vụ; bảo vệ bí mật nhà nước; chấp hành quyết định của cấp trên",
      "Chịu trách nhiệm trước pháp luật về việc thực hiện nhiệm vụ, quyền hạn của mình",
      "Thực hiện quy tắc ứng xử và văn hóa công sở tại nơi làm việc"
    ],
    correctIndex: 0,
    refArticle: "Điều 8 Luật số 80/2025/QH15",
    explanation: "Mẹo phân biệt trên congchucvn.com: Điều 8 (Nghĩa vụ với Đảng, Nhà nước và Nhân dân) có 4 khoản gắn với từ khóa 'Trung thành - Tôn trọng Nhân dân - Chịu sự giám sát của Nhân dân - Chấp hành đường lối'."
  },
  {
    id: "cbcc_06",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 5 Điều 9 Luật Cán bộ, công chức số 80/2025/QH15, khi chấp hành quyết định bằng văn bản của cấp trên mà mình đã báo cáo bằng văn bản là trái pháp luật thì trách nhiệm pháp lý thuộc về ai?",
    options: [
      "Người thi hành không chịu trách nhiệm về hậu quả của việc thi hành; người ra quyết định phải chịu trách nhiệm trước pháp luật về quyết định của mình",
      "Người thi hành và người ra quyết định mỗi bên chịu 50% trách nhiệm",
      "Người thi hành chịu trách nhiệm chính vì trực tiếp thực hiện",
      "Tập thể cơ quan chịu trách nhiệm, cá nhân không chịu trách nhiệm"
    ],
    correctIndex: 0,
    refArticle: "Khoản 5 Điều 9 Luật số 80/2025/QH15",
    explanation: "Khi đã báo cáo bằng văn bản và cấp trên vẫn ra văn bản yêu cầu thi hành thì người thi hành phải chấp hành, đồng thời báo cáo cấp trên trực tiếp của người ra quyết định và KHÔNG phải chịu trách nhiệm về hậu quả."
  },
  {
    id: "cbcc_07",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 18 Luật Cán bộ, công chức số 80/2025/QH15, hành vi 'Trốn tránh trách nhiệm, thoái thác nhiệm vụ được giao; gây bè phái, mất đoàn kết; tự ý bỏ việc hoặc tham gia đình công' thuộc nhóm việc không được làm nào?",
    options: [
      "Những việc cán bộ, công chức không được làm liên quan đến đạo đức công vụ",
      "Những việc cán bộ, công chức không được làm liên quan đến bí mật nhà nước",
      "Những việc cán bộ, công chức không được làm liên quan đến sản xuất, kinh doanh, công tác nhân sự",
      "Những việc cán bộ, công chức không được làm sau khi nghỉ hưu"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 18 Luật số 80/2025/QH15",
    explanation: "Bẫy câu hỏi rất hay gặp: Nhớ kỹ 4 khoản của Điều 18 thuộc nhóm 'liên quan đến đạo đức công vụ' (trốn tránh trách nhiệm, đình công, sử dụng tài sản trái phép, vụ lợi, phân biệt đối xử)."
  },
  {
    id: "cbcc_08",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 19 Luật Cán bộ, công chức số 80/2025/QH15, cán bộ, công chức làm việc ở ngành, nghề có liên quan đến bí mật nhà nước thì trong thời hạn ít nhất bao nhiêu năm kể từ khi có quyết định nghỉ hưu, thôi việc không được làm công việc có liên quan đến ngành, nghề mà trước đây mình đã đảm nhiệm?",
    options: [
      "Ít nhất là 05 năm",
      "Ít nhất là 03 năm",
      "Ít nhất là 02 năm",
      "Ít nhất là 10 năm"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 19 Luật số 80/2025/QH15",
    explanation: "Thời hạn bảo vệ bí mật nhà nước sau khi nghỉ hưu, thôi việc đối với CBCC là 'ít nhất là 05 năm'."
  },
  {
    id: "cbcc_09",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 36 Luật Cán bộ, công chức số 80/2025/QH15, việc tuyển dụng công chức phải căn cứ vào những yếu tố nào?",
    options: [
      "Căn cứ vào yêu cầu nhiệm vụ, vị trí việc làm và chỉ tiêu biên chế",
      "Chỉ căn cứ vào số lượng người nghỉ hưu hằng năm của cơ quan",
      "Căn cứ vào nguyện vọng cá nhân của người dự tuyển",
      "Chỉ căn cứ vào ngân sách địa phương"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 36 Luật số 80/2025/QH15",
    explanation: "Bộ 3 căn cứ tuyển dụng bắt buộc: (1) Yêu cầu nhiệm vụ + (2) Vị trí việc làm + (3) Chỉ tiêu biên chế."
  },
  {
    id: "cbcc_10",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 36 Luật Cán bộ, công chức số 80/2025/QH15, có những phương thức tuyển dụng công chức nào?",
    options: [
      "Thi tuyển; Xét tuyển; Tiếp nhận vào làm công chức đối với người đáp ứng tiêu chuẩn, điều kiện của vị trí việc làm theo quy định của Chính phủ",
      "Chỉ có hình thức thi tuyển tập trung",
      "Thi tuyển và bầu cử",
      "Xét tuyển và bổ nhiệm trực tiếp"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 36 Luật số 80/2025/QH15",
    explanation: "Gồm 3 phương thức: (a) Thi tuyển; (b) Xét tuyển; (c) Tiếp nhận vào làm công chức."
  },
  {
    id: "cbcc_11",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 2 Điều 55 Luật Cán bộ, công chức số 80/2025/QH15, căn cứ đánh giá công chức được xác định gắn liền với yếu tố đầu ra nào?",
    options: [
      "Theo tiêu chuẩn vị trí việc làm, khối lượng, chất lượng, tiến độ và hiệu quả thực hiện nhiệm vụ được giao gắn với sản phẩm đầu ra cụ thể",
      "Theo số năm giữ ngạch công chức hiện tại",
      "Theo nhận xét cảm tính của lãnh đạo đơn vị",
      "Theo số giờ có mặt tại cơ quan"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 55 Luật số 80/2025/QH15",
    explanation: "Từ khóa mới rất quan trọng của Luật 80/2025/QH15: đánh giá công chức 'gắn với sản phẩm đầu ra cụ thể'."
  },
  {
    id: "cbcc_12",
    lawKey: "luat_cbcc_80_2025",
    lawCode: "80/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 4 Điều 55 Luật Cán bộ, công chức số 80/2025/QH15, công chức có 02 năm liên tiếp được xếp loại chất lượng ở mức không hoàn thành nhiệm vụ thì bị xử lý như thế nào?",
    options: [
      "Cơ quan, tổ chức, đơn vị có thẩm quyền giải quyết thôi việc hoặc bố trí vào vị trí việc làm có yêu cầu thấp hơn",
      "Bắt buộc áp dụng hình thức kỷ luật buộc thôi việc trong mọi trường hợp",
      "Chuyển sang làm viên chức tại đơn vị sự nghiệp công lập",
      "Giữ nguyên vị trí việc làm và trừ 50% tiền lương"
    ],
    correctIndex: 0,
    refArticle: "Khoản 4 Điều 55 Luật số 80/2025/QH15",
    explanation: "Lưu ý điểm mới: 'giải quyết thôi việc HOẶC bố trí vào vị trí việc làm có yêu cầu thấp hơn'."
  },

  // =========================================================================
  // PHẦN 3: LUẬT TỔ CHỨC CHÍNH QUYỀN ĐỊA PHƯƠNG SỐ 72/2025/QH15 (12 CÂU)
  // =========================================================================
  {
    id: "cqdp_01",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 1 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, đơn vị hành chính của nước Cộng hòa xã hội chủ nghĩa Việt Nam được tổ chức thành mấy cấp và gồm những cấp nào?",
    options: [
      "02 cấp: gồm Cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và Cấp xã (xã, phường, đặc khu trực thuộc cấp tỉnh)",
      "03 cấp: gồm Cấp tỉnh, Cấp huyện và Cấp xã",
      "02 cấp: gồm Cấp tỉnh và Cấp huyện",
      "04 cấp: gồm Trung ương, Tỉnh, Huyện, Xã"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 1 Luật số 72/2025/QH15",
    explanation: "Luật số 72/2025/QH15 quy định rõ mô hình 02 cấp: Cấp tỉnh và Cấp xã (gồm xã, phường, đặc khu trực thuộc cấp tỉnh)."
  },
  {
    id: "cqdp_02",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo điểm b khoản 1 Điều 1 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, 'Đặc khu' là đơn vị hành chính cấp nào và được thành lập ở đâu?",
    options: [
      "Là đơn vị hành chính cấp xã trực thuộc cấp tỉnh, được thành lập ở một số hải đảo có vị trí quan trọng",
      "Là đơn vị hành chính cấp tỉnh trực thuộc trung ương",
      "Là đơn vị hành chính cấp huyện ở vùng biên giới",
      "Là tên gọi khác của thành phố thuộc thành phố trực thuộc trung ương"
    ],
    correctIndex: 0,
    refArticle: "Điểm b Khoản 1 Điều 1 Luật số 72/2025/QH15",
    explanation: "Lần đầu tiên Luật 72/2025/QH15 quy định 'đặc khu' là đơn vị hành chính cấp xã ở một số hải đảo có vị trí quan trọng (thay cho huyện đảo trước đây)."
  },
  {
    id: "cqdp_03",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 2 Điều 1 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, cơ quan nào có thẩm quyền quyết định thành lập 'Đơn vị hành chính - kinh tế đặc biệt'?",
    options: [
      "Quốc hội",
      "Ủy ban thường vụ Quốc hội",
      "Chính phủ",
      "Thủ tướng Chính phủ"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 1 Luật số 72/2025/QH15",
    explanation: "Đơn vị hành chính - kinh tế đặc biệt do Quốc hội quyết định thành lập."
  },
  {
    id: "cqdp_04",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo Điều 2 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, cấp chính quyền địa phương gồm có các cơ quan nào?",
    options: [
      "Gồm có Hội đồng nhân dân và Ủy ban nhân dân",
      "Gồm có Hội đồng nhân dân, Ủy ban nhân dân và Ủy ban Mặt trận Tổ quốc",
      "Gồm có Tỉnh ủy/Đảng ủy, Hội đồng nhân dân và Ủy ban nhân dân",
      "Chỉ gồm có Ủy ban nhân dân"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 2 Luật số 72/2025/QH15",
    explanation: "Cấp chính quyền địa phương gồm có Hội đồng nhân dân và Ủy ban nhân dân."
  },
  {
    id: "cqdp_05",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 3 và khoản 4 Điều 4 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, chế độ làm việc của Hội đồng nhân dân và Ủy ban nhân dân khác nhau như thế nào?",
    options: [
      "Hội đồng nhân dân làm việc theo chế độ hội nghị và quyết định theo đa số; Ủy ban nhân dân hoạt động theo chế độ tập thể UBND kết hợp với trách nhiệm của Chủ tịch UBND",
      "Cả Hội đồng nhân dân và Ủy ban nhân dân đều làm việc theo chế độ thủ trưởng một người quyết định",
      "Hội đồng nhân dân hoạt động theo chế độ tập thể kết hợp trách nhiệm cá nhân; Ủy ban nhân dân làm việc theo chế độ hội nghị",
      "Ủy ban nhân dân quyết định mọi vấn đề bằng biểu quyết tại kỳ họp"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3, 4 Điều 4 Luật số 72/2025/QH15",
    explanation: "Câu hỏi kinh điển phân biệt chế độ hoạt động: HĐND = 'chế độ hội nghị và quyết định theo đa số'; UBND = 'chế độ tập thể UBND kết hợp với trách nhiệm của Chủ tịch UBND và đề cao thẩm quyền cá nhân người đứng đầu'."
  },
  {
    id: "cqdp_06",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo điểm b khoản 1 Điều 11 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, việc đẩy mạnh phân quyền, phân cấp cho chính quyền địa phương được thực hiện theo phương châm nào?",
    options: [
      "Địa phương quyết, địa phương làm, địa phương chịu trách nhiệm",
      "Trung ương quyết định, địa phương tổ chức thi hành",
      "Tỉnh quyết, xã làm, trung ương kiểm tra",
      "Cấp trên làm thay cấp dưới khi cần thiết"
    ],
    correctIndex: 0,
    refArticle: "Điểm b Khoản 1 Điều 11 Luật số 72/2025/QH15",
    explanation: "Phương châm cốt lõi được luật hóa trong Luật 72/2025/QH15: 'địa phương quyết, địa phương làm, địa phương chịu trách nhiệm'."
  },
  {
    id: "cqdp_07",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo điểm c khoản 1 Điều 11 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, công việc liên quan đến từ 02 đơn vị hành chính cấp xã trở lên thì thuộc thẩm quyền giải quyết của cấp nào?",
    options: [
      "Thuộc thẩm quyền của chính quyền địa phương cấp tỉnh",
      "Thuộc thẩm quyền của đơn vị hành chính cấp xã có diện tích lớn hơn",
      "Thuộc thẩm quyền của Bộ Nội vụ",
      "Do hai xã tự thỏa thuận thành lập ban liên xã giải quyết"
    ],
    correctIndex: 0,
    refArticle: "Điểm c Khoản 1 Điều 11 Luật số 72/2025/QH15",
    explanation: "Vì không còn cấp huyện nên việc thuộc phạm vi 01 xã thì giao cấp xã; việc liên quan đến từ 02 đơn vị hành chính cấp xã trở lên thì thuộc thẩm quyền của cấp tỉnh."
  },
  {
    id: "cqdp_08",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo Điều 12 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, việc 'Phân quyền' cho mỗi cấp chính quyền địa phương phải được quy định trong loại văn bản nào?",
    options: [
      "Phải được quy định trong luật, nghị quyết của Quốc hội",
      "Được quy định trong nghị định của Chính phủ",
      "Được quy định trong quyết định của Thủ tướng Chính phủ",
      "Được quy định trong thông tư của Bộ trưởng"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 12 Luật số 72/2025/QH15",
    explanation: "Nhớ kỹ: Phân quyền = Luật, Nghị quyết của Quốc hội."
  },
  {
    id: "cqdp_09",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 13 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, Chính phủ, Thủ tướng Chính phủ, Bộ trưởng, Thủ trưởng cơ quan ngang bộ có thể 'Phân cấp' cho chủ thể nào ở địa phương?",
    options: [
      "Ủy ban nhân dân hoặc Chủ tịch Ủy ban nhân dân cấp tỉnh",
      "Trực tiếp cho Chủ tịch Ủy ban nhân dân cấp xã",
      "Tòa án nhân dân cấp tỉnh",
      "Ban Thường trực Ủy ban Mặt trận Tổ quốc cấp tỉnh"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 13 Luật số 72/2025/QH15",
    explanation: "Chính phủ, Thủ tướng, Bộ trưởng phân cấp cho UBND hoặc Chủ tịch UBND cấp tỉnh; sau đó cấp tỉnh mới phân cấp cho cấp xã."
  },
  {
    id: "cqdp_10",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 13 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, khi HĐND, UBND, Chủ tịch UBND cấp tỉnh phân cấp cho cấp xã thì phải gắn với điều kiện bảo đảm nào?",
    options: [
      "Gắn với việc bảo đảm nguồn tài chính, biên chế và điều kiện cần thiết khác",
      "Cấp xã phải tự lo toàn bộ kinh phí và biên chế để thực hiện",
      "Không cần chuyển giao kinh phí hay điều kiện bảo đảm",
      "Chỉ phân cấp nhiệm vụ còn kinh phí giữ lại ở cấp tỉnh"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 13 Luật số 72/2025/QH15",
    explanation: "Nguyên tắc phân cấp bắt buộc phải gắn với việc bảo đảm nguồn tài chính, biên chế và điều kiện cần thiết khác."
  },
  {
    id: "cqdp_11",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "kienthucchung.vn",
    question: "Theo Điều 14 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, việc 'Ủy quyền' cho cơ quan hành chính nhà nước ở địa phương có đặc điểm gì khác với 'Phân cấp'?",
    options: [
      "Thực hiện trong trường hợp cần thiết và trong một thời gian xác định bằng văn bản; cơ quan, người nhận ủy quyền không được ủy quyền tiếp",
      "Thực hiện liên tục, thường xuyên không xác định thời hạn và được phép ủy quyền tiếp",
      "Thực hiện bằng lời nói trong các cuộc họp giao ban",
      "Làm chấm dứt hoàn toàn trách nhiệm của cơ quan ủy quyền"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1, 2 Điều 14 Luật số 72/2025/QH15",
    explanation: "Phân cấp là 'liên tục, thường xuyên'; còn Ủy quyền là 'trong một thời gian xác định' và tuyệt đối 'không được ủy quyền tiếp'."
  },
  {
    id: "cqdp_12",
    lawKey: "luat_cqdp_72_2025",
    lawCode: "72/2025/QH15",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 4 Luật Tổ chức chính quyền địa phương số 72/2025/QH15, yêu cầu mới nào được bổ sung vào nguyên tắc tổ chức và hoạt động của chính quyền địa phương?",
    options: [
      "Đẩy mạnh ứng dụng công nghệ thông tin, chuyển đổi số trong tổ chức và hoạt động của chính quyền địa phương",
      "Chỉ giải quyết thủ tục hành chính bằng hồ sơ giấy trực tiếp",
      "Tăng số lượng phòng ban chuyên môn ở cấp xã",
      "Tập trung toàn bộ thủ tục hành chính về trung ương"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 4 Luật số 72/2025/QH15",
    explanation: "Chuyển đổi số và ứng dụng CNTT được đưa thẳng vào nguyên tắc tổ chức và hoạt động của chính quyền địa phương tại Điều 4."
  },

  // =========================================================================
  // PHẦN 4: LUẬT PHÒNG, CHỐNG THAM NHŨNG SỐ 118/VBHN-VPQH (12 CÂU TRỌNG TÂM)
  // =========================================================================
  {
    id: "pctn_01",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 2 Văn bản hợp nhất Luật Phòng, chống tham nhũng số 118/VBHN-VPQH ngày 27/8/2025, có bao nhiêu hành vi tham nhũng trong khu vực nhà nước?",
    options: [
      "12 hành vi",
      "10 hành vi",
      "14 hành vi",
      "07 hành vi"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 2 (118/VBHN-VPQH)",
    explanation: "Khu vực nhà nước có đúng 12 hành vi tham nhũng (từ điểm a đến điểm m khoản 1 Điều 2)."
  },
  {
    id: "pctn_02",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 2 Điều 2 Văn bản hợp nhất Luật Phòng, chống tham nhũng số 118/VBHN-VPQH, các hành vi tham nhũng trong khu vực ngoài nhà nước bao gồm những hành vi nào?",
    options: [
      "03 hành vi: Tham ô tài sản; Nhận hối lộ; Đưa hối lộ, môi giới hối lộ để giải quyết công việc của doanh nghiệp, tổ chức mình vì vụ lợi",
      "03 hành vi: Tham ô tài sản; Nhũng nhiễu vì vụ lợi; Giả mạo trong công tác vì vụ lợi",
      "04 hành vi: Tham ô tài sản; Nhận hối lộ; Đưa hối lộ; Lạm quyền trong khi thi hành nhiệm vụ",
      "Tất cả 12 hành vi giống như khu vực nhà nước"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 2 (118/VBHN-VPQH)",
    explanation: "Cực kỳ hay ra thi: Khu vực ngoài nhà nước chỉ có 03 hành vi (Tham ô tài sản; Nhận hối lộ; Đưa hối lộ, môi giới hối lộ)."
  },
  {
    id: "pctn_03",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 2 Văn bản hợp nhất số 118/VBHN-VPQH, yếu tố bắt buộc phải có trong cấu thành của các hành vi tham nhũng là gì?",
    options: [
      "Do người có chức vụ, quyền hạn thực hiện và vì vụ lợi",
      "Do bất kỳ công dân nào thực hiện gây thiệt hại từ 2 triệu đồng trở lên",
      "Do vô ý làm thất thoát tài sản của Nhà nước",
      "Chỉ xảy ra trong lĩnh vực đầu tư xây dựng cơ bản"
    ],
    correctIndex: 0,
    refArticle: "Điều 2 (118/VBHN-VPQH)",
    explanation: "Chủ thể của tham nhũng phải là 'người có chức vụ, quyền hạn' và động cơ là 'vì vụ lợi'."
  },
  {
    id: "pctn_04",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo điểm b khoản 2 Điều 20 Văn bản hợp nhất số 118/VBHN-VPQH, người có chức vụ, quyền hạn trong cơ quan, tổ chức, đơn vị không được thành lập, tham gia quản lý, điều hành loại hình tổ chức nào (trừ trường hợp luật có quy định khác)?",
    options: [
      "Doanh nghiệp tư nhân, công ty trách nhiệm hữu hạn, công ty cổ phần, công ty hợp danh, hợp tác xã",
      "Các hội từ thiện, quỹ xã hội hoạt động không vì mục tiêu lợi nhuận",
      "Ban đại diện cha mẹ học sinh hoặc ban quản trị nhà chung cư",
      "Tổ chức công đoàn cơ sở tại cơ quan"
    ],
    correctIndex: 0,
    refArticle: "Điểm b Khoản 2 Điều 20 (118/VBHN-VPQH)",
    explanation: "Liệt kê đủ 5 loại hình: Doanh nghiệp tư nhân, công ty TNHH, công ty cổ phần, công ty hợp danh, hợp tác xã."
  },
  {
    id: "pctn_05",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 22 Văn bản hợp nhất số 118/VBHN-VPQH, cơ quan, tổ chức, đơn vị, người có chức vụ, quyền hạn chỉ được sử dụng tài chính công, tài sản công làm quà tặng trong trường hợp nào?",
    options: [
      "Vì mục đích từ thiện, đối ngoại và trong trường hợp cần thiết khác theo quy định của pháp luật",
      "Tặng quà nhân dịp lễ, tết cho cơ quan cấp trên quản lý trực tiếp",
      "Tặng quà sinh nhật cho lãnh đạo các ban, ngành",
      "Không được phép tặng quà trong bất kỳ trường hợp nào kể cả đối ngoại"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 22 (118/VBHN-VPQH)",
    explanation: "Ngoại lệ hợp pháp duy nhất: 'trừ trường hợp tặng quà vì mục đích từ thiện, đối ngoại và trong trường hợp cần thiết khác theo quy định của pháp luật'."
  },
  {
    id: "pctn_06",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 2 Điều 22 Văn bản hợp nhất số 118/VBHN-VPQH, quy định về việc nhận quà tặng của người có chức vụ, quyền hạn như thế nào?",
    options: [
      "Không được trực tiếp hoặc gián tiếp nhận quà tặng dưới mọi hình thức của cơ quan, tổ chức, đơn vị, cá nhân có liên quan đến công việc do mình giải quyết hoặc thuộc phạm vi quản lý của mình",
      "Được nhận quà tặng nếu giá trị quà tặng dưới 2.000.000 đồng",
      "Được nhận quà tặng thông qua người thân trong gia đình",
      "Được nhận quà tặng sau khi đã giải quyết xong công việc cho cá nhân đó"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 22 (118/VBHN-VPQH)",
    explanation: "Nghiêm cấm tuyệt đối: 'không được trực tiếp hoặc gián tiếp nhận quà tặng dưới mọi hình thức' nếu có liên quan đến công việc do mình giải quyết hoặc thuộc phạm vi quản lý."
  },
  {
    id: "pctn_07",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 1 Điều 30 Văn bản hợp nhất số 118/VBHN-VPQH, Thanh tra Chính phủ kiểm soát tài sản, thu nhập của người giữ chức vụ từ cấp nào trở lên công tác tại Bộ, cơ quan ngang Bộ, chính quyền địa phương?",
    options: [
      "Từ Giám đốc sở và tương đương trở lên",
      "Từ Phó Giám đốc sở và tương đương trở lên",
      "Từ Trưởng phòng cấp sở và tương đương trở lên",
      "Từ Chủ tịch Ủy ban nhân dân cấp tỉnh trở lên"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 30 (118/VBHN-VPQH)",
    explanation: "Mốc phân định thẩm quyền của Thanh tra Chính phủ là từ 'Giám đốc sở và tương đương trở lên'."
  },
  {
    id: "pctn_08",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 2 Điều 30 Văn bản hợp nhất số 118/VBHN-VPQH, cơ quan nào kiểm soát tài sản, thu nhập của người có nghĩa vụ kê khai công tác tại cơ quan, tổ chức, đơn vị thuộc thẩm quyền quản lý của chính quyền địa phương (dưới mức Giám đốc sở)?",
    options: [
      "Thanh tra tỉnh",
      "Thanh tra bộ",
      "Ủy ban nhân dân cấp xã",
      "Sở Nội vụ"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 30 (118/VBHN-VPQH)",
    explanation: "Ở địa phương, các đối tượng không thuộc khoản 1 (dưới Giám đốc sở và tương đương) do 'Thanh tra tỉnh' kiểm soát tài sản, thu nhập."
  },
  {
    id: "pctn_09",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 3 Điều 30 Văn bản hợp nhất số 118/VBHN-VPQH (đã cập nhật sửa đổi năm 2025), cơ quan nào của Quốc hội thực hiện kiểm soát tài sản, thu nhập của người có nghĩa vụ kê khai thuộc thẩm quyền quản lý của mình?",
    options: [
      "Văn phòng Quốc hội và Ủy ban Công tác đại biểu của Quốc hội",
      "Ban Công tác đại biểu thuộc Ủy ban thường vụ Quốc hội như tên gọi cũ",
      "Ủy ban Pháp luật của Quốc hội",
      "Đoàn đại biểu Quốc hội các tỉnh"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3 Điều 30 (118/VBHN-VPQH)",
    explanation: "Điểm cập nhật mới tại Văn bản hợp nhất 118/VBHN-VPQH năm 2025: cập nhật tên gọi 'Ủy ban Công tác đại biểu của Quốc hội'."
  },
  {
    id: "pctn_10",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 35 Văn bản hợp nhất số 118/VBHN-VPQH, việc kê khai tài sản, thu nhập lần đầu phải hoàn thành chậm nhất là bao nhiêu ngày kể từ ngày được tiếp nhận, tuyển dụng, bố trí vào vị trí công tác?",
    options: [
      "Chậm nhất là 10 ngày",
      "Chậm nhất là 15 ngày",
      "Chậm nhất là 30 ngày",
      "Chậm nhất là 07 ngày làm việc"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 35 (118/VBHN-VPQH)",
    explanation: "Kê khai lần đầu đối với người mới được tiếp nhận, tuyển dụng, bố trí vào vị trí công tác phải hoàn thành 'chậm nhất là 10 ngày'."
  },
  {
    id: "pctn_11",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 35 Văn bản hợp nhất số 118/VBHN-VPQH, việc kê khai tài sản, thu nhập hằng năm phải hoàn thành trước thời điểm nào?",
    options: [
      "Trước ngày 31 tháng 12 hằng năm",
      "Trước ngày 30 tháng 11 hằng năm",
      "Trước ngày 15 tháng 12 hằng năm",
      "Trước ngày 31 tháng 01 của năm tiếp theo"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 35 (118/VBHN-VPQH)",
    explanation: "Cả kê khai hằng năm và kê khai bổ sung đều phải hoàn thành 'trước ngày 31 tháng 12'."
  },
  {
    id: "pctn_12",
    lawKey: "vbhn_118_2025",
    lawCode: "118/VBHN-VPQH",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 3 Điều 35 Văn bản hợp nhất số 118/VBHN-VPQH, người có nghĩa vụ kê khai phải thực hiện 'Kê khai bổ sung' khi có biến động về tài sản, thu nhập trong năm có giá trị từ mức nào trở lên?",
    options: [
      "Từ 300.000.000 đồng trở lên",
      "Từ 500.000.000 đồng trở lên",
      "Từ 200.000.000 đồng trở lên",
      "Từ 50.000.000 đồng trở lên"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3 Điều 35 (118/VBHN-VPQH)",
    explanation: "Con số 300.000.000 đồng (ba trăm triệu đồng) là ngưỡng bắt buộc phải kê khai bổ sung."
  },

  // =========================================================================
  // PHẦN 5: NGHỊ ĐỊNH SỐ 170/2025/NĐ-CP VỀ TUYỂN DỤNG, QUẢN LÝ CÔNG CHỨC (12 CÂU)
  // =========================================================================
  {
    id: "nd170_01",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "kienthucchung.vn",
    question: "Nghị định số 170/2025/NĐ-CP của Chính phủ quy định về tuyển dụng, sử dụng và quản lý công chức được ban hành ngày nào và có hiệu lực thi hành từ ngày nào?",
    options: [
      "Ban hành ngày 30/06/2025, có hiệu lực từ ngày 01/07/2025",
      "Ban hành ngày 01/07/2025, có hiệu lực từ ngày 15/08/2025",
      "Ban hành ngày 16/06/2025, có hiệu lực từ ngày 01/01/2026",
      "Ban hành ngày 24/06/2025, có hiệu lực từ ngày 02/09/2025"
    ],
    correctIndex: 0,
    refArticle: "Nghị định số 170/2025/NĐ-CP",
    explanation: "Nghị định 170/2025/NĐ-CP ban hành ngày 30/6/2025 và có hiệu lực ngay từ ngày 01/7/2025 để đồng bộ với Luật Cán bộ, công chức số 80/2025/QH15."
  },
  {
    id: "nd170_02",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 2 Nghị định số 170/2025/NĐ-CP, ở địa phương, cơ quan nào là 'Cơ quan quản lý công chức'?",
    options: [
      "Tỉnh ủy, thành ủy trực thuộc Trung ương; Ủy ban nhân dân tỉnh, thành phố trực thuộc Trung ương",
      "Ủy ban nhân dân cấp xã và Sở Nội vụ",
      "Hội đồng nhân dân cấp tỉnh và Hội đồng nhân dân cấp xã",
      "Các cơ quan chuyên môn thuộc Ủy ban nhân dân cấp tỉnh"
    ],
    correctIndex: 0,
    refArticle: "Điểm b, g Khoản 2 Điều 2 Nghị định 170/2025/NĐ-CP",
    explanation: "Phân biệt rõ 'Cơ quan quản lý công chức' ở địa phương là Tỉnh ủy/Thành ủy và UBND cấp tỉnh; còn Sở, ngành, UBND cấp xã là 'Cơ quan sử dụng công chức'."
  },
  {
    id: "nd170_03",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 8 Nghị định số 170/2025/NĐ-CP, ở Vòng 1 thi tuyển công chức trên máy vi tính, Phần I (Kiến thức chung) gồm bao nhiêu câu hỏi và thời gian làm bài bao nhiêu phút?",
    options: [
      "60 câu hỏi; thời gian thi 60 phút",
      "50 câu hỏi; thời gian thi 45 phút",
      "60 câu hỏi; thời gian thi 90 phút",
      "40 câu hỏi; thời gian thi 45 phút"
    ],
    correctIndex: 0,
    refArticle: "Điểm a Khoản 1 Điều 8 Nghị định 170/2025/NĐ-CP",
    explanation: "Phần I Kiến thức chung: 60 câu hỏi trong 60 phút."
  },
  {
    id: "nd170_04",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "congchucvn.com",
    question: "Theo điểm b khoản 1 Điều 8 Nghị định số 170/2025/NĐ-CP, Phần II (Ngoại ngữ) ở Vòng 1 thi tuyển công chức gồm bao nhiêu câu hỏi và thời gian thi bao lâu?",
    options: [
      "30 câu hỏi theo yêu cầu của vị trí việc làm; thời gian thi 30 phút",
      "30 câu hỏi; thời gian thi 45 phút",
      "40 câu hỏi; thời gian thi 30 phút",
      "25 câu hỏi; thời gian thi 25 phút"
    ],
    correctIndex: 0,
    refArticle: "Điểm b Khoản 1 Điều 8 Nghị định 170/2025/NĐ-CP",
    explanation: "Phần II Ngoại ngữ: 30 câu hỏi / 30 phút (lưu ý không còn thi phần Tin học ở Vòng 1 khi đã thi trắc nghiệm trên máy vi tính)."
  },
  {
    id: "nd170_05",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "kienthucchung.vn",
    question: "Theo điểm c khoản 1 Điều 8 Nghị định số 170/2025/NĐ-CP, người dự thi Vòng 1 phải trả lời đúng tối thiểu bao nhiêu phần trăm số câu hỏi cho từng phần thi để được thi tiếp Vòng 2?",
    options: [
      "Đúng từ 50% số câu hỏi trở lên cho từng phần thi (Kiến thức chung từ 30/60 câu; Ngoại ngữ từ 15/30 câu)",
      "Đúng từ 60% số câu hỏi trở lên cho từng phần thi",
      "Tổng điểm hai phần đạt từ 50% trở lên (có thể bù điểm giữa hai phần)",
      "Lấy từ cao xuống thấp không cần mức điểm sàn 50%"
    ],
    correctIndex: 0,
    refArticle: "Điểm c Khoản 1 Điều 8 Nghị định 170/2025/NĐ-CP",
    explanation: "Phải đạt từ 50% số câu trả lời đúng trở lên cho TỪNG phần thi (không được lấy điểm phần này bù cho phần kia)."
  },
  {
    id: "nd170_06",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 8 Nghị định số 170/2025/NĐ-CP, thi môn nghiệp vụ chuyên ngành ở Vòng 2 được thực hiện bằng hình thức nào và thang điểm bao nhiêu?",
    options: [
      "Hình thức: Phỏng vấn; viết; hoặc kết hợp phỏng vấn và viết. Thang điểm 100 điểm (đạt từ 50 điểm trở lên mới thuộc diện xét trúng tuyển)",
      "Chỉ thi bằng hình thức viết tự luận 180 phút trên thang điểm 10",
      "Chỉ thi bằng hình thức phỏng vấn trên thang điểm 50",
      "Thi trắc nghiệm trên giấy thang điểm 100"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 8 Nghị định 170/2025/NĐ-CP",
    explanation: "Vòng 2 có 3 lựa chọn hình thức: Phỏng vấn; Viết; hoặc Kết hợp phỏng vấn và viết. Thang điểm 100, điểm sàn đạt là 50 điểm."
  },
  {
    id: "nd170_07",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 14 Nghị định số 170/2025/NĐ-CP, những đối tượng thu hút nhân tài nào có thể được xem xét tiếp nhận vào làm công chức hoặc ký hợp đồng thực hiện nhiệm vụ của công chức?",
    options: [
      "Các chuyên gia, nhà khoa học, luật gia, luật sư, doanh nhân tiêu biểu, xuất sắc có sản phẩm cụ thể hoặc đóng góp thiết thực phù hợp với vị trí việc làm",
      "Bất kỳ sinh viên nào mới tốt nghiệp đại học loại khá trở lên",
      "Người lao động tự do chưa có bằng đại học nhưng có kinh nghiệm kinh doanh",
      "Chỉ áp dụng cho giáo sư, phó giáo sư đang giảng dạy tại đại học công lập"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 14 Nghị định 170/2025/NĐ-CP",
    explanation: "Điểm mở đột phá của Nghị định 170/2025/NĐ-CP: Mở rộng thu hút chuyên gia, nhà khoa học, luật gia, luật sư, doanh nhân tiêu biểu, xuất sắc vào làm công chức hoặc ký hợp đồng thực hiện nhiệm vụ công chức."
  },
  {
    id: "nd170_08",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 14 Nghị định số 170/2025/NĐ-CP, viên chức đơn vị sự nghiệp công lập, người hưởng lương trong LLVT, người giữ chức vụ tại DNNN muốn được xem xét tiếp nhận vào làm công chức phải có đủ thời gian công tác tối thiểu là bao lâu?",
    options: [
      "Đủ 05 năm công tác trở lên phù hợp với vị trí việc làm cần tuyển",
      "Đủ 03 năm công tác trở lên",
      "Đủ 02 năm công tác trở lên",
      "Đủ 10 năm công tác trở lên"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 14 Nghị định 170/2025/NĐ-CP",
    explanation: "Mốc thời gian bắt buộc để xét tiếp nhận vào làm công chức là 'đủ 05 năm công tác trở lên'."
  },
  {
    id: "nd170_09",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1 Điều 20 Nghị định số 170/2025/NĐ-CP, thời gian tập sự đối với công chức loại C (ngạch chuyên viên và tương đương) và loại D (ngạch cán sự, nhân viên và tương đương) là bao lâu?",
    options: [
      "12 tháng đối với công chức loại C; 06 tháng đối với công chức loại D",
      "12 tháng đối với cả loại C và loại D",
      "06 tháng đối với loại C; 03 tháng đối với loại D",
      "09 tháng đối với loại C; 06 tháng đối với loại D"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1 Điều 20 Nghị định 170/2025/NĐ-CP",
    explanation: "Loại C (chuyên viên và tương đương) = 12 tháng; Loại D (cán sự, nhân viên và tương đương) = 06 tháng."
  },
  {
    id: "nd170_10",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 2 Điều 20 Nghị định số 170/2025/NĐ-CP, người tập sự có trình độ Tiến sĩ phù hợp với yêu cầu của vị trí việc làm tuyển dụng thì trong thời gian tập sự được hưởng mức lương nào?",
    options: [
      "Hưởng 85% mức lương bậc 3 của ngạch tuyển dụng",
      "Hưởng 85% mức lương bậc 2 của ngạch tuyển dụng",
      "Hưởng 100% mức lương bậc 3 của ngạch tuyển dụng",
      "Hưởng 85% mức lương bậc 1 của ngạch tuyển dụng"
    ],
    correctIndex: 0,
    refArticle: "Khoản 2 Điều 20 Nghị định 170/2025/NĐ-CP",
    explanation: "Quy tắc bậc lương tập sự: Cử nhân = 85% bậc 1; Thạc sĩ phù hợp = 85% bậc 2; Tiến sĩ phù hợp = 85% bậc 3."
  },
  {
    id: "nd170_11",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "kienthucchung.vn",
    question: "Theo khoản 1, khoản 2 Điều 42 Nghị định số 170/2025/NĐ-CP, thời hạn giữ chức vụ bổ nhiệm đối với công chức lãnh đạo, quản lý là bao lâu và phải tiến hành quy trình xem xét bổ nhiệm lại chậm nhất trước bao nhiêu ngày?",
    options: [
      "Thời hạn 05 năm; tiến hành quy trình xem xét bổ nhiệm lại chậm nhất là 90 ngày trước ngày hết thời hạn giữ chức vụ",
      "Thời hạn 05 năm; tiến hành quy trình chậm nhất là 60 ngày trước ngày hết hạn",
      "Thời hạn 04 năm; tiến hành quy trình chậm nhất là 90 ngày trước ngày hết hạn",
      "Thời hạn 05 năm; tiến hành quy trình chậm nhất là 30 ngày trước ngày hết hạn"
    ],
    correctIndex: 0,
    refArticle: "Khoản 1, 2 Điều 42 Nghị định 170/2025/NĐ-CP",
    explanation: "Thời hạn bổ nhiệm là 05 năm; phải tiến hành quy trình xem xét bổ nhiệm lại hoặc kéo dài thời gian giữ chức vụ chậm nhất là 90 ngày trước ngày hết hạn."
  },
  {
    id: "nd170_12",
    lawKey: "nd_170_2025",
    lawCode: "170/2025/NĐ-CP",
    sourceSite: "congchucvn.com",
    question: "Theo khoản 3 Điều 42 Nghị định số 170/2025/NĐ-CP, nhân sự được đề nghị bổ nhiệm lại hoặc kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu phải đạt tỷ lệ phiếu kín đồng ý của tập thể lãnh đạo cơ quan, tổ chức là bao nhiêu?",
    options: [
      "Đạt tỷ lệ trên 50% tổng số thành viên tập thể lãnh đạo cơ quan, tổ chức đồng ý",
      "Đạt tỷ lệ từ 2/3 (66,6%) tổng số thành viên tập thể lãnh đạo trở lên",
      "Đạt tỷ lệ từ 75% tổng số thành viên tập thể lãnh đạo trở lên",
      "Đạt tỷ lệ 100% thành viên tập thể lãnh đạo đồng ý"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3 Điều 42 Nghị định 170/2025/NĐ-CP",
    explanation: "Tỷ lệ phiếu kín đồng ý của tập thể lãnh đạo cơ quan, tổ chức là 'trên 50% tổng số thành viên'."
  },

  // =========================================================================
  // PHẦN 6: LUẬT KẾ TOÁN & BỘ LUẬT LAO ĐỘNG - NHÂN SỰ (10 CÂU TRỌNG TÂM)
  // =========================================================================
  {
    id: "kt_ns_01",
    lawKey: "luat_ke_toan",
    lawCode: "Luật Kế toán",
    question: "Theo khoản 3 Điều 41 Luật Kế toán, tài liệu kế toán phải được đưa vào lưu trữ trong thời hạn bao lâu kể từ ngày kết thúc kỳ kế toán năm hoặc kết thúc công việc kế toán?",
    options: [
      "Trong thời hạn 12 tháng",
      "Trong thời hạn 06 tháng",
      "Trong thời hạn 24 tháng",
      "Trong thời hạn 90 ngày"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3 Điều 41 Luật Kế toán",
    explanation: "Tài liệu kế toán phải đưa vào lưu trữ trong thời hạn 12 tháng kể từ ngày kết thúc kỳ kế toán năm."
  },
  {
    id: "kt_ns_02",
    lawKey: "luat_ke_toan",
    lawCode: "Luật Kế toán",
    question: "Theo điểm a và điểm b khoản 4 Điều 41 Luật Kế toán, thời hạn lưu trữ đối với tài liệu kế toán dùng cho quản lý, điều hành và đối với chứng từ kế toán sử dụng trực tiếp để ghi sổ kế toán, lập báo cáo tài chính lần lượt là bao lâu?",
    options: [
      "Ít nhất là 05 năm (quản lý, điều hành) và ít nhất là 10 năm (ghi sổ kế toán, lập báo cáo tài chính)",
      "Ít nhất là 03 năm và ít nhất là 05 năm",
      "Ít nhất là 10 năm cho tất cả các loại tài liệu kế toán",
      "Ít nhất là 05 năm và ít nhất là 20 năm"
    ],
    correctIndex: 0,
    refArticle: "Khoản 4 Điều 41 Luật Kế toán",
    explanation: "Cần nhớ 3 mốc lưu trữ kế toán: 05 năm (tài liệu quản lý, điều hành); 10 năm (chứng từ ghi sổ, sổ kế toán, BCTC năm); Vĩnh viễn (tài liệu có tính sử liệu, quan trọng)."
  },
  {
    id: "kt_ns_03",
    lawKey: "luat_ke_toan",
    lawCode: "Luật Kế toán",
    question: "Theo Điều 13 Luật Kế toán, hành vi nào sau đây bị nghiêm cấm trong công tác kế toán?",
    options: [
      "Để ngoài sổ kế toán tài sản, nợ phải trả của đơn vị kế toán hoặc lập hai hệ thống sổ kế toán tài chính trở lên",
      "Lưu trữ chứng từ kế toán dưới dạng thông điệp dữ liệu điện tử",
      "Phân loại, sắp xếp thông tin, số liệu kế toán theo trình tự thời gian",
      "Sử dụng phần mềm kế toán để tự động tổng hợp báo cáo tài chính"
    ],
    correctIndex: 0,
    refArticle: "Khoản 3, 5 Điều 13 Luật Kế toán",
    explanation: "Để ngoài sổ kế toán tài sản/nợ phải trả và lập từ 02 hệ thống sổ kế toán tài chính trở lên là hành vi bị nghiêm cấm."
  },
  {
    id: "kt_ns_04",
    lawKey: "luat_lao_dong",
    lawCode: "45/2019/QH14",
    question: "Theo khoản 2 Điều 20 Bộ luật Lao động, khi hợp đồng lao động xác định thời hạn hết hạn mà người lao động vẫn tiếp tục làm việc thì trong thời hạn bao nhiêu ngày hai bên phải ký kết hợp đồng lao động mới?",
    options: [
      "Trong thời hạn 30 ngày kể từ ngày hợp đồng lao động hết hạn",
      "Trong thời hạn 15 ngày kể từ ngày hợp đồng lao động hết hạn",
      "Trong thời hạn 45 ngày kể từ ngày hợp đồng lao động hết hạn",
      "Trong thời hạn 60 ngày kể từ ngày hợp đồng lao động hết hạn"
    ],
    correctIndex: 0,
    refArticle: "Điểm a Khoản 2 Điều 20 Bộ luật Lao động",
    explanation: "Trong thời hạn 30 ngày kể từ ngày HĐLĐ hết hạn, hai bên phải ký HĐLĐ mới; nếu quá 30 ngày không ký mới thì hợp đồng đó tự động trở thành HĐLĐ không xác định thời hạn."
  },
  {
    id: "kt_ns_05",
    lawKey: "luat_lao_dong",
    lawCode: "45/2019/QH14",
    question: "Theo Điều 25 và Điều 26 Bộ luật Lao động, thời gian thử việc đối với công việc cần trình độ từ cao đẳng trở lên là bao lâu và tiền lương thử việc ít nhất bằng bao nhiêu phần trăm mức lương của công việc đó?",
    options: [
      "Không quá 60 ngày; tiền lương thử việc ít nhất bằng 85% mức lương của công việc đó",
      "Không quá 30 ngày; tiền lương thử việc ít nhất bằng 85% mức lương của công việc đó",
      "Không quá 60 ngày; tiền lương thử việc ít nhất bằng 75% mức lương của công việc đó",
      "Không quá 180 ngày; tiền lương thử việc bằng 100% mức lương của công việc đó"
    ],
    correctIndex: 0,
    refArticle: "Điều 25, Điều 26 Bộ luật Lao động",
    explanation: "Trình độ từ cao đẳng trở lên thử việc không quá 60 ngày (quản lý doanh nghiệp không quá 180 ngày, trung cấp không quá 30 ngày, việc khác không quá 06 ngày làm việc); lương thử việc ít nhất bằng 85%."
  },
  {
    id: "kt_ns_06",
    lawKey: "luat_lao_dong",
    lawCode: "45/2019/QH14",
    question: "Theo khoản 1 Điều 35 Bộ luật Lao động, người lao động làm việc theo hợp đồng lao động không xác định thời hạn khi đơn phương chấm dứt hợp đồng phải báo trước ít nhất bao nhiêu ngày?",
    options: [
      "Ít nhất 45 ngày",
      "Ít nhất 30 ngày",
      "Ít nhất 03 ngày làm việc",
      "Ít nhất 60 ngày"
    ],
    correctIndex: 0,
    refArticle: "Điểm a Khoản 1 Điều 35 Bộ luật Lao động",
    explanation: "Thời hạn báo trước của NLĐ: Không xác định thời hạn = ít nhất 45 ngày; Xác định thời hạn từ 12-36 tháng = ít nhất 30 ngày; Dưới 12 tháng = ít nhất 03 ngày làm việc."
  }
];
