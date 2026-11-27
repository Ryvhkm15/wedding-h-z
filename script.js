// ==========================================
// UBAH DATA PERNIKAHAN DI BAGIAN INI SAJA
// ==========================================
const CONFIG = {
    namaPanggilan: "Herlangga & Zalsa",
    monogramAmplop: "H & Z",
    namaFooter: "HERLANGGA & ZALSA",
    namaPria: "Herlangga Aprilyansah",
    ortuPria: "Putra Pertama dari\nBapak Ramlan\n& Ibu Hernawati",
    namaWanita: "Zalsa Nabila Putri.S.E",
    ortuWanita: "Putri Pertama dari\nBapak Yudi Himawan\n& Ibu Indri Rastuti",

    ayatTeks: '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."',
    ayatSumber: "QS Ar-Rum 21",

    tanggalTeks: "Sabtu, 27 Maret 2027",
    jamAcara: "",
    tanggalCountdown: "2027-03-27T16:00:00+07:00",
    kalenderMulai: "20270327T090000Z", // 16:00 WIB
    kalenderSelesai: "20270327T140000Z", // 21:00 WIB

    stdBulan: "MARET",
    stdTanggal: "27",
    stdTahun: "2027",
    jamAkad: "Pukul 16.00 WIB",
    jamResepsi: "Pukul 19.00 - 21.00 WIB",
    detailJamAkad: "16.00 WIB",
    detailJamResepsi: "19.00 WIB - 21.00 WIB",

    namaLokasi: "Yayasan Darul Aitama",
    alamatLengkap: "Jl. K.H. Mas Mansyur No.47, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230",
    detailLokasiUpper: "YAYASAN DARUL AITAMA",
    detailAlamatLines: "Jl. K.H. Mas Mansyur No.47, Kb. Melati,\nKec. Tanah Abang, Kota Jakarta Pusat,\nDaerah Khusus Ibukota Jakarta 10230",
    linkMaps: "https://maps.app.goo.gl/vtc6LVVJoQGudwiw7",

    // Sesuai nama file di repository root
    urlMusik: "lagu.mp3.mp3",

    // Background amplop
    backgrounds: {
        amplopHero: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.88) 0%, transparent 55%), linear-gradient(160deg, #fffaf0 0%, #ebd9b7 100%)',
        amplopAyat: 'radial-gradient(circle at 70% 25%, rgba(255, 255, 255, 0.78) 0%, transparent 55%), linear-gradient(160deg, #fcf5e8 0%, #e4cfa9 100%)',
        amplopPenutup: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.78) 0%, transparent 55%), linear-gradient(160deg, #fbf3e4 0%, #e1caa3 100%)'
    },

    rek1Nomor: "110293867",
    rek1Bank: "BCA",
    rek1Nama: "a.n Herlangga Aprilyansah",

    rek2Nomor: "4183269335",
    rek2Bank: "PERMATA BANK",
    rek2Nama: "a.n Zalsa Nabila Putri",

    kadoPenerima: "Herlangga & Zalsa",
    kadoAlamat: "JL. Ks Tubun IV Rt 04 Rw 07 No 31, Slipi, Jakarta Barat",
    kadoWA1: "0895331933432",
    kadoWA1Nama: "(a.n Zalsa)",
    kadoWA2: "081212798828",
    kadoWA2Nama: "(a.n Herlangga)",

    // Sesuai nama file di repository root
    storyFoto1: "pria.jpg",
    storyFoto2: "wanita.jpg",
    storyJudul1: "Awal Pertemuan",
    storyTeks1: "Tidak ada yang benar-benar kebetulan di dunia ini. Setiap pertemuan telah diatur dengan indah, hanya menunggu waktu yang tepat untuk terjadi. Berawal dari sebuah perkenalan sederhana, tanpa banyak rencana atau harapan berlebihan, kami dipertemukan dalam cara yang tidak pernah kami duga sebelumnya.",
    storyJudul2: "Perjalanan Bersama",
    storyTeks2: "Seiring berjalannya waktu, kebersamaan kecil yang kami lalui perlahan tumbuh menjadi sesuatu yang lebih berarti. Dalam setiap cerita, tentu ada tawa, ada juga tantangan. Namun dari situlah kami belajar untuk saling memahami, menerima, dan melengkapi satu sama lain.",
    storyJudul3: "Komitmen",
    storyTeks3: "Hingga akhirnya kami menyadari bahwa perjalanan ini bukan lagi tentang dua orang yang berjalan sendiri, melainkan tentang dua hati yang memilih untuk melangkah bersama. Dengan penuh rasa syukur dan keyakinan, kami memutuskan untuk mengikat janji suci dan memulai babak baru dalam kehidupan kami.",

    galeriFoto: [
        "pria.jpg",
        "wanita.jpg",
        "pria.jpg"
    ],

    closingPria: "Herlangga",
    closingWanita: "Zalsa"
};

