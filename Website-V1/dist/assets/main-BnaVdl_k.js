(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();function d({width:e=1600,height:t=1e3,mode:a="banner",bgA:n="#0f0c0a",bgB:i="#1d1612",glowA:r="#f1b45f",glowB:o="#6e907b",glowC:c="#b86f3f",panel:u="rgba(12, 10, 9, 0.72)",line:f="rgba(255, 243, 223, 0.14)",accent:m="rgba(255, 243, 223, 0.24)",accentStrong:h="rgba(255, 243, 223, 0.42)"}){const l=a==="portrait"?{x:e*.12,y:t*.1,w:e*.56,h:t*.74}:a==="square"?{x:e*.1,y:t*.12,w:e*.72,h:t*.68}:{x:e*.1,y:t*.16,w:e*.72,h:t*.54},b=a==="portrait"?.08:a==="square"?.12:.09,y=Math.max(20,Math.round(t*(a==="portrait"?.12:.08))),w=Math.max(110,Math.round(e*(a==="banner"?.26:.18))),P=Math.round(e*.5),E=Math.round(t*(a==="portrait"?.44:.46)),U=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${n}" />
          <stop offset="55%" stop-color="${i}" />
          <stop offset="100%" stop-color="#050403" />
        </linearGradient>
        <radialGradient id="glow1" cx="32%" cy="24%" r="64%">
          <stop offset="0%" stop-color="${r}" stop-opacity="0.92" />
          <stop offset="48%" stop-color="${r}" stop-opacity="0.28" />
          <stop offset="100%" stop-color="${r}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="76%" cy="72%" r="56%">
          <stop offset="0%" stop-color="${o}" stop-opacity="0.82" />
          <stop offset="55%" stop-color="${o}" stop-opacity="0.26" />
          <stop offset="100%" stop-color="${o}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${m}" stop-opacity="0" />
          <stop offset="45%" stop-color="${m}" stop-opacity="0.78" />
          <stop offset="100%" stop-color="${h}" stop-opacity="0" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="${a==="banner"?18:14}" />
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
        <ellipse cx="${e*.54}" cy="${t*.5}" rx="${e*.16}" ry="${t*.12}" fill="${c}" fill-opacity="0.2" />
      </g>

      <g opacity="0.95">
        <rect x="${Math.round(l.x)}" y="${Math.round(l.y)}" width="${Math.round(l.w)}" height="${Math.round(l.h)}" rx="${a==="banner"?28:24}" fill="${u}" stroke="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(l.x+l.w*.06)}" y="${Math.round(l.y+l.h*.12)}" width="${w}" height="${y}" rx="${Math.round(y/2)}" fill="rgba(255,255,255,0.06)" />
        <rect x="${Math.round(l.x+l.w*.14)}" y="${Math.round(l.y+l.h*.24)}" width="${Math.round(l.w*.56)}" height="${Math.round(l.h*.08)}" rx="${Math.round(l.h*.04)}" fill="url(#lineGrad)" />
        <rect x="${Math.round(l.x+l.w*.08)}" y="${Math.round(l.y+l.h*.42)}" width="${Math.round(l.w*.72)}" height="${Math.round(l.h*.04)}" rx="${Math.round(l.h*.02)}" fill="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(l.x+l.w*.48)}" y="${Math.round(l.y+l.h*.18)}" width="${Math.round(l.w*.12)}" height="${Math.round(l.h*.54)}" rx="${Math.round(l.w*.03)}" fill="rgba(255,255,255,0.08)" />
        <circle cx="${P}" cy="${E}" r="${Math.max(34,Math.round(Math.min(e,t)*.09))}" fill="rgba(255,255,255,0.09)" />
        <circle cx="${Math.round(e*.65)}" cy="${Math.round(t*.3)}" r="${Math.max(20,Math.round(Math.min(e,t)*.05))}" fill="rgba(255,255,255,0.11)" />
        <path d="M ${Math.round(e*.14)} ${Math.round(t*.18)} L ${Math.round(e*.86)} ${Math.round(t*.84)}" stroke="rgba(255,255,255,0.09)" stroke-width="1.2" />
        <path d="M ${Math.round(e*.16)} ${Math.round(t*.82)} L ${Math.round(e*.82)} ${Math.round(t*.2)}" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" />
      </g>

      <g opacity="0.55">
        <rect x="${Math.round(e*(.1+b))}" y="${Math.round(t*.08)}" width="${Math.round(e*.02)}" height="${Math.round(t*.78)}" fill="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(e*.82)}" y="${Math.round(t*.11)}" width="${Math.round(e*.018)}" height="${Math.round(t*.68)}" fill="rgba(255,255,255,0.08)" />
      </g>
    </svg>
  `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(U)}`}const _={home:d({mode:"banner",bgA:"#120e0b",bgB:"#201612",glowA:"#f1b45f",glowB:"#739d83",glowC:"#b86f3f"}),physical:d({mode:"banner",bgA:"#0e0b09",bgB:"#1b1410",glowA:"#c98b52",glowB:"#7a9e72",glowC:"#f1b45f"}),digital:d({mode:"banner",bgA:"#091015",bgB:"#13202a",glowA:"#5cb0da",glowB:"#f1b45f",glowC:"#8de0d0"}),journal:d({mode:"banner",bgA:"#100d10",bgB:"#21161b",glowA:"#cf8ea0",glowB:"#8e7bb4",glowC:"#f1b45f"}),contact:d({mode:"banner",bgA:"#0f0b09",bgB:"#1b1711",glowA:"#d58b5d",glowB:"#829f72",glowC:"#f1b45f"})},p={physicalPreview:d({mode:"square",bgA:"#10100d",bgB:"#26221c",glowA:"#c98b52",glowB:"#739d83",glowC:"#f1b45f"}),digitalPreview:d({mode:"square",bgA:"#091018",bgB:"#112633",glowA:"#5fb7e1",glowB:"#f1b45f",glowC:"#87d7ce"}),journalPreview:d({mode:"square",bgA:"#100f11",bgB:"#20191e",glowA:"#c78998",glowB:"#9682bd",glowC:"#f1b45f"}),paperFold:d({mode:"portrait",bgA:"#0d0b09",bgB:"#1f1813",glowA:"#c98b52",glowB:"#e8c98a",glowC:"#7a9e72"}),clayStudy:d({mode:"portrait",bgA:"#120c0b",bgB:"#221815",glowA:"#b86f3f",glowB:"#f1b45f",glowC:"#739d83"}),glowLamp:d({mode:"portrait",bgA:"#0d0b09",bgB:"#1b1612",glowA:"#f1b45f",glowB:"#739d83",glowC:"#d58b5d"}),clothEdge:d({mode:"portrait",bgA:"#100c0d",bgB:"#26171a",glowA:"#c78998",glowB:"#d7b9a4",glowC:"#f1b45f"}),pulsePack:d({mode:"portrait",bgA:"#091018",bgB:"#16202a",glowA:"#5cb0da",glowB:"#f1b45f",glowC:"#8de0d0"}),softGrid:d({mode:"portrait",bgA:"#09141a",bgB:"#123047",glowA:"#7ec2e8",glowB:"#f2d57d",glowC:"#8de0d0"}),indexRoom:d({mode:"portrait",bgA:"#0f100e",bgB:"#1c1812",glowA:"#d8ba7d",glowB:"#7a9e72",glowC:"#f1b45f"}),frameNotes:d({mode:"portrait",bgA:"#120d11",bgB:"#24141d",glowA:"#d88cc3",glowB:"#f1b45f",glowC:"#7f8fd6"}),journalVisual1:d({mode:"portrait",bgA:"#0f0b09",bgB:"#211912",glowA:"#e2c298",glowB:"#c98b52",glowC:"#739d83"}),journalVisual2:d({mode:"portrait",bgA:"#100e10",bgB:"#1f161a",glowA:"#c78998",glowB:"#8e7bb4",glowC:"#f1b45f"}),journalVisual3:d({mode:"portrait",bgA:"#091018",bgB:"#13202a",glowA:"#5cb0da",glowB:"#f1b45f",glowC:"#8de0d0"})},z={displayName:"Angel Berger",email:"angelberger09@gmaill.com"},C=[{key:"home",label:"Home",href:"./"},{key:"physical",label:"Physical",href:"./physical/"},{key:"digital",label:"Digital",href:"./digital/"},{key:"journal",label:"Journal",href:"./journal/"},{key:"contact",label:"Contact",href:"./contact/"}],G=[{key:"instagram",label:"Instagram",href:"#"},{key:"pinterest",label:"Pinterest",href:"#"},{key:"tiktok",label:"TikTok",href:"#"},{key:"youtube",label:"YouTube",href:"#"},{key:"email",label:"Email",href:"mailto:angelberger09@gmaill.com"}],$=[{key:"physical",eyebrow:"Physical preview",title:"Physical work",summary:"Objects, prints, textile edges, and quiet material pieces.",meta:"Go to Physical",href:"./physical/",image:p.physicalPreview},{key:"digital",eyebrow:"Digital preview",title:"Digital work",summary:"Motion loops, identity systems, and screen pieces.",meta:"Go to Digital",href:"./digital/",image:p.digitalPreview},{key:"journal",eyebrow:"Journal preview",title:"Journal / notes",summary:"Loose notes, materials, and process fragments.",meta:"Go to Journal",href:"./journal/",image:p.journalPreview}],S=[{title:"Paper Fold",type:"Framed print",status:"Edition 12",price:"$180",summary:"A framed print with a folded edge and a warm matte tone.",detail:"Feels like a note you keep.",note:"Soft surface",image:p.paperFold},{title:"Clay Study",type:"Object",status:"One-off",price:"$240",summary:"A small vessel with an uneven lip and a hand-finished glaze.",detail:"Quiet, tactile, honest.",note:"Hand made",image:p.clayStudy},{title:"Glow Lamp",type:"Light piece",status:"Studio build",price:"$320",summary:"A small pool of light for corners that need a soft cast.",detail:"Warm cast, low glare.",note:"Warm cast",image:p.glowLamp},{title:"Cloth Edge",type:"Textile",status:"Small batch",price:"$140",summary:"A stitched sample with a faded palette and a little movement in the hem.",detail:"Easy care.",note:"Easy care",image:p.clothEdge}],V=S[0],O=S.slice(1),B=[{title:"Pulse Pack",type:"Motion loop",status:"Six clips",price:"$120",summary:"Short motion pieces for banners, openers, and screens that need to breathe.",detail:"Loop ready.",note:"Loop ready",image:p.pulsePack},{title:"Soft Grid",type:"Identity system",status:"Mini system",price:"$260",summary:"Loose rules for type, spacing, color, and a few decisions that stay kind.",detail:"Readable first.",note:"Readable first",image:p.softGrid},{title:"Index Room",type:"Archive room",status:"Browseable",price:"$90",summary:"A centered layout with light motion and clear entry points.",detail:"Low friction.",note:"Low friction",image:p.indexRoom},{title:"Frame Notes",type:"Screen panels",status:"Panel set",price:"$210",summary:"Small panels with bright hover and easy exits.",detail:"No trap.",note:"No trap",image:p.frameNotes}],I=B[0],D=B.slice(1),R=[{title:"Why this split works",type:"Studio note",status:"Working note",summary:"Physical things. Digital things. Soft edges, clear exits.",detail:"The split keeps the site easy to read and easy to revisit.",note:"Archive note"},{title:"Craft journal",type:"Process note",status:"Loose note",summary:"Loose notes, not a report.",detail:"Keep the language close to how the studio actually talks."},{title:"Frame notes",type:"Readability note",status:"Working note",summary:"Hover brighten belongs on reading surfaces, not every tile.",detail:"Brighten text-heavy blocks; keep utility controls calm."},{title:"Favorite materials",type:"Material note",status:"Open note",summary:"Paper, clay, cloth, light.",detail:"Use ordinary material words instead of formal discipline labels."}],F=R[0],T=R.slice(1),N=[{title:"Studio note",image:p.journalVisual1,caption:"Loose notes and material samples."},{title:"Favorite materials",image:p.journalVisual2,caption:"Paper, cloth, light."},{title:"Process fragments",image:p.journalVisual3,caption:"Short notes kept open."}],H={options:["Physical work","Digital work","Journal notes","General inquiry"]};function s(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function M(e=window.location.pathname){const t=e.replace(/\/+$/,"/");return t==="/"||t.endsWith("/index.html")?"home":t.includes("/physical/")?"physical":t.includes("/digital/")?"digital":t.includes("/journal/")?"journal":t.includes("/contact/")?"contact":"home"}function Y(e=document){const t=M(window.location.pathname);e.querySelectorAll("[data-nav-link]").forEach(a=>{a.getAttribute("data-nav-link")===t?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")})}function k(e,t){if(e.key===t)return"./";const a=t==="home"?"./":"../";return e.key==="home"?a:`${a}${e.key}/`}function W({site:e,navItems:t,socialLinks:a},n=document){const i=M(window.location.pathname);n.querySelectorAll(".brand").forEach(r=>{r.textContent=e.displayName,r.href=k({key:"home"},i),r.setAttribute("aria-label",`${e.displayName} home`)}),n.querySelectorAll(".page-footer__email").forEach(r=>{r.textContent=e.email,r.href=`mailto:${e.email}`}),n.querySelectorAll(".page-footer__social .social-link").forEach((r,o)=>{const c=a[o];c&&(r.href=c.href,r.setAttribute("aria-label",c.label))}),n.querySelectorAll("[data-nav-link]").forEach(r=>{const o=t.find(c=>c.key===r.dataset.navLink);o&&(r.textContent=o.label,r.href=k(o,i))})}function j(e,t="dark",a={}){const n=s(e.title),i=s(e.type??""),r=s(e.status??""),o=s(e.summary??""),c=s(e.detail??e.summary??""),u=s(e.note??""),f=e.price?`<span class="entry__price">${s(e.price)}</span>`:"",m=t==="light"?" entry--light":"",h=a.featured?" entry--featured":"",l=a.eager?"eager":"lazy",b=a.titleId?` id="${s(a.titleId)}"`:"",y=a.sectionCopy?`<p class="entry__summary">${s(a.sectionCopy)}</p>`:"",w=e.image?`
      <figure class="entry__media">
        <img
          class="entry__image"
          src="${s(e.image)}"
          alt="${n}"
          loading="${l}"
          data-parallax
        />
      </figure>
    `:"";return`
    <article class="entry${h}${m}">
      ${w}
      <div class="entry__content">
        <header class="entry__top">
          <span class="entry__type">${i}</span>
          <span class="entry__status">${r}</span>
        </header>
        <h3 class="entry__title"${b}>${n}</h3>
        <p class="entry__summary">${o}</p>
        ${y}
        <div class="entry__bottom">
          <span class="entry__note">${u}</span>
          ${f}
          <button
            type="button"
            class="entry__button"
            data-entry-expand
            data-entry-title="${n}"
            data-entry-type="${i}"
            data-entry-status="${r}"
            data-entry-summary="${o}"
            data-entry-detail="${c}"
          >
            Open note
          </button>
        </div>
      </div>
    </article>
  `}function J(e,t={}){return e?j(e,t.theme??"dark",{...t,featured:!0}):""}function K(e=[]){return e.map(t=>`<li class="entry-shell">${j(t,"light")}</li>`).join("")}function v(e,t,a={}){e&&(e.innerHTML=J(t,a))}function L(e,t=[]){e&&(e.innerHTML=K(t))}let g=null;function Q(e){return{title:e.querySelector("[data-modal-title]"),type:e.querySelector("[data-modal-type]"),status:e.querySelector("[data-modal-status]"),body:e.querySelector("[data-modal-body]")}}function X(e){if(!e)return;const t=e.querySelector("[data-modal-close]"),a=e.querySelector("[data-modal-panel]"),n=Q(e);if(!t||!a||!n.title||!n.type||!n.status||!n.body)return;function i(o){g=o,n.title.textContent=o.dataset.entryTitle||"Details pending",n.type.textContent=o.dataset.entryType||"",n.status.textContent=o.dataset.entryStatus||"",n.body.textContent=o.dataset.entryDetail||o.dataset.entrySummary||"Details pending",e.hidden=!1,document.body.classList.add("modal-open"),t==null||t.focus()}function r(){e.hidden=!0,document.body.classList.remove("modal-open"),g&&g.focus(),g=null}document.addEventListener("click",o=>{const c=o.target.closest("[data-entry-expand]");c&&(o.preventDefault(),i(c))}),t==null||t.addEventListener("click",r),e.addEventListener("click",o=>{o.target===e&&r()}),a==null||a.addEventListener("click",o=>{o.stopPropagation()}),window.addEventListener("keydown",o=>{!e.hidden&&o.key==="Escape"&&r()})}function Z(e){return`
    <a class="preview" href="${s(e.href)}">
      ${e.image?`
            <figure class="preview__media">
              <img
                class="preview__image"
                src="${s(e.image)}"
                alt="${s(e.title)}"
                loading="lazy"
                data-parallax
              />
            </figure>
          `:""}
      <span class="preview__content">
        <span class="preview__eyebrow">${s(e.eyebrow)}</span>
        <span class="preview__title">${s(e.title)}</span>
        <span class="preview__summary">${s(e.summary)}</span>
        <span class="preview__meta">${s(e.meta)}</span>
      </span>
    </a>
  `}function x(e,t){e&&(e.innerHTML=Z(t))}function ee(e=[]){return`
    <ul class="visual-rail">
      ${e.map(t=>`
            <li class="visual-rail__item">
              <figure class="visual-rail__figure">
                <img
                  class="visual-rail__image"
                  src="${s(t.image)}"
                  alt="${s(t.title)}"
                  loading="lazy"
                  data-parallax
                />
              </figure>
              <p class="visual-rail__caption">${s(t.caption)}</p>
            </li>
          `).join("")}
    </ul>
  `}function te(e,t=[]){e&&(e.innerHTML=ee(t))}function ae(){const e=[...document.querySelectorAll("[data-parallax]")];if(!e.length||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=0;const a=()=>{t=0;const i=window.innerHeight||1;for(const r of e){const o=r.getBoundingClientRect(),u=(o.top+o.height/2-i/2)/i,f=Math.max(-1,Math.min(1,u))*16;r.style.setProperty("--parallax-offset",`${f}px`)}},n=()=>{t||(t=window.requestAnimationFrame(a))};a(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n)}function re(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=0;const t=()=>{e=0;const n=window.scrollY||0;document.documentElement.style.setProperty("--scroll-shift",`${Math.min(140,n*.07).toFixed(2)}px`)},a=()=>{e||(e=window.requestAnimationFrame(t))};window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),t()}const q=[new URL(""+new URL("scane01-alpha-Bu_HjfvA.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("scane02-alpha-9kaI6tRp.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("scane03-alpha--j7kvm1J.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("scane04-alpha-DGTnyKWC.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("scane05-alpha-CmNSlQQr.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("scane06-alpha-D_h5IGjJ.png",import.meta.url).href,import.meta.url).href],oe=[new URL(""+new URL("YarnObject01_BlackBG-alpha-t6oxQkib.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject02_BlackBG-alpha-bLnKUADr.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject03_BlackBG-alpha-BuglWEVC.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject04_BlackBG-alpha-DUPjdVs0.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject05_BlackBG-alpha-DHZuA9ra.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject06_BlackBG-alpha-Dm0Rbk9v.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject07_BlackBG-alpha-rgieyEYr.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("YarnObject08_BlackBG-alpha---wV4yLD.png",import.meta.url).href,import.meta.url).href],ne={scane:q,object:oe},A={offscreenMargin:420,slots:[{pool:"scane",image:0,clip:0,layer:"under",side:"left",offsetVw:-21,yRatio:.02,size:212,speed:.54,rotate:-11,opacity:.3,z:1},{pool:"object",image:6,clip:4,layer:"over",side:"right",offsetVw:-19,yRatio:.1,size:128,speed:.44,rotate:9,opacity:.34,z:2},{pool:"scane",image:1,clip:2,layer:"under",side:"left",offsetVw:-15,yRatio:.2,size:286,speed:.48,rotate:14,opacity:.22,z:1},{pool:"object",image:2,clip:1,layer:"under",side:"right",offsetVw:-14,yRatio:.31,size:154,speed:.62,rotate:-18,opacity:.29,z:3},{pool:"scane",image:5,clip:1,layer:"over",side:"right",offsetVw:-23,yRatio:.4,size:246,speed:.57,rotate:-7,opacity:.22,z:1},{pool:"object",image:0,clip:5,layer:"under",side:"left",offsetVw:-11,yRatio:.49,size:116,speed:.68,rotate:21,opacity:.36,z:2},{pool:"scane",image:2,clip:5,layer:"under",side:"left",offsetVw:-18,yRatio:.58,size:162,speed:.66,rotate:18,opacity:.24,z:2},{pool:"object",image:4,clip:3,layer:"over",side:"left",offsetVw:-8,yRatio:.67,size:138,speed:.5,rotate:-13,opacity:.31,z:3},{pool:"scane",image:4,clip:3,layer:"under",side:"right",offsetVw:-13,yRatio:.75,size:304,speed:.52,rotate:-15,opacity:.2,z:1},{pool:"object",image:7,clip:0,layer:"under",side:"right",offsetVw:-17,yRatio:.84,size:176,speed:.59,rotate:7,opacity:.33,z:2},{pool:"scane",image:0,clip:1,layer:"over",side:"left",offsetVw:-25,yRatio:.92,size:236,speed:.6,rotate:6,opacity:.2,z:1},{pool:"object",image:5,clip:2,layer:"over",side:"right",offsetVw:-10,yRatio:.98,size:146,speed:.47,rotate:-6,opacity:.35,z:2}]};function ie(){return(window.innerHeight||1)+A.offscreenMargin*2}function le(e,t,a){return((e.yRatio*a-t*e.speed)%a+a)%a-A.offscreenMargin}function se(e){const t=document.createElement("img");t.className=`scan-scroll__image scan-scroll__image--${e.clip} scan-scroll__image--${e.pool}`,t.alt="",t.decoding="async",t.loading="eager",t.setAttribute("aria-hidden","true");const a=ne[e.pool]??q;return t.src=a[e.image%a.length],t.style.setProperty("--scan-size",`${e.size}px`),t.style.setProperty("--scan-rotate",`${e.rotate}deg`),t.style.setProperty("--scan-opacity",String(e.opacity)),t.style.left=e.side==="left"?`${e.offsetVw}vw`:"auto",t.style.right=e.side==="right"?`${e.offsetVw}vw`:"auto",t.style.zIndex=String(e.z),t}function ce(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e={under:document.createElement("div"),over:document.createElement("div")},t=A.slots.map(r=>{const o=se(r);return e[r.layer??"under"].append(o),{element:o,config:r}});Object.entries(e).forEach(([r,o])=>{o.className=`scan-scroll scan-scroll--${r}`,o.setAttribute("aria-hidden","true"),document.body.prepend(o)});let a=0;const n=()=>{a=0;const r=window.scrollY||0,o=ie();t.forEach(({element:c,config:u})=>{c.style.setProperty("--scan-y",`${le(u,r,o).toFixed(1)}px`)})},i=()=>{a||(a=window.requestAnimationFrame(n))};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),n()}document.addEventListener("DOMContentLoaded",()=>{W({site:z,navItems:C,socialLinks:G}),Y();const e=document.body.dataset.page,t=document.querySelector(".page-banner__image");t&&e&&_[e]&&(t.src=_[e]);const a=document.querySelector("[data-modal]");X(a);const n=document.querySelector("[data-page-selector]"),i=document.querySelector("[data-menu-open]"),r=document.querySelector("[data-menu-close]");function o(){!n||!i||(n.hidden=!1,document.body.classList.add("selector-open"),i.setAttribute("aria-expanded","true"))}function c(){!n||!i||(n.hidden=!0,document.body.classList.remove("selector-open"),i.setAttribute("aria-expanded","false"),i.focus())}if(i&&n&&(i.addEventListener("click",o),r==null||r.addEventListener("click",c),n.addEventListener("click",u=>{u.target===n&&c()}),window.addEventListener("keydown",u=>{!n.hidden&&u.key==="Escape"&&c()}),n.querySelectorAll("[data-nav-link]").forEach(u=>{M(new URL(u.href,window.location.href).pathname)===document.body.dataset.page&&u.setAttribute("aria-current","page")})),e==="home"&&(x(document.querySelector("[data-preview-slot='physical']"),$[0]),x(document.querySelector("[data-preview-slot='digital']"),$[1]),x(document.querySelector("[data-preview-slot='journal']"),$[2])),e==="physical"&&(v(document.querySelector("[data-render='physical-featured']"),V,{eager:!0,theme:"light",titleId:"featured-object-entry-title"}),L(document.querySelector("[data-render='physical-items']"),O)),e==="digital"&&(v(document.querySelector("[data-render='digital-featured']"),I,{eager:!0,titleId:"featured-digital-entry-title"}),L(document.querySelector("[data-render='digital-items']"),D)),e==="journal"&&(v(document.querySelector("[data-render='journal-featured']"),F,{theme:"light",titleId:"journal-featured-entry-title"}),L(document.querySelector("[data-render='journal-notes']"),T),te(document.querySelector("[data-render='journal-visuals']"),N)),e==="contact"){const u=document.querySelector("[data-render='contact-options']");u&&(u.innerHTML=H.options.map(f=>`<li>${s(f)}</li>`).join(""))}ae(),re(),ce()});
