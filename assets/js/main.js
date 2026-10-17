/* Executive Spotlight — Financial Alliance for Women */
(function () {
'use strict';

var PEOPLE = [
  {
    "name": "Steven Puig",
    "role": "President",
    "org": "Banco BHD",
    "photo": "assets/images/headshot-steven.jpg",
    "bioTitle": "Executive President and CEO, Banco BHD, Dominican Republic",
    "bio": [
      "Steven Puig is President and General Manager of Banco BHD. Steven started his banking career in Santo Domingo with Chase Manhattan Bank, having previously worked in Puerto Rico and New York.",
      "He was Vice President of Corporate Banking at Citibank in Santo Domingo, as well as General Manager in El Salvador and in Colombia. After that, he was Private Sector Vice President at the Inter-American Development Bank.",
      "Steven received his Bachelor’s degree in Foreign Service from Georgetown University and his MIS in International Business Management from Thunderbird School of Global Management."
    ],
    "video": "videos/1-ExecSpotlight-Steven.mp4",
    "q": [
      14,
      85
    ],
    "thumb": "assets/images/thumb-1.jpg"
  },
  {
    "name": "Rachel Freeman",
    "role": "Chief Growth Officer",
    "org": "Tyme",
    "photo": "assets/images/headshot-rachel.jpg",
    "bioTitle": "Executive Director and Chief Growth Officer, TymeBank, GoTyme",
    "bio": [
      "Rachel Freeman is the Chief Growth Officer of Tyme and represents Tyme on the Board of Directors of GoTyme Bank and Tribe Fintech. She is an experienced and internationally recognized financial expert, particularly in the areas of financial inclusion and innovative financial technologies.",
      "From 2001 to 2017, she held several senior positions at IFC in Central Asia, Africa and Asia. Prior to joining IFC, Rachel was involved in several entrepreneurial ventures in the US and Russia.",
      "Tyme is a multi-country digital banking group with TymeBank, Africa’s first profitable digital bank, and GoTyme Bank, a licensed bank in the Philippines with 2.5 million customers since launch in October 2022. Tribe, a partner company to Tyme, provides underserved SMEs all over the world with simple business tools and networks to help them make better business decisions and improve their financial health.",
      "Rachel Freeman also serves on the Board of Directors of Pave Bank, a digital bank recently licensed in the Republic of Georgia."
    ],
    "video": "videos/2-ExecSpotlight-Rachel.mp4",
    "q": [
      14,
      80.7
    ],
    "thumb": "assets/images/thumb-2.jpg"
  },
  {
    "name": "Mashrur Arefin",
    "role": "Managing Director & CEO",
    "org": "City Bank PLC",
    "photo": "assets/images/headshot-mashrur.jpg",
    "video": "videos/3-ExecSpotlight-Mashrur.mp4",
    "q": [
      14,
      110.1
    ],
    "thumb": "assets/images/thumb-3.jpg"
  },
  {
    "name": "Soha El-Turky",
    "role": "Deputy CEO",
    "org": "National Bank of Egypt (NBE)",
    "photo": "assets/images/headshot-soha.jpg",
    "video": "videos/4-ExecSpotlight-Soha.mp4",
    "q": [
      14,
      109
    ],
    "thumb": "assets/images/thumb-4.jpg"
  },
  {
    "name": "Nadim Adel Kassar",
    "role": "Delegated Board Member",
    "org": "BLC Bank",
    "photo": "assets/images/headshot-nadim.jpg",
    "bioTitle": "Delegated Board Member, BLC Bank, Lebanon",
    "bio": [
      "Mr. Nadim Adel Kassar is the Chairman General Manager of Fransabank SAL. He is also Chairman and General Manager of BLC Bank SAL and the Founder and Chairman of Fransabank El Djazaïr SPA.",
      "Since 2019, he has been Vice-Chairman of the Association of Banks in Lebanon, and he has been nominated Co-Chairman of the Mastercard EEMEA (Eastern Europe, Middle East and Africa) Advisory Board.",
      "Mr. Kassar currently serves as a member of the Board of Directors of several banking subsidiaries and financial institutions."
    ],
    "video": "videos/5-ExecSpotlight-Nadim.mp4",
    "q": [
      14,
      86.5
    ],
    "thumb": "assets/images/thumb-5.jpg"
  },
  {
    "name": "Syed Abdul Momen",
    "role": "Additional Managing Director & Head of SME Banking",
    "org": "BRAC Bank PLC",
    "photo": "assets/images/headshot-momen.jpg",
    "bioTitle": "AMD and Head of SME, BRAC Bank PLC, Bangladesh",
    "bio": [
      "Syed Abdul Momen is Additional Managing Director of BRAC Bank PLC, with over 25 years of experience across technology transformation, operations and business leadership, specializing in SME banking and financial inclusion.",
      "Since joining BRAC Bank in 2005, he has helped build Bangladesh’s largest SME banking franchise, leading national expansion, digital transformation and innovation-led inclusion initiatives for entrepreneurs, women-led businesses and CMSMEs. Earlier, as COO of BRAC Afghanistan Bank, he built SME operations from the ground up; before that, he led technology transformation projects at ANZ Grindlays and Standard Chartered.",
      "He holds a Master of Development Studies from BRAC University, is a graduate of UC Berkeley Haas’s CEO Program, and serves on the Governing Board of the SME Finance Forum (IFC/World Bank Group)."
    ],
    "video": "videos/6-ExecSpotlight-Momen.mp4",
    "q": [
      14,
      81.05
    ],
    "thumb": "assets/images/thumb-6.jpg"
  }
];
var QS = ["What is the strategic business case for serving the Female Economy?", "Why is your institution a member of the Alliance, and what impact has it had?"];

var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var fmt = function (s) { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
var root = document.documentElement;
var lastFocus = null;

function lockScroll(on) { document.body.style.overflow = on ? 'hidden' : ''; }

/* ---------- Nav: scrolled state, active section, burger ---------- */
var nav = $('.es-nav');
function onScroll() {
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
  var sec = '';
  ['videos', 'quotes'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 140) sec = id;
  });
  $$('.nav-link[data-sec]').forEach(function (a) { a.classList.toggle('is-active', a.dataset.sec === sec); });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

var burger = $('.fa-burger');
burger.addEventListener('click', function () {
  var open = root.getAttribute('data-nav-open') !== '1';
  root.setAttribute('data-nav-open', open ? '1' : '0');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
$$('.fa-nav-links a, .fa-nav-links button').forEach(function (el) {
  el.addEventListener('click', function () { root.setAttribute('data-nav-open', '0'); burger.setAttribute('aria-expanded', 'false'); });
});

/* ---------- Scroll reveals ---------- */
var revealEls = $$('[data-reveal]');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(function (el) { io.observe(el); });
}
setTimeout(function () { revealEls.forEach(function (el) { el.classList.add('is-in'); }); }, 4000);

/* ---------- Video player modal ---------- */
var modal = $('#player');
var video = $('#player-video');
var idx = -1;
var vol = 1, muted = false;

function setPlayIcon(playing) {
  $('#p-ico-pause').hidden = !playing;
  $('#p-ico-play').hidden = playing;
  $('#p-toggle').setAttribute('aria-label', playing ? 'Pause' : 'Play');
}
function updateTime() {
  var t = video.currentTime || 0, d = video.duration || 0;
  $('#p-cur').textContent = fmt(t);
  $('#p-dur').textContent = fmt(d);
  $('#p-progress').style.width = (d ? (t / d) * 100 : 0) + '%';
  $('#p-seek').value = d ? Math.round((t / d) * 1000) : 0;
  var p = PEOPLE[idx]; if (!p) return;
  var cur = t >= p.q[1] - 0.3 ? 1 : 0;
  $$('#p-chaps button').forEach(function (b, i) {
    b.style.background = cur === i ? '#fff' : 'rgba(120,120,128,0.32)';
    b.style.color = cur === i ? '#1D1D1F' : '#fff';
  });
}
function updateVol() {
  var eff = muted ? 0 : vol;
  $('#p-ico-muted').hidden = eff !== 0;
  $('#p-ico-audible').hidden = eff === 0;
  $('#p-mute').setAttribute('aria-label', eff === 0 ? 'Unmute' : 'Mute');
  $('#p-volbar').style.width = eff * 100 + '%';
  $('#p-vol').value = Math.round(eff * 100);
}
function renderMarks() {
  var box = $('#p-marks'); box.innerHTML = '';
  var p = PEOPLE[idx], d = video.duration;
  if (!p || !d) return;
  p.q.forEach(function (s) {
    var m = document.createElement('span');
    m.style.cssText = 'position:absolute;left:' + (s / d) * 100 + '%;top:50%;width:2px;height:8px;margin:-4px 0 0 -1px;border-radius:1px;background:#00DB7E;pointer-events:none';
    box.appendChild(m);
  });
}
function open(i) {
  if (idx < 0) lastFocus = document.activeElement;
  idx = (i + PEOPLE.length) % PEOPLE.length;
  var p = PEOPLE[idx];
  $('#p-name').textContent = p.name;
  $('#p-role').textContent = p.role + ' · ' + p.org;
  $('#p-pos').textContent = (idx + 1) + ' of ' + PEOPLE.length;
  $('#p-marks').innerHTML = '';
  video.src = p.video;
  video.volume = vol; video.muted = muted;
  modal.hidden = false;
  lockScroll(true);
  modal.focus({ preventScroll: true });
  setPlayIcon(false); updateTime(); updateVol();
  var pr = video.play(); if (pr && pr.catch) pr.catch(function () {});
}
function close() {
  video.pause(); video.removeAttribute('src'); video.load();
  modal.hidden = true; idx = -1; lockScroll(false);
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function toggle() { if (video.paused) { var pr = video.play(); if (pr && pr.catch) pr.catch(function () {}); } else video.pause(); }
function seekTo(s) { video.currentTime = s; var pr = video.play(); if (pr && pr.catch) pr.catch(function () {}); }

// Chapter buttons
var chaps = $('#p-chaps');
QS.forEach(function (q, i) {
  var b = document.createElement('button');
  b.type = 'button'; b.className = 'bare';
  b.style.cssText = 'display:flex;align-items:center;gap:10px;max-width:100%;padding:9px 16px 9px 10px;border-radius:999px;background:rgba(120,120,128,0.32);color:#fff;font-size:13px;font-weight:500;line-height:1.3;transition:background .2s,color .2s';
  b.innerHTML = '<span style="flex:0 0 auto;padding:3px 8px;border-radius:999px;background:#00DB7E;color:#0D3B2E;font-size:11px;font-weight:700">Q' + (i + 1) + '</span><span style="min-width:0"></span>';
  b.lastChild.textContent = q;
  b.addEventListener('click', function () { var p = PEOPLE[idx]; if (p) seekTo(p.q[i]); });
  chaps.appendChild(b);
});

video.addEventListener('play', function () { setPlayIcon(true); });
video.addEventListener('pause', function () { setPlayIcon(false); });
video.addEventListener('ended', function () { setPlayIcon(false); });
video.addEventListener('timeupdate', updateTime);
video.addEventListener('loadedmetadata', function () { updateTime(); renderMarks(); });
video.addEventListener('click', toggle);
$('#p-toggle').addEventListener('click', toggle);
$('#p-stop').addEventListener('click', function () { video.pause(); video.currentTime = 0; updateTime(); });
$('#p-prev').addEventListener('click', function () { video.pause(); open(idx - 1); });
$('#p-next').addEventListener('click', function () { video.pause(); open(idx + 1); });
$('#p-close').addEventListener('click', close);
$('#p-seek').addEventListener('input', function (e) { var d = video.duration; if (d) video.currentTime = (+e.target.value / 1000) * d; });
$('#p-mute').addEventListener('click', function () {
  var m = !(muted || vol === 0); var nv = vol === 0 ? 0.6 : vol;
  muted = m; vol = nv; video.muted = m; video.volume = nv; updateVol();
});
$('#p-vol').addEventListener('input', function (e) {
  vol = +e.target.value / 100; muted = vol === 0; video.volume = vol; video.muted = muted; updateVol();
});
modal.addEventListener('click', function (e) { if (e.target === modal) close(); });

/* ---------- About modal ---------- */
var about = $('#about');
function openAbout() { lastFocus = document.activeElement; about.hidden = false; lockScroll(true); about.focus({ preventScroll: true }); }
function closeAbout() { about.hidden = true; lockScroll(false); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
$$('[data-open-about]').forEach(function (b) { b.addEventListener('click', openAbout); });
$('#about-close').addEventListener('click', closeAbout);
about.addEventListener('click', function (e) { if (e.target === about) closeAbout(); });
$('#about-watch').addEventListener('click', function () {
  closeAbout();
  var el = document.getElementById('videos');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
});

/* ---------- Bio modal ---------- */
var bio = $('#bio');
var bioIdx = -1;
function openBio(i) {
  lastFocus = document.activeElement; bioIdx = i;
  var p = PEOPLE[i];
  $('#bio-photo').src = p.photo; $('#bio-photo').alt = p.name;
  $('#bio-name').textContent = p.name;
  $('#bio-title').textContent = p.bioTitle || '';
  var box = $('#bio-paras'); box.innerHTML = '';
  (p.bio || []).forEach(function (t) {
    var el = document.createElement('p');
    el.style.cssText = 'margin:0;font-size:15.5px;line-height:1.6;color:#2A493A;text-wrap:pretty';
    el.textContent = t; box.appendChild(el);
  });
  bio.hidden = false; lockScroll(true); bio.focus({ preventScroll: true });
}
function closeBio() { bio.hidden = true; bioIdx = -1; lockScroll(false); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
$('#bio-close').addEventListener('click', closeBio);
bio.addEventListener('click', function (e) { if (e.target === bio) closeBio(); });
$('#bio-watch').addEventListener('click', function () { var i = bioIdx; closeBio(); open(i); });

/* ---------- Triggers ---------- */
$$('[data-open-video]').forEach(function (b) { b.addEventListener('click', function () { open(+b.dataset.openVideo); }); });
$$('[data-open-bio]').forEach(function (b) { b.addEventListener('click', function () { openBio(+b.dataset.openBio); }); });

/* ---------- Keyboard ---------- */
document.addEventListener('keydown', function (e) {
  if (!about.hidden && e.key === 'Escape') { closeAbout(); return; }
  if (!bio.hidden && e.key === 'Escape') { closeBio(); return; }
  if (idx < 0) return;
  var tag = e.target.tagName;
  if (e.key === 'Escape') close();
  else if (e.key === ' ' && tag !== 'INPUT' && tag !== 'BUTTON') { e.preventDefault(); toggle(); }
  else if (e.key === 'ArrowRight' && tag !== 'INPUT') { video.pause(); open(idx + 1); }
  else if (e.key === 'ArrowLeft' && tag !== 'INPUT') { video.pause(); open(idx - 1); }
});
document.addEventListener('visibilitychange', function () { if (document.hidden && idx >= 0) video.pause(); });
})();

/* ---------- Floating Liquid Glass tab bar (mobile) ---------- */
(function () {
  var bar = document.querySelector('.es-tabbar-glass');
  if (!bar) return;
  var pill = bar.querySelector('.es-tab-pill');
  var tabs = Array.prototype.slice.call(bar.querySelectorAll('.es-tab'));
  var aboutEl = document.getElementById('about');
  function update() {
    var sec = '';
    ['videos', 'quotes'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 140) sec = id;
    });
    var ti = (aboutEl && !aboutEl.hidden) ? 3 : sec === 'quotes' ? 2 : sec === 'videos' ? 1 : 0;
    pill.style.transform = 'translateX(' + ti * 100 + '%)';
    tabs.forEach(function (t, i) {
      t.classList.toggle('on', i === ti);
      if (i === ti && i < 3) t.setAttribute('aria-current', 'location'); else t.removeAttribute('aria-current');
    });
    var by = window.innerHeight - 44;
    var over = function (el) { if (!el) return false; var r = el.getBoundingClientRect(); return r.top < by && r.bottom > by; };
    bar.classList.toggle('is-dark', document.documentElement.getAttribute('data-theme') === 'dark' || over(document.getElementById('top')) || over(document.querySelector('footer')));
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if (aboutEl && 'MutationObserver' in window) new MutationObserver(update).observe(aboutEl, { attributes: true, attributeFilter: ['hidden'] });
  window.__esTabUpdate = update;
  update();
})();

/* ---------- Light / dark theme toggle (defaults to light) ---------- */
(function () {
  var root = document.documentElement, btn = document.getElementById('theme-toggle');
  function apply(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (btn) btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    if (window.__esTabUpdate) window.__esTabUpdate();
  }
  apply(root.getAttribute('data-theme') === 'dark');
  if (btn) btn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') !== 'dark';
    try { localStorage.setItem('es-theme', dark ? 'dark' : 'light'); } catch (e) {}
    apply(dark);
  });
})();