function terapkanBackgroundAmplop() {
    const bg = CONFIG.backgrounds || {};
    const rootStyle = document.documentElement.style;
    if (bg.amplopHero) rootStyle.setProperty("--bg-amplop-hero", bg.amplopHero);
    if (bg.amplopAyat) rootStyle.setProperty("--bg-amplop-ayat", bg.amplopAyat);
    if (bg.amplopPenutup) rootStyle.setProperty("--bg-amplop-penutup", bg.amplopPenutup);
}
terapkanBackgroundAmplop();

// ==========================================
// ANIMASI BUKA TIRAI (OPENING CURTAIN)
// ==========================================
(function initOpeningCurtain() {
    const curtain = document.getElementById("opening-curtain");
    if (!curtain) return;

    const reduceMotion =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
        curtain.classList.add("is-done");
        return;
    }

    function finishCurtain() {
        curtain.classList.add("is-done");
    }

    function startOpening() {
        if (curtain.classList.contains("is-opening") || curtain.classList.contains("is-done")) return;
        curtain.classList.add("is-opening");
        setTimeout(finishCurtain, 1750);
    }

    curtain.addEventListener("click", startOpening);

    if (document.readyState === "complete") {
        requestAnimationFrame(() => requestAnimationFrame(startOpening));
    } else {
        window.addEventListener("load", () => {
            requestAnimationFrame(() => requestAnimationFrame(startOpening));
        });
    }

    setTimeout(finishCurtain, 2400);
})();

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function setSrc(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.src = value;
}

(function applyGuestName() {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("to") || params.get("tamu");
    if (guest && guest.trim()) {
        setText("nama-tamu", guest.trim());
    }
})();

setText("display-nama-pasangan", CONFIG.namaPanggilan);
setText("display-monogram-amplop", CONFIG.monogramAmplop);
setText("display-footer-nama", CONFIG.namaFooter);
setText("display-nama-pria", CONFIG.namaPria);
setText("display-ortu-pria", CONFIG.ortuPria);
setText("display-nama-wanita", CONFIG.namaWanita);
setText("display-ortu-wanita", CONFIG.ortuWanita);

setText("display-ayat-teks", CONFIG.ayatTeks);
setText("display-ayat-sumber", CONFIG.ayatSumber);

setText("display-tanggal-hero", CONFIG.tanggalTeks);

const waktuLengkapEl = document.getElementById("display-std-waktu-lengkap");
if (waktuLengkapEl) {
    if (CONFIG.jamAcara && CONFIG.jamAcara.trim()) {
        waktuLengkapEl.innerText = `${CONFIG.tanggalTeks} | ${CONFIG.jamAcara}`;
    } else {
        waktuLengkapEl.remove();
    }
}

setText("display-std-bulan", CONFIG.stdBulan);
setText("display-std-tanggal", CONFIG.stdTanggal);
setText("display-std-tahun", CONFIG.stdTahun);
setText("display-std-jam-akad", CONFIG.jamAkad);
setText("display-std-jam-resepsi", CONFIG.jamResepsi);

setText("display-detail-tanggal-akad", CONFIG.tanggalTeks);
setText("display-detail-tanggal-resepsi", CONFIG.tanggalTeks);
setText("display-detail-jam-akad", CONFIG.detailJamAkad);
setText("display-detail-jam-resepsi", CONFIG.detailJamResepsi);
setText("display-detail-lokasi-resepsi", CONFIG.detailLokasiUpper);
setText("display-detail-alamat-akad", CONFIG.detailAlamatLines);
setText("display-detail-alamat-resepsi", CONFIG.detailAlamatLines);

const mapsLink = document.getElementById("display-link-maps-detail");
if (mapsLink && CONFIG.linkMaps) {
    mapsLink.href = CONFIG.linkMaps;
}

setText("display-rek1-nomor", CONFIG.rek1Nomor);
setText("display-rek1-bank", CONFIG.rek1Bank);
setText("display-rek1-nama", CONFIG.rek1Nama);

