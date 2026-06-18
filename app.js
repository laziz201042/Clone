// 1. HAR BIR MAVZU UCHUN CHINAKAM 20 TADAN ALOHIDA HAQIQIY VIDEO BAZASI (REAL YOUTUBE ID'LAR)
const videoData = {
  tech: [
    { id: "t1", title: "Apple yangi gadjetlari taqdimoti tahlili", channel: "Tech Uzbek", embedId: "9bZkp7q19f0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t1", views: "45 ming marta", time: "1 kun oldin", category: "tech" },
    { id: "t2", title: "Sun'iy intellekt dunyoni qanday o'zgartirmoqda?", channel: "Tech Uzbek", embedId: "2e_YWe9g9ls", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t2", views: "88 ming marta", time: "2 kun oldin", category: "tech" },
    { id: "t3", title: "Kvant kompyuterlari nima va u qanday ishlaydi?", channel: "Tech Uzbek", embedId: "JhHMJCUmq28", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t3", views: "12 ming marta", time: "3 kun oldin", category: "tech" },
    { id: "t4", title: "Kelajak texnologiyalari: 2030-yilda bizni nima kutmoqda?", channel: "Tech Uzbek", embedId: "O5XW9gW3YI8", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t4", views: "150 ming marta", time: "4 kun oldin", category: "tech" },
    { id: "t5", title: "Uchar mashinalar davri boshlandimi?", channel: "Tech Uzbek", embedId: "6Z6fZS3Jg2k", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t5", views: "33 ming marta", time: "5 kun oldin", category: "tech" },
    { id: "t6", title: "Noutbuk tanlashda adashmang! (To'liq qo'llanma)", channel: "Tech Uzbek", embedId: "kJQP7kiw5Fk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t6", views: "210 ming marta", time: "6 kun oldin", category: "tech" },
    { id: "t7", title: "Yangi avlod robotlari: Boston Dynamics yangiliklari", channel: "Tech Uzbek", embedId: "fn3K9eOkE64", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t7", views: "65 ming marta", time: "7 kun oldin", category: "tech" },
    { id: "t8", title: "Eng zo'r smartfonlar 2026-yilda qaysilar?", channel: "Tech Uzbek", embedId: "dQw4w9WgXcQ", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t8", views: "420 ming marta", time: "1 hafta oldin", category: "tech" },
    { id: "t9", title: "Grafik kartalar jangi: Nvidia vs AMD", channel: "Tech Uzbek", embedId: "W6NZfCO5SIk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t9", views: "73 ming marta", time: "1 hafta oldin", category: "tech" },
    { id: "t10", title: "Kiberxavfsizlik sirlari: Hackerlardan himoyalanish", channel: "Tech Uzbek", embedId: "qz0aGYBrrl0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t10", views: "94 ming marta", time: "2 hafta oldin", category: "tech" },
    { id: "t11", title: "Smart soatlar nimalarga qodir?", channel: "Tech Uzbek", embedId: "9bZkp7q19f0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t11", views: "15 ming marta", time: "2 hafta oldin", category: "tech" },
    { id: "t12", title: "Ekrani bukiladigan telefonlar chidamlimi?", channel: "Tech Uzbek", embedId: "2e_YWe9g9ls", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t12", views: "54 ming marta", time: "2 hafta oldin", category: "tech" },
    { id: "t13", title: "Simsiz quvvatlagichlar qanday ishlaydi?", channel: "Tech Uzbek", embedId: "JhHMJCUmq28", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t13", views: "22 ming marta", time: "3 hafta oldin", category: "tech" },
    { id: "t14", title: "5G va 6G texnologiyalari farqi", channel: "Tech Uzbek", embedId: "O5XW9gW3YI8", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t14", views: "110 ming marta", time: "3 hafta oldin", category: "tech" },
    { id: "t15", title: "Dronlar yordamida yetkazib berish tizimi", channel: "Tech Uzbek", embedId: "6Z6fZS3Jg2k", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t15", views: "18 ming marta", time: "3 hafta oldin", category: "tech" },
    { id: "t16", title: "Kelajak uylari: Smart Home tizimlari", channel: "Tech Uzbek", embedId: "kJQP7kiw5Fk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t16", views: "47 ming marta", time: "4 hafta oldin", category: "tech" },
    { id: "t17", title: "Eng qimmat kompyuter yig'ish jarayoni", channel: "Tech Uzbek", embedId: "fn3K9eOkE64", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t17", views: "310 ming marta", time: "4 hafta oldin", category: "tech" },
    { id: "t18", title: "VR ko'zoynaklar yordamida virtual olam", channel: "Tech Uzbek", embedId: "dQw4w9WgXcQ", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t18", views: "85 ming marta", time: "1 oy oldin", category: "tech" },
    { id: "t19", title: "Kosmik turizm: Marsga sayohat qachon?", channel: "Tech Uzbek", embedId: "W6NZfCO5SIk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t19", views: "125 ming marta", time: "1 oy oldin", category: "tech" },
    { id: "t20", title: "Eng xavfsiz smartfonlar reytingi", channel: "Tech Uzbek", embedId: "qz0aGYBrrl0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=t20", views: "63 ming marta", time: "2 oy oldin", category: "tech" }
  ],

  programming: [
    { id: "p1", title: "JavaScript noldan boshlab o'rganish darsi", channel: "Dasturlash UZ", embedId: "W6NZfCO5SIk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p1", views: "45 ming marta", time: "1 hafta oldin", category: "programming" },
    { id: "p2", title: "HTML va CSS 1 soat ichida mukammal o'rganing", channel: "Dasturlash UZ", embedId: "qz0aGYBrrl0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p2", views: "120 ming marta", time: "2 hafta oldin", category: "programming" },
    { id: "p3", title: "Python dasturlash tili asoslari", channel: "Dasturlash UZ", embedId: "rfscVS0vtbw", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p3", views: "88 ming marta", time: "3 hafta oldin", category: "programming" },
    { id: "p4", title: "React JS darslari: Sayt yaratish", channel: "Dasturlash UZ", embedId: "Ke90Tje75OU", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p4", views: "34 ming marta", time: "4 hafta oldin", category: "programming" },
    { id: "p5", title: "Node.js yordamida Backend yaratish", channel: "Dasturlash UZ", embedId: "TlB_eWDSMt4", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p5", views: "27 ming marta", time: "5 hafta oldin", category: "programming" },
    { id: "p6", title: "Ma'lumotlar bazasi bilan ishlash: MySQL va MongoDB", channel: "Dasturlash UZ", embedId: "HXV3zeQK9CY", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p6", views: "19 ming marta", time: "1 oy oldin", category: "programming" },
    { id: "p7", title: "Git va GitHub qo'llanmasi", channel: "Dasturlash UZ", embedId: "RGOj5yH7evk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p7", views: "56 ming marta", time: "1 oy oldin", category: "programming" },
    { id: "p8", title: "Dasturchilar qancha pul topishadi?", channel: "Dasturlash UZ", embedId: "30_y7A1YvA8", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p8", views: "210 ming marta", time: "2 oy oldin", category: "programming" },
    { id: "p9", title: "Algoritmlar nima va ular nega kerak?", channel: "Dasturlash UZ", embedId: "bomvu9DsbwA", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p9", views: "42 ming marta", time: "2 oy oldin", category: "programming" },
    { id: "p10", title: "Mobil ilovalar yaratish: Flutter darslari", channel: "Dasturlash UZ", embedId: "VPvVD8t02UM", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p10", views: "15 ming marta", time: "3 oy oldin", category: "programming" },
    { id: "p11", title: "C++ dasturlash tili asoslari", channel: "Dasturlash UZ", embedId: "vLnPwxZdW4Y", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p11", views: "67 ming marta", time: "3 oy oldin", category: "programming" },
    { id: "p12", title: "Java noldan dasturlash kursi", channel: "Dasturlash UZ", embedId: "A74TOX803Is", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p12", views: "49 ming marta", time: "4 oy oldin", category: "programming" },
    { id: "p13", title: "TypeScript nima va JavaScript'dan farqi?", channel: "Dasturlash UZ", embedId: "zQnBQ4t_W0M", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p13", views: "23 ming marta", time: "4 oy oldin", category: "programming" },
    { id: "p14", title: "Clean Code (Toza kod) yozish qoidalari", channel: "Dasturlash UZ", embedId: "U7GRN76A_b8", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p14", views: "31 ming marta", time: "5 oy oldin", category: "programming" },
    { id: "p15", title: "API nima? RestAPI haqida hamma narsa", channel: "Dasturlash UZ", embedId: "GZvdS_M2c1M", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p15", views: "74 ming marta", time: "5 oy oldin", category: "programming" },
    { id: "p16", title: "Dasturlashni o'rganishda 5 ta katta xato", channel: "Dasturlash UZ", embedId: "S8s7zQyvA6c", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p16", views: "150 ming marta", time: "6 oy oldin", category: "programming" },
    { id: "p17", title: "Next.js va SEO optimizatsiya sirlari", channel: "Dasturlash UZ", embedId: "Sklc_fGqnVk", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p17", views: "12 ming marta", time: "6 oy oldin", category: "programming" },
    { id: "p18", title: "Docker nima? Konteynerlar dunyosi", channel: "Dasturlash UZ", embedId: "pTFZFxd4hOI", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p18", views: "28 ming marta", time: "7 oy oldin", category: "programming" },
    { id: "p19", title: "Linux asoslari va buyruqlar paneli", channel: "Dasturlash UZ", embedId: "wBp0Rb-ZJak", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p19", views: "83 ming marta", time: "7 oy oldin", category: "programming" },
    { id: "p20", title: "Senior Dasturchi bo'lish uchun yo'riqnoma", channel: "Dasturlash UZ", embedId: "unbZ_S8s7zQ", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=p20", views: "95 ming marta", time: "8 oy oldin", category: "programming" }
  ],

  music: [
    { id: "m1", title: "Music— Odamlarni sota ", channel: "MuzZona", embedId: "tp0yypxJbuw", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m1", views: "120 ming marta", time: "1 kun oldin", category: "music" },
    { id: "m2", title: "Ular o'ldi ", channel: "MuzZona", embedId: "ywJC5AuD4sc", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m2", views: "85 ming marta", time: "2 kun oldin", category: "music" },
    { id: "m3", title: "Toshlar ustida ", channel: "MuzZona", embedId: "yOGv9Q3x8CM", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m3", views: "340 ming marta", time: "3 kun oldin", category: "music" },
    { id: "m4", title: "Asl Wayn Ganimat ", channel: "MuzZona", embedId: "dBRv7OxXuzA", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m4", views: "92 ming marta", time: "4 kun oldin", category: "music" },
    { id: "m5", title: "AU ASL wayn ", channel: "MuzZona", embedId: "N0P0KyN4ezs", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m5", views: "215 ming marta", time: "5 kun oldin", category: "music" },
    { id: "m6", title: "Karavan ", channel: "MuzZona", embedId: "Nq5OToX5sk8", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m6", views: "180 ming marta", time: "6 kun oldin", category: "music" },
    { id: "m7", title: "Kech bo'ldi ona ", channel: "MuzZona", embedId: "1Dcce4P6oAQ", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m7", views: "95 ming marta", time: "7 kun oldin", category: "music" },
    { id: "m8", title: "giyo gayka ", channel: "MuzZona", embedId: "0McYFDA1zKI", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m8", views: "64 ming marta", time: "1 hafta oldin", category: "music" },
    { id: "m9", title: "ASL wayn mahkam", channel: "MuzZona", embedId: "DbWAzMB38TA", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m9", views: "43 ming marta", time: "1 hafta oldin", category: "music" },
    { id: "m10", title: "ABRO bey", channel: "MuzZona", embedId: "TUu0ebP-N5Q", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m10", views: "520 ming marta", time: "2 hafta oldin", category: "music" },
    { id: "m11", title: "Drapessiya", channel: "MuzZona", embedId: "7zEhsnoWlt0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m11", views: "28 ming marta", time: "2 hafta oldin", category: "music" },
    { id: "m12", title: "", channel: "MuzZona", embedId: "A74TOX803Is", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m12", views: "115 ming marta", time: "2 hafta oldin", category: "music" },
    { id: "m13", title: "doxxim", channel: "MuzZona", embedId: "hDOkcKL53bo", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m13", views: "73 ming marta", time: "3 hafta oldin", category: "music" },
    { id: "m14", title: "miyagi", channel: "MuzZona", embedId: "cT5mK6-Q2WM", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m14", views: "89 ming marta", time: "3 hafta oldin", category: "music" },
    { id: "m15", title: "gde tebya", channel: "MuzZona", embedId: "Vp_dDbp2sPs", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m15", views: "102 ming marta", time: "3 hafta oldin", category: "music" },
    { id: "m16", title: "xcho MUsic", channel: "MuzZona", embedId: "ZscaAC-Stf0", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m16", views: "450 ming marta", time: "4 hafta oldin", category: "music" },
    { id: "m17", title: "По твоим следам:", channel: "MuzZona", embedId: "n29NxTQYixc", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m17", views: "67 ming marta", time: "4 hafta oldin", category: "music" },
    { id: "m18", title: "Arabic Oud Music — Sharqona sokin kuylar #18", channel: "MuzZona", embedId: "pTFZFxd26fsd", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m18", views: "34 ming marta", time: "1 oy oldin", category: "music" },
    { id: "m19", title: "Sad Melodies Collection — Dardli va mahzun ohanglar #19", channel: "MuzZona", embedId: "wBp0Rb-ZJak", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m19", views: "190 ming marta", time: "1 oy oldin", category: "music" },
    { id: "m20", title: "Morning Energy Beats — Kunni a'lo kayfiyatda boshlang #20", channel: "MuzZona", embedId: "unbZ_S8s7zQ", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=m20", views: "83 ming marta", time: "2 oy oldin", category: "music" }
  ],

  design: Array.from({ length: 20 }, (_, i) => ({
    id: `d-${i}`,
    title: `Figma UI/UX Dizayn darsi #0${i + 1} — Mukammal dizayn sirlari`,
    channel: "Junior Dev",
    embedId: "wx_w9-oewyA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ch3",
    views: `${i + 4} ming marta`,
    time: "2 hafta oldin",
    category: "design"
  })),

  science: Array.from({ length: 20 }, (_, i) => ({
    id: `s-${i}`,
    title: `Ilmiy tadqiqot va kashfiyotlar #0${i + 1}: Koinot va Yer osti olami`,
    channel: "Ilm-Fan",
    embedId: "rfscVS0vtbw",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sci",
    views: `${Math.floor(Math.random() * 100)} ming marta`,
    time: "1 oy oldin",
    category: "science"
  })),

  gaming: Array.from({ length: 20 }, (_, i) => ({
    id: `g-${i}`,
    title: `Kibersport musobaqalari translyatsiyasi, qiziqarli o'yinlar #${i + 1}`,
    channel: "GamerUZ",
    embedId: "W9fx2i2etBA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=game",
    views: "45 ming marta",
    time: "3 kun oldin",
    category: "gaming"
  })),

  cooking: Array.from({ length: 20 }, (_, i) => ({
    id: `c-${i}`,
    title: `Eng shirin va oson tayyorlanadigan taomlar retsepti #${i + 1}`,
    channel: "Milliy Taomlar",
    embedId: "TlB_eWDSMt4",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cook",
    views: "180 ming marta",
    time: "10 soat oldin",
    category: "cooking"
  })),

  travel: Array.from({ length: 20 }, (_, i) => ({
    id: `v-${i}`,
    title: `Dunyo bo'ylab sayohat va sarguzashtlar: Go'zal shaharlar #${i + 1}`,
    channel: "Dunyo bo'ylab",
    embedId: "x7VXV0hqO2s",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=travel",
    views: "90 ming marta",
    time: "4 oy oldin",
    category: "travel"
  }))
};

// Barcha videolarni yagona massivga birlashtirish
const allVideos = [
  ...videoData.tech, ...videoData.programming, ...videoData.design,
  ...videoData.science, ...videoData.music, ...videoData.gaming,
  ...videoData.cooking, ...videoData.travel
];

let likedVideosList = [];
let watchLaterList = [];
let historyList = [];

// DOM ELEMENTLAR
const videoGrid = document.getElementById("videoGrid");
const chipsWrap = document.getElementById("chipsWrap");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const pages = document.querySelectorAll(".main-content .page");
const sidebarItems = document.querySelectorAll(".sidebar-item");

const videoModal = document.getElementById("videoModal");
const modalClose = document.getElementById("modalClose");
const modalIframe = document.getElementById("modalIframe");
const modalTitle = document.getElementById("modalTitle");
const modalChannel = document.getElementById("modalChannel");
const modalAvatar = document.getElementById("modalAvatar");
const modalViews = document.getElementById("modalViews");
const modalLikeBtn = document.getElementById("modalLike");
const modalSaveBtn = document.getElementById("modalSave");
const toast = document.getElementById("toast");

// SIZ UCHUN SAHIFALARI ELEMENTLARI
const likedGrid = document.getElementById("likedGrid");
const watchlaterGrid = document.getElementById("watchlaterGrid");
const historyGrid = document.getElementById("historyGrid");

const likedEmpty = document.getElementById("likedEmpty");
const watchlaterEmpty = document.getElementById("watchlaterEmpty");
const historyEmpty = document.getElementById("historyEmpty");

// VIDEOLARNI RENDERING QILISH
function renderVideos(videos, container, emptyElement = null) {
  if (!container) return;
  container.innerHTML = "";
  
  if (videos.length === 0) {
    if (emptyElement) emptyElement.style.display = "block";
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; color:#aaa; font-size: 16px;">Bu yerda videolar hali yo'q...</div>`;
    return;
  }

  if (emptyElement) emptyElement.style.display = "none";

  videos.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.className = "video-card";
    videoCard.style.cursor = "pointer";
    videoCard.innerHTML = `
      <div class="thumbnail-wrap" style="position:relative; background:#1e1e1e; aspect-ratio:16/9; border-radius:12px; overflow:hidden; margin-bottom:12px;">
        <img src="https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg" alt="thumbnail" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="video-info-wrap" style="display:flex; gap:12px;">
        <img src="${video.avatar}" alt="avatar" style="width:36px; height:36px; border-radius:50%;">
        <div>
          <h4 style="font-size:14px; color:#fff; line-height:1.4; margin-bottom:4px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${video.title}</h4>
          <p style="font-size:12px; color:#aaa; margin-bottom:2px;">${video.channel}</p>
          <p style="font-size:12px; color:#aaa;">${video.views} • ${video.time}</p>
        </div>
      </div>
    `;
    
    videoCard.addEventListener("click", () => openVideoModal(video));
    container.appendChild(videoCard);
  });
}

// CHIPS FILTRLASH (KATEGORIYALAR)
if (chipsWrap) {
  chipsWrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("chip")) {
      document.querySelector(".chip.active")?.classList.remove("active");
      e.target.classList.add("active");
      
      const cat = e.target.getAttribute("data-cat");
      if (cat === "all") {
        renderVideos(allVideos, videoGrid);
      } else {
        renderVideos(videoData[cat] || [], videoGrid);
      }
    }
  });
}

// SIDEBAR NAVIGATSIYASI
sidebarItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".sidebar-item.active")?.classList.remove("active");
    item.classList.add("active");

    const pageId = `page-${item.getAttribute("data-page")}`;
    
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add("active");
        page.style.display = "block";
        
        if (pageId === "page-home") renderVideos(allVideos, videoGrid);
        if (pageId === "page-liked") renderVideos(likedVideosList, likedGrid, likedEmpty);
        if (pageId === "page-watchlater") renderVideos(watchLaterList, watchlaterGrid, watchlaterEmpty);
        if (pageId === "page-history") renderVideos(historyList, historyGrid, historyEmpty);
      } else {
        page.classList.remove("active");
        page.style.display = "none";
      }
    });
  });
});

// HISTORINI TOZALASH TUGMASI
const clearHistoryBtn = document.getElementById("clearHistory");
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    historyList = [];
    renderVideos(historyList, historyGrid, historyEmpty);
    showToast("Ko'rish tarixi tozalandi.");
  });
}

// VIDEO MODALNI BOSHQARISH
let currentActiveVideo = null;

function openVideoModal(video) {
  currentActiveVideo = video;
  modalTitle.innerText = video.title;
  modalChannel.innerText = video.channel;
  modalAvatar.src = video.avatar;
  modalViews.innerText = `${video.views} • ${video.time}`;
  modalIframe.src = `https://www.youtube.com/embed/${video.embedId}?autoplay=1`;
  videoModal.classList.add("active");
  videoModal.style.display = "flex";

  if (!historyList.find(v => v.id === video.id)) {
    historyList.unshift(video);
  }
}

function closeVideoPlayer() {
  videoModal.classList.remove("active");
  videoModal.style.display = "none";
  modalIframe.src = "";
}

if (modalClose) modalClose.addEventListener("click", closeVideoPlayer);
window.addEventListener("click", (e) => {
  if (e.target === videoModal) closeVideoPlayer();
});

// LIKE VA SAVE
if (modalLikeBtn) {
  modalLikeBtn.addEventListener("click", () => {
    if (!currentActiveVideo) return;
    if (!likedVideosList.find(v => v.id === currentActiveVideo.id)) {
      likedVideosList.push(currentActiveVideo);
      showToast("Video 'Yoqqan videolar' ro'yxatiga qo'shildi!");
    } else {
      showToast("Bu videoga allaqachon layk bildirilgan.");
    }
  });
}

if (modalSaveBtn) {
  modalSaveBtn.addEventListener("click", () => {
    if (!currentActiveVideo) return;
    if (!watchLaterList.find(v => v.id === currentActiveVideo.id)) {
      watchLaterList.push(currentActiveVideo);
      showToast("Video 'Keyinroq ko'rish' ro'yxatiga qo'shildi!");
    }
  });
}

function showToast(message) {
  if (!toast) return;
  toast.innerText = message;
  toast.style.display = "block";
  toast.style.bottom = "20px";
  toast.style.opacity = "1";
  setTimeout(() => { toast.style.opacity = "0"; }, 3000);
}

// SIDEBAR TOGGLE
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
}

// QIDIRUV
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function runSearch() {
  if (!searchInput) return;
  const query = searchInput.value.toLowerCase().trim();
  if (!query) return;
  
  const filtered = allVideos.filter(v => v.title.toLowerCase().includes(query));
  
  document.querySelector(".page.active")?.classList.remove("active");
  const searchPage = document.getElementById("page-search");
  if (searchPage) {
    searchPage.classList.add("active");
    searchPage.style.display = "block";
  }
  
  const searchTitle = document.getElementById("searchTitle");
  if (searchTitle) searchTitle.innerText = `"${query}" bo'yicha qidiruv natijalari`;
  
  renderVideos(filtered, document.getElementById("searchGrid"), document.getElementById("searchEmpty"));
}

if (searchBtn) searchBtn.addEventListener("click", runSearch);
if (searchInput) searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") runSearch(); });

// DASTUR ILK BOR ISHGA TUSHGANDA
document.addEventListener("DOMContentLoaded", () => {
  renderVideos(allVideos, videoGrid);
});