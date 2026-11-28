:root{
  --maroon-velvet:#470c17;
  --olive-btn:#6c7224;
  --cream-soft:#fbf8f2;
  --gold-accent:#d9be8c;
  --gold-bright:#f5e2ba;
  --text-dark:#231b18;
  --text-muted:#5e534d;
  --font-script:"Great Vibes",cursive;
  --font-serif:"Cormorant Garamond",Georgia,serif;
  --font-sans:"Plus Jakarta Sans",sans-serif;
  /* BACKGROUND LAMA LO - SAMA PERSIS, GAK ADA UNSPLASH LAGI */
  --bg-hero-cover:radial-gradient(circle at 50% 45%,rgba(252,248,240,.52) 0%,rgba(252,248,240,.14) 68%),linear-gradient(180deg,rgba(246,241,231,.42) 0%,rgba(246,241,231,.18) 62%,rgba(43,66,49,.36) 100%),url("./bg-cover-garden.jpg");
  --bg-ayat-section:radial-gradient(circle at 50% 35%,rgba(92,16,30,.25) 0%,rgba(22,3,8,.68) 100%),linear-gradient(180deg,rgba(45,7,14,.42) 0%,rgba(26,4,9,.62) 100%),url("./bg-ayat-std.jpg");
  --bg-mempelai-section:radial-gradient(circle at 50% 24%,rgba(248,227,230,.24) 0%,transparent 62%),linear-gradient(180deg,rgba(64,14,24,.34) 0%,rgba(36,5,12,.58) 100%),url("./bg-mempelai.jpg");
  --bg-std-section:radial-gradient(circle at 50% 20%,rgba(245,226,186,.16) 0%,transparent 62%),linear-gradient(180deg,rgba(38,5,12,.58) 0%,rgba(24,3,7,.76) 100%),url("./bg-ayat-std.jpg");
  --bg-gift-section:radial-gradient(circle at 50% 18%,rgba(245,226,186,.18) 0%,transparent 58%),linear-gradient(180deg,rgba(75,14,26,.56) 0%,rgba(28,3,8,.76) 100%),url("./bg-gift-rsvp.jpg");
  --bg-story-section:radial-gradient(circle at 50% 20%,rgba(245,226,186,.16) 0%,transparent 58%),linear-gradient(180deg,rgba(36,54,37,.54) 0%,rgba(24,36,25,.72) 100%),url("./bg-story-gallery.jpg");
  --bg-galeri-section:linear-gradient(180deg,rgba(253,248,240,.72) 0%,rgba(244,230,210,.82) 100%),url("./bg-story-gallery.jpg");
  --bg-penutup-section:radial-gradient(circle at 50% 25%,rgba(245,226,186,.18) 0%,transparent 60%),linear-gradient(180deg,rgba(42,7,14,.58) 0%,rgba(24,3,7,.78) 100%),url("./bg-gift-rsvp.jpg");
  --bg-ucapan-section:linear-gradient(180deg,rgba(251,244,234,.76) 0%,rgba(239,225,205,.86) 100%),url("./bg-story-gallery.jpg");
  --bg-footer-section:linear-gradient(180deg,rgba(42,7,14,.72) 0%,rgba(22,3,7,.9) 100%),url("./bg-gift-rsvp.jpg");
  --bg-amplop-hero:radial-gradient(circle at 30% 20%,rgba(255,255,255,.88) 0%,transparent 55%),linear-gradient(160deg,#fffaf0 0%,#ebd9b7 100%);
  --bg-amplop-ayat:radial-gradient(circle at 70% 25%,rgba(255,255,255,.78) 0%,transparent 55%),linear-gradient(160deg,#fcf5e8 0%,#e4cfa9 100%);
  --bg-amplop-penutup:radial-gradient(circle at 50% 20%,rgba(255,255,255,.78) 0%,transparent 55%),linear-gradient(160deg,#fbf3e4 0%,#e1caa3 100%);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;overflow-anchor:none}
body{font-family:var(--font-sans);color:var(--text-dark);background:var(--cream-soft);line-height:1.7;overflow-x:clip}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

/* === HD UNTUK BACKGROUND LAMA === */
.hero-envelope,.section-doily-emerald,.section-maroon,.section-save-date-green,.section-gift-maroon,.section-love-story-green,.section-gallery-classic,.section-closing-envelope,.section-rsvp-last,footer{
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  /* ini yang bikin background lama lo keliatan HD */
  image-rendering:-webkit-optimize-contrast;
  image-rendering:crisp-edges;
  transform:translateZ(0);
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
}
/* lapisan penajam halus biar gak blur di HP */
.hero-envelope::before,.section-doily-emerald::before,.section-maroon::before,.section-save-date-green::before,.section-gift-maroon::before,.section-love-story-green::before,.section-gallery-classic::before,.section-closing-envelope::before,.section-rsvp-last::before,footer::before{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(0,0,0,.04));
  backdrop-filter:contrast(1.06) saturate(1.08);
}
.hero-envelope>*,.section-doily-emerald>*,.section-maroon>*,.section-save-date-green>*,.section-gift-maroon>*,.section-love-story-green>*,.section-gallery-classic>*,.section-closing-envelope>*,.section-rsvp-last>*,footer>*{position:relative;z-index:1}

/* BURUNG PUTIH - CUMA DI SAVE THE DATE */
.birds-layer{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:3}
.birds-layer.small-birds{opacity:.9}
.bird{position:absolute;left:-80px;top:var(--bird-top,20%);width:var(--bird-size,54px);height:36px;animation:birdFly var(--fly-dur,14s) linear infinite;animation-delay:var(--fly-delay,0s);filter:drop-shadow(0 3px 6px rgba(0,0,0,.25))}
.bird .b-body{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:10px;background:#fff;border-radius:50%;box-shadow:0 0 0 1px rgba(180,160,120,.35);z-index:2}
.bird .b-head{position:absolute;left:62%;top:38%;width:8px;height:8px;background:#fff;border-radius:50%;z-index:3}
.bird .b-head::after{content:"";position:absolute;left:6px;top:3px;width:5px;height:1.5px;background:#e8b84a;border-radius:99px}
.bird .b-wing{position:absolute;top:50%;width:28px;height:16px;background:linear-gradient(180deg,#fff,#f0e8d8);border-radius:50% 100% 20% 50%;transform-origin:right center;box-shadow:0 1px 3px rgba(0,0,0,.15)}
.bird .b-wing.left{left:0;transform:rotate(-18deg);animation:flapLeft .55s ease-in-out infinite alternate}
.bird .b-wing.right{right:0;transform:scaleX(-1) rotate(-18deg);transform-origin:left center;animation:flapRight .55s ease-in-out infinite alternate}
@keyframes flapLeft{from{transform:rotate(-28deg) translateY(2px)}to{transform:rotate(28deg) translateY(-4px)}}
@keyframes flapRight{from{transform:scaleX(-1) rotate(-28deg) translateY(2px)}to{transform:scaleX(-1) rotate(28deg) translateY(-4px)}}
@keyframes birdFly{0%{left:-90px;transform:translateY(0) scale(1)}25%{transform:translateY(-18px) scale(1.02)}50%{left:50%;transform:translateY(12px) scale(1)}75%{transform:translateY(-14px)}100%{left:110%;transform:translateY(0)}}
@media (max-width:768px){.bird{--bird-size:38px}}

/* TIRAI - GARIS MUTER UDAH DIHAPUS */
.opening-curtain{position:fixed;inset:0;z-index:95;display:flex;overflow:hidden;pointer-events:auto;transition:opacity .5s ease 1.05s,visibility .5s ease 1.05s}
.opening-curtain.is-done{opacity:0;visibility:hidden;pointer-events:none;display:none}
.curtain-panel{position:relative;width:50%;height:100%;background-image:linear-gradient(180deg,rgba(246,241,231,.34) 0%,rgba(45,7,14,.34) 100%),url("./bg-cover-garden.jpg");background-size:200% 100%;background-repeat:no-repeat;border-bottom:3px solid rgba(217,190,140,.75);transform:translateX(0);transition:transform 1.15s cubic-bezier(.22,1,.36,1);will-change:transform}
.curtain-panel-left{background-position:left center;border-right:2px solid rgba(217,190,140,.85);box-shadow:8px 0 30px rgba(0,0,0,.38)}
.curtain-panel-right{background-position:right center;border-left:2px solid rgba(217,190,140,.85);box-shadow:-8px 0 30px rgba(0,0,0,.38)}
.curtain-gold-trim{position:absolute;top:0;bottom:0;width:10px;background:linear-gradient(180deg,#f5e2ba 0%,#c99f57 50%,#f5e2ba 100%);opacity:.78}
.curtain-panel-left .curtain-gold-trim{right:6px}
.curtain-panel-right .curtain-gold-trim{left:6px}
@keyframes badgeFloat{0%,100%{margin-top:0}50%{margin-top:-8px}}
.curtain-crest-badge{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:96;width:148px;height:88px;padding:8px 16px;border-radius:999px;background:radial-gradient(circle at 35% 30%,#fffaf0 0%,#e7d1a5 100%);border:2.5px solid #b79458;color:#4e0d19;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;box-shadow:0 14px 34px rgba(0,0,0,.45);cursor:pointer;animation:badgeFloat 4s ease-in-out infinite;transition:transform .85s cubic-bezier(.22,1,.36,1),opacity .5s ease;will-change:transform,opacity}
.curtain-crest-badge span{font-family:var(--font-script);font-size:2.1rem;line-height:1;white-space:nowrap}
.curtain-crest-badge small{font-family:var(--font-sans);font-size:.58rem;font-weight:700;letter-spacing:.28em;color:#7c5d32;padding-left:.28em}
.opening-curtain.is-opening{pointer-events:none}
.opening-curtain.is-opening .curtain-panel-left,.opening-curtain.is-done .curtain-panel-left{transform:translateX(-100%)}
.opening-curtain.is-opening .curtain-panel-right,.opening-curtain.is-done .curtain-panel-right{transform:translateX(100%)}
.opening-curtain.is-opening .curtain-crest-badge,.opening-curtain.is-done .curtain-crest-badge{animation:none;transform:translate(-50%,-50%) scale(.82);opacity:0;pointer-events:none}

body[data-wedding-theme="velvet"]{--bg-hero-cover:linear-gradient(180deg,rgba(44,6,14,.34) 0%,rgba(28,3,9,.56) 100%),url("./bg-cover-garden.jpg");--bg-ayat-section:linear-gradient(180deg,rgba(58,9,19,.45) 0%,rgba(25,3,8,.68) 100%),url("./bg-ayat-std.jpg");--bg-mempelai-section:linear-gradient(180deg,rgba(6,33,22,.38) 0%,rgba(4,23,15,.62) 100%),url("./bg-mempelai.jpg");--bg-std-section:linear-gradient(180deg,rgba(56,10,20,.56) 0%,rgba(26,4,9,.76) 100%),url("./bg-ayat-std.jpg");--bg-gift-section:linear-gradient(180deg,rgba(7,36,24,.52) 0%,rgba(5,25,16,.72) 100%),url("./bg-gift-rsvp.jpg")}
body[data-wedding-theme="botanical"]{--bg-hero-cover:linear-gradient(180deg,rgba(252,248,240,.46) 0%,rgba(252,248,240,.16) 65%,rgba(43,66,49,.28) 100%),url("./bg-cover-garden.jpg");--bg-ayat-section:linear-gradient(180deg,rgba(60,79,61,.44) 0%,rgba(36,49,37,.64) 100%),url("./bg-ayat-std.jpg");--bg-mempelai-section:linear-gradient(180deg,rgba(75,21,32,.38) 0%,rgba(45,11,18,.6) 100%),url("./bg-mempelai.jpg");--bg-std-section:linear-gradient(180deg,rgba(45,62,46,.52) 0%,rgba(28,40,29,.72) 100%),url("./bg-ayat-std.jpg")}
body[data-wedding-theme="emerald"] .hero-envelope,body[data-wedding-theme="botanical"] .hero-envelope{color:#261d17}
body[data-wedding-theme="emerald"] .hero-envelope .script-top,body[data-wedding-theme="emerald"] .hero-envelope .spaced-title,body[data-wedding-theme="botanical"] .hero-envelope .script-top,body[data-wedding-theme="botanical"] .hero-envelope .spaced-title{color:#4b0e1a;text-shadow:0 2px 14px rgba(255,250,240,.92)}
body[data-wedding-theme="emerald"] .hero-envelope .date-mini,body[data-wedding-theme="emerald"] .hero-envelope .guest-mini,body[data-wedding-theme="emerald"] .hero-envelope .click-hint,body[data-wedding-theme="botanical"] .hero-envelope .date-mini,body[data-wedding-theme="botanical"] .hero-envelope .guest-mini,body[data-wedding-theme="botanical"] .hero-envelope .click-hint{color:#34261e;text-shadow:0 1px 8px rgba(255,250,240,.85)}
body[data-wedding-theme="emerald"] .hero-envelope .guest-mini strong,body[data-wedding-theme="botanical"] .hero-envelope .guest-mini strong{color:#5c1422}
.scroll-progress-bar{position:fixed;top:0;left:0;height:3px;width:0%;z-index:70;background:linear-gradient(90deg,#c99f57 0%,#fff0c7 50%,#c99f57 100%);pointer-events:none}
.theme-switcher{position:fixed;left:12px;bottom:12px;z-index:50;display:inline-flex;gap:4px;padding:4px;border-radius:999px;background:rgba(28,7,13,.9);border:1px solid rgba(217,190,140,.65);backdrop-filter:blur(6px)}
.theme-chip{border:none;background:transparent;color:#f3ead7;font-family:var(--font-sans);font-size:.72rem;font-weight:600;padding:6px 10px;border-radius:999px;cursor:pointer;white-space:nowrap;transition:background .3s ease,color .3s ease}
.theme-chip.is-active{background:linear-gradient(135deg,#e5c485 0%,#c2954b 100%);color:#1f150c}
.top-ornament-line,.botanical-flourish{display:flex;align-items:center;justify-content:center;gap:12px;margin:0 auto 22px;max-width:240px}
.top-ornament-line span,.botanical-flourish span{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(183,148,88,.82),transparent)}
.top-ornament-line.light span,.botanical-flourish span{background:linear-gradient(90deg,transparent,rgba(255,248,224,.72),transparent)}
.top-ornament-line i,.botanical-flourish i{font-style:normal;font-size:.92rem;color:var(--gold-bright);animation:starTwinkle 2.6s ease-in-out infinite}
.anim-section .anim-item{opacity:1;transform:none}
.text-rise,.video-reveal,.reveal-up,.reveal-left,.reveal-right,.reveal-zoom,.reveal-blur{opacity:0;transition:opacity 1.05s cubic-bezier(.16,1,.3,1),transform 1.05s cubic-bezier(.16,1,.3,1),filter 1.05s cubic-bezier(.16,1,.3,1);will-change:opacity,transform}
.text-rise,.reveal-up,.video-reveal{transform:translate3d(0,34px,0)}
.reveal-left{transform:translate3d(-32px,14px,0)}
.reveal-right{transform:translate3d(32px,14px,0)}
.reveal-zoom{transform:translate3d(0,22px,0) scale(.94)}
.reveal-blur{transform:translate3d(0,20px,0);filter:blur(6px)}
.is-shown,.is-visible,.is-in{opacity:1 !important;transform:translate3d(0,0,0) scale(1) !important;filter:none !important}
.polaroid-card.is-visible.polaroid-left,.polaroid-card.is-in.polaroid-left{transform:rotate(-5deg) translate3d(10px,0,10px) !important}
.polaroid-card.is-visible.polaroid-right,.polaroid-card.is-in.polaroid-right{transform:rotate(5deg) translate3d(-10px,10px,25px) !important}
@keyframes floatGentle{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes starTwinkle{0%,100%{opacity:.14;transform:scale(.65) rotate(0deg)}50%{opacity:1;transform:scale(1.2) rotate(24deg)}}
@keyframes dotTwinkle{0%,100%{opacity:.16;transform:scale(.65)}50%{opacity:.98;transform:scale(1.28)}}
@keyframes numberGlow{0%,100%{text-shadow:0 0 10px rgba(255,255,255,.35)}50%{text-shadow:0 0 26px rgba(255,246,204,.98),0 0 38px rgba(217,190,140,.72)}}
.glow-blink{animation:numberGlow 2.4s ease-in-out infinite}
@keyframes smoothShimmer{0%{background-position:280% center}100%{background-position:-280% center}}
@keyframes softAuraGlow{0%,100%{filter:drop-shadow(0 2px 10px rgba(217,190,140,.2))}50%{filter:drop-shadow(0 3px 16px rgba(255,243,205,.45))}}
.sparkle-field{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1}
.sparkle-star{position:absolute;color:#fffbe6;line-height:1.2;text-shadow:0 0 8px rgba(255,248,205,.95);animation:starTwinkle var(--dur,2.4s) ease-in-out infinite;animation-delay:var(--delay,0s)}
.sparkle-dot{position:absolute;border-radius:50%;background:radial-gradient(circle,#fff 0%,#f5e2b8 55%,transparent 100%);animation:dotTwinkle var(--dur,2.8s) ease-in-out infinite;animation-delay:var(--delay,0s)}
.hero-envelope{position:relative;min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:64px 20px 96px;color:#fffaf0;background-image:var(--bg-hero-cover);text-align:center;overflow-x:clip}
.envelope-wrapper{position:relative;z-index:2;max-width:680px;width:100%;display:flex;flex-direction:column;align-items:center;gap:24px}
.script-top{font-family:var(--font-script);font-size:clamp(2.1rem,5vw,2.8rem);line-height:1.25;color:#fffdf8}
.spaced-title{font-family:var(--font-serif);font-size:clamp(1.15rem,2.8vw,1.55rem);line-height:1.35;letter-spacing:.28em;text-transform:uppercase;color:#fffdf8;margin-bottom:6px}
.couple-script{font-family:var(--font-script);font-size:clamp(3.3rem,9vw,5.4rem);line-height:1.24;padding:6px 8px;margin:2px 0 12px;background:linear-gradient(112deg,#fffdf8 0%,#f5e2ba 40%,#ffffff 50%,#e2be7a 62%,#fffdf8 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 10.5s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
body[data-wedding-theme="emerald"] .couple-script,body[data-wedding-theme="botanical"] .couple-script{background:linear-gradient(112deg,#5c1422 0%,#9e6b24 38%,#fff7dc 50%,#6e1828 62%,#5c1422 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 2px 10px rgba(255,250,240,.85))}
.date-mini{font-size:.94rem;letter-spacing:.08em;color:#f6eedc;margin-bottom:4px}
.guest-mini{font-size:.9rem;color:#eadcc2}
.guest-mini strong{color:#fff}
.envelope-trigger{position:relative;background:transparent;border:none;cursor:pointer;padding:40px 20px 10px;display:flex;flex-direction:column;align-items:center;transition:transform .6s ease;animation:floatGentle 3.6s ease-in-out infinite}
.envelope-trigger:hover{transform:translateY(-7px) scale(1.03)}
.envelope-trigger.is-open{animation:none}
.envelope-card{position:relative;width:min(336px,84vw);min-height:214px;padding-bottom:12px;background:var(--bg-amplop-hero);border-radius:12px;border:1.5px solid rgba(217,190,140,.88);box-shadow:0 24px 48px rgba(0,0,0,.45),inset 0 0 0 5px rgba(255,250,240,.48);overflow:visible;perspective:1200px;transition:transform .08s ease-out,box-shadow .8s ease;transform-style:preserve-3d}
.envelope-trigger.is-open .envelope-card{box-shadow:0 28px 55px rgba(0,0,0,.5),inset 0 18px 28px rgba(0,0,0,.18)}
.envelope-pocket-inside{position:relative;margin:72px 14px 4px;min-height:132px;padding:12px 10px;background:linear-gradient(180deg,#fffdf9 0%,#f3e6cc 100%);border:1.5px solid rgba(183,148,88,.75);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;box-shadow:0 12px 24px rgba(0,0,0,.22);transform:translateY(6px) translateZ(20px);opacity:.45;transition:transform 1.1s ease .3s,opacity .7s ease .3s;z-index:2}
.pocket-monogram{font-family:var(--font-script);font-size:2.25rem;line-height:1.2;color:#550e1c}
.pocket-sub{font-family:var(--font-serif);font-size:.85rem;letter-spacing:.14em;text-transform:uppercase;color:#7c5d32}
.envelope-back-lining{position:absolute;inset:0;border-radius:12px;background:repeating-linear-gradient(135deg,rgba(217,190,140,.12) 0px,rgba(217,190,140,.12) 8px,transparent 8px,transparent 16px);z-index:1}
.envelope-card::after{content:"";position:absolute;inset:0;border-radius:11px;background:linear-gradient(180deg,#f8eedb 0%,#e7d4b1 100%);clip-path:polygon(0 38%,50% 66%,100% 38%,100% 100%,0 100%);pointer-events:none;z-index:3}
.envelope-flap-lace{position:absolute;top:0;left:0;right:0;height:120px;background:radial-gradient(circle at 50% 10%,rgba(255,255,255,.9) 0%,transparent 60%),linear-gradient(180deg,#fffdf8 0%,#f5e8cf 78%,#e8d5ae 100%);clip-path:polygon(0 0,100% 0,50% 100%);border-bottom:4px dotted #cfa96e;transform-origin:top center;transform:rotateX(0deg);transition:transform 1.1s ease,box-shadow .6s ease;backface-visibility:visible;box-shadow:0 6px 12px rgba(0,0,0,.18);z-index:4}
.envelope-gold-trim{position:absolute;inset:7px;border:1px dashed rgba(185,145,86,.58);border-radius:8px;pointer-events:none;z-index:3}
@keyframes waxSealSpin{0%{transform:translate(-50%,-50%) rotate(0deg) scale(1)}100%{transform:translate(-50%,-50%) rotate(360deg) scale(1)}}
@keyframes waxSealSpinUp{0%{transform:translate(-50%,-50%) rotate(0deg) scale(1);opacity:1}60%{transform:translate(-50%,-180%) rotate(360deg) scale(.85);opacity:1}100%{transform:translate(-50%,-260%) rotate(720deg) scale(.5);opacity:0}}
.wax-seal{position:absolute;top:57%;left:50%;width:54px;height:54px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#c22a42 0%,#a81a35 35%,#680b1d 85%);border:2px solid #e6c88c;color:#fae2ae;display:flex;align-items:center;justify-content:center;font-size:1.25rem;box-shadow:0 6px 14px rgba(0,0,0,.35),inset 0 2px 4px rgba(255,255,255,.35);animation:waxSealSpin 6s linear infinite;z-index:6}
.envelope-trigger.is-open .envelope-flap-lace{transform:rotateX(180deg) translateY(-2px);z-index:1}
.envelope-trigger.is-open .wax-seal{animation:waxSealSpinUp .9s ease forwards}
.envelope-trigger.is-open .envelope-pocket-inside{transform:translateY(-48px) translateZ(40px);opacity:1}
.click-hint{margin-top:16px;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:#f4ead5}
.music-btn{position:fixed;right:12px;bottom:62px;z-index:50;background:#26050c;color:#fffaf0;border:1px solid #d9be8c;border-radius:999px;padding:8px 12px;font-size:.78rem;cursor:pointer}
.section-doily-emerald{position:relative;padding:92px 20px;background-image:var(--bg-ayat-section);display:flex;justify-content:center;overflow:hidden}
.doily-scene{max-width:620px;width:100%;display:flex;flex-direction:column;align-items:center;position:relative;z-index:2}
.ar-rum-frame-new{position:relative;width:100%;max-width:520px;background:#fdf8ec;border-radius:38% 38% 42% 42% / 8% 8% 10% 10%;padding:18px;box-shadow:0 26px 54px rgba(0,0,0,.5),inset 0 0 0 2px #d9be8c;transform-style:preserve-3d;transition:transform .08s ease-out}
.ar-rum-frame-new::before{content:"";position:absolute;inset:7px;border:1px solid rgba(183,148,88,.55);border-radius:38% 38% 42% 42% / 9% 9% 11% 11%;pointer-events:none}
.frame-inner-dashed{position:relative;border:1.5px dashed #b79458;border-radius:36% 36% 40% 40% / 9% 9% 11% 11%;padding:48px 28px 38px;text-align:center;background:rgba(255,253,248,.9);overflow:hidden}
.frame-ornament-top,.frame-ornament-bottom{position:absolute;left:50%;transform:translateX(-50%);font-size:28px;color:#b89a5a;line-height:1;z-index:3;text-shadow:0 1px 2px rgba(255,255,255,.8)}
.frame-ornament-top{top:-2px}
.frame-ornament-bottom{bottom:-2px;transform:translateX(-50%) rotate(180deg)}
.frame-star{position:absolute;color:#c9a24b;font-size:12px;animation:starTwinkle 2.8s ease-in-out infinite}
.frame-star.s1{top:38px;left:34px}.frame-star.s2{top:38px;right:34px}.frame-star.s3{bottom:38px;left:30px}.frame-star.s4{bottom:38px;right:30px}.frame-star.s5{top:50%;left:16px}.frame-star.s6{top:50%;right:16px}
.frame-leaf{position:absolute;top:50%;font-size:34px;color:#c9a24b;opacity:.85;line-height:1}
.left-leaf{left:6px;transform:translateY(-50%)}.right-leaf{right:6px;transform:translateY(-50%) scaleX(-1)}
.ar-rum-pill{display:inline-block;padding:7px 16px;margin-bottom:16px;border-radius:999px;background:#470c17;border:1px solid rgba(217,190,140,.85);color:#fff6e0;font-size:.72rem;font-weight:700;letter-spacing:.18em}
.ayat-arab-new{font-family:var(--font-serif);font-size:clamp(1.35rem,3.4vw,1.75rem);line-height:1.9;margin-bottom:18px;padding:2px 6px;background:linear-gradient(112deg,#c89d54 0%,#fff9e3 36%,#ffffff 50%,#e5be78 64%,#b6893e 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite}
.ayat-quote-box{position:relative;padding:6px 10px;margin:0 auto 16px;max-width:94%}
.ayat-quote-box::before,.ayat-quote-box::after{content:"";position:absolute;top:0;bottom:0;width:2px;background:#9b763d;border-radius:99px}
.ayat-quote-box::before{left:0}.ayat-quote-box::after{right:0}
.ayat-text-new{font-family:var(--font-serif);font-style:italic;font-size:clamp(1.12rem,2.6vw,1.38rem);line-height:1.82;color:#2b211c}
.ayat-divider-new{display:flex;align-items:center;justify-content:center;gap:10px;color:#9b763d;margin-bottom:10px}
.ayat-divider-new .line{width:48px;height:1px;background:#b79458}
.ayat-divider-new i{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#fff9ec;border:1px solid rgba(183,148,88,.65);font-style:normal}
.ayat-sumber-new{font-size:.88rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#7c5d32}
.tassel-maroon{width:12px;height:44px;background:#550917;border-radius:0 0 8px 8px;margin-top:-2px}
.bottom-envelope-pocket{position:relative;width:100%;max-width:485px;min-height:102px;padding:18px 14px 14px;background:var(--bg-amplop-ayat);border:1.5px solid rgba(217,190,140,.85);border-radius:10px 10px 18px 18px;margin-top:-12px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.pocket-flap-accent{position:absolute;top:0;left:0;right:0;height:36px;background:rgba(255,250,240,.55);clip-path:polygon(0 0,100% 0,50% 100%);border-bottom:2px dotted #cfa96e}
.pocket-label{position:relative;z-index:2;margin-top:14px;font-size:.72rem;font-weight:600;letter-spacing:.14em;color:#7c5d32;text-align:center}
.section-maroon{padding:92px 20px;background-image:var(--bg-mempelai-section);color:#fffaf2;perspective:1200px}
.maroon-container{max-width:820px;margin:0 auto;text-align:center}
.bismillah-calligraphy{font-family:var(--font-serif);font-size:clamp(1.6rem,4vw,2.2rem);margin-bottom:18px;padding:2px 6px;background:linear-gradient(112deg,#d9be8c 0%,#fff9e6 36%,#ffffff 50%,#f0cf8e 64%,#cfa55b 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
.intro-note{font-family:var(--font-serif);font-size:clamp(1.08rem,2.4vw,1.3rem);line-height:1.75;color:#f5ebd8;margin-bottom:48px}
.profile-row{display:flex;align-items:center;justify-content:center;gap:36px;flex-wrap:wrap}
.oval-frame-wrap{position:relative;padding:14px;border-radius:999px;background:radial-gradient(circle at 50% 50%,rgba(245,226,186,.16) 0%,rgba(71,12,23,.12) 100%);border:1.5px solid rgba(217,190,140,.72);box-shadow:0 16px 34px rgba(0,0,0,.28);transform-style:preserve-3d;transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease}
.corner-ornament{position:absolute;color:var(--gold-bright);font-size:.95rem;text-shadow:0 0 8px rgba(245,226,186,.65);animation:starTwinkle 2.6s ease-in-out infinite}
.corner-ornament.tl{top:2px;left:6px}.corner-ornament.tr{top:2px;right:6px}.corner-ornament.bl{bottom:2px;left:6px}.corner-ornament.br{bottom:2px;right:6px}
.oval-photo{position:relative;width:196px;height:254px;border-radius:50%;overflow:hidden;border:3px solid #e2c285;box-shadow:0 0 0 5px rgba(217,190,140,.25),0 18px 36px rgba(0,0,0,.42);transform:translateZ(30px)}
.oval-photo::after{content:"";position:absolute;inset:6px;border-radius:50%;border:1px solid rgba(255,250,240,.55);pointer-events:none}
.oval-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
.profile-text{max-width:360px}.align-left{text-align:left}.align-right{text-align:right}
.name-script{font-family:var(--font-script);font-size:clamp(2.2rem,5vw,3.1rem);line-height:1.25;margin-bottom:8px;padding:0 4px;background:linear-gradient(112deg,#d9be8c 0%,#fff9e6 38%,#ffffff 50%,#f0cf8e 62%,#cfa55b 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite}
.parent-info{font-family:var(--font-serif);font-size:1.12rem;line-height:1.7;color:#f6ede0;white-space:pre-line}
.ampersand-maroon{font-family:var(--font-script);font-size:3rem;color:var(--gold-accent);margin:28px 0}
.section-save-date-green{position:relative;padding:84px 16px 92px;background-image:var(--bg-std-section);color:#f5f7f3;text-align:center}
.section-save-date-green>*:not(.sparkle-field){position:relative;z-index:2}
.std-block{max-width:560px;margin:0 auto;overflow:visible}
.std-script-title{font-family:var(--font-script);font-weight:400;margin-bottom:18px;padding:14px 18px 8px;overflow:visible;background:linear-gradient(112deg,#f3e4c3 0%,#fffdf7 35%,#ffffff 50%,#e6c484 65%,#f3e4c3 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
.std-line-main{display:inline-block;font-size:clamp(3.1rem,8.5vw,4.6rem);line-height:1.35;padding:4px 10px}
.std-line-sub{display:block;font-size:clamp(1.45rem,3.8vw,2.05rem);line-height:1.25;margin:2px 0}
.std-month{font-size:.95rem;font-weight:500;letter-spacing:.24em;text-transform:uppercase;margin-bottom:16px}
.std-date-split{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:10px;max-width:520px;margin:0 auto 14px}
.std-side-item{min-width:0;padding:10px 6px;border-top:1px solid rgba(255,255,255,.72);border-bottom:1px solid rgba(255,255,255,.72)}
.std-side-script{display:block;font-family:var(--font-script);font-size:clamp(1.55rem,4.8vw,1.95rem);line-height:1.25}
.std-side-item small{display:block;font-size:clamp(.68rem,2.1vw,.78rem);line-height:1.35;color:#e6ede5;white-space:nowrap}
.std-day-number{font-family:var(--font-serif);font-size:clamp(2.4rem,7vw,3.5rem);font-weight:600;line-height:1.1;padding:0 6px}
.std-year{font-size:.98rem;letter-spacing:.2em;margin-bottom:8px}
.std-time-summary{font-size:.9rem;color:#e6ede5;margin-bottom:14px}
.toward-happy-text{font-family:var(--font-serif);font-style:italic;font-size:clamp(1.2rem,3vw,1.5rem);color:#fff6dc;margin-bottom:18px}
.countdown{display:grid;grid-template-columns:repeat(4,minmax(0,86px));justify-content:center;gap:10px;margin:0 auto 24px}
.countdown>div{background:rgba(255,250,235,.12);border:1px solid rgba(245,226,186,.44);border-radius:14px;padding:13px 6px 11px;display:flex;flex-direction:column;align-items:center}
.countdown span{font-family:var(--font-serif);font-size:clamp(1.55rem,4.5vw,2.05rem);font-weight:600;color:#fff;line-height:1.2}
.countdown small{font-size:.72rem;letter-spacing:.08em;color:#ece6d8}
.btn-calendar-outline{display:inline-flex;align-items:center;gap:8px;margin-bottom:26px;padding:10px 20px;border-radius:999px;background:rgba(255,250,235,.12);border:1px solid rgba(245,226,186,.55);color:#fff8e6;font-size:.8rem;font-weight:600;cursor:pointer}
.gedung-yayasan{margin:18px auto 0;text-align:center}
.building-new-wrap{width:100%;max-width:400px;margin:0 auto;position:relative}
.building-new{position:relative;display:flex;align-items:flex-end;justify-content:center;filter:drop-shadow(0 10px 12px rgba(0,0,0,.35))}
.wing{width:108px;height:88px;background:linear-gradient(180deg,#f7fbf7,#dde7dd);position:relative;box-shadow:inset -8px 0 14px rgba(0,0,0,.12)}
.wing-roof{position:absolute;top:-20px;left:-6px;right:-6px;height:24px;background:#eef4ee;clip-path:polygon(50% 0,100% 100%,0 100%)}
.center-new{width:132px;height:106px;background:linear-gradient(180deg,#fdfefc,#e6eee6);position:relative;z-index:2;box-shadow:inset -10px 0 16px rgba(0,0,0,.13)}
.center-roof{position:absolute;top:-18px;left:-8px;right:-8px;height:20px;background:#f2f7f2;clip-path:polygon(0 100%,25% 0,50% 100%,75% 0,100% 100%)}
.center-ornament{position:absolute;top:6px;left:50%;transform:translateX(-50%);width:22px;height:12px;background:#5a6a5a;border-radius:50%}
.yayasan-on-building{position:absolute;top:22px;left:50%;transform:translateX(-50%);width:104px;background:linear-gradient(180deg,#fffdf0,#f5e6b8);border:1px solid #c9a24b;border-radius:6px;padding:4px 2px;font-family:'Playfair Display',serif;font-size:11px;line-height:1.15;font-weight:700;color:#3a5a2e;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,.25);z-index:5}
.win{position:absolute;width:14px;height:16px;background:linear-gradient(180deg,#4a6a5a,#2e4a3a);border-radius:2px}
.wing .w1{top:16px;left:10px}.wing .w2{top:16px;left:38px}.wing .w3{top:16px;right:10px}.wing .w4{bottom:16px;left:10px}.wing .w5{bottom:16px;left:38px}.wing .w6{bottom:16px;right:10px}
.center-new .c1{top:56px;left:12px}.center-new .c2{top:56px;right:12px}.center-new .c3{bottom:30px;left:12px}.center-new .c4{bottom:30px;right:12px}
.wing-door{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:28px;background:#3a5a2e;border-radius:6px 6px 0 0}
.center-door{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:28px;height:36px;background:linear-gradient(180deg,#5a7a68,#2e4a3a);border-radius:8px 8px 0 0;border:2px solid #c9a24b;border-bottom:none}
.tree{position:absolute;bottom:0;width:18px;height:58px;background:linear-gradient(180deg,#fff,#d5e5d5);border-radius:50% 50% 0 0;box-shadow:0 0 0 1px rgba(255,255,255,.4);z-index:3}
.tree:before{content:"";position:absolute;top:8px;left:50%;transform:translateX(-50%);width:6px;height:36px;background:#8aa08a;border-radius:99px;opacity:.4}
.t-left{left:-4px}.t-right{right:-4px}.t-center-left{left:102px}.t-center-right{right:102px}
.fountain-pond{position:relative;width:250px;height:58px;margin:-2px auto 0}
.pond{position:absolute;bottom:0;left:0;right:0;height:26px;background:radial-gradient(ellipse at center,#fff 0%,#eef4ee 65%,#d8e5d8 100%);border-radius:50%;box-shadow:0 4px 10px rgba(0,0,0,.25)}
.fountain-new{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);width:90px;height:46px}
.f-jet{position:absolute;bottom:8px;left:50%;width:3px;background:linear-gradient(180deg,#fff,#a8d8ff);border-radius:99px;transform-origin:bottom center;animation:jet 1s ease-in-out infinite}
.f-jet.f1{height:34px;transform:translateX(-50%)}.f-jet.f2{height:26px;transform:translateX(-50%) rotate(-24deg);animation-delay:.15s}.f-jet.f3{height:26px;transform:translateX(-50%) rotate(24deg);animation-delay:.3s}.f-jet.f4{height:18px;transform:translateX(-50%) rotate(-40deg);animation-delay:.45s}.f-jet.f5{height:18px;transform:translateX(-50%) rotate(40deg);animation-delay:.6s}
.f-base{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:44px;height:10px;background:#fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.2)}
@keyframes jet{0%,100%{opacity:.6;transform:scaleY(.85)}50%{opacity:1;transform:scaleY(1.08)}}
.green-divider{border:none;border-top:1px solid rgba(255,255,255,.22);max-width:420px;margin:44px auto}
.detail-session-block{max-width:460px;margin:0 auto}
.detail-script-heading{font-family:var(--font-script);font-size:clamp(2.4rem,6.5vw,3.1rem);line-height:1.25;padding:2px 6px;margin-bottom:10px;background:linear-gradient(112deg,#f3e4c3 0%,#fffdf7 36%,#ffffff 50%,#e6c484 64%,#f3e4c3 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
.detail-date-line{font-size:.96rem;font-weight:500;margin-bottom:4px}
.detail-time-line{font-size:.92rem;color:#e2ebe1;margin-bottom:22px}
.detail-venue-name{font-size:.92rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
.detail-address-line{font-size:.88rem;line-height:1.7;color:#e6ede5;white-space:pre-line}
.btn-maroon-pill{display:inline-block;margin-top:22px;padding:11px 26px;border-radius:6px;background:var(--maroon-velvet);border:1px solid rgba(255,255,255,.24);color:#fffaf0;text-decoration:none;font-size:.85rem;font-weight:600}
.section-gift-maroon{padding:82px 20px 88px;background-image:var(--bg-gift-section);color:#fff8f2;text-align:center}
.gift-maroon-inner{max-width:460px;margin:0 auto}
.gift-script-heading{font-family:var(--font-script);font-size:clamp(2.8rem,8vw,3.8rem);line-height:1.25;padding:2px 8px;margin-bottom:16px;background:linear-gradient(112deg,#f3e4c3 0%,#fffdf7 36%,#ffffff 50%,#e6c484 64%,#f3e4c3 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
.gift-wrap-decor{max-width:112px;margin:0 auto 20px;animation:floatGentle 3.3s ease-in-out infinite}
.gift-wrap-decor svg{width:100%;height:auto;display:block}
.gift-maroon-text{font-family:var(--font-serif);font-size:1.15rem;line-height:1.65;color:#f8efe8;margin-bottom:18px}
.rek-maroon-item{margin:26px 0 30px}
.rek-maroon-num{font-family:var(--font-serif);font-size:1.45rem;font-weight:600;letter-spacing:.08em;color:#fff;margin-bottom:4px;overflow-wrap:anywhere}
.rek-maroon-bank,.rek-maroon-holder{font-family:var(--font-serif);font-size:1.15rem;color:#f4e6dc}
.rek-maroon-holder{margin-bottom:14px}
.btn-olive-copy{background:var(--olive-btn);color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:5px;padding:8px 22px;font-size:.84rem;font-weight:600;cursor:pointer}
.btn-olive-copy.copied{background:#2a7a4b}
.gift-closing-note{margin-top:28px}
.physical-gift-box{background:linear-gradient(165deg,rgba(255,250,240,.14),rgba(26,4,9,.34));border:1px solid rgba(217,190,140,.48);border-radius:16px;padding:18px 20px;text-align:left;display:flex;flex-direction:column;transform-style:preserve-3d;transition:transform .08s ease-out}
.physical-line{display:grid;grid-template-columns:118px minmax(0,1fr);column-gap:12px;padding:10px 0;border-bottom:1px dashed rgba(217,190,140,.22);font-size:.88rem;color:#f8efe8}
.physical-line:last-child{border-bottom:none}
.physical-line strong{color:var(--gold-bright);font-size:.76rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
.physical-line span{overflow-wrap:anywhere;color:#fffaf4}
.physical-line:first-child span{font-family:var(--font-serif);font-size:1.12rem;font-weight:600;color:#fff}
.wa-contact-stack{display:flex;flex-direction:column;gap:6px}
.wa-contact-row{display:flex;flex-wrap:wrap;gap:6px}
.wa-contact-num{font-weight:600;color:#fff6e0}
.wa-contact-owner{font-size:.82rem;color:#e7d7b8}
.wa-actions-group{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:14px}
.btn-wa-gift{display:inline-flex;align-items:center;justify-content:center;padding:10px 12px;border-radius:10px;background:#1d5237;border:1px solid rgba(217,190,140,.5);color:#fff;text-decoration:none;font-size:.78rem;font-weight:600;text-align:center}
.section-love-story-green{padding:90px 20px;background-image:var(--bg-story-section);color:#f4f7f2;perspective:1200px}
.love-story-inner{max-width:580px;margin:0 auto;text-align:center}
.polaroid-duo-wrap{position:relative;display:flex;justify-content:center;min-height:262px;margin-bottom:28px;transition:transform .08s ease-out}
.polaroid-card{width:170px;background:#fffdf8;padding:10px 10px 26px;border-radius:6px;border:2px solid #cfa96e;box-shadow:0 0 0 4px rgba(217,190,140,.22),0 18px 34px rgba(0,0,0,.36);transform-style:preserve-3d;transition:transform .65s cubic-bezier(.16,1,.3,1),box-shadow .45s ease}
.polaroid-card img{width:100%;height:166px;object-fit:cover;object-position:center top;display:block;border:1px solid rgba(183,148,88,.45)}
.polaroid-left{transform:rotate(-5deg) translateX(10px) translateZ(10px)}
.polaroid-right{position:relative;transform:rotate(5deg) translateX(-10px) translateY(10px) translateZ(25px)}
.polaroid-duo-wrap:hover .polaroid-left{transform:rotate(-2deg) translateX(6px)}
.polaroid-duo-wrap:hover .polaroid-right{transform:rotate(2deg) translateX(-6px) translateY(6px)}
.polaroid-corner-tag{position:absolute;right:8px;bottom:6px;font-size:.65rem;font-weight:600;letter-spacing:.12em;color:#7c5d32}
.polaroid-wax-badge{position:absolute;bottom:6px;left:50%;transform:translateX(-50%);width:36px;height:36px;border-radius:50%;background:#680b1d;border:1.5px solid #e6c88c;color:#fae2ae;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 6px 14px rgba(0,0,0,.35);z-index:3}
.love-story-heading{font-family:var(--font-script);font-size:clamp(2.7rem,7.5vw,3.6rem);line-height:1.25;padding:2px 8px;margin-bottom:32px;background:linear-gradient(112deg,#f3e4c3 0%,#fffdf7 36%,#ffffff 50%,#e6c484 64%,#f3e4c3 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
.story-timeline{text-align:left;padding-left:28px;border-left:1px dashed rgba(217,190,140,.45);margin-left:10px}
.story-step{position:relative;margin-bottom:30px}
.story-step-last{margin-bottom:0}
.story-marker{position:absolute;left:-35px;top:6px;width:14px;height:14px;border-radius:50%;background:var(--gold-accent);display:inline-flex;align-items:center;justify-content:center;font-size:.62rem;color:#470c17}
.story-step-title{font-family:var(--font-serif);font-size:1.45rem;font-weight:600;color:var(--gold-bright);margin-bottom:6px}
.story-step-text{font-family:var(--font-serif);font-size:1.08rem;line-height:1.75;color:#eef3eb}
.section-gallery-classic{padding:90px 20px;background-image:var(--bg-galeri-section);text-align:center;perspective:1200px}
.gallery-classic-inner{max-width:920px;margin:0 auto}
.gallery-classic-title{font-family:var(--font-script);font-size:clamp(2.7rem,7.5vw,3.6rem);line-height:1.25;padding:2px 8px;margin-bottom:6px;background:linear-gradient(112deg,var(--maroon-velvet) 0%,#8f5b22 36%,#e8ca8e 50%,#7a1829 64%,var(--maroon-velvet) 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11.5s cubic-bezier(.37,0,.63,1) infinite}
.gallery-classic-sub{font-family:var(--font-serif);font-style:italic;font-size:1.15rem;color:var(--text-muted);margin-bottom:36px}
.gallery-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.gallery-frame{position:relative;background:#fffdf8;padding:11px;border-radius:10px;border:2px solid #cfa96e;box-shadow:0 0 0 4px rgba(183,148,88,.18),0 14px 28px rgba(0,0,0,.18);cursor:zoom-in;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.16,1,.3,1),box-shadow .45s ease,opacity 1.05s cubic-bezier(.16,1,.3,1)}
.gallery-frame::before{content:"✦";position:absolute;top:4px;right:8px;font-size:.72rem;color:#9b763d;z-index:2;pointer-events:none}
.gallery-frame:hover{transform:translateY(-6px);box-shadow:0 0 0 4px rgba(183,148,88,.3),0 22px 38px rgba(0,0,0,.24)}
.gallery-frame img{width:100%;height:270px;object-fit:cover;object-position:center top;border-radius:8px;border:1px solid rgba(183,148,88,.45);display:block}
.photo-lightbox{position:fixed;inset:0;z-index:80;background:rgba(10,8,7,.86);display:none;align-items:center;justify-content:center;padding:20px}
.photo-lightbox.is-open{display:flex}
.photo-lightbox-content{position:relative;max-width:640px;width:100%;background:#fffdf8;padding:12px;border-radius:14px;border:1.5px solid var(--gold-accent)}
.photo-lightbox-content img{width:100%;max-height:75dvh;object-fit:contain;border-radius:8px;display:block}
.photo-lightbox-close{position:absolute;top:-14px;right:-14px;width:36px;height:36px;border-radius:50%;border:1px solid var(--gold-accent);background:var(--maroon-velvet);color:#fffaf0;font-size:1.1rem;cursor:pointer}
.section-closing-envelope{position:relative;padding:90px 20px;background-image:var(--bg-penutup-section);color:#fffaf0;text-align:center;perspective:1200px;overflow:hidden}
.closing-scene{max-width:560px;margin:0 auto;display:flex;flex-direction:column;align-items:center;position:relative;z-index:2}
.closing-card-frame{width:100%;background:linear-gradient(180deg,#fffdf8,#f3e6cc);color:var(--text-dark);border-radius:20px;padding:40px 26px 36px;border:2px solid rgba(217,190,140,.9);transform-style:preserve-3d;transition:transform .08s ease-out}
.closing-crest{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#470c17;color:var(--gold-bright);border:1px solid rgba(217,190,140,.85);margin-bottom:14px}
.closing-message{font-family:var(--font-serif);font-size:1.15rem;line-height:1.75;color:#2b211c;margin-bottom:14px}
.closing-until-meet{font-family:var(--font-serif);font-style:italic;font-size:1.12rem;color:#7c5d32;margin-bottom:14px}
.closing-couple-names{font-family:var(--font-script);font-size:clamp(2.4rem,7vw,3.3rem);display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:nowrap;white-space:nowrap;background:linear-gradient(112deg,var(--maroon-velvet) 0%,#8f5b22 36%,#e8ca8e 50%,#7a1829 64%,var(--maroon-velvet) 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite}
.closing-amp{font-size:.82em;color:#9b763d}
.closing-tassel{width:12px;height:38px;background:#550917;border-radius:0 0 8px 8px;margin-top:-2px}
.closing-envelope-base{position:relative;width:100%;max-width:470px;min-height:96px;padding:16px 14px 12px;background:var(--bg-amplop-penutup);border:1.5px solid rgba(217,190,140,.85);border-radius:10px 10px 18px 18px;margin-top:-10px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.closing-envelope-flap{position:absolute;top:0;left:0;right:0;height:34px;background:rgba(255,250,240,.55);clip-path:polygon(0 0,100% 0,50% 100%);border-bottom:2px dotted #cfa96e}
.closing-pocket-tag{position:relative;z-index:2;margin-top:14px;font-size:.74rem;font-weight:600;letter-spacing:.24em;color:#7c5d32}
.section-rsvp-last{padding:90px 20px;background-image:var(--bg-ucapan-section)}
.rsvp-last-container{max-width:580px;margin:0 auto;text-align:center}
.rsvp-last-title{font-family:var(--font-script);font-size:clamp(2.5rem,7vw,3.4rem);line-height:1.28;padding:4px 10px;margin-bottom:6px;background:linear-gradient(112deg,#3d0913 0%,#470c17 34%,#9e6c2b 46%,#f3dfb4 50%,#9e6c2b 54%,#470c17 66%,#3d0913 100%);background-size:320% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11.5s cubic-bezier(.37,0,.63,1) infinite;filter:drop-shadow(0 1px 6px rgba(183,148,88,.18))}
.rsvp-last-subtitle{font-family:var(--font-serif);font-size:1.1rem;color:var(--text-muted);margin-bottom:28px}
.rsvp-card-form{background:#fffdf9;border:1px solid rgba(183,148,88,.55);border-radius:14px;padding:22px;display:flex;flex-direction:column;gap:14px;text-align:left;transform-style:preserve-3d;transition:transform .4s ease}
.rsvp-card-form input,.rsvp-card-form select,.rsvp-card-form textarea{width:100%;padding:11px 14px;border-radius:8px;border:1px solid rgba(155,118,61,.42);background:#fcf9f3;font-family:var(--font-sans);font-size:.9rem;color:var(--text-dark)}
.btn-rsvp-tan{background:#5e4421;color:#fffaf0;border:none;border-radius:8px;padding:12px 20px;font-size:.9rem;font-weight:600;cursor:pointer}
.ucapan-list{margin-top:26px;display:flex;flex-direction:column;gap:12px;text-align:left}
.ucapan-item{background:#fffdf9;border:1px solid rgba(183,148,88,.42);border-radius:12px;padding:14px 16px}
.ucapan-item strong{font-size:.95rem;margin-right:8px}
.ucapan-status{display:inline-block;font-size:.72rem;font-weight:600;padding:3px 9px;border-radius:999px;background:rgba(71,12,23,.1);color:var(--maroon-velvet)}
.ucapan-item p{margin-top:6px;font-size:.9rem;color:var(--text-dark)}
footer{padding:48px 16px 82px;background-image:var(--bg-footer-section);color:#f8efe8;text-align:center;border-top:1px solid rgba(217,190,140,.35)}
footer p{max-width:520px;margin:0 auto 16px;font-family:var(--font-serif);font-size:1.05rem;line-height:1.7;color:#f3e6d3}
footer h3{font-family:var(--font-serif);font-size:clamp(1.22rem,4.6vw,1.85rem);font-weight:600;letter-spacing:.18em;text-transform:uppercase;line-height:1.35;white-space:nowrap;max-width:100%;padding:4px 6px;background:linear-gradient(112deg,#d9be8c 0%,#fff9e6 36%,#ffffff 50%,#f0cf8e 64%,#cfa55b 100%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:smoothShimmer 11s cubic-bezier(.37,0,.63,1) infinite, softAuraGlow 5s ease-in-out infinite}
@media (max-width:768px){
  .gallery-grid{grid-template-columns:1fr;max-width:360px;margin:0 auto}
  .gallery-frame img{height:240px}
  .align-left,.align-right{text-align:center}
  .physical-line{grid-template-columns:1fr;gap:4px}
  .closing-couple-names{font-size:clamp(2.1rem,8.5vw,2.8rem);gap:6px}
  .music-btn{bottom:12px;right:12px;padding:7px 11px;font-size:.74rem}
  .section-save-date-green,.section-gift-maroon,.section-love-story-green,.section-gallery-classic,.section-closing-envelope,.section-rsvp-last{padding-bottom:96px}
  .frame-inner-dashed{padding:42px 18px 32px}
  .ayat-arab-new{font-size:1.25rem}
}
@media (prefers-reduced-motion:reduce){
  .text-rise,.video-reveal,.reveal-up,.reveal-left,.reveal-right,.reveal-zoom,.reveal-blur{opacity:1 !important;transform:none !important;filter:none !important;transition:none !important}
  .couple-script,.ayat-arab-new,.bismillah-calligraphy,.name-script,.std-script-title,.detail-script-heading,.gift-script-heading,.love-story-heading,.gallery-classic-title,.closing-couple-names,.rsvp-last-title,footer h3{animation:none;background:none;color:var(--gold-bright);filter:none}
  .bird,.b-wing{animation:none !important}
}