setText("display-rek2-nomor", CONFIG.rek2Nomor);
setText("display-rek2-bank", CONFIG.rek2Bank);
setText("display-rek2-nama", CONFIG.rek2Nama);

setText("display-kado-penerima", CONFIG.kadoPenerima);
setText("display-kado-alamat", CONFIG.kadoAlamat);
setText("display-kado-wa-1", CONFIG.kadoWA1);
setText("display-kado-wa-1-nama", CONFIG.kadoWA1Nama);
setText("display-kado-wa-2", CONFIG.kadoWA2);
setText("display-kado-wa-2-nama", CONFIG.kadoWA2Nama);

function buildWaLink(rawPhone, recipientLabel) {
    const cleanPhone = (rawPhone || "").replace(/\D/g, "").replace(/^0/, "62");
    const pesanWA = encodeURIComponent(
        `Halo ${recipientLabel}, saya ingin konfirmasi pengiriman kado pernikahan untuk ${CONFIG.namaPanggilan}.`
    );
    return `https://wa.me/${cleanPhone}?text=${pesanWA}`;
}

const waGiftBtn1 = document.getElementById("btn-wa-kado-1");
if (waGiftBtn1 && CONFIG.kadoWA1) {
    waGiftBtn1.href = buildWaLink(CONFIG.kadoWA1, "Zalsa");
}

const waGiftBtn2 = document.getElementById("btn-wa-kado-2");
if (waGiftBtn2 && CONFIG.kadoWA2) {
    waGiftBtn2.href = buildWaLink(CONFIG.kadoWA2, "Herlangga");
}

setSrc("display-story-foto-1", CONFIG.storyFoto1);
setSrc("display-story-foto-2", CONFIG.storyFoto2);
setText("display-story-judul-1", CONFIG.storyJudul1);
setText("display-story-teks-1", CONFIG.storyTeks1);
setText("display-story-judul-2", CONFIG.storyJudul2);
setText("display-story-teks-2", CONFIG.storyTeks2);
setText("display-story-judul-3", CONFIG.storyJudul3);
setText("display-story-teks-3", CONFIG.storyTeks3);

if (Array.isArray(CONFIG.galeriFoto)) {
    CONFIG.galeriFoto.forEach((src, index) => {
        setSrc(`display-galeri-${index + 1}`, src);
    });
}

const closingEl = document.getElementById("display-closing-nama");
if (closingEl) {
    closingEl.innerHTML = `<span>${CONFIG.closingPria}</span><span class="closing-amp">&</span><span>${CONFIG.closingWanita}</span>`;
}

// ==========================================
// THEME SWITCHER & SCROLL PROGRESS BAR
// ==========================================
(function initThemeAndProgress() {
    const THEME_KEY = "undangan_tema_herlangga_zalsa";
    const allowedThemes = ["emerald", "velvet", "botanical"];
    const chips = document.querySelectorAll("[data-theme-option]");

    function applyTheme(themeName) {
        const chosen = allowedThemes.includes(themeName) ? themeName : "emerald";
        document.body.setAttribute("data-wedding-theme", chosen);
        chips.forEach((chip) => {
            chip.classList.toggle("is-active", chip.getAttribute("data-theme-option") === chosen);
        });
        try {
            localStorage.setItem(THEME_KEY, chosen);
        } catch {
            // Abaikan jika storage tidak tersedia
        }
    }

    let savedTheme = "emerald";
    try {
        savedTheme = localStorage.getItem(THEME_KEY) || "emerald";
    } catch {
        savedTheme = "emerald";
    }
    applyTheme(savedTheme);

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            applyTheme(chip.getAttribute("data-theme-option"));
        });
    });

    const progressEl = document.getElementById("scroll-progress-bar");
    if (progressEl) {
        window.addEventListener(
            "scroll",
            () => {
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
                progressEl.style.width = `${pct}%`;
            },
            { passive: true }
        );
    }
})();

// ==========================================
// SIMPAN KE KALENDER (.ICS)
// ==========================================
(function initCalendarDownload() {
    const btn = document.getElementById("btn-save-calendar");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Undangan Pernikahan//Herlangga & Zalsa//ID",
            "BEGIN:VEVENT",
            `DTSTART:${CONFIG.kalenderMulai}`,
            `DTEND:${CONFIG.kalenderSelesai}`,
            `SUMMARY:Pernikahan ${CONFIG.namaPanggilan}`,
            `LOCATION:${CONFIG.namaLokasi} - ${CONFIG.alamatLengkap}`,
            `DESCRIPTION:Akad (${CONFIG.detailJamAkad}) & Resepsi (${CONFIG.detailJamResepsi}) di ${CONFIG.namaLokasi}.`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Pernikahan-Herlangga-Zalsa.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
})();

