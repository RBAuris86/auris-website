(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41503,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return c},getImageProps:function(){return d}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let i=e.r(21255),o=e.r(73244),s=e.r(63246),l=i._(e.r(98360));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let c=s.Image},88672,(e,t,a)=>{t.exports=e.r(41503)},76168,(e,t,a)=>{t.exports=e.r(29653)},36152,e=>{"use strict";var t=e.i(66663),a=e.i(43841);let r=[{id:"haven",name:"Haven",tagline:"Independent Living Technology",color:"#c49a6c",products:[{id:"adam",name:"ADAM"},{id:"adromeda",name:"ADROMEDA"},{id:"haven-ai",name:"HAVEN AI"}]},{id:"terra",name:"Terra",tagline:"Environmental Intelligence",color:"#22c55e",products:[{id:"swarm",name:"SWARM"},{id:"seismo",name:"SEISMO"},{id:"vulcan",name:"VULCAN"},{id:"wildfire",name:"WILDFIRE"},{id:"oceanus",name:"OCEANUS"},{id:"avalanche",name:"AVALANCHE"},{id:"atmos",name:"ATMOS"}]},{id:"atlas",name:"Atlas",tagline:"Navigation & Property Intelligence",color:"#38bdf8",products:[{id:"navigate",name:"NAVIGATE"},{id:"directory",name:"DIRECTORY"},{id:"insights",name:"INSIGHTS"}]},{id:"orbit",name:"Orbit",tagline:"Space & Aerospace Technologies",color:"#a855f7",products:[{id:"sentinel",name:"SENTINEL"},{id:"relay",name:"RELAY"},{id:"vision",name:"VISION"},{id:"weather",name:"WEATHER"},{id:"guardian",name:"GUARDIAN"}]},{id:"enterprise",name:"Enterprise",tagline:"Business Systems & Software",color:"#94a3b8",products:[{id:"command",name:"COMMAND"},{id:"projects",name:"PROJECTS"},{id:"service-desk",name:"SERVICE DESK"},{id:"assets",name:"ASSETS"},{id:"identity",name:"IDENTITY"},{id:"analytics",name:"ANALYTICS"}]},{id:"medical",name:"Medical",tagline:"AI Healthcare & Clinical Intelligence",color:"#dc2626",products:[{id:"scribe",name:"SCRIBE"},{id:"triage",name:"TRIAGE"},{id:"pulse",name:"PULSE"},{id:"chart",name:"CHART"},{id:"rounds",name:"ROUNDS"},{id:"medsync",name:"MEDSYNC"}]}];var n=e.i(19386),i=e.i(77869),o=e.i(33094),s=e.i(88672),l=e.i(23215),d=e.i(4921);function c({active:e,accent:a,phase:r,isHovered:n,onHoverStart:i,onHoverEnd:o,onActivate:p}){let u=!e&&("idle"===r||"hovering"===r),f="freezing"===r||"compressing"===r||"opening"===r||"entering"===r||"tunnel"===r||"arrival"===r,m="compressing"===r,g="opening"===r,h="entering"===r||"tunnel"===r||"arrival"===r;return(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",width:280,height:280,transform:"translate(-50%, -50%)",zIndex:20,pointerEvents:"auto"},children:(0,t.jsxs)(l.motion.button,{type:"button","aria-label":e?"AURA — AURIS Intelligence":"Enter the AURIS Ecosystem",disabled:!u,onPointerEnter:i,onPointerLeave:o,onFocus:i,onBlur:o,onClick:p,className:"relative h-full w-full rounded-full border-0 bg-transparent p-0 outline-none",style:{cursor:u?"pointer":"default",pointerEvents:u?"auto":"none"},animate:{scale:m?.5:g?.7:h?7:n?1.12:e?1.04:1,rotate:e&&!f?8:0,opacity:+!h,filter:n?`drop-shadow(0 0 55px ${a})`:`drop-shadow(0 0 28px ${a})`},transition:{duration:h?1.15:.55,ease:h?[.76,0,.82,0]:[.22,1,.36,1]},children:[(0,t.jsx)(d.default,{phase:r,isHovered:n}),(0,t.jsx)(l.motion.div,{className:"pointer-events-none absolute inset-[14%] rounded-full blur-[38px]",style:{background:`
              radial-gradient(
                circle,
                rgba(255,255,255,0.72) 0%,
                rgba(103,232,249,0.46) 22%,
                rgba(34,211,238,0.26) 44%,
                rgba(124,58,237,0.22) 62%,
                transparent 76%
              )
            `},animate:{scale:f?.72:n?[.92,1.28,.92]:[.96,1.08,.96],opacity:f?.3:n?[.48,1,.48]:[.26,.58,.26]},transition:{duration:f?.25:n?1.8:4,repeat:f?0:1/0,ease:"easeInOut"}}),(0,t.jsxs)(l.motion.div,{className:"pointer-events-none absolute inset-[23%] overflow-hidden rounded-full border border-cyan-100/45 backdrop-blur-xl",style:{background:`
              radial-gradient(
                circle at 34% 27%,
                rgba(255,255,255,0.98) 0%,
                rgba(165,243,252,0.7) 9%,
                rgba(34,211,238,0.4) 28%,
                rgba(49,46,129,0.6) 62%,
                rgba(2,6,23,0.98) 100%
              )
            `,boxShadow:`
              inset 0 0 52px rgba(103,232,249,0.34),
              inset -20px -24px 46px rgba(2,6,23,0.88),
              0 0 46px rgba(34,211,238,0.52),
              0 0 110px rgba(124,58,237,0.32)
            `},animate:{scale:m?.7:g?.82:n?1.09:1,borderRadius:f?"50%":n?["50%","44%","50%"]:["50%","48%","50%"]},transition:{scale:{duration:.45,ease:[.22,1,.36,1]},borderRadius:{duration:4,repeat:f?0:1/0,ease:"easeInOut"}},children:[(0,t.jsx)(l.motion.div,{className:"absolute inset-[-30%] opacity-40",style:{backgroundImage:`
                radial-gradient(
                  circle,
                  rgba(255,255,255,0.9) 0 1px,
                  transparent 2px
                ),

                linear-gradient(
                  90deg,
                  transparent 48%,
                  rgba(103,232,249,0.14) 50%,
                  transparent 52%
                )
              `,backgroundSize:"19px 19px, 38px 38px"},animate:{rotate:360*!f},transition:{duration:70,repeat:f?0:1/0,ease:"linear"}}),(0,t.jsx)(l.motion.div,{className:"absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"radial-gradient(circle, white 0%, #cffafe 18%, #22d3ee 42%, rgba(124,58,237,0.68) 68%, transparent 78%)",boxShadow:"0 0 34px white, 0 0 78px rgba(34,211,238,0.9)"},animate:{scale:m?.45:g?2:n?[.86,1.28,.86]:[.9,1.08,.9],opacity:g?0:f?.84:[.7,1,.7]},transition:{duration:f?.4:n?1.7:3.6,repeat:f?0:1/0,ease:"easeInOut"}}),(0,t.jsxs)(l.motion.div,{className:"absolute inset-0 flex flex-col items-center justify-center",animate:{opacity:g||h?0:1,scale:n?1.05:1},transition:{duration:.3},children:[(0,t.jsx)(s.default,{src:"/images/auris-logo.png",alt:"AURIS",width:70,height:70,priority:!0,style:{filter:"drop-shadow(0 0 14px rgba(56,189,248,0.95))"}}),(0,t.jsx)("div",{style:{marginTop:3,color:"#ffffff",fontSize:18,fontWeight:900,letterSpacing:3,lineHeight:1},children:"AURA"}),(0,t.jsx)("div",{style:{marginTop:6,color:"#67e8f9",fontSize:8,fontWeight:800,letterSpacing:1.8,lineHeight:1,whiteSpace:"nowrap"},children:n?"ENTER":e?"AURIS INTELLIGENCE":"APPROACH"})]})]}),(0,t.jsxs)(l.motion.div,{className:"pointer-events-none absolute inset-[23%] overflow-hidden rounded-full",initial:!1,animate:{opacity:g||h?1:0,scale:g?[.15,1]:h?4:.15},transition:{duration:h?1.1:.85,ease:[.22,1,.36,1]},children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle,#ffffff_0%,#a5f3fc_14%,#22d3ee_34%,#7c3aed_58%,#020617_78%)]"}),Array.from({length:8}).map((e,a)=>(0,t.jsx)(l.motion.div,{className:"absolute left-1/2 top-1/2 h-[64%] w-[38%] origin-bottom rounded-[100%_10%_100%_10%] border border-cyan-100/25 bg-slate-950/90",style:{transform:`
                  translate(-50%, -100%)
                  rotate(${45*a}deg)
                `},animate:{rotate:g?45*a+58:45*a,y:g?-26:0,scaleY:g?.7:1},transition:{duration:.85,delay:.025*a,ease:[.22,1,.36,1]}},a)),(0,t.jsx)(l.motion.div,{className:"absolute left-1/2 top-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white",style:{boxShadow:"0 0 45px white, 0 0 100px rgba(103,232,249,0.95)"},animate:{scale:g?[.2,3]:.2,opacity:g?[.65,1]:0},transition:{duration:.8,ease:"easeOut"}})]})]})})}function p({active:e,selected:a,nodeCount:r,radius:n,color:i}){return e?(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 620 620",style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"},children:Array.from({length:r}).map((e,o)=>{let s=360/r*o-90,l=310+Math.cos(s*Math.PI/180)*n,d=310+Math.sin(s*Math.PI/180)*n;return(0,t.jsx)("line",{x1:"310",y1:"310",x2:l,y2:d,stroke:i,strokeWidth:a?.8:1.2,opacity:a?.18:.34},o)})}):null}function u({active:e,accent:a,title:r,subtitle:n,onCollapse:i}){return e?(0,t.jsxs)("div",{style:{position:"absolute",left:28,top:22,textAlign:"left",zIndex:20,userSelect:"none"},children:[(0,t.jsx)("div",{style:{color:a,fontSize:12,fontWeight:900,letterSpacing:3,textTransform:"uppercase"},children:"AURIS ECOSYSTEM"}),(0,t.jsx)("div",{style:{marginTop:6,color:"white",fontSize:22,fontWeight:700},children:r??"Select Division"}),(0,t.jsx)("div",{style:{marginTop:4,color:"#94a3b8",fontSize:13,maxWidth:260},children:n??"Interactive Technology Platform"}),i&&(0,t.jsx)("button",{onClick:i,style:{marginTop:20,padding:"10px 16px",borderRadius:999,border:`1px solid ${a}66`,background:"rgba(15,23,42,.75)",color:"white",cursor:"pointer",fontWeight:700,transition:"all .25s ease"},children:"← Collapse Ecosystem"})]}):null}function f({label:e,color:r,selected:n=!1,dimmed:i=!1,size:o="inner",onClick:s,onHoverChange:l,style:d}){let[c,p]=(0,a.useState)(!1),u=n||c;function m(e){p(e),l?.(e)}return(0,t.jsx)("button",{type:"button",onClick:s,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:()=>m(!0),onBlur:()=>m(!1),style:{width:"inner"===o?108:96,height:"inner"===o?92:78,border:"none",background:"transparent",color:"#ffffff",fontWeight:900,cursor:s?"pointer":"default",opacity:i&&!c?.32:1,transform:u?"scale(1.08)":"scale(1)",filter:u?`drop-shadow(0 0 26px ${r})`:`drop-shadow(0 0 8px ${r}55)`,transition:"transform 240ms ease, opacity 240ms ease, filter 240ms ease",...d},children:(0,t.jsx)("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",padding:8,fontSize:"inner"===o?14:12,lineHeight:1.1,background:u?`linear-gradient(145deg, ${r}45, ${r}18)`:"rgba(15, 23, 42, 0.82)",border:`1px solid ${u?r:"rgba(148, 163, 184, 0.35)"}`,clipPath:"polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",boxShadow:u?`0 0 34px ${r}35 inset`:"0 0 18px rgba(15, 23, 42, 0.55) inset",transition:"background 240ms ease, border-color 240ms ease, box-shadow 240ms ease"},children:e})})}function m({active:e,nodes:a,selected:r,hovered:n,radius:i,onSelect:o,onHover:s}){return e?(0,t.jsx)(t.Fragment,{children:a.map((e,l)=>{let d=360/a.length*l-90,c=Math.cos(d*Math.PI/180)*i,p=Math.sin(d*Math.PI/180)*i,u=r===e.id,m=n===e.id;return(0,t.jsx)("div",{style:{position:"absolute",left:`calc(50% + ${c}px)`,top:`calc(50% + ${p}px)`,transform:"translate(-50%, -50%)",animation:"nodeFade 350ms ease both",animationDelay:`${60*l}ms`,zIndex:4},children:(0,t.jsx)(f,{label:e.name,color:e.color,selected:u,dimmed:null!==r?!u:null!==n&&!m,onClick:()=>o(e.id),onHoverChange:t=>s(t?e.id:null)})},e.id)})}):null}function g({selectedNode:e,selectedId:a,nodes:r,innerRadius:n,productRadius:i,color:o}){if(!e||!a)return null;let s=r.findIndex(e=>e.id===a);if(-1===s)return null;let l=360/r.length*s-90,d=310+Math.cos(l*Math.PI/180)*n,c=310+Math.sin(l*Math.PI/180)*n;return(0,t.jsxs)("svg",{viewBox:"0 0 620 620","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"visible",zIndex:2},children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("filter",{id:`product-branch-glow-${a}`,x:"-100%",y:"-100%",width:"300%",height:"300%",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"4",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,t.jsxs)("linearGradient",{id:`product-branch-gradient-${a}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),(0,t.jsx)("stop",{offset:"55%",stopColor:o,stopOpacity:"0.9"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0.8"})]})]}),e.products.map((r,n)=>{let s=360/e.products.length*n-90,l=310+Math.cos(s*Math.PI/180)*i,p=310+Math.sin(s*Math.PI/180)*i,u=(d+l)/2,f=(c+p)/2;return(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:`M ${d} ${c} Q ${u} ${f} ${l} ${p}`,fill:"none",stroke:`url(#product-branch-gradient-${a})`,strokeWidth:"1.5",strokeLinecap:"round",pathLength:"1",strokeDasharray:"1",strokeDashoffset:"1",filter:`url(#product-branch-glow-${a})`,style:{animation:"drawProductBranch 650ms ease forwards",animationDelay:`${90*n}ms`}}),(0,t.jsx)("circle",{r:"3",fill:o,filter:`url(#product-branch-glow-${a})`,style:{offsetPath:`path("M ${d} ${c} Q ${u} ${f} ${l} ${p}")`,offsetDistance:"0%",animation:"branchEnergyPulse 1200ms ease-in-out infinite",animationDelay:`${650+90*n}ms`}})]},r.id)})]})}var h=e.i(76168);function x({division:e,divisionId:r,product:n,productId:i,tagline:o,accent:s,onBack:l}){let d=(0,h.useRouter)(),[c,p]=(0,a.useState)(!1),u=(0,a.useRef)(null),f=`/products/${r}/${i}`;if((0,a.useEffect)(()=>()=>{null!==u.current&&window.clearTimeout(u.current)},[]),!n)return null;function m(e){c||(p(!0),u.current=window.setTimeout(()=>{d.push(e)},1450))}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes productPanelIn {
          from {
            opacity: 0;
            transform: translateX(70px) scale(.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes reactorSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes reactorSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes reactorZoom {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.18);
          }

          18% {
            opacity: 1;
          }

          68% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.18);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(8);
          }
        }

        @keyframes coreIgnition {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.08);
            filter: brightness(.8);
          }

          22% {
            opacity: 1;
          }

          55% {
            transform: translate(-50%, -50%) scale(1.08);
            filter: brightness(2.3);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(10);
            filter: brightness(3);
          }
        }

        @keyframes energyPulse {
          0%, 100% {
            filter: brightness(1);
          }

          50% {
            filter: brightness(2.4);
          }
        }

        @keyframes scanSweep {
          from {
            transform: translateY(-115%);
          }

          to {
            transform: translateY(115%);
          }
        }

        @keyframes tunnelGrid {
          0% {
            opacity: 0;
            transform: perspective(700px) rotateX(72deg) scale(.28);
          }

          28% {
            opacity: .52;
          }

          100% {
            opacity: 0;
            transform: perspective(700px) rotateX(72deg) scale(4.5);
          }
        }

        @keyframes interfaceText {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(.96);
            letter-spacing: 3px;
          }

          28% {
            opacity: 0;
          }

          44%, 76% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateY(-10px) scale(1.03);
            letter-spacing: 9px;
          }
        }

        @keyframes statusSequence {
          0%, 18% {
            opacity: 0;
            transform: translateY(8px);
          }

          32%, 72% {
            opacity: 1;
            transform: translateY(0);
          }

          100% {
            opacity: 0;
            transform: translateY(-7px);
          }
        }

        @keyframes reactorFlash {
          0%, 72% {
            opacity: 0;
          }

          88% {
            opacity: .9;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes reactorParticles {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.3) rotate(0deg);
          }

          25% {
            opacity: .9;
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(4.5) rotate(120deg);
          }
        }

        @media (max-width: 720px) {
          .auris-product-overlay {
            align-items: flex-end !important;
            padding: 16px !important;
            background: linear-gradient(
              180deg,
              rgba(2, 6, 23, 0.06) 0%,
              rgba(2, 6, 23, 0.62) 38%,
              rgba(2, 6, 23, 0.98) 100%
            ) !important;
          }

          .auris-product-panel {
            max-height: calc(100vh - 32px) !important;
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .auris-product-actions {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            width: 100%;
          }

          .auris-hex-button {
            width: 100% !important;
            min-width: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .auris-product-actions {
            grid-template-columns: 1fr;
          }

          .auris-hex-button {
            height: 72px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .auris-product-panel,
          .auris-reactor-element,
          .auris-reactor-text,
          .auris-reactor-status,
          .auris-reactor-flash {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}),(0,t.jsx)("div",{className:"auris-product-overlay",style:{position:"fixed",inset:0,zIndex:40,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"32px clamp(24px, 5vw, 72px)",pointerEvents:"none",background:`
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.02) 0%,
              rgba(2, 6, 23, 0.16) 38%,
              rgba(2, 6, 23, 0.82) 68%,
              rgba(2, 6, 23, 0.97) 100%
            )
          `},children:(0,t.jsxs)("section",{className:"auris-product-panel",style:{width:"min(610px, 100%)",maxHeight:"calc(100vh - 64px)",overflowY:"auto",padding:34,textAlign:"left",pointerEvents:c?"none":"auto",opacity:c?.08:1,transform:c?"scale(.9)":"scale(1)",transition:"opacity 500ms ease, transform 500ms ease",animation:"productPanelIn 650ms cubic-bezier(.2,.8,.2,1) both",border:`1px solid ${s}88`,borderRadius:28,background:`
              radial-gradient(
                circle at 85% 8%,
                ${s}38,
                transparent 34%
              ),
              linear-gradient(
                145deg,
                ${s}18,
                rgba(15, 23, 42, 0.96) 42%,
                rgba(2, 6, 23, 0.97)
              )
            `,boxShadow:`
              0 0 75px ${s}28,
              inset 0 0 45px ${s}12,
              0 28px 80px rgba(0, 0, 0, 0.48)
            `},children:[(0,t.jsxs)("button",{type:"button",onClick:l,disabled:c,style:{padding:0,border:"none",background:"transparent",color:s,fontSize:14,fontWeight:900,cursor:c?"default":"pointer",opacity:c?.45:1},children:["← Back to ",e]}),(0,t.jsxs)("div",{style:{marginTop:28,color:s,fontSize:12,fontWeight:950,letterSpacing:3,textTransform:"uppercase"},children:["AURIS ",e]}),(0,t.jsx)("h2",{style:{margin:"10px 0 0",color:"#ffffff",fontSize:"clamp(44px, 7vw, 78px)",lineHeight:.95,letterSpacing:"-0.045em",overflowWrap:"anywhere",textShadow:`0 0 28px ${s}35`},children:n}),(0,t.jsxs)("p",{style:{margin:"18px 0 0",maxWidth:540,color:"#d5deea",fontSize:18,lineHeight:1.65},children:[o,". Explore the concept, capabilities, future roadmap, and how AURIS intends to help people through this technology."]}),(0,t.jsx)("div",{style:{marginTop:28,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(145px, 1fr))",gap:12},children:[{title:"Concept",text:"The purpose and problem behind the product."},{title:"Capabilities",text:"Planned features and connected functions."},{title:"Roadmap",text:"The path from concept toward development."}].map(e=>(0,t.jsxs)("article",{style:{padding:16,borderRadius:17,border:`1px solid ${s}38`,background:`${s}0d`},children:[(0,t.jsx)("div",{style:{color:"#ffffff",fontWeight:950},children:e.title}),(0,t.jsx)("p",{style:{margin:"7px 0 0",color:"#9eacbf",fontSize:13,lineHeight:1.5},children:e.text})]},e.title))}),(0,t.jsxs)("div",{className:"auris-product-actions",style:{marginTop:30,display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},children:[(0,t.jsxs)("button",{className:"auris-hex-button",type:"button",disabled:c,onClick:()=>m(f),style:{width:154,height:82,display:"grid",placeItems:"center",padding:"0 18px",border:`1px solid ${s}`,background:`linear-gradient(145deg, ${s}42, ${s}16)`,color:"#ffffff",fontWeight:900,textAlign:"center",cursor:c?"default":"pointer",clipPath:"polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",filter:`drop-shadow(0 0 16px ${s}66)`,opacity:c?.6:1,transition:"transform 180ms ease, filter 180ms ease, opacity 180ms ease"},onMouseEnter:e=>{c||(e.currentTarget.style.transform="scale(1.045)",e.currentTarget.style.filter=`drop-shadow(0 0 24px ${s}99)`)},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.filter=`drop-shadow(0 0 16px ${s}66)`},children:["Explore ",n]}),(0,t.jsx)("button",{className:"auris-hex-button",type:"button",disabled:c,onClick:()=>m(`${f}#contact`),style:{width:154,height:82,display:"grid",placeItems:"center",padding:"0 18px",border:`1px solid ${s}88`,background:"rgba(15, 23, 42, 0.82)",color:"#d5deea",fontWeight:900,textAlign:"center",cursor:c?"default":"pointer",clipPath:"polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",filter:`drop-shadow(0 0 10px ${s}35)`,opacity:c?.6:1,transition:"transform 180ms ease, filter 180ms ease, opacity 180ms ease"},onMouseEnter:e=>{c||(e.currentTarget.style.transform="scale(1.045)",e.currentTarget.style.filter=`drop-shadow(0 0 20px ${s}66)`)},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.filter=`drop-shadow(0 0 10px ${s}35)`},children:"Contact AURIS"})]})]})}),c&&(0,t.jsxs)("div",{style:{position:"fixed",inset:0,zIndex:100,overflow:"hidden",pointerEvents:"none",background:`
              radial-gradient(
                circle at center,
                ${s}55 0%,
                #020617 52%,
                #000000 100%
              )
            `},children:[(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"10%",right:"10%",bottom:"-48%",height:"100%",backgroundImage:`
                linear-gradient(${s}3d 1px, transparent 1px),
                linear-gradient(90deg, ${s}3d 1px, transparent 1px)
              `,backgroundSize:"42px 42px",transformOrigin:"center bottom",animation:"tunnelGrid 1.45s cubic-bezier(.2,.8,.2,1) forwards"}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"50%",top:"50%",width:"min(430px, 82vw)",aspectRatio:"1",borderRadius:"50%",border:`2px solid ${s}b3`,borderTopColor:"transparent",borderBottomColor:"#ffffff",boxShadow:`
                0 0 24px ${s},
                inset 0 0 28px ${s}73
              `,animation:`
                reactorSpin 1.05s linear infinite,
                reactorZoom 1.45s cubic-bezier(.2,.8,.2,1) forwards
              `}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"50%",top:"50%",width:"min(310px, 61vw)",aspectRatio:"1",borderRadius:"50%",border:`3px dashed ${s}d9`,boxShadow:`0 0 32px ${s}cc`,animation:`
                reactorSpinReverse .72s linear infinite,
                reactorZoom 1.35s cubic-bezier(.2,.8,.2,1) forwards
              `}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"50%",top:"50%",width:"min(205px, 42vw)",aspectRatio:"1",borderRadius:"50%",border:`7px double ${s}`,borderLeftColor:"#ffffff",borderRightColor:`${s}2e`,filter:`drop-shadow(0 0 18px ${s})`,animation:`
                reactorSpin 480ms linear infinite,
                reactorZoom 1.25s cubic-bezier(.2,.8,.2,1) forwards
              `}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"50%",top:"50%",width:"min(118px, 25vw)",aspectRatio:"1.13",background:`
                radial-gradient(
                  circle,
                  #ffffff 0%,
                  ${s}cc 27%,
                  ${s} 62%,
                  #020617 100%
                )
              `,clipPath:"polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",boxShadow:`
                0 0 30px #ffffff,
                0 0 70px ${s},
                0 0 160px ${s}cc
              `,animation:`
                energyPulse 240ms ease-in-out infinite,
                coreIgnition 1.2s cubic-bezier(.2,.8,.2,1) forwards
              `}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"50%",top:"50%",width:"min(170px, 35vw)",aspectRatio:"1.13",border:"2px solid rgba(255,255,255,.82)",clipPath:"polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",filter:`drop-shadow(0 0 18px ${s})`,animation:`
                reactorSpinReverse 650ms linear infinite,
                reactorZoom 1.3s cubic-bezier(.2,.8,.2,1) forwards
              `}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",left:"50%",top:"50%",width:"min(520px, 92vw)",aspectRatio:"1",borderRadius:"50%",backgroundImage:`
                repeating-conic-gradient(
                  from 0deg,
                  ${s} 0deg 2deg,
                  transparent 2deg 18deg
                )
              `,maskImage:"radial-gradient(circle, transparent 0 46%, black 48% 50%, transparent 52%)",WebkitMaskImage:"radial-gradient(circle, transparent 0 46%, black 48% 50%, transparent 52%)",animation:"reactorParticles 1.4s cubic-bezier(.2,.8,.2,1) forwards"}}),(0,t.jsx)("div",{className:"auris-reactor-element",style:{position:"absolute",inset:0,height:"22%",background:`
                linear-gradient(
                  to bottom,
                  transparent,
                  ${s}33,
                  rgba(255,255,255,.72),
                  ${s}33,
                  transparent
                )
              `,filter:"blur(2px)",animation:"scanSweep 760ms linear infinite"}}),(0,t.jsx)("div",{className:"auris-reactor-text",style:{position:"absolute",inset:0,zIndex:4,display:"grid",placeItems:"center",padding:24,color:"#ffffff",textAlign:"center",textTransform:"uppercase",textShadow:`
                0 0 12px #ffffff,
                0 0 30px ${s}
              `,animation:"interfaceText 1.42s ease both"},children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{color:s,fontSize:11,fontWeight:950,letterSpacing:6},children:"AURIS TECHNOLOGIES"}),(0,t.jsxs)("div",{style:{marginTop:12,fontSize:"clamp(18px, 3vw, 32px)",fontWeight:950,letterSpacing:5},children:[e," · ",n]}),(0,t.jsx)("div",{className:"auris-reactor-status",style:{marginTop:16,color:"#dbeafe",fontSize:10,fontWeight:800,letterSpacing:4,animation:"statusSequence 1.35s ease both"},children:"INITIALIZING PRODUCT EXPERIENCE"})]})}),(0,t.jsx)("div",{className:"auris-reactor-flash",style:{position:"absolute",inset:0,zIndex:10,background:`
                radial-gradient(
                  circle at center,
                  #ffffff 0%,
                  ${s}cc 32%,
                  ${s} 65%,
                  #020617 100%
                )
              `,animation:"reactorFlash 1.45s ease forwards"}})]})]})}function b({selectedNode:e,selectedProduct:a,radius:r,color:n,onSelectProduct:i}){return e?(0,t.jsx)(t.Fragment,{children:e.products.map((o,s)=>{let l=360/e.products.length*s-90,d=Math.cos(l*Math.PI/180)*r,c=Math.sin(l*Math.PI/180)*r,p=a===o.id,u=null!==a&&a!==o.id;return(0,t.jsx)("div",{style:{position:"absolute",left:`calc(50% + ${d}px)`,top:`calc(50% + ${c}px)`,transform:"translate(-50%, -50%)",animation:"productBurst 460ms ease both",animationDelay:`${75*s}ms`,zIndex:3},children:(0,t.jsx)(f,{label:o.name,color:n,size:"outer",selected:p,dimmed:u,onClick:()=>i(o.id)})},o.id)})}):null}e.s(["default",0,function(){let[e,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null),[f,h]=(0,a.useState)(null),[y,v]=(0,a.useState)(null),[w,S]=(0,a.useState)("idle"),[j,I]=(0,a.useState)(!1),$=(0,a.useRef)(!1),k=(0,a.useRef)([]),E=r.find(e=>e.id===l),R=E?.products.find(e=>e.id===f),T=r.find(e=>e.id===y),A=E??T,N=A?.color??"#60a5fa",C=(0,a.useCallback)(()=>{k.current.forEach(e=>{clearTimeout(e)}),k.current=[]},[]);(0,a.useEffect)(()=>()=>{C()},[C]);let P=(0,a.useCallback)((e,t)=>{let a=setTimeout(()=>{S(e)},t);k.current.push(a)},[]),z=(0,a.useCallback)(()=>{e||$.current||(I(!0),S("hovering"))},[e]),M=(0,a.useCallback)(()=>{e||$.current||(I(!1),S("idle"))},[e]),O=(0,a.useCallback)(()=>{if(e||$.current)return;$.current=!0,I(!1),C(),S("freezing"),P("compressing",450),P("opening",1150),P("entering",2150),P("tunnel",3350),P("arrival",8200);let t=setTimeout(()=>{s(!0)},9400),a=setTimeout(()=>{S("idle")},10800);k.current.push(t,a)},[e,C,P]),W=(0,a.useCallback)(()=>{C(),$.current=!1,h(null),d(null),v(null),I(!1),S("idle"),s(!1)},[C]),D="idle"!==w&&"hovering"!==w;return(0,t.jsxs)("section",{style:{minHeight:"100vh",position:"relative",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"hidden",padding:32,paddingTop:e?24:60,textAlign:"center",color:"#ffffff",background:A?`radial-gradient(circle at center, ${N}38, #020617 58%)`:"radial-gradient(circle at center, #1e3a8a55, #020617 58%)",transition:"background 700ms ease, padding-top 500ms ease"},children:[(0,t.jsx)("style",{children:`
        @keyframes productExperienceIn {
          from {
            opacity: 0;
            transform: scale(.92);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawProductBranch {
          from {
            stroke-dashoffset: 1;
            opacity: 0;
          }

          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes branchEnergyPulse {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }

        @keyframes ringDrift {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes ringDriftReverse {
          from {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }
        }

        @keyframes nodeFade {
          from {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.35);
          }

          to {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1);
          }
        }

        @keyframes productBurst {
          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.15);
          }

          70% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1.08);
          }

          100% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1);
          }
        }
      `}),(0,t.jsx)(u,{active:e,accent:N,title:E?.name,subtitle:E?E.tagline:"Select a division from the inner ring.",onCollapse:W}),(0,t.jsxs)("div",{style:{width:"100%",maxWidth:1040,opacity:D?.28:1,transform:D?"scale(0.96)":"scale(1)",filter:D?"blur(2px)":"blur(0px)",transition:"opacity 450ms ease, transform 450ms ease, filter 450ms ease"},children:[!e&&(0,t.jsxs)("header",{children:[(0,t.jsx)("p",{style:{margin:0,color:N,fontWeight:900,letterSpacing:3},children:"EXPLORE THE"}),(0,t.jsx)("h1",{style:{margin:"8px 0 10px",fontSize:52},children:"AURIS Ecosystem"}),(0,t.jsx)("p",{style:{margin:"0 0 10px",color:"#cbd5e1",fontSize:16},children:"Technology Built to Help People"})]}),(0,t.jsxs)("div",{style:{position:"relative",width:620,height:e?620:470,maxWidth:"100%",margin:e?"18px auto 0":"0 auto",transition:"height 500ms ease, margin 500ms ease"},children:[e&&(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",width:390,height:390,borderRadius:"50%",border:`1px solid ${N}55`,transform:"translate(-50%, -50%)",animation:"ringDrift 32s linear infinite",animationPlayState:D?"paused":"running",boxShadow:`0 0 44px ${N}22 inset`,pointerEvents:"none",zIndex:1}}),E&&(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",width:560,height:560,borderRadius:"50%",border:`1px dashed ${N}55`,transform:"translate(-50%, -50%)",animation:"ringDriftReverse 45s linear infinite",animationPlayState:D?"paused":"running",boxShadow:`0 0 54px ${N}18 inset`,pointerEvents:"none",zIndex:0}}),(0,t.jsx)(p,{active:e,selected:l,nodeCount:r.length,radius:190,color:N}),(0,t.jsx)(m,{active:e,nodes:r,selected:l,hovered:y,radius:190,onSelect:e=>{d(e),v(null)},onHover:v}),(0,t.jsx)(g,{selectedNode:E,selectedId:l,nodes:r,innerRadius:190,productRadius:285,color:N}),(0,t.jsx)(b,{selectedNode:E,selectedProduct:f,radius:285,color:N,onSelectProduct:h}),(0,t.jsx)(c,{active:e,accent:N,phase:w,isHovered:j,onHoverStart:z,onHoverEnd:M,onActivate:O}),E&&R&&(0,t.jsx)(x,{division:E.name,divisionId:E.id,product:R.name,productId:R.id,tagline:E.tagline,accent:N,onBack:()=>h(null)})]})]}),(0,t.jsxs)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1e3},"aria-hidden":"true",children:[(0,t.jsx)(o.default,{phase:w}),(0,t.jsx)(i.default,{phase:w}),(0,t.jsx)(n.default,{phase:w})]})]})}],36152)}]);