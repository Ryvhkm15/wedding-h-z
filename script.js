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
  function openCurtain() { if (!curtain || curtainOpened || curtain.classList.contains("is-done")) return; curtainOpened = true; curtain.classList.add("is-opening"); setTimeout(() => { curtain.classList.add("is-done"); }, 1250); }
  if (badge) badge.addEventListener("click", openCurtain);
  setTimeout(openCurtain, 6000);
  const envelopeBtn = document.getElementById("openInvitationBtn");
  const hint = document.getElementById("envelope-hint-text");
  let envelopeOpen = false;
  if (envelopeBtn) envelopeBtn.addEventListener("click", () => { envelopeOpen = !envelopeOpen; envelopeBtn.classList.toggle("is-open", envelopeOpen); if (hint) hint.textContent = envelopeOpen ? "CLICK ENVELOPE TO CLOSE" : "CLICK ENVELOPE TO OPEN"; if (envelopeOpen) setTimeout(() => { const ayat = document.getElementById("ayat-pilihan"); if (ayat) ayat.scrollIntoView({ behavior: "smooth", block: "start" }); }, 900); });
  const music = document.getElementById("bgMusic"); const musicBtn = document.getElementById("musicToggleBtn"); let musicOn = false;
  if (musicBtn) musicBtn.addEventListener("click", async () => { if (!music) return; try { if (musicOn) { music.pause(); musicOn = false; } else { await music.play(); musicOn = true; } musicBtn.textContent = musicOn ? "♫ Musik: On" : "♫ Musik: Off"; } catch (e) {} });
  document.querySelectorAll(".theme-chip").forEach((chip) => { chip.addEventListener("click", () => { document.querySelectorAll(".theme-chip").forEach((c) => c.classList.remove("is-active")); chip.classList.add("is-active"); document.body.setAttribute("data-wedding-theme", chip.dataset.theme); }); });
  const progress = document.getElementById("scrollProgressBar");
  function onScroll() { const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; if (progress && max > 0) progress.style.width = (h.scrollTop / max * 100) + "%"; }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const target = new Date("2027-03-27T16:00:00+07:00").getTime();
  const dEl = document.getElementById("days"), hEl = document.getElementById("hours"), mEl = document.getElementById("minutes"), sEl = document.getElementById("seconds");
  function tick() { if (!dEl) return; let diff = target - Date.now(); if (diff < 0) diff = 0; dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0"); hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"); mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"); sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"); }
  tick(); setInterval(tick, 1000);
  const sparkleBox = document.getElementById("std-sparkles");
  if (sparkleBox && window.innerWidth > 768) { for (let i = 0; i < 22; i++) { const el = document.createElement("span"); const isStar = i % 2 === 0; el.className = isStar ? "sparkle-star" : "sparkle-dot"; el.textContent = isStar ? "✦" : ""; el.style.left = Math.random() * 100 + "%"; el.style.top = Math.random() * 100 + "%"; el.style.fontSize = (8 + Math.random() * 10) + "px"; el.style.setProperty("--dur", (2 + Math.random() * 2) + "s"); el.style.setProperty("--delay", (Math.random() * 2) + "s"); if (!isStar) { el.style.width = "5px"; el.style.height = "5px"; } sparkleBox.appendChild(el); } }
  document.querySelectorAll(".btn-olive-copy").forEach((btn) => { btn.addEventListener("click", async () => { const text = btn.dataset.copy || ""; try { await navigator.clipboard.writeText(text); } catch (e) { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); } const label = btn.querySelector(".copy-label"); if (label) label.textContent = "Tersalin!"; btn.classList.add("copied"); setTimeout(() => { if (label) label.textContent = "Copy"; btn.classList.remove("copied"); }, 1800); }); });
  const calBtn = document.getElementById("addToCalendarBtn");
  if (calBtn) calBtn.addEventListener("click", () => { const title = encodeURIComponent("Pernikahan Herlangga & Zalsa"); const desc = encodeURIComponent("Akad 16.00 WIB - Resepsi 19.00-21.00 WIB di Yayasan Daarul Aitam, Jakarta Pusat"); const loc = encodeURIComponent("Yayasan Daarul Aitam, Jl. K.H. Mas Mansyur No.47, Jakarta Pusat"); window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270327T090000Z/20270327T140000Z&details=${desc}&location=${loc}`, "_blank"); });
  const lightbox = document.getElementById("photoLightbox"); const lightboxImg = document.getElementById("photoLightboxImg"); const lightboxClose = document.getElementById("photoLightboxClose");
  document.querySelectorAll(".gallery-frame img").forEach((img) => { img.addEventListener("click", () => { if (!lightbox || !lightboxImg) return; lightboxImg.src = img.src; lightbox.classList.add("is-open"); }); });
  function closeLightbox() { if (lightbox) lightbox.classList.remove("is-open"); }
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  const form = document.getElementById("rsvpForm"); const list = document.getElementById("ucapanList"); const KEY = "ucapan_herlangga_zalsa_v1";
  function escapeHtml(s) { return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function renderUcapan() { if (!list) return; let data = []; try { data = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { data = []; } if (!data.length) { list.innerHTML = ""; return; } list.innerHTML = data.map((it) => `<div class="ucapan-item"><strong>${escapeHtml(it.nama)}</strong><span class="ucapan-status">${escapeHtml(it.status)}</span><p>${escapeHtml(it.pesan)}</p></div>`).join(""); }
  renderUcapan();
  if (form) form.addEventListener("submit", (e) => { e.preventDefault(); const nama = document.getElementById("namaTamu").value.trim(); const status = document.getElementById("statusKehadiran").value; const pesan = document.getElementById("pesanUcapan").value.trim(); if (!nama || !status || !pesan) return; let data = []; try { data = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { data = []; } data.unshift({ nama, status, pesan }); try { localStorage.setItem(KEY, JSON.stringify(data.slice(0, 50))); } catch (e) {} renderUcapan(); form.reset(); alert("Terima kasih! Ucapan kamu sudah terkirim."); });
  // ANIMASI KAYAK DI VIDEO - FADE NAIK PELAN, SATU-SATU
  const animated = Array.from(document.querySelectorAll(".anim-item"));
  if ("IntersectionObserver" in window) { const obs = new IntersectionObserver((entries) => { entries.forEach((en) => { if (en.isIntersecting) { const section = en.target.closest("section, footer") || document; const siblings = Array.from(section.querySelectorAll(".anim-item")); const idx = siblings.indexOf(en.target); setTimeout(() => en.target.classList.add("is-shown"), idx * 160); obs.unobserve(en.target); } }); }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }); animated.forEach((el) => obs.observe(el)); } else { animated.forEach((el) => el.classList.add("is-shown")); }
  setTimeout(() => { animated.forEach((el, i) => setTimeout(() => el.classList.add("is-shown"), i * 80)); }, 4000);
});
