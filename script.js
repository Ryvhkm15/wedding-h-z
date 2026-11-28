document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to") || params.get("nama") || params.get("guest");
  if (to) { const g = document.getElementById("guestName"); if (g) g.textContent = decodeURIComponent(to.replace(/\+/g," ")); const n = document.getElementById("namaTamu"); if (n && !n.value) n.value = decodeURIComponent(to.replace(/\+/g," ")); }
  const curtain = document.getElementById("openingCurtain"); const badge = document.querySelector(".curtain-crest-badge"); let opened = false;
  function openCurtain(){ if(!curtain||opened||curtain.classList.contains("is-done")) return; opened=true; curtain.classList.add("is-opening"); setTimeout(()=>curtain.classList.add("is-done"),1250); }
  if(badge) badge.addEventListener("click", openCurtain); setTimeout(openCurtain,6000);
  const envBtn = document.getElementById("openInvitationBtn"); const hint = document.getElementById("envelope-hint-text"); let envOpen=false;
  if(envBtn) envBtn.addEventListener("click", ()=>{ envOpen=!envOpen; envBtn.classList.toggle("is-open",envOpen); if(hint) hint.textContent = envOpen ? "CLICK ENVELOPE TO CLOSE" : "CLICK ENVELOPE TO OPEN"; if(envOpen) setTimeout(()=>{ const a=document.getElementById("ayat-pilihan"); if(a) a.scrollIntoView({behavior:"smooth"}); },900); });
  const music=document.getElementById("bgMusic"); const mBtn=document.getElementById("musicToggleBtn"); let mOn=false;
  if(mBtn) mBtn.addEventListener("click", async()=>{ if(!music) return; try{ if(mOn){music.pause();mOn=false;} else{await music.play();mOn=true;} mBtn.textContent=mOn?"♫ Musik: On":"♫ Musik: Off"; }catch(e){} });
  document.querySelectorAll(".theme-chip").forEach(c=>{ c.addEventListener("click",()=>{ document.querySelectorAll(".theme-chip").forEach(x=>x.classList.remove("is-active")); c.classList.add("is-active"); document.body.setAttribute("data-wedding-theme",c.dataset.theme); }); });
  const prog=document.getElementById("scrollProgressBar"); function onScroll(){ const h=document.documentElement; const max=h.scrollHeight-h.clientHeight; if(prog&&max>0) prog.style.width=(h.scrollTop/max*100)+"%"; } window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
  const target=new Date("2027-03-27T16:00:00+07:00").getTime(); const dEl=document.getElementById("days"),hEl=document.getElementById("hours"),mEl=document.getElementById("minutes"),sEl=document.getElementById("seconds");
  function tick(){ if(!dEl) return; let diff=target-Date.now(); if(diff<0) diff=0; dEl.textContent=String(Math.floor(diff/86400000)).padStart(2,"0"); hEl.textContent=String(Math.floor(diff%86400000/3600000)).padStart(2,"0"); mEl.textContent=String(Math.floor(diff%3600000/60000)).padStart(2,"0"); sEl.textContent=String(Math.floor(diff%60000/1000)).padStart(2,"0"); } tick(); setInterval(tick,1000);
  const spark=document.getElementById("std-sparkles"); if(spark&&window.innerWidth>768){ for(let i=0;i<22;i++){ const el=document.createElement("span"); const isStar=i%2===0; el.className=isStar?"sparkle-star":"sparkle-dot"; el.textContent=isStar?"✦":""; el.style.left=Math.random()*100+"%"; el.style.top=Math.random()*100+"%"; el.style.fontSize=(8+Math.random()*10)+"px"; el.style.setProperty("--dur",(2+Math.random()*2)+"s"); el.style.setProperty("--delay",(Math.random()*2)+"s"); if(!isStar){el.style.width="5px";el.style.height="5px";} spark.appendChild(el); } }
  document.querySelectorAll(".btn-olive-copy").forEach(btn=>{ btn.addEventListener("click", async()=>{ const t=btn.dataset.copy||""; try{await navigator.clipboard.writeText(t);}catch(e){ const ta=document.createElement("textarea"); ta.value=t; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); } const l=btn.querySelector(".copy-label"); if(l) l.textContent="Tersalin!"; btn.classList.add("copied"); setTimeout(()=>{ if(l) l.textContent="Copy"; btn.classList.remove("copied"); },1800); }); });
  const cal=document.getElementById("addToCalendarBtn"); if(cal) cal.addEventListener("click",()=>{ const ti=encodeURIComponent("Pernikahan Herlangga & Zalsa"); const de=encodeURIComponent("Akad 16.00 WIB - Resepsi 19.00-21.00 WIB di Yayasan Daarul Aitam"); const lo=encodeURIComponent("Yayasan Daarul Aitam, Jakarta Pusat"); window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${ti}&dates=20270327T090000Z/20270327T140000Z&details=${de}&location=${lo}`,"_blank"); });
  const lb=document.getElementById("photoLightbox"); const lbImg=document.getElementById("photoLightboxImg"); const lbClose=document.getElementById("photoLightboxClose");
  document.querySelectorAll(".gallery-frame img").forEach(img=>{ img.addEventListener("click",()=>{ if(!lb||!lbImg) return; lbImg.src=img.src; lb.classList.add("is-open"); }); });
  if(lbClose) lbClose.addEventListener("click",()=>lb.classList.remove("is-open")); if(lb) lb.addEventListener("click",e=>{ if(e.target===lb) lb.classList.remove("is-open"); });
  const form=document.getElementById("rsvpForm"); const list=document.getElementById("ucapanList"); const KEY="ucapan_herlangga_zalsa_v1";
  function esc(s){ return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
  function render(){ if(!list) return; let d=[]; try{d=JSON.parse(localStorage.getItem(KEY)||"[]");}catch(e){d=[];} if(!d.length){list.innerHTML="";return;} list.innerHTML=d.map(it=>`<div class="ucapan-item"><strong>${esc(it.nama)}</strong><span class="ucapan-status">${esc(it.status)}</span><p>${esc(it.pesan)}</p></div>`).join(""); } render();
  if(form) form.addEventListener("submit",e=>{ e.preventDefault(); const nama=document.getElementById("namaTamu").value.trim(); const st=document.getElementById("statusKehadiran").value; const ps=document.getElementById("pesanUcapan").value.trim(); if(!nama||!st||!ps) return; let d=[]; try{d=JSON.parse(localStorage.getItem(KEY)||"[]");}catch(e){d=[];} d.unshift({nama,status:st,pesan:ps}); try{localStorage.setItem(KEY,JSON.stringify(d.slice(0,50)));}catch(e){} render(); form.reset(); alert("Terima kasih! Ucapan kamu sudah terkirim."); });
  // ANIMASI CUMA SEKALI - PAS SCROLL BALIK KE ATAS TETAP DIAM
  const animated = Array.from(document.querySelectorAll(".anim-item"));
  if("IntersectionObserver" in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          const section = en.target.closest("section, footer") || document;
          const siblings = Array.from(section.querySelectorAll(".anim-item"));
          const idx = siblings.indexOf(en.target);
          const extra = en.target.classList.contains("anim-photo") ? 220 : 0;
          clearTimeout(en.target._animTimer);
          en.target._animTimer = setTimeout(()=>{
            en.target.classList.add("is-shown");
            obs.unobserve(en.target);
          }, idx*120 + extra);
        }
      });
    },{threshold:0.12, rootMargin:"0px 0px -30px 0px"});
    animated.forEach(el=>obs.observe(el));
  } else { animated.forEach(el=>el.classList.add("is-shown")); }
});