// ==========================================
// LIGHTBOX PREVIEW FOTO GALERI
// ==========================================
(function initLightbox() {
    const lightbox = document.getElementById("photo-lightbox");
    const lightboxImg = document.getElementById("photo-lightbox-img");
    const closeBtn = document.getElementById("photo-lightbox-close");
    if (!lightbox || !lightboxImg || !closeBtn) return;

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "Preview Foto Momen";
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
    }

    document.querySelectorAll(".gallery-frame img").forEach((img) => {
        img.addEventListener("click", () => openLightbox(img.src, img.alt));
    });

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
})();

// ==========================================
// AMPLOP BISA DIBUKA / DITUTUP + MUSIK
// ==========================================
const audio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
const bukaBtn = document.getElementById("btn-buka-undangan");
const hintText = document.getElementById("envelope-hint-text");

if (audio && CONFIG.urlMusik) {
    const sourceEl = audio.querySelector("source");
    if (sourceEl) {
        sourceEl.src = CONFIG.urlMusik;
        audio.load();
    }
}

function updateMusicButton() {
    if (!musicBtn || !audio) return;
    musicBtn.textContent = audio.paused ? "Musik: OFF" : "Musik: ON";
}

function toggleMusic(forcePlay = false) {
    if (!audio) return;
    if (forcePlay || audio.paused) {
        audio.play().then(updateMusicButton).catch(() => updateMusicButton());
    } else {
        audio.pause();
        updateMusicButton();
    }
}

if (musicBtn) {
    musicBtn.addEventListener("click", () => toggleMusic(false));
}

if (bukaBtn) {
    bukaBtn.addEventListener("click", () => {
        const isNowOpen = bukaBtn.classList.toggle("is-open");
        if (hintText) {
            hintText.textContent = isNowOpen
                ? "AMPLOP TERBUKA - KLIK LAGI UNTUK MENUTUP"
                : "CLICK ENVELOPE TO OPEN";
        }
        if (isNowOpen) {
            toggleMusic(true);
            const targetSection = document.getElementById("ayat");
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }, 650);
            }
        }
    });
}

// ==========================================
// COUNTDOWN TIMER
// ==========================================
(function initCountdown() {
    const targetTime = new Date(CONFIG.tanggalCountdown).getTime();
    if (Number.isNaN(targetTime)) return;

    let timerId = null;

    function updateTimer() {
        const rawDiff = targetTime - Date.now();
        const diff = Math.max(0, rawDiff);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setText("days", String(days).padStart(2, "0"));
        setText("hours", String(hours).padStart(2, "0"));
        setText("minutes", String(minutes).padStart(2, "0"));
        setText("seconds", String(seconds).padStart(2, "0"));

        if (rawDiff <= 0 && timerId !== null) {
            clearInterval(timerId);
        }
    }

    updateTimer();
    timerId = setInterval(updateTimer, 1000);
})();

