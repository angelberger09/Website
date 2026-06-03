(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function l({width:e=1600,height:t=1e3,mode:n="banner",bgA:o="#0f0c0a",bgB:a="#1d1612",glowA:i="#f1b45f",glowB:r="#6e907b",glowC:p="#b86f3f",panel:d="rgba(12, 10, 9, 0.72)",line:f="rgba(255, 243, 223, 0.14)",accent:y="rgba(255, 243, 223, 0.24)",accentStrong:M="rgba(255, 243, 223, 0.42)"}){const s=n==="portrait"?{x:e*.12,y:t*.1,w:e*.56,h:t*.74}:n==="square"?{x:e*.1,y:t*.12,w:e*.72,h:t*.68}:{x:e*.1,y:t*.16,w:e*.72,h:t*.54},x=n==="portrait"?.08:n==="square"?.12:.09,w=Math.max(20,Math.round(t*(n==="portrait"?.12:.08))),A=Math.max(110,Math.round(e*(n==="banner"?.26:.18))),_=Math.round(e*.5),S=Math.round(t*(n==="portrait"?.44:.46)),L=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${o}" />
          <stop offset="55%" stop-color="${a}" />
          <stop offset="100%" stop-color="#050403" />
        </linearGradient>
        <radialGradient id="glow1" cx="32%" cy="24%" r="64%">
          <stop offset="0%" stop-color="${i}" stop-opacity="0.92" />
          <stop offset="48%" stop-color="${i}" stop-opacity="0.28" />
          <stop offset="100%" stop-color="${i}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="76%" cy="72%" r="56%">
          <stop offset="0%" stop-color="${r}" stop-opacity="0.82" />
          <stop offset="55%" stop-color="${r}" stop-opacity="0.26" />
          <stop offset="100%" stop-color="${r}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${y}" stop-opacity="0" />
          <stop offset="45%" stop-color="${y}" stop-opacity="0.78" />
          <stop offset="100%" stop-color="${M}" stop-opacity="0" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="${n==="banner"?18:14}" />
        </filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="1 0 0 0 0
                                 0 1 0 0 0
                                 0 0 1 0 0
                                 0 0 0 0.12 0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.18" />

      <g filter="url(#blur)">
        <ellipse cx="${e*.28}" cy="${t*.22}" rx="${e*.22}" ry="${t*.18}" fill="url(#glow1)" />
        <ellipse cx="${e*.82}" cy="${t*.74}" rx="${e*.26}" ry="${t*.22}" fill="url(#glow2)" />
        <ellipse cx="${e*.54}" cy="${t*.5}" rx="${e*.16}" ry="${t*.12}" fill="${p}" fill-opacity="0.2" />
      </g>

      <g opacity="0.95">
        <rect x="${Math.round(s.x)}" y="${Math.round(s.y)}" width="${Math.round(s.w)}" height="${Math.round(s.h)}" rx="${n==="banner"?28:24}" fill="${d}" stroke="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(s.x+s.w*.06)}" y="${Math.round(s.y+s.h*.12)}" width="${A}" height="${w}" rx="${Math.round(w/2)}" fill="rgba(255,255,255,0.06)" />
        <rect x="${Math.round(s.x+s.w*.14)}" y="${Math.round(s.y+s.h*.24)}" width="${Math.round(s.w*.56)}" height="${Math.round(s.h*.08)}" rx="${Math.round(s.h*.04)}" fill="url(#lineGrad)" />
        <rect x="${Math.round(s.x+s.w*.08)}" y="${Math.round(s.y+s.h*.42)}" width="${Math.round(s.w*.72)}" height="${Math.round(s.h*.04)}" rx="${Math.round(s.h*.02)}" fill="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(s.x+s.w*.48)}" y="${Math.round(s.y+s.h*.18)}" width="${Math.round(s.w*.12)}" height="${Math.round(s.h*.54)}" rx="${Math.round(s.w*.03)}" fill="rgba(255,255,255,0.08)" />
        <circle cx="${_}" cy="${S}" r="${Math.max(34,Math.round(Math.min(e,t)*.09))}" fill="rgba(255,255,255,0.09)" />
        <circle cx="${Math.round(e*.65)}" cy="${Math.round(t*.3)}" r="${Math.max(20,Math.round(Math.min(e,t)*.05))}" fill="rgba(255,255,255,0.11)" />
        <path d="M ${Math.round(e*.14)} ${Math.round(t*.18)} L ${Math.round(e*.86)} ${Math.round(t*.84)}" stroke="rgba(255,255,255,0.09)" stroke-width="1.2" />
        <path d="M ${Math.round(e*.16)} ${Math.round(t*.82)} L ${Math.round(e*.82)} ${Math.round(t*.2)}" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" />
      </g>

      <g opacity="0.55">
        <rect x="${Math.round(e*(.1+x))}" y="${Math.round(t*.08)}" width="${Math.round(e*.02)}" height="${Math.round(t*.78)}" fill="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(e*.82)}" y="${Math.round(t*.11)}" width="${Math.round(e*.018)}" height="${Math.round(t*.68)}" fill="rgba(255,255,255,0.08)" />
      </g>
    </svg>
  `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(L)}`}const $={home:l({mode:"banner",bgA:"#120e0b",bgB:"#201612",glowA:"#f1b45f",glowB:"#739d83",glowC:"#b86f3f"}),physical:l({mode:"banner",bgA:"#0e0b09",bgB:"#1b1410",glowA:"#c98b52",glowB:"#7a9e72",glowC:"#f1b45f"}),digital:l({mode:"banner",bgA:"#091015",bgB:"#13202a",glowA:"#5cb0da",glowB:"#f1b45f",glowC:"#8de0d0"}),journal:l({mode:"banner",bgA:"#100d10",bgB:"#21161b",glowA:"#cf8ea0",glowB:"#8e7bb4",glowC:"#f1b45f"}),contact:l({mode:"banner",bgA:"#0f0b09",bgB:"#1b1711",glowA:"#d58b5d",glowB:"#829f72",glowC:"#f1b45f"})},u={physicalPreview:l({mode:"square",bgA:"#10100d",bgB:"#26221c",glowA:"#c98b52",glowB:"#739d83",glowC:"#f1b45f"}),digitalPreview:l({mode:"square",bgA:"#091018",bgB:"#112633",glowA:"#5fb7e1",glowB:"#f1b45f",glowC:"#87d7ce"}),journalPreview:l({mode:"square",bgA:"#100f11",bgB:"#20191e",glowA:"#c78998",glowB:"#9682bd",glowC:"#f1b45f"}),paperFold:l({mode:"portrait",bgA:"#0d0b09",bgB:"#1f1813",glowA:"#c98b52",glowB:"#e8c98a",glowC:"#7a9e72"}),clayStudy:l({mode:"portrait",bgA:"#120c0b",bgB:"#221815",glowA:"#b86f3f",glowB:"#f1b45f",glowC:"#739d83"}),glowLamp:l({mode:"portrait",bgA:"#0d0b09",bgB:"#1b1612",glowA:"#f1b45f",glowB:"#739d83",glowC:"#d58b5d"}),clothEdge:l({mode:"portrait",bgA:"#100c0d",bgB:"#26171a",glowA:"#c78998",glowB:"#d7b9a4",glowC:"#f1b45f"}),pulsePack:l({mode:"portrait",bgA:"#091018",bgB:"#16202a",glowA:"#5cb0da",glowB:"#f1b45f",glowC:"#8de0d0"}),softGrid:l({mode:"portrait",bgA:"#09141a",bgB:"#123047",glowA:"#7ec2e8",glowB:"#f2d57d",glowC:"#8de0d0"}),indexRoom:l({mode:"portrait",bgA:"#0f100e",bgB:"#1c1812",glowA:"#d8ba7d",glowB:"#7a9e72",glowC:"#f1b45f"}),frameNotes:l({mode:"portrait",bgA:"#120d11",bgB:"#24141d",glowA:"#d88cc3",glowB:"#f1b45f",glowC:"#7f8fd6"}),journalVisual1:l({mode:"portrait",bgA:"#0f0b09",bgB:"#211912",glowA:"#e2c298",glowB:"#c98b52",glowC:"#739d83"}),journalVisual2:l({mode:"portrait",bgA:"#100e10",bgB:"#1f161a",glowA:"#c78998",glowB:"#8e7bb4",glowC:"#f1b45f"}),journalVisual3:l({mode:"portrait",bgA:"#091018",bgB:"#13202a",glowA:"#5cb0da",glowB:"#f1b45f",glowC:"#8de0d0"})},m=[{key:"physical",eyebrow:"Physical preview",title:"Physical work",summary:"Objects, prints, textile edges, and quiet material pieces.",meta:"Go to Physical",href:"./physical/",image:u.physicalPreview},{key:"digital",eyebrow:"Digital preview",title:"Digital work",summary:"Motion loops, identity systems, and screen pieces.",meta:"Go to Digital",href:"./digital/",image:u.digitalPreview},{key:"journal",eyebrow:"Journal preview",title:"Journal / notes",summary:"Loose notes, materials, and process fragments.",meta:"Go to Journal",href:"./journal/",image:u.journalPreview}],B=[{title:"Paper Fold",type:"Framed print",status:"Edition 12",price:"$180",summary:"A framed print with a folded edge and a warm matte tone.",detail:"Feels like a note you keep.",note:"Soft surface",image:u.paperFold},{title:"Clay Study",type:"Object",status:"One-off",price:"$240",summary:"A small vessel with an uneven lip and a hand-finished glaze.",detail:"Quiet, tactile, honest.",note:"Hand made",image:u.clayStudy},{title:"Glow Lamp",type:"Light piece",status:"Studio build",price:"$320",summary:"A small pool of light for corners that need a soft cast.",detail:"Warm cast, low glare.",note:"Warm cast",image:u.glowLamp},{title:"Cloth Edge",type:"Textile",status:"Small batch",price:"$140",summary:"A stitched sample with a faded palette and a little movement in the hem.",detail:"Easy care.",note:"Easy care",image:u.clothEdge}],k=[{title:"Pulse Pack",type:"Motion loop",status:"Six clips",price:"$120",summary:"Short motion pieces for banners, openers, and screens that need to breathe.",detail:"Loop ready.",note:"Loop ready",image:u.pulsePack},{title:"Soft Grid",type:"Identity system",status:"Mini system",price:"$260",summary:"Loose rules for type, spacing, color, and a few decisions that stay kind.",detail:"Readable first.",note:"Readable first",image:u.softGrid},{title:"Index Room",type:"Archive room",status:"Browseable",price:"$90",summary:"A centered layout with light motion and clear entry points.",detail:"Low friction.",note:"Low friction",image:u.indexRoom},{title:"Frame Notes",type:"Screen panels",status:"Panel set",price:"$210",summary:"Small panels with bright hover and easy exits.",detail:"No trap.",note:"No trap",image:u.frameNotes}],q=[{title:"Why this split works",type:"Studio note",status:"Working note",summary:"Physical things. Digital things. Soft edges, clear exits.",detail:"The split keeps the site easy to read and easy to revisit."},{title:"Craft journal",type:"Process note",status:"Loose note",summary:"Loose notes, not a report.",detail:"Keep the language close to how the studio actually talks."},{title:"Frame notes",type:"Readability note",status:"Working note",summary:"Hover brighten belongs on reading surfaces, not every tile.",detail:"Brighten text-heavy blocks; keep utility controls calm."},{title:"Favorite materials",type:"Material note",status:"Open note",summary:"Paper, clay, cloth, light.",detail:"Use ordinary material words instead of formal discipline labels."}],P=[{title:"Studio note",image:u.journalVisual1,caption:"Loose notes and material samples."},{title:"Favorite materials",image:u.journalVisual2,caption:"Paper, cloth, light."},{title:"Process fragments",image:u.journalVisual3,caption:"Short notes kept open."}],C={options:["Physical work","Digital work","Journal notes","General inquiry"]};function c(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function v(e=window.location.pathname){const t=e.replace(/\/+$/,"/");return t==="/"||t.endsWith("/index.html")?"home":t.includes("/physical/")?"physical":t.includes("/digital/")?"digital":t.includes("/journal/")?"journal":t.includes("/contact/")?"contact":"home"}function j(e=document){const t=v(window.location.pathname);e.querySelectorAll("[data-nav-link]").forEach(n=>{n.getAttribute("data-nav-link")===t?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function E(e,t="dark"){const n=c(e.title),o=c(e.type??""),a=c(e.status??""),i=c(e.summary??""),r=c(e.detail??e.summary??""),p=c(e.note??""),d=e.price?`<span class="entry__price">${c(e.price)}</span>`:"",f=t==="light"?" entry--light":"",y=e.image?`
      <figure class="entry__media">
        <img
          class="entry__image"
          src="${c(e.image)}"
          alt="${n}"
          loading="lazy"
          data-parallax
        />
      </figure>
    `:"";return`
    <article class="entry${f}">
      ${y}
      <div class="entry__content">
        <header class="entry__top">
          <span class="entry__type">${o}</span>
          <span class="entry__status">${a}</span>
        </header>
        <h3 class="entry__title">${n}</h3>
        <p class="entry__summary">${i}</p>
        <div class="entry__bottom">
          <span class="entry__note">${p}</span>
          ${d}
          <button
            type="button"
            class="entry__button"
            data-entry-expand
            data-entry-title="${n}"
            data-entry-type="${o}"
            data-entry-status="${a}"
            data-entry-summary="${i}"
            data-entry-detail="${r}"
          >
            Open note
          </button>
        </div>
      </div>
    </article>
  `}function G(e=[]){return e.map(t=>`<li class="entry-shell">${E(t,"light")}</li>`).join("")}function b(e,t=[]){e&&(e.innerHTML=G(t))}let g=null;function F(e){return{title:e.querySelector("[data-modal-title]"),type:e.querySelector("[data-modal-type]"),status:e.querySelector("[data-modal-status]"),body:e.querySelector("[data-modal-body]")}}function O(e){if(!e)return;const t=e.querySelector("[data-modal-close]"),n=e.querySelector("[data-modal-panel]"),o=F(e);if(!t||!n||!o.title||!o.type||!o.status||!o.body)return;function a(r){g=r,o.title.textContent=r.dataset.entryTitle||"Details pending",o.type.textContent=r.dataset.entryType||"",o.status.textContent=r.dataset.entryStatus||"",o.body.textContent=r.dataset.entryDetail||r.dataset.entrySummary||"Details pending",e.hidden=!1,document.body.classList.add("modal-open"),t==null||t.focus()}function i(){e.hidden=!0,document.body.classList.remove("modal-open"),g&&g.focus(),g=null}document.addEventListener("click",r=>{const p=r.target.closest("[data-entry-expand]");p&&(r.preventDefault(),a(p))}),t==null||t.addEventListener("click",i),e.addEventListener("click",r=>{r.target===e&&i()}),n==null||n.addEventListener("click",r=>{r.stopPropagation()}),window.addEventListener("keydown",r=>{!e.hidden&&r.key==="Escape"&&i()})}function T(e){return`
    <a class="preview" href="${c(e.href)}">
      ${e.image?`
            <figure class="preview__media">
              <img
                class="preview__image"
                src="${c(e.image)}"
                alt="${c(e.title)}"
                loading="lazy"
                data-parallax
              />
            </figure>
          `:""}
      <span class="preview__content">
        <span class="preview__eyebrow">${c(e.eyebrow)}</span>
        <span class="preview__title">${c(e.title)}</span>
        <span class="preview__summary">${c(e.summary)}</span>
        <span class="preview__meta">${c(e.meta)}</span>
      </span>
    </a>
  `}function h(e,t){e&&(e.innerHTML=T(t))}function R(e=[]){return`
    <ul class="visual-rail">
      ${e.map(t=>`
            <li class="visual-rail__item">
              <figure class="visual-rail__figure">
                <img
                  class="visual-rail__image"
                  src="${c(t.image)}"
                  alt="${c(t.title)}"
                  loading="lazy"
                  data-parallax
                />
              </figure>
              <p class="visual-rail__caption">${c(t.caption)}</p>
            </li>
          `).join("")}
    </ul>
  `}function D(e,t=[]){e&&(e.innerHTML=R(t))}function N(){const e=[...document.querySelectorAll("[data-parallax]")];if(!e.length||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=0;const n=()=>{t=0;const a=window.innerHeight||1;for(const i of e){const r=i.getBoundingClientRect(),d=(r.top+r.height/2-a/2)/a,f=Math.max(-1,Math.min(1,d))*16;i.style.setProperty("--parallax-offset",`${f}px`)}},o=()=>{t||(t=window.requestAnimationFrame(n))};n(),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}document.addEventListener("DOMContentLoaded",()=>{j();const e=document.body.dataset.page,t=document.querySelector(".page-banner__image");t&&e&&$[e]&&(t.src=$[e]);const n=document.querySelector("[data-modal]");O(n);const o=document.querySelector("[data-page-selector]"),a=document.querySelector("[data-menu-open]"),i=document.querySelector("[data-menu-close]");function r(){!o||!a||(o.hidden=!1,document.body.classList.add("selector-open"),a.setAttribute("aria-expanded","true"))}function p(){!o||!a||(o.hidden=!0,document.body.classList.remove("selector-open"),a.setAttribute("aria-expanded","false"),a.focus())}if(a&&o&&(a.addEventListener("click",r),i==null||i.addEventListener("click",p),o.addEventListener("click",d=>{d.target===o&&p()}),window.addEventListener("keydown",d=>{!o.hidden&&d.key==="Escape"&&p()}),o.querySelectorAll("[data-nav-link]").forEach(d=>{v(new URL(d.href,window.location.href).pathname)===document.body.dataset.page&&d.setAttribute("aria-current","page")})),e==="home"&&(h(document.querySelector("[data-preview-slot='physical']"),m[0]),h(document.querySelector("[data-preview-slot='digital']"),m[1]),h(document.querySelector("[data-preview-slot='journal']"),m[2])),e==="physical"&&b(document.querySelector("[data-render='physical-items']"),B.slice(1)),e==="digital"&&b(document.querySelector("[data-render='digital-items']"),k.slice(1)),e==="journal"&&(b(document.querySelector("[data-render='journal-notes']"),q),D(document.querySelector("[data-render='journal-visuals']"),P)),e==="contact"){const d=document.querySelector("[data-render='contact-options']");d&&(d.innerHTML=C.options.map(f=>`<li>${c(f)}</li>`).join(""))}N()});
