document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to") || params.get("nama") || params.get("guest");
  if (to) {
    const guestEl = document.getElementById("guestName");
    if (guestEl) guestEl.textContent = decodeURIComponent(to.replace(/\+/g, " "));
    const namaInput = document.getElementById("namaTamu");
    if (namaInput && !namaInput.value) namaInput.value = decodeURIComponent(to.replace(/\+/g, " "));
  }
  const curtain = document.getElementById("openingCurtain");
  const badge = document.querySelector(".curtain-crest-badge");
  let curtainOpened = false;
  let curtainDoneTimer = null;
  function openCurtain() {
    if (!curtain || curtainOpened || curtain.classList.contains("is-done")) return;
    curtainOpened = true;
    curtain.classList.add("is-opening");
    curtain.setAttribute("aria-hidden", "true");
    clearTimeout(curtainDoneTimer);
    curtainDoneTimer = setTimeout(() => { curtain.classList.add("is-done"); }, 1250);
  }
  if (badge) badge.addEventListener("click", openCurtain);
  if (curtain) curtain.addEventListener("click", (e) => { if (e.target === curtain || e.target.closest(".curtain-panel")) openCurtain(); });
  setTimeout(openCurtain, 6000);

  const envelopeBtn = document.getElementById("openInvitationBtn");
  const hint = document.getElementById("envelope-hint-text");
  let envelopeOpen = false;
  if (envelopeBtn) {
    envelopeBtn.addEventListener("click", () => {
      envelopeOpen = !envelopeOpen;
      envelopeBtn.classList.toggle("is-open", envelopeOpen);
      if (hint) hint.textContent = envelopeOpen ? "CLICK ENVELOPE TO CLOSE" : "CLICK ENVELOPE TO OPEN";
      if (envelopeOpen) {
        setTimeout(() => {
          const ayat = document.getElementById("ayat-pilihan");
          if (ayat) ayat.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 900);
      }
    });
  }

  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggleBtn");
  let musicOn = false;
  async function toggleMusic() {
    if (!music) return;
    try {
      if (musicOn) { music.pause(); musicOn = false; }
      else { await music.play(); musicOn = true; }
      if (musicBtn) musicBtn.textContent = musicOn ? "♫ Musik: On" : "♫ Musik: Off";
    } catch (e) {}
  }
  if (musicBtn) musicBtn.addEventListener("click", toggleMusic);

  // TEMA DIMATIKAN - BIAR BACKGROUND TETAP KAYAK AWAL
  const chips = document.querySelectorAll(".theme-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
    });
  });

  const progress = document.getElementById("scrollProgressBar");
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (progress && max > 0) progress.style.width = (h.scrollTop / max * 100) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const target = new Date("2027-03-27T16:00:00+07:00").getTime();
  const dEl = document.getElementById("days");
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("minutes");
  const sEl = document.getElementById("seconds");
  function tick() {
    if (!dEl) return;
    let diff = target - Date.now();
    if (diff < 0) diff = 0;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    dEl.textContent = String(d).padStart(2, "0");
    hEl.textContent = String(h).padStart(2, "0");
    mEl.textContent = String(m).padStart(2, "0");
    sEl.textContent = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);

  const sparkleBox = document.getElementById("std-sparkles");
  if (sparkleBox && window.innerWidth > 768) {
    for (let i = 0; i < 22; i++) {
      const el = document.createElement("span");
      const isStar = i % 2 === 0;
      el.className = isStar ? "sparkle-star" : "sparkle-dot";
      el.textContent = isStar ? "✦" : "";
      el.style.left = Math.random() * 100 + "%";
      el.style.top = Math.random() * 100 + "%";
      el.style.fontSize = (8 + Math.random() * 10) + "px";
      el.style.setProperty("--dur", (2 + Math.random() * 2) + "s");
      el.style.setProperty("--delay", (Math.random() * 2) + "s");
      if (!isStar) { el.style.width = "5px"; el.style.height = "5px"; }
      sparkleBox.appendChild(el);
    }
  }

  document.querySelectorAll(".btn-olive-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.dataset.copy || "";
      try { await navigator.clipboard.writeText(text); } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand("copy"); ta.remove();
      }
      const label = btn.querySelector(".copy-label");
      if (label) label.textContent = "Tersalin!";
      btn.classList.add("copied");
      setTimeout(() => { if (label) label.textContent = "Copy"; btn.classList.remove("copied"); }, 1800);
    });
  });

  const calBtn = document.getElementById("addToCalendarBtn");
  if (calBtn) {
    calBtn.addEventListener("click", () => {
      const title = encodeURIComponent("Pernikahan Herlangga & Zalsa");
      const desc = encodeURIComponent("Akad 16.00 WIB - Resepsi 19.00-21.00 WIB di Yayasan Darul Aitama, Jakarta Pusat");
      const loc = encodeURIComponent("Yayasan Darul Aitama, Jl. K.H. Mas Mansyur No.47, Jakarta Pusat");
      window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270327T090000Z/20270327T140000Z&details=${desc}&location=${loc}`, "_blank");
    });
  }

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
  if (lightbox) lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  const form = document.getElementById("rsvpForm");
  const list = document.getElementById("ucapanList");
  const KEY = "ucapan_herlangga_zalsa_v1";
  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function renderUcapan() {
    if (!list) return;
    let data = [];
    try { data = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { data = []; }
    if (!data.length) { list.innerHTML = ""; return; }
    list.innerHTML = data.map((item) =>
      `<div class="ucapan-item"><strong>${escapeHtml(item.nama)}</strong><span class="ucapan-status">${escapeHtml(item.status)}</span><p>${escapeHtml(item.pesan)}</p></div>`
    ).join("");
  }
  renderUcapan();
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("namaTamu").value.trim();
      const status = document.getElementById("statusKehadiran").value;
      const pesan = document.getElementById("pesanUcapan").value.trim();
      if (!nama || !status || !pesan) return;
      let data = [];
      try { data = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { data = []; }
      data.unshift({ nama, status, pesan });
      try { localStorage.setItem(KEY, JSON.stringify(data.slice(0, 50))); } catch (e) {}
      renderUcapan();
      form.reset();
      alert("Terima kasih! Ucapan kamu sudah terkirim.");
    });
  }

  function addTilt3D(selector, max = 12) {
    const els = document.querySelectorAll(selector);
    els.forEach((el) => {
      el.addEventListener("touchmove", (e) => {
        if (!e.touches[0]) return;
        const rect = el.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -max;
        const ry = ((x / rect.width) - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }, { passive: true });
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -max;
        const ry = ((x / rect.width) - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      const reset = () => { el.style.transform = ""; };
      el.addEventListener("mouseleave", reset);
      el.addEventListener("touchend", reset);
    });
  }
  addTilt3D(".envelope-card", 14);
  addTilt3D(".oval-frame-wrap", 12);
  addTilt3D(".polaroid-duo-wrap", 10);
  addTilt3D(".gallery-frame", 12);
  addTilt3D(".ar-rum-arch-outer", 8);
  addTilt3D(".closing-card-frame", 8);
  addTilt3D(".physical-gift-box", 8);

  const animatedTargets = Array.from(document.querySelectorAll(
    ".text-rise, .video-reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur"
  ));
  function showElementSmooth(el, delayMs = 0) {
    if (!el || el.dataset.revealed === "1") return;
    el.dataset.revealed = "1";
    setTimeout(() => { el.classList.add("is-shown", "is-visible", "is-in"); }, delayMs);
  }
  function revealBatch(elements) {
    elements.forEach((el, idx) => { showElementSmooth(el, Math.min(idx * 170, 680)); });
  }
  if ("IntersectionObserver" in window) {
    const smoothObserver = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
        if (entering.length) {
          revealBatch(entering);
          entering.forEach((el) => smoothObserver.unobserve(el));
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" }
    );
    animatedTargets.forEach((el) => smoothObserver.observe(el));
    let scrollCheckTimer = null;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollCheckTimer);
      scrollCheckTimer = setTimeout(() => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const newlyVisible = animatedTargets.filter((el) => {
          if (el.dataset.revealed === "1") return false;
          const rect = el.getBoundingClientRect();
          return rect.top < vh * 0.86 && rect.bottom > 0;
        });
        if (newlyVisible.length) {
          revealBatch(newlyVisible);
          newlyVisible.forEach((el) => smoothObserver.unobserve(el));
        }
      }, 120);
    }, { passive: true });
  } else {
    revealBatch(animatedTargets);
  }
});
