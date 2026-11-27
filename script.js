document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const curtain = document.getElementById("openingCurtain");
    const crestBadge = document.querySelector(".curtain-crest-badge");
    const openBtn = document.getElementById("openInvitationBtn");
    const envelopeTrigger = document.getElementById("openInvitationBtn");
    const hintText = document.getElementById("envelope-hint-text");
    const progressBar = document.getElementById("scrollProgressBar");
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggleBtn");

    let curtainOpened = false;
    let isScrolling = false;

    // ===== NAMA TAMU DARI URL ?to= =====
    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get("to") || params.get("nama") || params.get("guest");
    if (guestParam) {
        const guestNameEl = document.getElementById("guestName");
        const namaTamuInput = document.getElementById("namaTamu");
        const decoded = decodeURIComponent(guestParam.replace(/\+/g, " "));
        if (guestNameEl) guestNameEl.textContent = decoded;
        if (namaTamuInput) namaTamuInput.value = decoded;
    }

    // ===== TIRAI - SMOOTH OPEN =====
    function triggerCurtainOpen() {
        if (curtainOpened || !curtain) return;
        curtainOpened = true;
        curtain.classList.add("is-opening");
        window.setTimeout(() => {
            curtain.classList.add("is-done");
        }, 1150);
    }

    if (crestBadge) {
        crestBadge.addEventListener("click", () => {
            triggerCurtainOpen();
        });
    }

    // ===== AMPLOP - BISA BUKA & TUTUP LAGI =====
    if (openBtn && envelopeTrigger) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            triggerCurtainOpen();

            const isOpen = envelopeTrigger.classList.contains("is-open");

            if (isOpen) {
                envelopeTrigger.classList.remove("is-open");
                if (hintText) hintText.textContent = "CLICK ENVELOPE TO OPEN";
                return;
            }

            envelopeTrigger.classList.add("is-open");
            if (hintText) hintText.textContent = "CLICK ENVELOPE TO CLOSE";

            window.setTimeout(() => {
                const target = document.getElementById("ayat-pilihan") || document.getElementById("mempelai");
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 650);
        });
    }

    // ===== THEME SWITCHER =====
    const themeChips = document.querySelectorAll(".theme-chip");
    themeChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            themeChips.forEach((c) => c.classList.remove("is-active"));
            chip.classList.add("is-active");
            const theme = chip.getAttribute("data-theme");
            if (theme) body.setAttribute("data-wedding-theme", theme);
        });
    });

    // ===== MUSIK =====
    let musicPlaying = false;
    function updateMusicBtn() {
        if (!musicBtn) return;
        musicBtn.textContent = musicPlaying ? "♫ Musik: On" : "♫ Musik: Off";
    }
    if (musicBtn && music) {
        musicBtn.addEventListener("click", () => {
            if (musicPlaying) {
                music.pause();
                musicPlaying = false;
            } else {
                music.play().then(() => {
                    musicPlaying = true;
                    updateMusicBtn();
                }).catch(() => {
                    musicPlaying = false;
                });
            }
            updateMusicBtn();
        });
        if (openBtn) {
            openBtn.addEventListener("click", () => {
                if (!musicPlaying) {
                    music.play().then(() => {
                        musicPlaying = true;
                        updateMusicBtn();
                    }).catch(() => {});
                }
            }, { once: true });
        }
    }

    // ===== COUNTDOWN - 27 MARET 2027 16:00 WIB =====
    const targetDate = new Date("2027-03-27T16:00:00+07:00").getTime();
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateCountdown() {
        if (!daysEl) return;
        const now = new Date().getTime();
        let diff = targetDate - now;
        if (diff < 0) diff = 0;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        daysEl.textContent = String(d).padStart(2, "0");
        hoursEl.textContent = String(h).padStart(2, "0");
        minutesEl.textContent = String(m).padStart(2, "0");
        secondsEl.textContent = String(s).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== SCROLL PROGRESS + ANIMASI MUNCUL =====
    function onScroll() {
        if (isScrolling) return;
        isScrolling = true;
        requestAnimationFrame(() => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            if (progressBar) progressBar.style.width = progress + "%";
            isScrolling = false;
        });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-shown");
                entry.target.classList.add("anim-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".text-rise, .anim-item, .anim-section").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#cover .anim-item, #cover .text-rise").forEach((el) => {
        el.classList.add("is-shown");
        el.classList.add("anim-visible");
    });

    // ===== SPARKLES SAVE THE DATE =====
    const sparkleField = document.getElementById("std-sparkles");
    if (sparkleField) {
        for (let i = 0; i < 22; i++) {
            const el = document.createElement("span");
            const isStar = Math.random() > 0.5;
            el.className = isStar ? "sparkle-star" : "sparkle-dot";
            el.textContent = isStar ? "✦" : "";
            el.style.left = Math.random() * 100 + "%";
            el.style.top = Math.random() * 100 + "%";
            el.style.setProperty("--dur", (2 + Math.random() * 2.5) + "s");
            el.style.setProperty("--delay", (Math.random() * 2) + "s");
            if (!isStar) {
                const size = 3 + Math.random() * 4;
                el.style.width = size + "px";
                el.style.height = size + "px";
            } else {
                el.style.fontSize = (10 + Math.random() * 10) + "px";
            }
            sparkleField.appendChild(el);
        }
    }

    // ===== SIMPAN KE KALENDER =====
    const calendarBtn = document.getElementById("addToCalendarBtn");
    if (calendarBtn) {
        calendarBtn.addEventListener("click", () => {
            const title = encodeURIComponent("Pernikahan Herlangga & Zalsa");
            const details = encodeURIComponent("Akad pukul 16.00 WIB, Resepsi 19.00 - 21.00 WIB di Yayasan Darul Aitama, Jakarta Pusat");
            const location = encodeURIComponent("Yayasan Darul Aitama, Jl. K.H. Mas Mansyur No.47, Jakarta Pusat");
            const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270327T090000Z/20270327T140000Z&details=${details}&location=${location}`;
            window.open(url, "_blank");
        });
    }

    // ===== COPY REKENING =====
    document.querySelectorAll(".btn-olive-copy").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const text = btn.getAttribute("data-copy") || "";
            const label = btn.querySelector(".copy-label");
            try {
                await navigator.clipboard.writeText(text);
            } catch (e) {
                const ta = document.createElement("textarea");
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
            }
            if (label) label.textContent = "Copied!";
            btn.classList.add("copied");
            setTimeout(() => {
                if (label) label.textContent = "Copy";
                btn.classList.remove("copied");
            }, 1800);
        });
    });

    // ===== LIGHTBOX GALERI =====
    const lightbox = document.getElementById("photoLightbox");
    const lightboxImg = document.getElementById("photoLightboxImg");
    const lightboxClose = document.getElementById("photoLightboxClose");
    document.querySelectorAll(".gallery-frame img").forEach((img) => {
        img.addEventListener("click", () => {
            if (!lightbox || !lightboxImg) return;
            lightboxImg.src = img.src;
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
        });
    });
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
    }
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    // ===== RSVP / UCAPAN - SIMPAN DI LOCALSTORAGE =====
    const rsvpForm = document.getElementById("rsvpForm");
    const ucapanList = document.getElementById("ucapanList");
    const STORAGE_KEY = "ucapan_herlangga_zalsa_v1";

    function getUcapan() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }
    function renderUcapan() {
        if (!ucapanList) return;
        const list = getUcapan();
        if (list.length === 0) {
            ucapanList.innerHTML = "";
            return;
        }
        ucapanList.innerHTML = list.map((u) => {
            const safeNama = String(u.nama || "").replace(/</g, "&lt;");
            const safePesan = String(u.pesan || "").replace(/</g, "&lt;");
            const safeStatus = String(u.status || "").replace(/</g, "&lt;");
            return `<div class="ucapan-item"><strong>${safeNama}</strong><span class="ucapan-status">${safeStatus}</span><p>${safePesan}</p></div>`;
        }).join("");
    }
    renderUcapan();

    if (rsvpForm) {
        rsvpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nama = document.getElementById("namaTamu")?.value.trim();
            const status = document.getElementById("statusKehadiran")?.value;
            const pesan = document.getElementById("pesanUcapan")?.value.trim();
            if (!nama || !status || !pesan) return;
            const list = getUcapan();
            list.unshift({ nama, status, pesan, time: Date.now() });
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50))); } catch (err) {}
            renderUcapan();
            rsvpForm.reset();
            if (guestParam) {
                const namaInput = document.getElementById("namaTamu");
                if (namaInput) namaInput.value = decodeURIComponent(guestParam.replace(/\+/g, " "));
            }
        });
    }
});
      renderUcapan();
      form.reset();
      alert("Terima kasih! Ucapan kamu sudah terkirim.");
    });
  }