// ==========================================
// SPARKLES DI SAVE THE DATE (LEBIH RAPIH & SEIMBANG)
// ==========================================
(function initSparkles() {
    const container = document.getElementById("std-sparkles");
    if (!container) return;

    const starCoords = [
        [6, 10], [18, 24], [11, 48], [22, 72], [8, 88],
        [34, 8], [66, 9], [82, 16], [92, 34], [79, 52],
        [91, 68], [84, 86], [28, 92], [72, 91], [44, 15],
        [57, 14]
    ];

    const dotCoords = [
        [13, 17], [25, 36], [9, 62], [19, 82], [38, 12],
        [62, 12], [75, 25], [88, 46], [76, 76], [90, 82],
        [32, 85], [68, 84], [16, 94], [85, 94]
    ];

    starCoords.forEach(([left, top], i) => {
        const star = document.createElement("span");
        star.className = "sparkle-star";
        star.textContent = "✦";
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.fontSize = `${0.68 + (i % 3) * 0.2}rem`;
        star.style.setProperty("--dur", `${2.2 + (i % 4) * 0.45}s`);
        star.style.setProperty("--delay", `${(i % 5) * 0.35}s`);
        container.appendChild(star);
    });

    dotCoords.forEach(([left, top], j) => {
        const dot = document.createElement("span");
        dot.className = "sparkle-dot";
        const size = 4 + (j % 2) * 3;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${left}%`;
        dot.style.top = `${top}%`;
        dot.style.setProperty("--dur", `${2.4 + (j % 4) * 0.5}s`);
        dot.style.setProperty("--delay", `${(j % 5) * 0.4}s`);
        container.appendChild(dot);
    });
})();

// ==========================================
// EFEK KETIKAN (TYPEWRITER) & SCROLL REVEAL
// ==========================================
function runTypewriter(el) {
    if (!el || el.dataset.typedDone === "true") return;
    if (el.children.length > 0) {
        el.dataset.typedDone = "true";
        return;
    }

    const fullText = el.textContent;
    if (!fullText || !fullText.trim()) return;

    const speed = Number(el.getAttribute("data-speed")) || 25;
    el.dataset.typedDone = "true";
    el.textContent = "";
    el.classList.add("typing-active");

    let idx = 0;
    function step() {
        idx += 1;
        el.textContent = fullText.slice(0, idx);
        if (idx < fullText.length) {
            setTimeout(step, speed);
        } else {
            el.classList.remove("typing-active");
        }
    }
    step();
}

(function initRevealAndTypewriter() {
    const sections = document.querySelectorAll(".anim-section");
    if (!sections.length) return;

    const reduceMotion =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function activateSection(section) {
        if (section.dataset.activated === "true") return;
        section.dataset.activated = "true";
        section.classList.add("anim-visible");

        const typeEls = section.querySelectorAll(".typewriter-text");
        if (reduceMotion) {
            typeEls.forEach((el) => {
                el.dataset.typedDone = "true";
            });
            return;
        }

        typeEls.forEach((el, i) => {
            setTimeout(() => runTypewriter(el), i * 110);
        });
    }

    const coverSection = document.getElementById("cover");
    if (coverSection) activateSection(coverSection);

    if (!("IntersectionObserver" in window)) {
        sections.forEach(activateSection);
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activateSection(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    sections.forEach((sec) => observer.observe(sec));
})();

// ==========================================
// TOMBOL COPY NOMOR REKENING
// ==========================================
document.querySelectorAll(".btn-olive-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const targetId = btn.getAttribute("data-copy-target");
        const targetEl = targetId ? document.getElementById(targetId) : null;
        const labelEl = btn.querySelector(".copy-label");
        if (!targetEl) return;

        const textToCopy = targetEl.innerText.trim();
        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch {
            const tempInput = document.createElement("textarea");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }

        btn.classList.add("copied");
        if (labelEl) labelEl.textContent = "Tersalin";
        setTimeout(() => {
            btn.classList.remove("copied");
            if (labelEl) labelEl.textContent = "Copy";
        }, 1800);
    });
});

// ==========================================
// FORM UCAPAN & KONFIRMASI HADIR
// ==========================================
(function initRSVP() {
    const form = document.getElementById("rsvp-form");
    const listEl = document.getElementById("daftar-ucapan");
    if (!form || !listEl) return;

    const STORAGE_KEY = "undangan_ucapan_herlangga_zalsa";

    function loadUcapan() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        } catch {
            return [];
        }
    }

    function saveUcapan(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // Abaikan jika storage tidak tersedia
        }
    }

    function renderUcapan() {
        const items = loadUcapan();
        listEl.innerHTML = "";
        items.forEach((item) => {
            const card = document.createElement("div");
            card.className = "ucapan-item";

            const nama = document.createElement("strong");
            nama.textContent = item.nama;

            const badge = document.createElement("span");
            badge.className = "ucapan-status";
            badge.textContent = item.status;

            const pesan = document.createElement("p");
            pesan.textContent = item.pesan;

            card.append(nama, badge, pesan);
            listEl.appendChild(card);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const namaInput = document.getElementById("rsvp-nama");
        const statusInput = document.getElementById("rsvp-status");
        const pesanInput = document.getElementById("rsvp-pesan");

        const nama = namaInput ? namaInput.value.trim() : "";
        const status = statusInput ? statusInput.value.trim() : "";
        const pesan = pesanInput ? pesanInput.value.trim() : "";
        if (!nama || !status || !pesan) return;

        const items = loadUcapan();
        items.unshift({ nama, status, pesan });
        saveUcapan(items);
        renderUcapan();
        form.reset();
    });

    renderUcapan();
})();
