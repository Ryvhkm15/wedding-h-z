document.addEventListener("DOMContentLoaded", () => {
    const WEDDING_DATE_ISO = "2027-03-27T08:00:00+07:00";
    const CALENDAR_END_ISO = "2027-03-27T14:00:00+07:00";

    const curtainEl = document.getElementById("openingCurtain");
    const crestBadgeEl = document.querySelector(".curtain-crest-badge");
    const openBtn = document.getElementById("openInvitationBtn");
    const envelopeTrigger = document.querySelector(".envelope-trigger");
    const musicBtn = document.getElementById("musicToggleBtn");
    const bgMusic = document.getElementById("bgMusic");
    const themeChips = document.querySelectorAll(".theme-chip");
    const progressBar = document.getElementById("scrollProgressBar");

    let isMusicPlaying = false;
    let isCurtainOpened = false;

    const triggerCurtainOpen = () => {
        if (isCurtainOpened) return;
        isCurtainOpened = true;

        if (curtainEl) {
            curtainEl.classList.add("is-opening");
            window.setTimeout(() => {
                curtainEl.classList.add("is-done");
            }, 950);
        }

        if (bgMusic && !isMusicPlaying) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                if (musicBtn) musicBtn.textContent = "♫ Musik: On";
            }).catch(() => {});
        }
    };

    if (curtainEl) {
        if (crestBadgeEl) {
            crestBadgeEl.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                triggerCurtainOpen();
            });
        }
        curtainEl.addEventListener("click", triggerCurtainOpen);
    }

    // === GABUNGAN: TEXT-RISE / ANIM-ITEM - HANYA IntersectionObserver ===
    const riseTargets = document.querySelectorAll(".text-rise, .anim-item");

    if ("IntersectionObserver" in window) {
        const riseObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-shown", "anim-visible");
                        riseObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
        );

        riseTargets.forEach((target) => riseObserver.observe(target));
    } else {
        // Fallback kalau browser lama gak support Observer
        riseTargets.forEach((el) => el.classList.add("is-shown", "anim-visible"));
    }
    // === AKHIR BAGIAN GABUNGAN ===

    const applyTheme = (themeName) => {
        const validTheme = ["emerald", "velvet", "botanical"].includes(themeName) ? themeName : "emerald";
        document.body.setAttribute("data-wedding-theme", validTheme);
        themeChips.forEach((chip) => {
            chip.classList.toggle("is-active", chip.getAttribute("data-theme") === validTheme);
        });
        try {
            localStorage.setItem("weddingTheme", validTheme);
        } catch (_) {}
    };

    let savedTheme = "emerald";
    try {
        savedTheme = localStorage.getItem("weddingTheme") || "emerald";
    } catch (_) {}
    applyTheme(savedTheme);

    themeChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            applyTheme(chip.getAttribute("data-theme"));
        });
    });

    const updateScrollProgress = () => {
        if (!progressBar) return;
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        progressBar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get("to") || params.get("tamu") || params.get("guest");
    const guestEl = document.getElementById("guestName");
    if (guestEl && guestParam && guestParam.trim() !== "") {
        guestEl.textContent = guestParam.trim();
    }

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            triggerCurtainOpen();
            if (envelopeTrigger) {
                envelopeTrigger.classList.add("is-open");
            }
            window.setTimeout(() => {
                const target = document.getElementById("ayat-pilihan") || document.getElementById("mempelai");
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 620);
        });
    }

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", () => {
            if (isMusicPlaying) {
                bgMusic.pause();
                isMusicPlaying = false;
                musicBtn.textContent = "♫ Musik: Off";
            } else {
                bgMusic.play().then(() => {
                    isMusicPlaying = true;
                    musicBtn.textContent = "♫ Musik: On";
                }).catch(() => {});
            }
        });
    }

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const targetTime = new Date(WEDDING_DATE_ISO).getTime();

    const updateCountdown = () => {
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
        const now = Date.now();
        const diff = Math.max(0, targetTime - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
    };

    updateCountdown();
    window.setInterval(updateCountdown, 1000);

    const addCalendarBtn = document.getElementById("addToCalendarBtn");
    if (addCalendarBtn) {
        addCalendarBtn.addEventListener("click", () => {
            const toGCalDate = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
            const startStr = toGCalDate(WEDDING_DATE_ISO);
            const endStr = toGCalDate(CALENDAR_END_ISO);
            const title = encodeURIComponent("Pernikahan Herlangga & Zalsa");
            const details = encodeURIComponent("Akad Nikah & Resepsi Pernikahan Herlangga Aprilyansah & Zalsa Nabila Putri, S.E.");
            const location = encodeURIComponent("Yayasan Darul Aitama, Jakarta Pusat");
            const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}`;
            window.open(url, "_blank", "noopener,noreferrer");
        });
    }

    document.querySelectorAll(".btn-olive-copy").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const textToCopy = btn.getAttribute("data-copy") || "";
            if (!textToCopy) return;
            try {
                await navigator.clipboard.writeText(textToCopy);
            } catch (_) {
                const temp = document.createElement("textarea");
                temp.value = textToCopy;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand("copy");
                document.body.removeChild(temp);
            }
            const originalText = btn.textContent;
            btn.textContent = "Tersalin ✓";
            btn.classList.add("copied");
            window.setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove("copied");
            }, 1800);
        });
    });

    const lightbox = document.getElementById("photoLightbox");
    const lightboxImg = document.getElementById("photoLightboxImg");
    const lightboxClose = document.getElementById("photoLightboxClose");

    document.querySelectorAll(".gallery-frame img").forEach((img) => {
        img.addEventListener("click", () => {
            if (!lightbox || !lightboxImg) return;
            lightboxImg.src = img.currentSrc || img.src;
            lightboxImg.alt = img.alt || "Foto Galeri";
            lightbox.classList.add("is-open");
        });
    });

    const closeLightbox = () => {
        if (lightbox) lightbox.classList.remove("is-open");
    };

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    const rsvpForm = document.getElementById("rsvpForm");
    const ucapanList = document.getElementById("ucapanList");
    const STORAGE_KEY = "ucapanPernikahanHerlanggaZalsa";

    const renderUcapan = (items) => {
        if (!ucapanList) return;
        ucapanList.innerHTML = "";
        items.forEach((item) => {
            const card = document.createElement("div");
            card.className = "ucapan-item";

            const strong = document.createElement("strong");
            strong.textContent = item.nama;

            const badge = document.createElement("span");
            badge.className = "ucapan-status";
            badge.textContent = item.kehadiran;

            const p = document.createElement("p");
            p.textContent = item.pesan;

            card.append(strong, badge, p);
            ucapanList.appendChild(card);
        });
    };

    let ucapanData = [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) ucapanData = parsed;
        }
    } catch (_) {}

    if (ucapanData.length > 0) {
        renderUcapan(ucapanData);
    }

    if (rsvpForm) {
        rsvpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const namaInput = document.getElementById("namaTamu");
            const hadirInput = document.getElementById("statusKehadiran");
            const pesanInput = document.getElementById("pesanUcapan");

            const nama = namaInput ? namaInput.value.trim() : "";
            const kehadiran = hadirInput ? hadirInput.value : "Hadir";
            const pesan = pesanInput ? pesanInput.value.trim() : "";

            if (!nama || !pesan) return;

            ucapanData.unshift({ nama, kehadiran, pesan });
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(ucapanData));
            } catch (_) {}

            renderUcapan(ucapanData);
            rsvpForm.reset();
        });
    }
});
