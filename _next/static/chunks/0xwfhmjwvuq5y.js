(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,92996,(e,t,a)=>{},81752,(e,t,a)=>{var i=e.i(39474);e.r(92996);var s=e.r(43841),r=s&&"object"==typeof s&&"default"in s?s:{default:s},n=void 0!==i.default&&i.default.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,a=t.name,i=void 0===a?"stylesheet":a,s=t.optimizeForSpeed,r=void 0===s?n:s;d(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",d("boolean"==typeof r,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=r,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,a=e.prototype;return a.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,a){return"number"==typeof a?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(d(o(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!=typeof t&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var a="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];d(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},a.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},a.makeStyleTag=function(e,t,a){t&&d(o(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return a?s.insertBefore(i,a):s.appendChild(i),i},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,a=e.length;a;)t=33*t^e.charCodeAt(--a);return t>>>0},p={};function x(e,t){if(!t)return"jsx-"+e;var a=String(t),i=e+a;return p[i]||(p[i]="jsx-"+c(e+"-"+a)),p[i]}function m(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var a=e+t;return p[a]||(p[a]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[a]}var b=function(){function e(e){var t=void 0===e?{}:e,a=t.styleSheet,i=void 0===a?null:a,s=t.optimizeForSpeed,r=void 0!==s&&s;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),i&&"boolean"==typeof r&&(this._sheet.setOptimizeForSpeed(r),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var a=this.getIdAndRules(e),i=a.styleId,s=a.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var r=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=r,this._instancesCounts[i]=1},t.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var i=this._fromServer&&this._fromServer[a];i?(i.parentNode.removeChild(i),delete this._fromServer[a]):(this._indices[a].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[a]),delete this._instancesCounts[a]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return a[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,a;return t=this.cssRules(),void 0===(a=e)&&(a={}),t.map(function(e){var t=e[0],i=e[1];return r.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:a.nonce?a.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,a=e.dynamic,i=e.id;if(a){var s=x(i,a);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return m(s,e)}):[m(s,t)]}}return{styleId:x(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),u=s.createContext(null);function g(){return new b}function f(){return s.useContext(u)}u.displayName="StyleSheetContext";var h=r.default.useInsertionEffect||r.default.useLayoutEffect,y="u">typeof window?g():void 0;function j(e){var t=y||f();return t&&("u"<typeof window?t.add(e):h(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}j.dynamic=function(e){return e.map(function(e){return x(e[0],e[1])}).join(" ")},a.StyleRegistry=function(e){var t=e.registry,a=e.children,i=s.useContext(u),n=s.useState(function(){return i||t||g()})[0];return r.default.createElement(u.Provider,{value:n},a)},a.createStyleRegistry=g,a.style=j,a.useStyleRegistry=f},61285,(e,t,a)=>{t.exports=e.r(81752).style},70717,e=>{"use strict";var t=e.i(66663),a=e.i(23215),i=e.i(43841),s=e.i(19386),r=e.i(77869),n=e.i(33094),o=e.i(4921);let l=[{name:"Terra",color:"#22c55e",rotation:0},{name:"Atlas",color:"#3b82f6",rotation:60},{name:"Medical",color:"#ef4444",rotation:120},{name:"Haven",color:"#c49a6c",rotation:180},{name:"Enterprise",color:"#ffffff",rotation:240},{name:"Orbit",color:"#8b5cf6",rotation:300}];function d({phase:e,isHovered:i,onHoverStart:s,onHoverEnd:r,onActivate:n}){let c="idle"===e||"hovering"===e,p="freezing"===e||"compressing"===e||"opening"===e||"entering"===e||"tunnel"===e||"arrival"===e,x="compressing"===e,m="opening"===e,b="entering"===e||"tunnel"===e||"arrival"===e;return(0,t.jsx)("div",{className:"   pointer-events-auto   absolute left-1/2 top-1/2 z-[100]   h-[min(72vw,620px)]   w-[min(72vw,620px)]   -translate-x-1/2   -translate-y-1/2   ",children:(0,t.jsxs)(a.motion.button,{type:"button","aria-label":"Enter AURA AI",disabled:!c,onPointerEnter:s,onPointerLeave:r,onFocus:s,onBlur:r,onClick:n,className:"   pointer-events-auto   relative h-full w-full   cursor-pointer   rounded-full   border-0   bg-transparent   p-0   outline-none   disabled:cursor-default   ",animate:{scale:x?.56:m?.72:b?8:i?1.085:1,opacity:+!b},transition:{duration:b?1.15:.65,ease:b?[.76,0,.82,0]:[.22,1,.36,1]},children:[(0,t.jsx)(o.default,{phase:e,isHovered:i}),(0,t.jsx)(a.motion.div,{className:"pointer-events-none absolute inset-[20%] rounded-full blur-[48px]",style:{background:"radial-gradient(circle, rgba(34,211,238,0.58) 0%, rgba(59,130,246,0.26) 34%, rgba(139,92,246,0.22) 54%, transparent 76%)"},animate:{opacity:p?.32:i?[.62,1,.62]:[.32,.68,.32],scale:p?.82:i?[1,1.18,1]:[.96,1.06,.96]},transition:{duration:p?.3:i?2.1:5,repeat:p?0:1/0,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-[17%]",children:l.map((e,s)=>(0,t.jsx)(a.motion.div,{className:"   absolute left-1/2 top-1/2   h-[50%] w-[3px]   origin-bottom   rounded-full   ",style:{background:`linear-gradient(
                  to top,
                  transparent 0%,
                  ${e.color}33 22%,
                  ${e.color} 100%
                )`,boxShadow:"#ffffff"===e.color?"0 0 18px rgba(255,255,255,0.9)":`0 0 18px ${e.color}`,transform:`
                  translate(-50%, -100%)
                  rotate(${e.rotation}deg)
                `},animate:{opacity:p?.28:i?[.48,1,.48]:[.2,.62,.2],scaleY:p?.76:i?[.9,1.15,.9]:[.82,1,.82]},transition:{duration:p?.25:2.7+.25*s,repeat:p?0:1/0,ease:"easeInOut"},children:(0,t.jsx)(a.motion.span,{className:"   absolute left-1/2 top-0   h-3 w-3   -translate-x-1/2   -translate-y-1/2   rounded-full   ",style:{background:e.color,boxShadow:"#ffffff"===e.color?"0 0 16px rgba(255,255,255,1)":`0 0 16px ${e.color}`},animate:{scale:p?.7:i?[.8,1.6,.8]:[.7,1.2,.7],opacity:p?.4:[.45,1,.45]},transition:{duration:p?.2:2.2+.2*s,repeat:p?0:1/0,ease:"easeInOut"}})},e.name))}),(0,t.jsx)(a.motion.div,{className:"pointer-events-none absolute inset-[23%] rounded-full border border-cyan-100/20",style:{background:"conic-gradient(from 0deg, transparent 0deg 18deg, rgba(103,232,249,0.34) 18deg 42deg, transparent 42deg 78deg, rgba(255,255,255,0.22) 78deg 104deg, transparent 104deg 142deg, rgba(139,92,246,0.3) 142deg 170deg, transparent 170deg 220deg, rgba(59,130,246,0.28) 220deg 250deg, transparent 250deg 302deg, rgba(103,232,249,0.32) 302deg 330deg, transparent 330deg 360deg)",maskImage:"radial-gradient(circle, transparent 60%, black 61%)",WebkitMaskImage:"radial-gradient(circle, transparent 60%, black 61%)",boxShadow:"0 0 40px rgba(34,211,238,0.12)"},animate:{rotate:360*!p,opacity:m?.2:.8},transition:{rotate:{duration:i?17:28,repeat:p?0:1/0,ease:"linear"},opacity:{duration:.35}}}),(0,t.jsxs)(a.motion.div,{className:"   pointer-events-none   absolute inset-[29%]   overflow-hidden   rounded-full   border border-cyan-100/40   backdrop-blur-xl   ",style:{background:`
              radial-gradient(
                circle at 34% 27%,
                rgba(255,255,255,0.96) 0%,
                rgba(165,243,252,0.68) 8%,
                rgba(34,211,238,0.38) 24%,
                rgba(49,46,129,0.58) 58%,
                rgba(2,6,23,0.98) 100%
              )
            `,boxShadow:`
              inset 0 0 56px rgba(103,232,249,0.34),
              inset -24px -30px 58px rgba(2,6,23,0.88),
              0 0 48px rgba(34,211,238,0.44),
              0 0 115px rgba(139,92,246,0.3)
            `},animate:{borderRadius:i?["50%","45%","50%"]:["50%","48%","50%"],scale:x?.76:m?.84:i?1.065:1},transition:{borderRadius:{duration:5,repeat:p?0:1/0,ease:"easeInOut"},scale:{duration:.5,ease:[.22,1,.36,1]}},children:[(0,t.jsx)(a.motion.div,{className:"absolute inset-[-35%] opacity-45",style:{backgroundImage:`
                radial-gradient(
                  circle at center,
                  rgba(255,255,255,0.9) 0 1px,
                  transparent 2px
                ),
                linear-gradient(
                  90deg,
                  transparent 48%,
                  rgba(103,232,249,0.12) 50%,
                  transparent 52%
                )
              `,backgroundSize:"22px 22px, 42px 42px"},animate:{rotate:360*!p},transition:{duration:80,repeat:p?0:1/0,ease:"linear"}}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full opacity-65",viewBox:"0 0 300 300","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("filter",{id:"aura-core-glow",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"3",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})}),Array.from({length:9}).map((e,i)=>{let s=35+28*i,r=265-22*i;return(0,t.jsx)(a.motion.path,{d:`M20 ${s} C90 ${r}, 210 ${s}, 280 ${r}`,fill:"none",stroke:i%3==0?"#8b5cf6":i%3==1?"#67e8f9":"#ffffff",strokeWidth:"1.2",strokeLinecap:"round",strokeDasharray:"8 12",filter:"url(#aura-core-glow)",animate:{strokeDashoffset:p?0:[0,-160],opacity:p?.32:[.2,.9,.2]},transition:{strokeDashoffset:{duration:8+i,repeat:p?0:1/0,ease:"linear"},opacity:{duration:3+i%4,repeat:p?0:1/0,ease:"easeInOut"}}},i)})]}),(0,t.jsx)(a.motion.div,{className:"   absolute left-1/2 top-1/2   h-[38%] w-[38%]   -translate-x-1/2   -translate-y-1/2   rounded-full   ",style:{background:"radial-gradient(circle, #ffffff 0%, #a5f3fc 16%, #22d3ee 35%, rgba(124,58,237,0.78) 62%, transparent 76%)",boxShadow:"0 0 38px rgba(255,255,255,0.9), 0 0 86px rgba(34,211,238,0.88)"},animate:{scale:x?.55:m?1.8:i?[.9,1.24,.9]:[.88,1.06,.88],opacity:m?0:p?.85:[.7,1,.7]},transition:{duration:p?.45:i?1.8:4,repeat:p?0:1/0,ease:"easeInOut"}}),(0,t.jsxs)(a.motion.div,{className:"absolute inset-0 flex flex-col items-center justify-center",animate:{opacity:m||b?0:1,scale:i?1.04:1},transition:{duration:.35},children:[(0,t.jsx)("span",{className:"text-[clamp(0.55rem,1vw,0.8rem)] font-semibold tracking-[0.42em] text-cyan-100/65",children:"AURIS"}),(0,t.jsx)("span",{className:"mt-1 text-[clamp(1.15rem,2.3vw,2.1rem)] font-semibold tracking-[0.22em] text-white",children:"AURA"}),(0,t.jsx)("span",{className:"mt-2 text-[clamp(0.42rem,0.7vw,0.6rem)] tracking-[0.26em] text-cyan-100/55",children:"ENTER THE INTELLIGENCE"})]})]}),(0,t.jsxs)(a.motion.div,{className:"   pointer-events-none   absolute inset-[29%]   overflow-hidden   rounded-full   ",initial:!1,animate:{opacity:m||b?1:0,scale:m?[.15,1]:b?4:.15},transition:{duration:b?1.1:.85,ease:[.22,1,.36,1]},children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle,#ffffff_0%,#a5f3fc_14%,#22d3ee_34%,#7c3aed_58%,#020617_78%)]"}),Array.from({length:6}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"   absolute left-1/2 top-1/2   h-[62%] w-[34%]   origin-bottom   rounded-[100%_0_100%_0]   border border-cyan-100/30   bg-slate-950/80   backdrop-blur-lg   ",style:{transform:`
                  translate(-50%, -100%)
                  rotate(${60*i}deg)
                `},animate:{rotate:m?60*i+52:60*i,y:m?-24:0,opacity:m?[1,.78]:1},transition:{duration:.85,delay:.035*i,ease:[.22,1,.36,1]}},i)),(0,t.jsx)(a.motion.div,{className:"   absolute left-1/2 top-1/2   h-[18%] w-[18%]   -translate-x-1/2   -translate-y-1/2   rounded-full   bg-white   ",style:{boxShadow:"0 0 45px white, 0 0 100px rgba(103,232,249,0.95)"},animate:{scale:m?[.2,2.8]:.2,opacity:m?[.6,1]:0},transition:{duration:.8,ease:"easeOut"}})]})]})})}let c=Array.from({length:48},(e,t)=>({id:t,x:(37*t+11)%100,y:(53*t+7)%100,size:3+t%4})),p=c.flatMap((e,t)=>{let a=[],i=c[t+1],s=c[t+6],r=c[t+11];return i&&a.push({id:`${e.id}-${i.id}`,from:e,to:i}),s&&a.push({id:`${e.id}-${s.id}`,from:e,to:s}),t%3==0&&r&&a.push({id:`${e.id}-${r.id}`,from:e,to:r}),a});function x({hovered:e,phase:i}){let s="idle"!==i&&"hovering"!==i,r="entering"===i||"tunnel"===i;return(0,t.jsxs)(a.motion.div,{className:"pointer-events-none absolute inset-0 z-0 overflow-hidden","aria-hidden":"true",animate:{opacity:r?.12:1,scale:r?1.6:1},transition:{duration:1.2,ease:"easeIn"},children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]",style:{background:"radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.05) 38%, transparent 72%)"},animate:{scale:e?[.95,1.12,.95]:[.96,1.04,.96],opacity:s?.18:e?[.25,.55,.25]:[.14,.3,.14]},transition:{duration:e?4:8,repeat:s?0:1/0,ease:"easeInOut"}}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("filter",{id:"aura-neural-glow",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"0.35",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,t.jsxs)("linearGradient",{id:"aura-neural-line",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgba(34,211,238,0.04)"}),(0,t.jsx)("stop",{offset:"50%",stopColor:"rgba(103,232,249,0.34)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgba(59,130,246,0.04)"})]})]}),p.map((i,r)=>(0,t.jsx)(a.motion.line,{x1:i.from.x,y1:i.from.y,x2:i.to.x,y2:i.to.y,stroke:"url(#aura-neural-line)",strokeWidth:"0.11",vectorEffect:"non-scaling-stroke",filter:"url(#aura-neural-glow)",initial:!1,animate:{opacity:s?.1:e?[.12,.5,.12]:[.06,.22,.06]},transition:{duration:3.5+r%6*.45,delay:r%10*.18,repeat:s?0:1/0,ease:"easeInOut"}},i.id)),!s&&p.filter((e,t)=>t%4==0).map((i,s)=>(0,t.jsx)(a.motion.circle,{r:e?.34:.24,fill:"rgba(165,243,252,0.95)",filter:"url(#aura-neural-glow)",initial:{cx:i.from.x,cy:i.from.y,opacity:0},animate:{cx:[i.from.x,i.to.x],cy:[i.from.y,i.to.y],opacity:[0,1,0]},transition:{duration:e?1.8:3.2,delay:.27*s,repeat:1/0,ease:"linear"}},`pulse-${i.id}`))]}),c.map((i,r)=>(0,t.jsx)(a.motion.div,{className:"absolute -translate-x-1/2 -translate-y-1/2 rounded-full",style:{left:`${i.x}%`,top:`${i.y}%`,width:i.size,height:i.size,background:r%5==0?"#e0f2fe":"#67e8f9",boxShadow:r%5==0?"0 0 18px rgba(224,242,254,0.95)":"0 0 14px rgba(34,211,238,0.72)"},initial:!1,animate:{scale:s?.72:e?[1,2.1,1]:[.9,1.45,.9],opacity:s?.18:e?[.42,1,.42]:[.2,.62,.2]},transition:{duration:e?1.8+r%4*.3:3+r%6*.45,delay:r%12*.16,repeat:s?0:1/0,ease:"easeInOut"},children:r%6==0&&!s&&(0,t.jsx)(a.motion.span,{className:"absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20",animate:{scale:[.4,2.4],opacity:[.55,0]},transition:{duration:e?1.6:3,delay:r%8*.3,repeat:1/0,ease:"easeOut"}})},i.id)),!s&&Array.from({length:3}).map((i,s)=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border border-cyan-300/10",style:{width:260+150*s,height:260+150*s,translateX:"-50%",translateY:"-50%"},animate:{scale:e?[.82,1.18,.82]:[.9,1.06,.9],opacity:e?[.08,.3,.08]:[.04,.14,.04],rotate:s%2==0?360:-360},transition:{scale:{duration:5+s,repeat:1/0,ease:"easeInOut"},opacity:{duration:5+s,repeat:1/0,ease:"easeInOut"},rotate:{duration:45+12*s,repeat:1/0,ease:"linear"}}},`thought-wave-${s}`))]})}let m=["#67e8f9","#ffffff","#22c55e","#3b82f6","#ef4444","#c49a6c","#8b5cf6"],b=Array.from({length:96},(e,t)=>({id:t,left:(37*t+9)%100,top:(53*t+13)%100,size:t%14==0?5:t%7==0?4:2+t%2,driftX:t%2==0?18+t%6*6:-(18+t%6*6),driftY:32+t%8*9,duration:8+t%9,delay:t%15*.32,color:t%5==0?m[(Math.floor(t/5)+1)%m.length]:"#67e8f9"})),u=[{id:"terra-data",text:"ENVIRONMENTAL DATA",color:"#22c55e",left:"9%",top:"23%",delay:.2},{id:"atlas-data",text:"SPATIAL INTELLIGENCE",color:"#3b82f6",left:"76%",top:"18%",delay:1.1},{id:"medical-data",text:"CLINICAL SYSTEMS",color:"#ef4444",left:"81%",top:"67%",delay:2},{id:"haven-data",text:"ROBOTIC ASSISTANCE",color:"#c49a6c",left:"12%",top:"72%",delay:2.9},{id:"enterprise-data",text:"DIGITAL INFRASTRUCTURE",color:"#ffffff",left:"40%",top:"83%",delay:3.8},{id:"orbit-data",text:"ORBITAL TELEMETRY",color:"#8b5cf6",left:"42%",top:"9%",delay:4.7}];function g({phase:e}){let i="freezing"===e||"compressing"===e||"opening"===e,s="entering"===e||"tunnel"===e||"arrival"===e;return(0,t.jsxs)(a.motion.div,{className:"pointer-events-none absolute inset-0 z-[5] overflow-hidden","aria-hidden":"true",animate:{opacity:+!s,scale:s?2.8:1},transition:{duration:1.1,ease:"easeIn"},children:[b.map(e=>(0,t.jsx)(a.motion.span,{className:"absolute rounded-full",style:{left:`${e.left}%`,top:`${e.top}%`,width:e.size,height:e.size,background:e.color,boxShadow:"#ffffff"===e.color?"0 0 14px rgba(255,255,255,0.95)":`0 0 13px ${e.color}`},initial:!1,animate:i?{x:0,y:0,scale:.82,opacity:.34}:s?{x:14*e.driftX,y:12*e.driftY,scale:5,opacity:0}:{x:[0,e.driftX,.35*e.driftX,0],y:[0,-e.driftY,-(.45*e.driftY),0],scale:[.65,e.size>=4?1.65:1.25,.85,.65],opacity:[.08,e.size>=4?.95:.62,.3,.08]},transition:i?{duration:.2,ease:"easeOut"}:s?{duration:1.05,delay:e.id%10*.015,ease:[.76,0,.82,0]}:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"easeInOut"}},e.id)),Array.from({length:14}).map((e,r)=>{let n=m[r%m.length];return(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:`${7+31*r%86}%`,top:`${8+47*r%84}%`},animate:i?{opacity:.22,scale:.8}:s?{opacity:0,scale:6}:{opacity:[.08,.6,.08],scale:[.72,1.3,.72],rotate:r%2==0?360:-360},transition:{opacity:{duration:i?.2:s?.9:5+r%5,repeat:i||s?0:1/0,ease:"easeInOut"},scale:{duration:i?.2:s?.9:5+r%5,repeat:i||s?0:1/0,ease:"easeInOut"},rotate:{duration:28+2*r,repeat:i||s?0:1/0,ease:"linear"}},children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border",style:{borderColor:`${n}28`,boxShadow:`0 0 24px ${n}18`}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed",style:{borderColor:`${n}55`}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:n,boxShadow:"#ffffff"===n?"0 0 14px white":`0 0 14px ${n}`}})]},`cluster-${r}`)}),!s&&u.map((e,s)=>(0,t.jsx)(a.motion.div,{className:"absolute whitespace-nowrap font-mono text-[7px] font-semibold tracking-[0.3em]",style:{left:e.left,top:e.top,color:e.color,textShadow:"#ffffff"===e.color?"0 0 12px rgba(255,255,255,0.7)":`0 0 12px ${e.color}`},animate:i?{opacity:.16,x:0,y:0}:{opacity:[0,.52,0],x:[s%2==0?-16:16,0,s%2==0?16:-16],y:[12,-10,-28],filter:["blur(5px)","blur(0px)","blur(5px)"]},transition:{duration:i?.2:8+.8*s,delay:e.delay,repeat:i?0:1/0,ease:"easeInOut"},children:e.text},e.id)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full",animate:{rotate:360*!i,opacity:+!s,scale:s?3.5:1},transition:{rotate:{duration:55,repeat:i?0:1/0,ease:"linear"},opacity:{duration:.8},scale:{duration:1,ease:"easeIn"}},children:m.slice(1).map((e,s)=>(0,t.jsx)(a.motion.span,{className:"absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full",style:{background:e,boxShadow:"#ffffff"===e?"0 0 16px white":`0 0 16px ${e}`,transform:`
                translate(-50%, -50%)
                rotate(${60*s}deg)
                translateY(-270px)
              `},animate:{scale:i?.72:[.7,1.5,.7],opacity:i?.3:[.3,1,.3]},transition:{duration:i?.2:2.7+.3*s,delay:.16*s,repeat:i?0:1/0,ease:"easeInOut"}},e))}),(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(1,3,10,0.1)_68%,rgba(1,3,10,0.48)_100%)]"})]})}function f(){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden","aria-hidden":"true",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[#01030a]"}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]",style:{background:"radial-gradient(circle, rgba(34,211,238,.12) 0%, rgba(124,58,237,.10) 35%, rgba(59,130,246,.08) 55%, transparent 75%)"},animate:{scale:[1,1.08,1],opacity:[.45,.7,.45]},transition:{duration:18,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute right-[-10%] top-[8%] h-[700px] w-[700px] rounded-full blur-[140px]",style:{background:"radial-gradient(circle, rgba(168,85,247,.14) 0%, transparent 70%)"},animate:{x:[0,-40,0],y:[0,25,0],opacity:[.2,.45,.2]},transition:{duration:24,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-[-10%] bottom-[-8%] h-[850px] w-[850px] rounded-full blur-[150px]",style:{background:"radial-gradient(circle, rgba(34,197,94,.08) 0%, transparent 72%)"},animate:{x:[0,30,0],y:[0,-25,0],opacity:[.15,.35,.15]},transition:{duration:28,repeat:1/0,ease:"easeInOut"}}),Array.from({length:260}).map((e,i)=>{let s=i%4+1;return(0,t.jsx)(a.motion.span,{className:"absolute rounded-full bg-white",style:{width:s,height:s,left:`${37*i%100}%`,top:`${53*i%100}%`,opacity:.15+i%6*.1},animate:{opacity:[.2+i%5*.08,1,.2+i%5*.08],scale:[1,1.8,1]},transition:{duration:3+i%6,delay:i%12*.35,repeat:1/0,ease:"easeInOut"}},i)}),Array.from({length:36}).map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:`${29*i%100}%`,top:`${61*i%100}%`},animate:{scale:[1,2.4,1],opacity:[.35,1,.35]},transition:{duration:5+i%5,delay:.22*i,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"absolute h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-white/60"}),(0,t.jsx)("div",{className:"absolute h-[1px] w-5 -translate-x-1/2 -translate-y-1/2 bg-white/60"}),(0,t.jsx)("div",{className:"h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,.9)]"})]},`bright-${i}`)),Array.from({length:120}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full bg-cyan-200/40",style:{width:2,height:2,left:`${19*i%100}%`,top:`${43*i%100}%`},animate:{y:[0,-80,0],x:[0,i%2==0?15:-15,0],opacity:[0,.4,0]},transition:{duration:12+i%8,delay:i%10*.6,repeat:1/0,ease:"easeInOut"}},`dust-${i}`)),(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(1,3,10,.45)_75%,rgba(1,3,10,.95)_100%)]"})]})}let h=[{name:"Terra",color:"#22c55e",angle:215},{name:"Atlas",color:"#3b82f6",angle:255},{name:"Medical",color:"#ef4444",angle:300},{name:"Haven",color:"#c49a6c",angle:25},{name:"Enterprise",color:"#ffffff",angle:90},{name:"Orbit",color:"#8b5cf6",angle:145}];function y({phase:e,isHovered:i}){let s="idle"!==e&&"hovering"!==e,r="entering"===e||"tunnel"===e||"arrival"===e;return(0,t.jsxs)(a.motion.div,{className:"pointer-events-none absolute left-1/2 top-1/2 z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2","aria-hidden":"true",animate:{scale:r?2.8:1,opacity:+!r},transition:{duration:1.1,ease:"easeIn"},children:[h.map((e,r)=>(0,t.jsxs)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[47%] w-[3px] origin-bottom",style:{transform:`
              translate(-50%, -100%)
              rotate(${e.angle}deg)
            `,background:`linear-gradient(
              to top,
              transparent 0%,
              ${e.color}18 14%,
              ${e.color}66 48%,
              ${e.color} 82%,
              #ffffff 100%
            )`,boxShadow:"#ffffff"===e.color?"0 0 28px rgba(255,255,255,0.85)":`0 0 26px ${e.color}`},animate:{opacity:s?.2:i?[.45,1,.45]:[.18,.62,.18],scaleY:s?.7:i?[.88,1.18,.88]:[.8,1,.8]},transition:{duration:s?.3:3.1+.3*r,repeat:s?0:1/0,ease:"easeInOut"},children:[Array.from({length:7}).map((n,o)=>(0,t.jsx)(a.motion.span,{className:"absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full",style:{bottom:`${14*o}%`,background:e.color,boxShadow:"#ffffff"===e.color?"0 0 15px rgba(255,255,255,1)":`0 0 15px ${e.color}`},animate:s?{y:0,opacity:.2,scale:.7}:{y:[140,-330],opacity:[0,1,0],scale:i?[.5,1.8,.5]:[.45,1.25,.45]},transition:{duration:i?1.65:3,delay:.16*r+.34*o,repeat:s?0:1/0,ease:"linear"}},o)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[170%] whitespace-nowrap rounded-full border px-3 py-1.5 backdrop-blur-md",style:{borderColor:`${e.color}44`,background:"rgba(2,6,23,0.72)",boxShadow:"#ffffff"===e.color?"0 0 20px rgba(255,255,255,0.12)":`0 0 20px ${e.color}18`},animate:{opacity:s?0:i?[.55,1,.55]:[.25,.58,.25],scale:i?[.92,1.08,.92]:[.94,1,.94]},transition:{duration:3+.25*r,repeat:s?0:1/0,ease:"easeInOut"},children:(0,t.jsx)("span",{className:"text-[8px] font-black tracking-[0.26em]",style:{color:e.color},children:e.name.toUpperCase()})}),(0,t.jsx)(a.motion.span,{className:"absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2 translate-y-1/2 rounded-full blur-xl",style:{background:e.color},animate:{opacity:s?.12:i?[.22,.62,.22]:[.1,.3,.1],scale:i?[.7,1.4,.7]:[.8,1.1,.8]},transition:{duration:2.5+.25*r,repeat:s?0:1/0,ease:"easeInOut"}})]},e.name)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/15",style:{boxShadow:"0 0 38px rgba(34,211,238,0.2), inset 0 0 28px rgba(103,232,249,0.08)"},animate:{rotate:360*!s,scale:i?[.92,1.12,.92]:[.96,1.04,.96],opacity:s?.22:[.3,.72,.3]},transition:{rotate:{duration:i?11:19,repeat:s?0:1/0,ease:"linear"},scale:{duration:3,repeat:s?0:1/0,ease:"easeInOut"},opacity:{duration:3,repeat:s?0:1/0,ease:"easeInOut"}}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[22px]",style:{background:"radial-gradient(circle, rgba(255,255,255,0.95), rgba(103,232,249,0.5) 35%, transparent 72%)"},animate:{scale:s?.65:i?[.75,1.5,.75]:[.78,1.18,.78],opacity:s?.25:i?[.4,.95,.4]:[.22,.58,.22]},transition:{duration:i?1.8:3.8,repeat:s?0:1/0,ease:"easeInOut"}})]})}function j({onEntryComplete:e}){let[o,l]=(0,i.useState)("idle"),[c,p]=(0,i.useState)(!1),m=(0,i.useRef)(!1),b=(0,i.useRef)([]),u=(0,i.useCallback)(()=>{b.current.forEach(e=>{clearTimeout(e)}),b.current=[]},[]);(0,i.useEffect)(()=>()=>{u()},[u]);let h=(0,i.useCallback)((e,t)=>{let a=setTimeout(()=>{l(e)},t);b.current.push(a)},[]),v=(0,i.useCallback)(()=>{m.current||(p(!0),l("hovering"))},[]),w=(0,i.useCallback)(()=>{m.current||(p(!1),l("idle"))},[]),N=(0,i.useCallback)(()=>{if(m.current)return;m.current=!0,p(!1),u(),l("freezing"),h("compressing",450),h("opening",1150),h("entering",2150),h("tunnel",3350),h("arrival",8200);let t=setTimeout(()=>{e?.()},9400);b.current.push(t)},[u,e,h]),k="idle"!==o&&"hovering"!==o,_="entering"===o||"tunnel"===o||"arrival"===o;return(0,t.jsxs)(a.motion.section,{className:"relative isolate min-h-screen overflow-hidden bg-[#01030a]",animate:{scale:_?1.08:1},transition:{duration:1.2,ease:[.76,0,.82,0]},children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 bg-[#01030a]"}),(0,t.jsx)(a.motion.div,{className:"   pointer-events-none   absolute left-1/2 top-1/2 z-[1]   h-[1050px] w-[1050px]   -translate-x-1/2 -translate-y-1/2   rounded-full blur-[170px]   ",style:{background:"radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(124,58,237,0.14) 42%, transparent 74%)"},animate:{scale:c?[1,1.18,1]:k?.75:[.96,1.05,.96],opacity:c?[.45,.95,.45]:k?.28:[.25,.55,.25]},transition:{duration:k?.45:6,repeat:k?0:1/0,ease:"easeInOut"}}),(0,t.jsx)(f,{}),(0,t.jsx)(x,{hovered:c,phase:o}),(0,t.jsx)(g,{phase:o}),(0,t.jsx)(y,{phase:o,isHovered:c}),(0,t.jsx)(d,{phase:o,isHovered:c,onHoverStart:v,onHoverEnd:w,onActivate:N}),(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 z-[60]","aria-hidden":"true",children:[(0,t.jsx)(n.default,{phase:o}),(0,t.jsx)(r.default,{phase:o}),(0,t.jsx)(s.default,{phase:o})]}),(0,t.jsx)(a.motion.div,{className:"pointer-events-none absolute inset-0 z-[90] bg-white",initial:!1,animate:{opacity:"entering"===o?[0,.95,0]:0},transition:{duration:1.1,times:[0,.55,1],ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"pointer-events-none absolute inset-0 z-40",style:{background:"radial-gradient(circle at center, transparent 24%, rgba(1,3,10,0.38) 66%, rgba(1,3,10,0.96) 100%)"},animate:{opacity:+!_,scale:_?1.15:1},transition:{duration:1}}),(0,t.jsx)(a.motion.div,{className:"   pointer-events-none   absolute left-1/2 top-1/2 z-20   h-[500px] w-[500px]   -translate-x-1/2 -translate-y-1/2   rounded-full blur-[90px]   ",style:{background:"radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)"},animate:{scale:c?[1,1.2,1]:[.95,1.05,.95],opacity:k?.2:c?[.35,.8,.35]:[.15,.35,.15]},transition:{duration:5,repeat:k?0:1/0,ease:"easeInOut"}}),!k&&(0,t.jsx)(a.motion.div,{className:"   pointer-events-none   absolute left-1/2 top-1/2 z-10   h-[620px] w-[620px]   -translate-x-1/2 -translate-y-1/2   rounded-full   border border-cyan-400/10   ",animate:{rotate:360,scale:c?[1,1.05,1]:1},transition:{rotate:{duration:40,repeat:1/0,ease:"linear"},scale:{duration:2.5,repeat:1/0,ease:"easeInOut"}}}),(0,t.jsx)(a.motion.div,{className:"   pointer-events-none   absolute inset-x-0 bottom-12 z-50   flex justify-center   ",animate:{opacity:+!k,y:20*!!k},transition:{duration:.35},children:(0,t.jsx)("div",{className:"rounded-full border border-cyan-300/10 bg-slate-950/40 px-6 py-3 backdrop-blur-xl",children:(0,t.jsx)(a.motion.span,{className:"text-[10px] font-semibold tracking-[0.42em] text-cyan-100/70",animate:{opacity:c?[.5,1,.5]:[.3,.65,.3]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:c?"AURA READY":"APPROACH THE CORE"})})}),(0,t.jsx)("div",{className:"   pointer-events-none   absolute inset-0 z-[95]   opacity-[0.025]   mix-blend-soft-light   ",style:{backgroundImage:`
            radial-gradient(
              circle at 25% 25%,
              white 1px,
              transparent 1px
            ),

            radial-gradient(
              circle at 75% 75%,
              white 1px,
              transparent 1px
            )
          `,backgroundSize:"6px 6px"}})]})}let v=Array.from({length:42},(e,t)=>({id:t,left:37*t%100,delay:t%12*.24,duration:1.7+t%6*.18,height:38+t%5*14,opacity:.18+t%5*.08})),w=Array.from({length:14},(e,t)=>({id:t,top:10+43*t%76,width:90+t%5*34,delay:t%7*.55,duration:4.8+t%5*.65})),N=Array.from({length:9},(e,t)=>({id:t,angle:40*t,delay:.24*t}));function k({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.42,.68,.42],scale:[1,1.06,1]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",inset:"-15%",background:`
            radial-gradient(
              circle at 72% 30%,
              ${e}36 0%,
              ${e}18 18%,
              transparent 48%
            ),
            radial-gradient(
              circle at 28% 75%,
              rgba(25, 52, 45, 0.48) 0%,
              transparent 44%
            ),
            linear-gradient(
              145deg,
              rgba(2, 10, 14, 0.72),
              transparent 48%,
              rgba(4, 18, 20, 0.66)
            )
          `,filter:"blur(32px)"}}),(0,t.jsx)(a.motion.div,{animate:{rotate:360,scale:[1,1.08,.98,1]},transition:{rotate:{duration:28,repeat:1/0,ease:"linear"},scale:{duration:9,repeat:1/0,ease:"easeInOut"}},style:{position:"absolute",top:"-16%",right:"-8%",width:"min(820px, 78vw)",aspectRatio:"1",borderRadius:"50%",background:`
            conic-gradient(
              from 0deg,
              transparent 0deg,
              ${e}12 35deg,
              ${e}35 82deg,
              transparent 132deg,
              ${e}18 205deg,
              ${e}3d 260deg,
              transparent 330deg
            )
          `,filter:"blur(9px)",opacity:.78}}),(0,t.jsx)(a.motion.div,{animate:{rotate:-360,scale:[.95,1.04,.95],opacity:[.34,.62,.34]},transition:{rotate:{duration:21,repeat:1/0,ease:"linear"},scale:{duration:7,repeat:1/0,ease:"easeInOut"},opacity:{duration:7,repeat:1/0,ease:"easeInOut"}},style:{position:"absolute",top:"2%",right:"5%",width:"min(610px, 61vw)",aspectRatio:"1",borderRadius:"50%",border:`1px solid ${e}34`,background:`
            repeating-conic-gradient(
              from 30deg,
              transparent 0deg 22deg,
              ${e}19 27deg 36deg,
              transparent 42deg 66deg
            )
          `,boxShadow:`
            0 0 80px ${e}1f,
            inset 0 0 80px ${e}18
          `,filter:"blur(3px)"}}),(0,t.jsx)(a.motion.div,{animate:{rotate:[-2,3,-1,2,-2],scaleX:[.92,1.07,.96,1.04,.92],opacity:[.4,.72,.52,.68,.4]},transition:{duration:5.8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:"24%",right:"19%",width:"min(230px, 22vw)",height:"58%",transformOrigin:"top center",clipPath:"polygon(4% 0%, 96% 0%, 66% 100%, 42% 100%)",background:`
            repeating-linear-gradient(
              165deg,
              rgba(255,255,255,0.03) 0px,
              ${e}26 12px,
              transparent 26px,
              ${e}15 41px
            ),
            linear-gradient(
              to bottom,
              ${e}28,
              rgba(9, 25, 28, 0.64),
              ${e}18
            )
          `,filter:"blur(5px)",boxShadow:`0 0 46px ${e}26`}}),(0,t.jsx)(a.motion.div,{animate:{rotate:360},transition:{duration:7,repeat:1/0,ease:"linear"},style:{position:"absolute",top:"11%",right:"8%",width:"min(520px, 52vw)",aspectRatio:"1",borderRadius:"50%",border:`1px solid ${e}30`,background:`
            conic-gradient(
              from 0deg,
              transparent 0deg 310deg,
              ${e}08 320deg,
              ${e}50 350deg,
              transparent 360deg
            )
          `,boxShadow:`
            0 0 55px ${e}16,
            inset 0 0 55px ${e}10
          `,opacity:.72}}),[0,1,2].map(i=>(0,t.jsx)(a.motion.div,{animate:{scale:[.7,1.08],opacity:[.42,0]},transition:{duration:4.6,repeat:1/0,delay:1.45*i,ease:"easeOut"},style:{position:"absolute",top:"16%",right:"13%",width:"min(420px, 42vw)",aspectRatio:"1",borderRadius:"50%",border:`1px solid ${e}45`}},i)),(0,t.jsx)("div",{style:{position:"absolute",top:"17%",right:"14%",width:"min(400px, 40vw)",aspectRatio:"1",borderRadius:"50%"},children:N.map(i=>(0,t.jsx)(a.motion.div,{animate:{opacity:[.18,1,.18],scale:[.75,1.55,.75]},transition:{duration:2.4,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",top:"50%",left:"50%",width:5,height:5,borderRadius:"50%",background:e,boxShadow:`0 0 12px ${e}`,transform:`
                rotate(${i.angle}deg)
                translateX(min(185px, 18vw))
              `,transformOrigin:"0 0"}},i.id))}),w.map(i=>(0,t.jsx)(a.motion.div,{initial:{x:"-35vw",opacity:0},animate:{x:"135vw",opacity:[0,.58,.35,0]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"linear"},style:{position:"absolute",top:`${i.top}%`,left:0,width:i.width,height:1,borderRadius:999,background:`linear-gradient(
              to right,
              transparent,
              ${e}90,
              transparent
            )`,boxShadow:`0 0 10px ${e}50`,transform:"rotate(-8deg)"}},i.id)),v.map(i=>(0,t.jsx)(a.motion.div,{initial:{top:"-15%",left:`${i.left}%`,opacity:0},animate:{top:"115%",left:`${Math.min(i.left+13,108)}%`,opacity:[0,i.opacity,i.opacity,0]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"linear"},style:{position:"absolute",width:1,height:i.height,borderRadius:999,background:`linear-gradient(
              to bottom,
              transparent,
              ${e}aa
            )`,filter:"blur(0.3px)",transform:"rotate(-18deg)"}},i.id)),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,0,.72,.08,.46,0,0]},transition:{duration:6.8,repeat:1/0,times:[0,.61,.64,.67,.7,.74,1],ease:"linear"},style:{position:"absolute",inset:0,background:`
            radial-gradient(
              circle at 73% 19%,
              rgba(220, 255, 248, 0.34),
              ${e}16 20%,
              transparent 48%
            )
          `,mixBlendMode:"screen"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,0,1,.08,.72,0,0]},transition:{duration:6.8,repeat:1/0,times:[0,.61,.64,.67,.7,.74,1],ease:"linear"},style:{position:"absolute",top:"12%",right:"24%",width:5,height:"35%",background:"rgba(235, 255, 252, 0.92)",clipPath:"polygon(38% 0, 100% 0, 63% 42%, 100% 42%, 16% 100%, 37% 56%, 0 56%)",filter:"drop-shadow(0 0 9px white)",transform:"rotate(9deg)"}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.82,1.15,.9,1.08,.82],opacity:[.12,.4,.18,.34,.12]},transition:{duration:5.8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",right:"13%",bottom:"-10%",width:"min(470px, 48vw)",height:"23%",borderRadius:"50%",background:e,filter:"blur(110px)"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.05,.13,.05],backgroundPosition:["0px 0px","42px 42px"]},transition:{duration:8,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}18 1px, transparent 1px),
            linear-gradient(90deg, ${e}18 1px, transparent 1px)
          `,backgroundSize:"42px 42px",maskImage:"linear-gradient(to bottom, transparent 5%, black 50%, transparent 100%)"}})]})}let _=Array.from({length:34},(e,t)=>({id:t,left:5+37*t%90,size:3+t%5*2,delay:t%12*.32,duration:5+t%7*.7,drift:-55+t%9*14})),L=Array.from({length:26},(e,t)=>({id:t,left:47*t%100,size:2+t%4,delay:t%10*.5,duration:10+t%8})),$=Array.from({length:8},(e,t)=>({id:t,left:10+31*t%80,size:18+t%4*9,delay:.65*t}));function I({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.55,.82,.55],scale:[1,1.04,1]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",inset:"-12%",background:`
            radial-gradient(
              circle at 74% 88%,
              ${e}4d 0%,
              ${e}20 24%,
              transparent 52%
            ),
            radial-gradient(
              circle at 28% 70%,
              rgba(190, 48, 12, 0.22),
              transparent 45%
            ),
            linear-gradient(
              to bottom,
              rgba(8, 5, 4, 0.38),
              rgba(18, 6, 3, 0.72)
            )
          `,filter:"blur(24px)"}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.9,1.14,.96,1.08,.9],opacity:[.34,.72,.44,.64,.34]},transition:{duration:6.5,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"8%",right:"8%",bottom:"-18%",height:"42%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              rgba(255, 228, 115, 0.92) 0%,
              ${e}cc 18%,
              rgba(235, 72, 12, 0.66) 43%,
              transparent 72%
            )
          `,filter:"blur(72px)",mixBlendMode:"screen"}}),(0,t.jsx)(a.motion.div,{animate:{backgroundPosition:["0px 0px","140px 220px"],opacity:[.48,.84,.56,.76,.48]},transition:{backgroundPosition:{duration:8,repeat:1/0,ease:"linear"},opacity:{duration:5.5,repeat:1/0,ease:"easeInOut"}},style:{position:"absolute",right:"11%",bottom:"-6%",width:"32%",height:"72%",transform:"rotate(13deg)",transformOrigin:"bottom center",clipPath:"polygon(44% 0%, 62% 0%, 70% 22%, 59% 44%, 77% 69%, 61% 100%, 24% 100%, 42% 72%, 31% 48%, 48% 24%)",background:`
            repeating-linear-gradient(
              170deg,
              rgba(255, 245, 160, 0.92) 0px,
              ${e} 12px,
              rgba(230, 54, 8, 0.94) 28px,
              ${e} 43px,
              rgba(255, 222, 105, 0.88) 58px
            )
          `,filter:"blur(3px)",boxShadow:`
            0 0 24px ${e},
            0 0 60px ${e}99
          `,opacity:.78}}),(0,t.jsx)(a.motion.div,{animate:{scaleX:[.92,1.13,.96,1.08,.92],opacity:[.12,.36,.18,.31,.12]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",right:"5%",bottom:"-8%",width:"46%",height:"76%",background:e,clipPath:"polygon(42% 0%, 67% 0%, 72% 28%, 60% 52%, 78% 76%, 64% 100%, 18% 100%, 38% 70%, 26% 44%, 44% 22%)",filter:"blur(58px)",opacity:.25}}),$.map(i=>(0,t.jsx)(a.motion.div,{animate:{y:[10,-18,6],scale:[.72,1.18,.84],opacity:[.18,.82,.2]},transition:{duration:3.6+i.id%4*.6,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",left:`${i.left}%`,bottom:`${2+i.id%3*6}%`,width:i.size,height:i.size,borderRadius:"50%",border:`2px solid ${e}`,background:`
              radial-gradient(
                circle at 38% 35%,
                rgba(255, 245, 178, 0.95),
                ${e} 42%,
                rgba(145, 27, 4, 0.8) 100%
              )
            `,boxShadow:`
              0 0 14px ${e},
              0 0 28px ${e}88
            `}},i.id)),_.map(i=>(0,t.jsx)(a.motion.div,{initial:{left:`${i.left}%`,bottom:"-8%",x:0,opacity:0,scale:.4},animate:{bottom:"108%",x:[0,i.drift,-.35*i.drift,.7*i.drift],opacity:[0,.95,.7,.25,0],scale:[.4,1.25,.9,.55]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",width:i.size,height:i.size,borderRadius:"50%",background:"rgba(255, 229, 126, 0.95)",boxShadow:`
              0 0 8px rgba(255, 236, 153, 0.95),
              0 0 18px ${e}
            `}},i.id)),L.map(e=>(0,t.jsx)(a.motion.div,{initial:{left:`${e.left}%`,bottom:"-10%",opacity:0},animate:{bottom:"112%",x:[0,35,-24,52],opacity:[0,.3,.24,0],rotate:[0,90,220,360]},transition:{duration:e.duration,repeat:1/0,delay:e.delay,ease:"linear"},style:{position:"absolute",width:e.size,height:e.size,borderRadius:"45%",background:"rgba(92, 77, 70, 0.72)",filter:"blur(0.5px)"}},e.id)),(0,t.jsx)(a.motion.div,{animate:{y:[20,-45,-15,-70],x:[0,35,-18,42],scale:[.85,1.24,1.05,1.42],opacity:[.1,.34,.24,0]},transition:{duration:13,repeat:1/0,ease:"easeOut"},style:{position:"absolute",right:"10%",bottom:"27%",width:"34%",height:"38%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              rgba(67, 57, 52, 0.72),
              rgba(36, 30, 28, 0.42) 48%,
              transparent 74%
            )
          `,filter:"blur(38px)"}}),(0,t.jsx)(a.motion.div,{animate:{y:[35,-30,-72],x:[0,-42,15],scale:[.72,1.16,1.48],opacity:[.08,.3,0]},transition:{duration:15,repeat:1/0,delay:3,ease:"easeOut"},style:{position:"absolute",right:"24%",bottom:"33%",width:"28%",height:"31%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              rgba(80, 67, 61, 0.62),
              rgba(35, 29, 26, 0.34) 52%,
              transparent 76%
            )
          `,filter:"blur(34px)"}}),(0,t.jsx)(a.motion.div,{animate:{x:[-8,10,-5,8,-8],scaleX:[.98,1.03,.99,1.02,.98],opacity:[.05,.15,.07,.13,.05]},transition:{duration:3.4,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"4%",right:"4%",bottom:"2%",height:"52%",background:`
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              ${e}20 3px,
              transparent 7px,
              rgba(255, 196, 100, 0.08) 12px,
              transparent 18px
            )
          `,filter:"blur(7px)",maskImage:"linear-gradient(to top, black, rgba(0,0,0,0.65), transparent)"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,0,.7,.14,.48,0,0]},transition:{duration:7.5,repeat:1/0,times:[0,.66,.69,.72,.75,.8,1],ease:"linear"},style:{position:"absolute",inset:0,background:`
            radial-gradient(
              circle at 76% 68%,
              rgba(255, 242, 165, 0.44),
              ${e}25 21%,
              transparent 52%
            )
          `,mixBlendMode:"screen"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.025,.08,.025],backgroundPosition:["0px 0px","48px 48px"]},transition:{duration:11,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}14 1px, transparent 1px),
            linear-gradient(90deg, ${e}14 1px, transparent 1px)
          `,backgroundSize:"48px 48px",maskImage:"linear-gradient(to bottom, transparent, black 48%, transparent)"}})]})}let S=Array.from({length:12},(e,t)=>({id:t,left:8+29*t%84,top:12+37*t%72})),A=Array.from({length:4},(e,t)=>({id:t,delay:1.1*t}));function E({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1},children:[(0,t.jsx)(a.motion.div,{animate:{scale:[1,1.06,1],opacity:[.18,.34,.18]},transition:{duration:8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"-10%",right:"-10%",bottom:"-25%",height:"55%",background:e,borderRadius:"50%",filter:"blur(130px)"}}),(0,t.jsx)(a.motion.div,{animate:{backgroundPosition:["0px 0px","80px 80px"],opacity:[.04,.12,.04]},transition:{duration:10,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}22 1px, transparent 1px),
            linear-gradient(90deg, ${e}22 1px, transparent 1px)
          `,backgroundSize:"40px 40px"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.35,.85,.35],scaleY:[1,1.04,1]},transition:{duration:4,repeat:1/0},style:{position:"absolute",top:"8%",left:"48%",width:5,height:"88%",background:`
            repeating-linear-gradient(
              to bottom,
              ${e},
              ${e} 16px,
              transparent 16px,
              transparent 28px
            )
          `,boxShadow:`
            0 0 18px ${e},
            0 0 40px ${e}55
          `}}),A.map(i=>(0,t.jsx)(a.motion.div,{animate:{scale:[.15,1.6],opacity:[.85,0]},transition:{duration:3.8,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",left:"50%",top:"50%",width:300,height:300,marginLeft:-150,marginTop:-150,borderRadius:"50%",border:`2px solid ${e}`}},i.id)),(0,t.jsx)(a.motion.svg,{viewBox:"0 0 1200 180",animate:{x:[0,-160]},transition:{duration:5,repeat:1/0,ease:"linear"},style:{position:"absolute",left:0,right:0,bottom:"18%",width:"140%",height:180,opacity:.75,filter:`drop-shadow(0 0 12px ${e})`},children:(0,t.jsx)("path",{d:"   M0 90   L80 90   L120 82   L150 108   L180 34   L210 145   L240 62   L280 90   L360 90   L420 70   L470 120   L520 48   L560 136   L610 72   L660 90   L1200 90   ",fill:"none",stroke:e,strokeWidth:"4"})}),S.map(i=>(0,t.jsx)(a.motion.div,{animate:{scale:[1,1.8,1],opacity:[.3,1,.3]},transition:{duration:2.5,repeat:1/0,delay:.22*i.id},style:{position:"absolute",left:`${i.left}%`,top:`${i.top}%`,width:8,height:8,borderRadius:"50%",background:e,boxShadow:`
              0 0 12px ${e},
              0 0 28px ${e}
            `}},i.id)),(0,t.jsx)("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.15},children:S.slice(0,S.length-1).map((a,i)=>(0,t.jsx)("line",{x1:`${a.left}%`,y1:`${a.top}%`,x2:`${S[i+1].left}%`,y2:`${S[i+1].top}%`,stroke:e,strokeWidth:"1"},i))}),(0,t.jsx)(a.motion.div,{animate:{x:["-30%","130%"],opacity:[0,.45,0]},transition:{duration:6,repeat:1/0,ease:"linear"},style:{position:"absolute",top:"28%",left:0,width:"35%",height:2,background:`
            linear-gradient(
              to right,
              transparent,
              ${e},
              transparent
            )
          `,boxShadow:`0 0 18px ${e}`}})]})}let O=Array.from({length:52},(e,t)=>({id:t,left:37*t%100,bottom:2+19*t%24,size:2+t%5,delay:t%16*.22,duration:5+t%8*.65,drift:80+t%7*24})),R=Array.from({length:18},(e,t)=>({id:t,left:1+5.6*t,width:34+t%5*10,height:90+t%7*28,delay:.16*t,duration:2.5+t%5*.28})),T=[{top:"8%",width:"62%",height:"34%",duration:22,delay:0,opacity:.36},{top:"22%",width:"74%",height:"42%",duration:28,delay:4,opacity:.28},{top:"38%",width:"68%",height:"36%",duration:25,delay:8,opacity:.22}],C=Array.from({length:18},(e,t)=>({id:t,left:6.1*t-3,height:80+t%6*22}));function z({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.4,.72,.48,.66,.4],scale:[1,1.04,1.01,1.06,1]},transition:{duration:8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",inset:"-10%",background:`
            radial-gradient(
              ellipse at 52% 92%,
              rgba(255, 226, 112, 0.7) 0%,
              ${e}aa 16%,
              rgba(220, 58, 10, 0.5) 32%,
              transparent 62%
            ),
            radial-gradient(
              circle at 18% 72%,
              rgba(255, 126, 34, 0.22),
              transparent 40%
            ),
            linear-gradient(
              to bottom,
              rgba(10, 11, 10, 0.2),
              rgba(30, 11, 4, 0.6)
            )
          `,filter:"blur(28px)"}}),(0,t.jsx)(a.motion.div,{animate:{x:["-8%","6%","-3%","8%","-8%"],scaleX:[.92,1.08,.97,1.12,.92],opacity:[.3,.68,.42,.62,.3]},transition:{duration:7,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"-8%",right:"-8%",bottom:"-20%",height:"42%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              rgba(255, 244, 170, 0.95),
              ${e}dd 22%,
              rgba(225, 54, 8, 0.65) 48%,
              transparent 75%
            )
          `,filter:"blur(70px)",mixBlendMode:"screen"}}),(0,t.jsx)("div",{style:{position:"absolute",left:0,right:0,bottom:"8%",height:"28%",opacity:.72},children:C.map(e=>(0,t.jsxs)("div",{style:{position:"absolute",left:`${e.left}%`,bottom:0,width:44,height:e.height,transform:`scaleX(${.8+e.id%4*.08})`,transformOrigin:"bottom center"},children:[(0,t.jsx)("div",{style:{position:"absolute",left:"50%",bottom:0,width:5,height:"48%",transform:"translateX(-50%)",background:"rgba(5, 7, 5, 0.95)"}}),[0,1,2,3].map(e=>(0,t.jsx)("div",{style:{position:"absolute",left:"50%",bottom:`${22+16*e}%`,width:`${100-15*e}%`,height:`${34-3*e}%`,transform:"translateX(-50%)",clipPath:"polygon(50% 0%, 100% 100%, 0% 100%)",background:"rgba(6, 9, 7, 0.96)"}},e))]},e.id))}),(0,t.jsx)("div",{style:{position:"absolute",left:0,right:0,bottom:"-3%",height:"34%"},children:R.map(i=>(0,t.jsx)(a.motion.div,{animate:{height:[.72*i.height,1.18*i.height,.88*i.height,1.08*i.height,.72*i.height],x:[0,9,-6,12,0],rotate:[-3,8,-5,6,-3],opacity:[.56,.94,.7,.9,.56]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",left:`${i.left}%`,bottom:0,width:i.width,height:i.height,transformOrigin:"bottom center",clipPath:"polygon(50% 0%, 68% 32%, 91% 100%, 10% 100%, 31% 38%)",background:`
                linear-gradient(
                  to top,
                  rgba(255, 245, 164, 0.98) 0%,
                  ${e} 28%,
                  rgba(229, 60, 9, 0.92) 63%,
                  rgba(122, 20, 5, 0.1) 100%
                )
              `,filter:"blur(1px)",boxShadow:`
                0 0 14px ${e},
                0 0 34px ${e}88
              `,mixBlendMode:"screen"}},i.id))}),T.map((e,i)=>(0,t.jsx)(a.motion.div,{initial:{x:"-65%",opacity:0},animate:{x:"125%",opacity:[0,e.opacity,.8*e.opacity,e.opacity,0],scale:[.84,1.08,1.18]},transition:{duration:e.duration,repeat:1/0,delay:e.delay,ease:"linear"},style:{position:"absolute",top:e.top,left:0,width:e.width,height:e.height,borderRadius:"48%",background:`
              radial-gradient(
                ellipse,
                rgba(74, 67, 60, 0.74),
                rgba(47, 43, 39, 0.52) 42%,
                rgba(26, 25, 23, 0.18) 68%,
                transparent 80%
              )
            `,filter:"blur(40px)"}},i)),O.map(i=>(0,t.jsx)(a.motion.div,{initial:{left:`${i.left}%`,bottom:`${i.bottom}%`,x:-80,opacity:0,scale:.4},animate:{x:["-8vw",`${i.drift}vw`],y:[0,-45,-95,-150],opacity:[0,.95,.72,.3,0],scale:[.4,1.2,.84,.5],rotate:[0,120,260,420]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",width:i.size,height:i.size,borderRadius:"50%",background:"rgba(255, 235, 144, 0.98)",boxShadow:`
              0 0 8px rgba(255, 237, 156, 0.95),
              0 0 18px ${e}
            `}},i.id)),Array.from({length:12}).map((i,s)=>(0,t.jsx)(a.motion.div,{initial:{x:"-35vw",opacity:0},animate:{x:"135vw",opacity:[0,.4,.22,0]},transition:{duration:4.8+s%5*.7,repeat:1/0,delay:.52*s,ease:"linear"},style:{position:"absolute",top:`${14+37*s%70}%`,left:0,width:80+s%5*38,height:1,background:`linear-gradient(
              to right,
              transparent,
              ${e}88,
              transparent
            )`,boxShadow:`0 0 8px ${e}55`,transform:"rotate(-7deg)"}},s)),(0,t.jsx)(a.motion.div,{animate:{x:[-10,12,-6,9,-10],scaleX:[.98,1.035,.99,1.02,.98],opacity:[.04,.13,.07,.11,.04]},transition:{duration:3.1,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:0,right:0,bottom:"2%",height:"52%",background:`
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(255, 181, 82, 0.1) 4px,
              transparent 10px,
              ${e}18 16px,
              transparent 22px
            )
          `,filter:"blur(6px)",maskImage:"linear-gradient(to top, black, rgba(0,0,0,0.72), transparent)"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,0,.54,.12,.42,0,0]},transition:{duration:8.5,repeat:1/0,times:[0,.6,.64,.68,.72,.78,1],ease:"linear"},style:{position:"absolute",inset:0,background:`
            radial-gradient(
              ellipse at 62% 82%,
              rgba(255, 241, 164, 0.5),
              ${e}28 25%,
              transparent 56%
            )
          `,mixBlendMode:"screen"}}),(0,t.jsx)(a.motion.div,{animate:{y:["-20%","120%"],opacity:[0,.34,.16,0]},transition:{duration:8,repeat:1/0,repeatDelay:1.5,ease:"linear"},style:{position:"absolute",top:0,left:"4%",right:"4%",height:"16%",background:`linear-gradient(
            to bottom,
            transparent,
            ${e}12,
            ${e}55,
            transparent
          )`,filter:"blur(7px)",boxShadow:`0 0 24px ${e}22`}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.02,.07,.02],backgroundPosition:["0px 0px","52px 52px"]},transition:{duration:12,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}13 1px, transparent 1px),
            linear-gradient(90deg, ${e}13 1px, transparent 1px)
          `,backgroundSize:"52px 52px",maskImage:"linear-gradient(to bottom, transparent 5%, black 46%, transparent)"}})]})}let M=Array.from({length:42},(e,t)=>({id:t,left:31*t%100,top:18+23*t%76,size:2+t%4,delay:t%14*.4,duration:8+t%8,drift:12+t%6*5})),B=[{left:16,top:36,delay:0},{left:32,top:57,delay:.7},{left:48,top:43,delay:1.4},{left:67,top:62,delay:2.1},{left:82,top:39,delay:2.8}],D=Array.from({length:6},(e,t)=>({id:t,left:4+18*t,width:90+t%3*35,delay:.8*t,duration:8+.7*t}));function P({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1,background:`
          linear-gradient(
            to bottom,
            rgba(5, 36, 74, 0.38) 0%,
            rgba(3, 29, 62, 0.7) 38%,
            rgba(1, 14, 36, 0.94) 100%
          )
        `},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.28,.5,.34,.46,.28],scale:[1,1.08,1.03,1.1,1]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"18%",right:"18%",bottom:"-28%",height:"62%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              ${e}77 0%,
              rgba(37, 174, 220, 0.2) 34%,
              transparent 72%
            )
          `,filter:"blur(70px)"}}),(0,t.jsx)(a.motion.div,{animate:{x:["-4%","4%","-2%","5%","-4%"],scaleY:[.92,1.12,.98,1.08,.92]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:"-4%",left:"-8%",width:"116%",height:"18%",borderRadius:"0 0 50% 50%",background:`
            linear-gradient(
              to bottom,
              rgba(124, 226, 255, 0.28),
              ${e}33 42%,
              rgba(0, 76, 145, 0.16) 72%,
              transparent
            )
          `,filter:"blur(8px)",boxShadow:`
            0 12px 42px rgba(64, 205, 255, 0.22),
            0 28px 80px ${e}22
          `}}),(0,t.jsx)(a.motion.div,{animate:{x:["5%","-6%","3%","-4%","5%"],opacity:[.22,.38,.27,.34,.22]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:"8%",left:"-10%",width:"120%",height:"9%",borderRadius:"50%",borderTop:`1px solid ${e}55`,background:`
            radial-gradient(
              ellipse,
              rgba(110, 218, 255, 0.14),
              transparent 68%
            )
          `,filter:"blur(4px)"}}),D.map(i=>(0,t.jsx)(a.motion.div,{animate:{x:[-16,18,-8,12,-16],rotate:[-8,-4,-10,-5,-8],opacity:[.05,.15,.08,.13,.05]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",top:"-12%",left:`${i.left}%`,width:i.width,height:"92%",transformOrigin:"top center",clipPath:"polygon(34% 0%, 66% 0%, 100% 100%, 0% 100%)",background:`
              linear-gradient(
                to bottom,
                rgba(167, 236, 255, 0.26),
                ${e}18 48%,
                transparent 96%
              )
            `,filter:"blur(18px)"}},i.id)),(0,t.jsx)(a.motion.div,{animate:{opacity:[.025,.08,.025],backgroundPosition:["0px 0px","64px 64px"]},transition:{duration:14,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}18 1px, transparent 1px),
            linear-gradient(90deg, ${e}18 1px, transparent 1px)
          `,backgroundSize:"64px 64px",maskImage:"linear-gradient(to bottom, transparent 8%, black 42%, black 76%, transparent)",WebkitMaskImage:"linear-gradient(to bottom, transparent 8%, black 42%, black 76%, transparent)"}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.9,1.08,.96,1.04,.9],opacity:[.55,1,.7,.92,.55]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"50%",top:"58%",width:12,height:12,transform:"translate(-50%, -50%)",borderRadius:"50%",background:"#b8f3ff",boxShadow:`
            0 0 12px #b8f3ff,
            0 0 28px ${e},
            0 0 54px ${e}88
          `}}),[0,1,2,3].map(i=>(0,t.jsx)(a.motion.div,{initial:{scale:.15,opacity:0},animate:{scale:[.15,1.9],opacity:[0,.58,.24,0]},transition:{duration:5.5,repeat:1/0,delay:1.35*i,ease:"easeOut"},style:{position:"absolute",left:"50%",top:"58%",width:220,height:220,marginLeft:-110,marginTop:-110,borderRadius:"50%",border:`1px solid ${e}aa`,boxShadow:`
              inset 0 0 18px ${e}22,
              0 0 20px ${e}22
            `}},i)),(0,t.jsx)(a.motion.div,{animate:{rotate:[0,360]},transition:{duration:9,repeat:1/0,ease:"linear"},style:{position:"absolute",left:"50%",top:"58%",width:240,height:240,marginLeft:-120,marginTop:-120,borderRadius:"50%",background:`
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 315deg,
              ${e}08 328deg,
              ${e}44 348deg,
              transparent 360deg
            )
          `,filter:"blur(1px)"}}),(0,t.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},children:(0,t.jsx)(a.motion.path,{d:"M 16 36 L 32 57 L 48 43 L 67 62 L 82 39",fill:"none",stroke:e,strokeWidth:"0.16",strokeDasharray:"1.4 1.4",initial:{pathLength:0,opacity:0},animate:{pathLength:[0,1,1],opacity:[0,.4,.18]},transition:{duration:7,repeat:1/0,repeatDelay:1,ease:"easeInOut"}})}),B.map((i,s)=>(0,t.jsxs)("div",{style:{position:"absolute",left:`${i.left}%`,top:`${i.top}%`,transform:"translate(-50%, -50%)"},children:[(0,t.jsx)(a.motion.div,{animate:{scale:[.8,1.25,.92,1.12,.8],opacity:[.5,1,.7,.9,.5]},transition:{duration:3.8,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{width:8,height:8,borderRadius:"50%",background:"#b8f3ff",border:`1px solid ${e}`,boxShadow:`
                0 0 8px #b8f3ff,
                0 0 18px ${e}
              `}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.5,2.7],opacity:[.5,0]},transition:{duration:3,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",inset:-5,borderRadius:"50%",border:`1px solid ${e}88`}})]},s)),M.map(i=>(0,t.jsx)(a.motion.div,{initial:{left:`${i.left}%`,top:`${i.top}%`,opacity:0},animate:{y:[30,-110],x:[0,i.drift,-(.35*i.drift),.5*i.drift],opacity:[0,.6,.38,0],scale:[.45,1.05,.76,.3]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",width:i.size,height:i.size,borderRadius:"50%",background:"rgba(176, 238, 255, 0.8)",boxShadow:`0 0 8px ${e}aa`}},i.id)),(0,t.jsxs)(a.motion.div,{initial:{x:"-24vw",opacity:0},animate:{x:"124vw",y:[0,-16,8,-9,0],opacity:[0,.22,.3,.24,0]},transition:{duration:25,repeat:1/0,repeatDelay:10,ease:"linear"},style:{position:"absolute",top:"68%",left:0,width:92,height:25,borderRadius:"50% 56% 46% 50%",background:`
            linear-gradient(
              to bottom,
              rgba(123, 213, 239, 0.26),
              rgba(1, 17, 36, 0.68)
            )
          `,border:`1px solid ${e}33`,boxShadow:`0 0 18px ${e}18`,filter:"blur(0.4px)"},children:[(0,t.jsx)("div",{style:{position:"absolute",left:-17,top:7,width:22,height:11,clipPath:"polygon(100% 0%, 100% 100%, 0% 50%)",background:"rgba(35, 100, 130, 0.34)"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.25,1,.4,1,.25]},transition:{duration:2,repeat:1/0},style:{position:"absolute",right:12,top:8,width:6,height:6,borderRadius:"50%",background:"#b8f3ff",boxShadow:`0 0 10px ${e}`}})]}),(0,t.jsx)(a.motion.div,{initial:{x:"120vw",opacity:0},animate:{x:"-40vw",y:[0,14,-7,10,0],opacity:[0,.08,.13,.08,0]},transition:{duration:34,repeat:1/0,repeatDelay:18,ease:"linear"},style:{position:"absolute",top:"76%",left:0,width:260,height:52,borderRadius:"50%",background:"rgba(0, 3, 12, 0.72)",filter:"blur(14px)"}}),(0,t.jsx)(a.motion.div,{animate:{y:["-14%","114%"],opacity:[0,.28,.12,0]},transition:{duration:9,repeat:1/0,repeatDelay:2,ease:"linear"},style:{position:"absolute",top:0,left:"3%",right:"3%",height:"13%",background:`
            linear-gradient(
              to bottom,
              transparent,
              ${e}0f,
              ${e}66,
              transparent
            )
          `,filter:"blur(6px)",boxShadow:`0 0 24px ${e}22`}}),(0,t.jsx)(a.motion.div,{animate:{x:[-10,12,-5,8,-10],scaleX:[.99,1.025,.985,1.018,.99],opacity:[.025,.085,.04,.07,.025]},transition:{duration:4.8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",inset:0,background:`
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              rgba(124, 224, 255, 0.08) 3px,
              transparent 7px,
              ${e}0d 12px,
              transparent 18px
            )
          `,filter:"blur(4px)"}})]})}let Y=Array.from({length:58},(e,t)=>({id:t,left:37*t%100,top:-8-19*t%30,size:2+t%5,delay:t%18*.35,duration:8+t%9*.8,drift:30+t%7*14,opacity:.3+t%5*.1})),F=Array.from({length:14},(e,t)=>({id:t,top:12+31*t%72,width:80+t%6*34,delay:.58*t,duration:4.5+t%5*.65})),G=[{left:19,top:52,delay:0},{left:34,top:43,delay:.7},{left:51,top:56,delay:1.4},{left:68,top:40,delay:2.1},{left:83,top:54,delay:2.8}],H=[{left:"40%",top:"42%",width:260,height:120,delay:0},{left:"48%",top:"50%",width:330,height:150,delay:.4},{left:"54%",top:"60%",width:430,height:190,delay:.8},{left:"38%",top:"68%",width:540,height:220,delay:1.15}];function U({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1,background:`
          linear-gradient(
            to bottom,
            rgba(7, 23, 42, 0.9) 0%,
            rgba(18, 51, 78, 0.78) 42%,
            rgba(87, 137, 171, 0.38) 100%
          )
        `},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.24,.48,.3,.42,.24],scale:[1,1.08,1.03,1.1,1]},transition:{duration:11,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"12%",right:"12%",bottom:"-24%",height:"60%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              rgba(207, 239, 255, 0.48) 0%,
              ${e}38 38%,
              transparent 74%
            )
          `,filter:"blur(74px)"}}),(0,t.jsx)(a.motion.div,{animate:{x:[-12,12,-6,8,-12]},transition:{duration:28,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"-8%",right:"-8%",bottom:"27%",height:"52%",clipPath:"polygon(0% 100%, 0% 78%, 10% 57%, 18% 70%, 30% 34%, 42% 65%, 55% 25%, 67% 58%, 80% 31%, 91% 62%, 100% 43%, 100% 100%)",background:`
            linear-gradient(
              to bottom,
              rgba(180, 220, 241, 0.16),
              rgba(41, 78, 108, 0.42)
            )
          `,filter:"blur(1.5px)",opacity:.55}}),(0,t.jsx)(a.motion.div,{animate:{x:[-5,5,-2,4,-5]},transition:{duration:22,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"-4%",right:"-4%",bottom:"-2%",height:"78%",clipPath:"polygon(0% 100%, 0% 82%, 9% 72%, 18% 58%, 28% 48%, 39% 18%, 47% 36%, 55% 22%, 63% 46%, 72% 39%, 82% 61%, 91% 52%, 100% 69%, 100% 100%)",background:`
            linear-gradient(
              145deg,
              rgba(240, 250, 255, 0.98) 0%,
              rgba(198, 228, 244, 0.94) 27%,
              rgba(128, 178, 208, 0.82) 58%,
              rgba(39, 78, 108, 0.84) 100%
            )
          `,boxShadow:`
            inset 0 28px 80px rgba(255, 255, 255, 0.18),
            0 -20px 80px rgba(171, 224, 255, 0.1)
          `}}),(0,t.jsx)("div",{style:{position:"absolute",left:"37%",top:"26%",width:"31%",height:"60%",clipPath:"polygon(4% 0%, 42% 28%, 100% 100%, 20% 76%, 0% 38%)",background:`
            linear-gradient(
              135deg,
              rgba(37, 72, 98, 0.72),
              rgba(116, 166, 195, 0.24)
            )
          `,filter:"blur(0.5px)"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.45,.72,.52,.68,.45]},transition:{duration:8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"28%",top:"14%",width:"42%",height:"34%",clipPath:"polygon(0% 100%, 27% 49%, 41% 0%, 56% 36%, 72% 8%, 100% 100%, 68% 74%, 45% 52%, 24% 84%)",background:`
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.78),
              rgba(210, 238, 252, 0.18)
            )
          `,filter:"blur(1px)"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.1,.16,.2,.95,.35,.12,.1],filter:["drop-shadow(0 0 2px rgba(207,239,255,0.15))","drop-shadow(0 0 4px rgba(207,239,255,0.25))","drop-shadow(0 0 6px rgba(207,239,255,0.35))",`drop-shadow(0 0 16px ${e})`,`drop-shadow(0 0 8px ${e})`,"drop-shadow(0 0 3px rgba(207,239,255,0.2))","drop-shadow(0 0 2px rgba(207,239,255,0.15))"]},transition:{duration:11,repeat:1/0,times:[0,.5,.59,.64,.7,.78,1],ease:"linear"},style:{position:"absolute",left:"36%",top:"31%",width:"30%",height:"25%"},children:(0,t.jsx)("svg",{viewBox:"0 0 300 120",preserveAspectRatio:"none",style:{width:"100%",height:"100%",overflow:"visible"},children:(0,t.jsx)(a.motion.path,{d:"M 8 25 L 72 31 L 118 24 L 151 43 L 190 37 L 222 59 L 278 67",fill:"none",stroke:"rgba(220, 246, 255, 0.95)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},animate:{pathLength:[0,0,1,1,.15,0]},transition:{duration:11,repeat:1/0,times:[0,.53,.64,.74,.86,1],ease:"easeInOut"}})})}),(0,t.jsx)(a.motion.div,{animate:{x:[0,0,0,16,75,180,360],y:[0,0,0,10,58,135,260],rotate:[0,0,0,1,3,7,11],opacity:[0,0,.18,.85,.78,.46,0]},transition:{duration:11,repeat:1/0,times:[0,.56,.61,.66,.74,.84,1],ease:"easeIn"},style:{position:"absolute",left:"38%",top:"36%",width:"26%",height:"19%",clipPath:"polygon(0% 4%, 76% 0%, 100% 57%, 62% 100%, 11% 76%)",background:`
            linear-gradient(
              145deg,
              rgba(248, 253, 255, 0.96),
              rgba(180, 218, 238, 0.82)
            )
          `,boxShadow:`
            0 12px 28px rgba(7, 28, 45, 0.24),
            0 0 24px rgba(206, 241, 255, 0.22)
          `}}),H.map((e,i)=>(0,t.jsx)(a.motion.div,{initial:{scale:.15,opacity:0,x:-90,y:-80},animate:{scale:[.15,.15,.35,.9,1.45,1.85],opacity:[0,0,.15,.82,.48,0],x:[-90,-90,-30,75,230,440],y:[-80,-80,-20,60,155,280]},transition:{duration:11,repeat:1/0,delay:e.delay,times:[0,.52,.61,.7,.84,1],ease:"easeOut"},style:{position:"absolute",left:e.left,top:e.top,width:e.width,height:e.height,borderRadius:"50%",background:`
              radial-gradient(
                ellipse,
                rgba(248, 253, 255, 0.94) 0%,
                rgba(217, 239, 250, 0.72) 35%,
                rgba(165, 207, 230, 0.28) 66%,
                transparent 80%
              )
            `,filter:"blur(18px)",mixBlendMode:"screen"}},i)),Array.from({length:34}).map((e,i)=>(0,t.jsx)(a.motion.div,{animate:{x:[0,0,30+i%7*28,180+i%9*36],y:[0,0,20+i%6*16,180+i%8*30],opacity:[0,0,.9,.52,0],scale:[.3,.3,1,.76,.25]},transition:{duration:11,repeat:1/0,delay:i%12*.08,times:[0,.58,.67,.82,1],ease:"easeOut"},style:{position:"absolute",left:`${38+17*i%23}%`,top:`${36+11*i%18}%`,width:3+i%5,height:3+i%5,borderRadius:"50%",background:"rgba(240, 251, 255, 0.95)",boxShadow:`
              0 0 8px rgba(215, 243, 255, 0.8)
            `}},i)),(0,t.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:(0,t.jsx)(a.motion.path,{d:"M 19 52 L 34 43 L 51 56 L 68 40 L 83 54",fill:"none",stroke:e,strokeWidth:"0.16",strokeDasharray:"1.5 1.5",animate:{opacity:[.12,.42,.18,.36,.12],pathLength:[0,1,1]},transition:{duration:7,repeat:1/0,ease:"easeInOut"}})}),G.map((i,s)=>(0,t.jsxs)("div",{style:{position:"absolute",left:`${i.left}%`,top:`${i.top}%`,transform:"translate(-50%, -50%)"},children:[(0,t.jsx)(a.motion.div,{animate:{scale:[.8,1.18,.9,1.1,.8],opacity:[.48,1,.62,.9,.48],backgroundColor:["#d7f4ff","#d7f4ff","#d7f4ff","#ffb454","#d7f4ff"],boxShadow:[`0 0 9px ${e}`,`0 0 18px ${e}`,`0 0 10px ${e}`,"0 0 24px rgba(255, 158, 55, 0.95)",`0 0 9px ${e}`]},transition:{duration:11,repeat:1/0,delay:.08*i.delay,times:[0,.5,.61,.69,1],ease:"easeInOut"},style:{width:9,height:9,borderRadius:"50%",border:`1px solid ${e}`}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.4,2.8],opacity:[.6,0]},transition:{duration:3.2,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",inset:-5,borderRadius:"50%",border:`1px solid ${e}88`}})]},s)),(0,t.jsx)(a.motion.div,{animate:{x:["-35%","125%"],opacity:[0,.28,.14,0]},transition:{duration:8.5,repeat:1/0,repeatDelay:1.5,ease:"linear"},style:{position:"absolute",top:"-12%",left:0,width:"24%",height:"130%",transform:"rotate(18deg)",background:`
            linear-gradient(
              to right,
              transparent,
              ${e}16,
              rgba(211, 244, 255, 0.48),
              ${e}12,
              transparent
            )
          `,filter:"blur(8px)",boxShadow:`0 0 26px ${e}20`}}),F.map(e=>(0,t.jsx)(a.motion.div,{initial:{x:"-35vw",opacity:0},animate:{x:"135vw",opacity:[0,.34,.18,0]},transition:{duration:e.duration,repeat:1/0,delay:e.delay,ease:"linear"},style:{position:"absolute",top:`${e.top}%`,left:0,width:e.width,height:1,transform:"rotate(-9deg)",background:`
              linear-gradient(
                to right,
                transparent,
                rgba(221, 246, 255, 0.8),
                transparent
              )
            `,filter:"blur(0.4px)",boxShadow:"0 0 7px rgba(200, 236, 255, 0.38)"}},e.id)),Y.map(e=>(0,t.jsx)(a.motion.div,{initial:{left:`${e.left}%`,top:`${e.top}%`,opacity:0},animate:{y:["-12vh","118vh"],x:[0,e.drift,-(.25*e.drift),.65*e.drift],rotate:[0,120,260,420],opacity:[0,e.opacity,.8*e.opacity,e.opacity,0]},transition:{duration:e.duration,repeat:1/0,delay:e.delay,ease:"linear"},style:{position:"absolute",width:e.size,height:e.size,borderRadius:"50%",background:"rgba(239, 250, 255, 0.92)",boxShadow:`
              0 0 6px rgba(211, 241, 255, 0.65)
            `}},e.id)),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,0,.46,.16,0]},transition:{duration:11,repeat:1/0,times:[0,.6,.65,.72,1],ease:"linear"},style:{position:"absolute",inset:0,background:`
            radial-gradient(
              ellipse at 54% 51%,
              rgba(238, 251, 255, 0.52),
              ${e}20 35%,
              transparent 68%
            )
          `,mixBlendMode:"screen"}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.02,.065,.02],backgroundPosition:["0px 0px","56px 56px"]},transition:{duration:13,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}12 1px, transparent 1px),
            linear-gradient(90deg, ${e}12 1px, transparent 1px)
          `,backgroundSize:"56px 56px",maskImage:"linear-gradient(to bottom, transparent 5%, black 42%, black 78%, transparent)",WebkitMaskImage:"linear-gradient(to bottom, transparent 5%, black 42%, black 78%, transparent)"}})]})}let V=Array.from({length:46},(e,t)=>({id:t,left:37*t%100,top:12+29*t%76,size:2+t%5,delay:t%15*.42,duration:8+t%8*.8,drift:18+t%7*8,type:t%4})),W=[{left:13,top:59,delay:0},{left:27,top:38,delay:.6},{left:42,top:65,delay:1.2},{left:62,top:34,delay:1.8},{left:77,top:57,delay:2.4},{left:89,top:42,delay:3}],X=[{left:"10%",top:"27%",width:250,height:120,delay:0,color:"rgba(113, 121, 132, 0.26)"},{left:"66%",top:"38%",width:300,height:135,delay:4,color:"rgba(119, 104, 151, 0.2)"},{left:"28%",top:"68%",width:280,height:115,delay:8,color:"rgba(116, 145, 119, 0.18)"}],K=Array.from({length:16},(e,t)=>({id:t,left:45+t%4*3.5,delay:.34*t,duration:3.2+t%5*.35}));function Z({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1,background:`
          linear-gradient(
            to bottom,
            rgba(4, 24, 34, 0.9) 0%,
            rgba(7, 42, 49, 0.76) 45%,
            rgba(10, 57, 54, 0.52) 100%
          )
        `},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.24,.48,.31,.42,.24],scale:[1,1.08,1.03,1.1,1]},transition:{duration:11,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"14%",right:"14%",bottom:"-30%",height:"66%",borderRadius:"50%",background:`
            radial-gradient(
              ellipse,
              ${e}5c 0%,
              rgba(56, 218, 163, 0.2) 38%,
              transparent 74%
            )
          `,filter:"blur(78px)"}}),(0,t.jsx)(a.motion.div,{animate:{x:[-8,8,-4,6,-8]},transition:{duration:28,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"-6%",right:"-6%",bottom:0,height:"32%",clipPath:"polygon(0% 100%, 0% 63%, 9% 54%, 18% 67%, 29% 45%, 41% 61%, 53% 41%, 66% 58%, 78% 47%, 90% 63%, 100% 52%, 100% 100%)",background:`
            linear-gradient(
              to bottom,
              rgba(26, 83, 71, 0.28),
              rgba(2, 19, 22, 0.92)
            )
          `,opacity:.78}}),X.map((e,i)=>(0,t.jsx)(a.motion.div,{animate:{x:[-24,36,-12,28,-24],y:[0,-12,7,-8,0],scale:[.9,1.08,.98,1.12,.9],opacity:[.08,.28,.16,.24,.08]},transition:{duration:16+3*i,repeat:1/0,delay:e.delay,ease:"easeInOut"},style:{position:"absolute",left:e.left,top:e.top,width:e.width,height:e.height,borderRadius:"50%",background:`
              radial-gradient(
                ellipse,
                ${e.color},
                rgba(67, 77, 76, 0.1) 52%,
                transparent 78%
              )
            `,filter:"blur(34px)"}},i)),(0,t.jsx)(a.motion.div,{animate:{opacity:[.025,.075,.025],backgroundPosition:["0px 0px","72px 42px"]},transition:{duration:16,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(30deg, ${e}12 12%, transparent 12.5%, transparent 87%, ${e}12 87.5%, ${e}12),
            linear-gradient(150deg, ${e}12 12%, transparent 12.5%, transparent 87%, ${e}12 87.5%, ${e}12),
            linear-gradient(30deg, ${e}12 12%, transparent 12.5%, transparent 87%, ${e}12 87.5%, ${e}12),
            linear-gradient(150deg, ${e}12 12%, transparent 12.5%, transparent 87%, ${e}12 87.5%, ${e}12)
          `,backgroundSize:"72px 42px",backgroundPosition:"0 0, 0 0, 36px 21px, 36px 21px",maskImage:"linear-gradient(to bottom, transparent 6%, black 42%, black 82%, transparent)",WebkitMaskImage:"linear-gradient(to bottom, transparent 6%, black 42%, black 82%, transparent)"}}),(0,t.jsxs)("div",{style:{position:"absolute",left:"50%",bottom:"8%",width:150,height:"68%",transform:"translateX(-50%)"},children:[(0,t.jsx)("div",{style:{position:"absolute",left:"50%",bottom:0,width:108,height:25,transform:"translateX(-50%)",borderRadius:"50%",background:"rgba(1, 16, 19, 0.92)",border:`1px solid ${e}38`,boxShadow:`
              0 0 24px ${e}20,
              inset 0 0 18px rgba(81, 255, 198, 0.08)
            `}}),(0,t.jsx)("div",{style:{position:"absolute",left:"50%",bottom:17,width:72,height:"76%",transform:"translateX(-50%)",clipPath:"polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%)",background:`
              repeating-linear-gradient(
                45deg,
                transparent 0px,
                transparent 12px,
                ${e}28 13px,
                ${e}28 15px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent 0px,
                transparent 12px,
                ${e}20 13px,
                ${e}20 15px
              ),
              linear-gradient(
                to right,
                rgba(5, 30, 34, 0.94),
                rgba(22, 78, 73, 0.72),
                rgba(5, 30, 34, 0.94)
              )
            `,borderLeft:`2px solid ${e}48`,borderRight:`2px solid ${e}48`,boxShadow:`0 0 24px ${e}18`}}),(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:"20%",width:102,height:12,transform:"translateX(-50%)",borderRadius:5,background:"rgba(8, 37, 40, 0.94)",border:`1px solid ${e}55`,boxShadow:`0 0 12px ${e}22`}}),(0,t.jsx)(a.motion.div,{animate:{boxShadow:[`0 0 12px ${e}22`,`0 0 26px ${e}88`,`0 0 14px ${e}35`]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"50%",top:"10%",width:76,height:34,transform:"translateX(-50%)",borderRadius:8,background:`
              linear-gradient(
                to bottom,
                rgba(19, 75, 72, 0.96),
                rgba(4, 30, 34, 0.98)
              )
            `,border:`1px solid ${e}88`},children:(0,t.jsx)(a.motion.div,{animate:{opacity:[.35,1,.45,1,.35]},transition:{duration:2.4,repeat:1/0},style:{position:"absolute",left:10,right:10,bottom:7,height:2,background:`linear-gradient(
                to right,
                transparent,
                ${e},
                transparent
              )`,boxShadow:`0 0 8px ${e}`}})}),(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:0,width:6,height:"14%",transform:"translateX(-50%)",background:`linear-gradient(
              to right,
              rgba(8, 28, 31, 0.95),
              ${e}55,
              rgba(8, 28, 31, 0.95)
            )`}}),(0,t.jsx)(a.motion.div,{animate:{rotate:[0,360]},transition:{duration:8,repeat:1/0,ease:"linear"},style:{position:"absolute",left:"50%",top:"-1%",width:46,height:8,transform:"translateX(-50%)",transformOrigin:"center center",borderRadius:8,background:`linear-gradient(
              to right,
              ${e}22,
              ${e},
              ${e}22
            )`,boxShadow:`0 0 14px ${e}88`}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.35,1,.35],scale:[.85,1.25,.85]},transition:{duration:1.8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"50%",top:"-3%",width:9,height:9,transform:"translateX(-50%)",borderRadius:"50%",background:"#c9fff0",boxShadow:`
              0 0 10px #c9fff0,
              0 0 24px ${e}
            `}})]}),[0,1,2,3].map(i=>(0,t.jsx)(a.motion.div,{initial:{scale:.2,opacity:0},animate:{scale:[.2,2.4],opacity:[0,.48,.18,0]},transition:{duration:5.6,repeat:1/0,delay:1.3*i,ease:"easeOut"},style:{position:"absolute",left:"50%",top:"34%",width:210,height:105,marginLeft:-105,marginTop:-52,borderRadius:"50%",border:`1px solid ${e}88`,boxShadow:`0 0 18px ${e}18`}},i)),(0,t.jsx)(a.motion.div,{animate:{rotate:[0,360]},transition:{duration:10,repeat:1/0,ease:"linear"},style:{position:"absolute",left:"50%",top:"34%",width:280,height:280,marginLeft:-140,marginTop:-140,borderRadius:"50%",background:`
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 320deg,
              ${e}08 334deg,
              ${e}35 350deg,
              transparent 360deg
            )
          `,opacity:.68}}),(0,t.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:(0,t.jsx)(a.motion.path,{d:"M 50 30 C 62 18, 82 25, 85 43 C 88 61, 69 72, 51 63 C 31 74, 14 59, 18 40 C 22 23, 39 20, 50 30",fill:"none",stroke:e,strokeWidth:"0.18",strokeDasharray:"1.5 1.8",animate:{pathLength:[0,1,1,0],opacity:[0,.42,.2,0]},transition:{duration:15,repeat:1/0,times:[0,.2,.82,1],ease:"easeInOut"}})}),(0,t.jsxs)(a.motion.div,{animate:{offsetDistance:["0%","4%","18%","42%","68%","88%","96%","100%"],opacity:[0,1,1,1,1,1,.8,0],scale:[.55,.9,1,1,1,.9,.65,.45]},transition:{duration:15,repeat:1/0,times:[0,.08,.2,.42,.67,.84,.94,1],ease:"easeInOut"},style:{position:"absolute",left:0,top:0,width:70,height:32,offsetPath:'path("M 50 30 C 62 18, 82 25, 85 43 C 88 61, 69 72, 51 63 C 31 74, 14 59, 18 40 C 22 23, 39 20, 50 30")',offsetRotate:"0deg",transform:"translate(-50%, -50%)"},children:[(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",width:28,height:12,transform:"translate(-50%, -50%)",borderRadius:"45% 45% 55% 55%",background:`
              linear-gradient(
                to bottom,
                rgba(173, 255, 231, 0.92),
                rgba(20, 80, 75, 0.96)
              )
            `,border:`1px solid ${e}`,boxShadow:`0 0 14px ${e}88`}}),(0,t.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",width:62,height:2,transform:"translate(-50%, -50%)",background:`${e}aa`}}),[6,52].map((i,s)=>(0,t.jsx)(a.motion.div,{animate:{rotate:[0,360],opacity:[.45,.9,.45]},transition:{rotate:{duration:.34,repeat:1/0,ease:"linear"},opacity:{duration:1.2,repeat:1/0}},style:{position:"absolute",left:i,top:3,width:15,height:15,borderRadius:"50%",border:`1px solid ${e}aa`,boxShadow:`0 0 10px ${e}55`}},s)),(0,t.jsx)(a.motion.div,{animate:{opacity:[.3,1,.4,1,.3]},transition:{duration:1.5,repeat:1/0},style:{position:"absolute",left:"50%",bottom:0,width:6,height:6,transform:"translateX(-50%)",borderRadius:"50%",background:"#d5fff6",boxShadow:`0 0 12px ${e}`}}),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,.25,.08,.28,0],scaleY:[.3,1,.75,1.1,.3]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"50%",top:"72%",width:52,height:130,transform:"translateX(-50%)",transformOrigin:"top center",clipPath:"polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%)",background:`linear-gradient(
              to bottom,
              ${e}42,
              transparent
            )`,filter:"blur(6px)"}})]}),(0,t.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:(0,t.jsx)(a.motion.path,{d:"M 13 59 L 27 38 L 42 65 L 50 34 L 62 34 L 77 57 L 89 42",fill:"none",stroke:e,strokeWidth:"0.15",strokeDasharray:"1.4 1.5",animate:{pathLength:[0,1,1],opacity:[0,.4,.17]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}})}),W.map((i,s)=>(0,t.jsxs)("div",{style:{position:"absolute",left:`${i.left}%`,top:`${i.top}%`,transform:"translate(-50%, -50%)"},children:[(0,t.jsx)(a.motion.div,{animate:{scale:[.8,1.22,.9,1.08,.8],opacity:[.48,1,.65,.9,.48]},transition:{duration:3.8,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{width:9,height:9,borderRadius:"50%",background:"#d5fff6",border:`1px solid ${e}`,boxShadow:`
                0 0 9px #d5fff6,
                0 0 20px ${e}
              `}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.45,2.8],opacity:[.55,0]},transition:{duration:3.2,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",inset:-5,borderRadius:"50%",border:`1px solid ${e}88`}})]},s)),K.map(i=>(0,t.jsx)(a.motion.div,{initial:{left:`${i.left}%`,bottom:"20%",opacity:0},animate:{y:[0,-250,-470],x:[0,(i.id%2==0?1:-1)*18,0],opacity:[0,1,.65,0],scale:[.45,1,.7,.3]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",width:4,height:10,borderRadius:4,background:`linear-gradient(
              to top,
              transparent,
              ${e}
            )`,boxShadow:`0 0 9px ${e}`}},i.id)),V.map(e=>{let i=["rgba(178, 189, 193, 0.72)","rgba(157, 139, 181, 0.66)","rgba(126, 169, 139, 0.66)","rgba(182, 171, 124, 0.62)"];return(0,t.jsx)(a.motion.div,{initial:{left:`${e.left}%`,top:`${e.top}%`,opacity:0},animate:{y:[24,-90],x:[0,e.drift,-(.35*e.drift),.55*e.drift],opacity:[0,.62,.34,0],scale:[.45,1.05,.74,.3]},transition:{duration:e.duration,repeat:1/0,delay:e.delay,ease:"easeInOut"},style:{position:"absolute",width:e.size,height:e.size,borderRadius:"50%",background:i[e.type],boxShadow:`0 0 7px ${i[e.type]}`}},e.id)}),(0,t.jsx)(a.motion.div,{animate:{x:["-35%","135%"],opacity:[0,.3,.12,0]},transition:{duration:9,repeat:1/0,repeatDelay:2,ease:"linear"},style:{position:"absolute",top:"-10%",left:0,width:"22%",height:"125%",transform:"rotate(12deg)",background:`
            linear-gradient(
              to right,
              transparent,
              ${e}16,
              rgba(164, 255, 226, 0.36),
              ${e}12,
              transparent
            )
          `,filter:"blur(8px)"}}),(0,t.jsxs)(a.motion.div,{animate:{opacity:[.12,.5,.2,.45,.12],y:[0,-4,0,-2,0]},transition:{duration:7,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",right:"7%",top:"14%",width:150,padding:"12px 14px",borderRadius:10,background:"rgba(3, 27, 31, 0.34)",border:`1px solid ${e}38`,boxShadow:`
            0 0 24px ${e}12,
            inset 0 0 16px rgba(109, 255, 207, 0.04)
          `,backdropFilter:"blur(4px)",fontFamily:"monospace",fontSize:9,lineHeight:1.7,letterSpacing:"0.08em",color:"rgba(213, 255, 246, 0.72)"},children:[(0,t.jsx)("div",{children:"AQI      32"}),(0,t.jsx)("div",{children:"PM2.5   LOW"}),(0,t.jsx)("div",{children:"CO₂     NORMAL"}),(0,t.jsx)("div",{children:"NO₂     NORMAL"}),(0,t.jsx)("div",{children:"DRONE   ACTIVE"})]}),(0,t.jsx)(a.motion.div,{animate:{opacity:[0,0,.28,.08,0]},transition:{duration:15,repeat:1/0,times:[0,.08,.13,.2,1],ease:"linear"},style:{position:"absolute",inset:0,background:`
            radial-gradient(
              ellipse at 50% 34%,
              rgba(157, 255, 224, 0.32),
              ${e}14 34%,
              transparent 68%
            )
          `,mixBlendMode:"screen"}})]})}let q=Array.from({length:5},(e,t)=>({id:t,inset:8+7*t,delay:.7*t})),J=Array.from({length:14},(e,t)=>({id:t,left:7+29*t%86,top:10+41*t%76,delay:.2*t})),Q=Array.from({length:18},(e,t)=>({id:t,left:47*t%100,delay:t%8*.55,duration:8+t%6,size:2+t%3}));function ee({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1},children:[(0,t.jsx)(a.motion.div,{animate:{opacity:[.24,.42,.24],scale:[1,1.05,1]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",inset:"-12%",background:`
            radial-gradient(
              circle at 72% 28%,
              ${e}2e 0%,
              ${e}14 24%,
              transparent 52%
            ),
            radial-gradient(
              circle at 24% 74%,
              ${e}20 0%,
              transparent 46%
            ),
            linear-gradient(
              145deg,
              rgba(5, 18, 15, 0.42),
              transparent 48%,
              rgba(5, 26, 21, 0.34)
            )
          `,filter:"blur(34px)"}}),(0,t.jsx)(a.motion.div,{animate:{scaleX:[.94,1.08,.97,1.04,.94],opacity:[.14,.3,.18,.26,.14]},transition:{duration:8,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",left:"-8%",right:"-8%",bottom:"-24%",height:"52%",borderRadius:"50%",background:e,filter:"blur(135px)"}}),(0,t.jsx)(a.motion.div,{animate:{rotate:[0,2,-1,1,0],scale:[.97,1.03,.99,1.02,.97],opacity:[.18,.36,.22,.32,.18]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:"10%",right:"4%",width:"min(650px, 64vw)",aspectRatio:"1",borderRadius:"46% 54% 58% 42% / 44% 38% 62% 56%"},children:q.map(i=>(0,t.jsx)(a.motion.div,{animate:{scale:[.96,1.04,.98,1.02,.96],opacity:[.26,.62,.32,.54,.26]},transition:{duration:6.5+i.id,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",inset:`${i.inset}%`,borderRadius:i.id%2==0?"43% 57% 48% 52% / 56% 39% 61% 44%":"58% 42% 61% 39% / 41% 54% 46% 59%",border:`1px solid ${e}55`,boxShadow:`0 0 18px ${e}12`}},i.id))}),(0,t.jsx)(a.motion.div,{animate:{opacity:[.035,.11,.035],backgroundPosition:["0px 0px","48px 48px"]},transition:{duration:11,repeat:1/0,ease:"linear"},style:{position:"absolute",inset:0,backgroundImage:`
            linear-gradient(${e}18 1px, transparent 1px),
            linear-gradient(90deg, ${e}18 1px, transparent 1px)
          `,backgroundSize:"48px 48px",maskImage:"linear-gradient(to bottom, transparent 3%, black 42%, transparent 100%)"}}),(0,t.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.18},children:J.slice(0,-1).map((i,s)=>{let r=J[s+1];return(0,t.jsx)(a.motion.line,{x1:i.left,y1:i.top,x2:r.left,y2:r.top,stroke:e,strokeWidth:"0.12",vectorEffect:"non-scaling-stroke",animate:{opacity:[.12,.58,.12]},transition:{duration:3.5,repeat:1/0,delay:i.delay,ease:"easeInOut"}},i.id)})}),J.map(i=>(0,t.jsxs)("div",{style:{position:"absolute",left:`${i.left}%`,top:`${i.top}%`,width:8,height:8,transform:"translate(-50%, -50%)"},children:[(0,t.jsx)(a.motion.div,{animate:{scale:[.8,1.7,.8],opacity:[.3,1,.3]},transition:{duration:2.8,repeat:1/0,delay:i.delay,ease:"easeInOut"},style:{position:"absolute",inset:0,borderRadius:"50%",background:e,boxShadow:`
                0 0 10px ${e},
                0 0 22px ${e}88
              `}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.4,2.4],opacity:[.6,0]},transition:{duration:2.8,repeat:1/0,delay:i.delay,ease:"easeOut"},style:{position:"absolute",inset:-4,borderRadius:"50%",border:`1px solid ${e}99`}})]},i.id)),(0,t.jsx)(a.motion.div,{animate:{y:["-20%","120%"],opacity:[0,.38,.2,0]},transition:{duration:7,repeat:1/0,repeatDelay:1.5,ease:"linear"},style:{position:"absolute",top:0,left:"4%",right:"4%",height:"18%",background:`linear-gradient(
            to bottom,
            transparent,
            ${e}22,
            ${e}70,
            transparent
          )`,filter:"blur(6px)",boxShadow:`0 0 28px ${e}24`}}),(0,t.jsx)(a.motion.div,{animate:{x:["-35%","135%"],opacity:[0,.42,0]},transition:{duration:7.5,repeat:1/0,delay:1.2,ease:"easeInOut"},style:{position:"absolute",top:"34%",left:0,width:"34%",height:2,background:`linear-gradient(
            to right,
            transparent,
            ${e},
            transparent
          )`,boxShadow:`0 0 16px ${e}`}}),Q.map(i=>(0,t.jsx)(a.motion.div,{initial:{left:`${i.left}%`,bottom:"-8%",opacity:0},animate:{bottom:"108%",x:[0,24,-18,35],opacity:[0,.54,.28,0],scale:[.6,1.2,.9,.5]},transition:{duration:i.duration,repeat:1/0,delay:i.delay,ease:"linear"},style:{position:"absolute",width:i.size,height:i.size,borderRadius:"50%",background:e,boxShadow:`0 0 10px ${e}`}},i.id)),(0,t.jsx)(a.motion.div,{animate:{scale:[.6,1.5],opacity:[.42,0]},transition:{duration:4.5,repeat:1/0,ease:"easeOut"},style:{position:"absolute",top:"48%",left:"50%",width:220,height:220,marginLeft:-110,marginTop:-110,borderRadius:"50%",border:`1px solid ${e}80`}}),(0,t.jsx)(a.motion.div,{animate:{scale:[.82,1.18,.82],opacity:[.24,.65,.24]},transition:{duration:4.5,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:"48%",left:"50%",width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:"50%",background:e,boxShadow:`
            0 0 14px ${e},
            0 0 34px ${e}
          `}})]})}function et({accent:e,product:a}){switch(a){case"swarm":return(0,t.jsx)(k,{accent:e});case"vulcan":return(0,t.jsx)(I,{accent:e});case"seismo":return(0,t.jsx)(E,{accent:e});case"wildfire":return(0,t.jsx)(z,{accent:e});case"oceanus":return(0,t.jsx)(P,{accent:e});case"avalanche":return(0,t.jsx)(U,{accent:e});case"atmos":return(0,t.jsx)(Z,{accent:e});default:return(0,t.jsx)(ee,{accent:e})}}let ea=[{left:"12%",top:"24%",size:8},{left:"24%",top:"14%",size:6},{left:"34%",top:"32%",size:10},{left:"18%",top:"52%",size:7},{left:"30%",top:"72%",size:9},{left:"48%",top:"18%",size:7},{left:"52%",top:"44%",size:11},{left:"48%",top:"76%",size:6},{left:"68%",top:"24%",size:9},{left:"76%",top:"42%",size:7},{left:"66%",top:"68%",size:10},{left:"86%",top:"62%",size:6},{left:"88%",top:"20%",size:8}],ei=["M144 190 C240 120 310 160 410 260","M290 110 C410 160 520 190 620 350","M210 420 C340 350 420 320 620 350","M360 580 C470 500 560 430 620 350","M620 350 C740 190 820 180 900 190","M620 350 C760 340 840 320 930 340","M620 350 C720 490 810 540 900 560","M900 190 C980 260 1030 340 1050 500","M930 340 C980 420 1010 470 1050 500"],es=[{label:"FAMILY",sublabel:"Connected",left:"50%",top:"10%",transform:"translateX(-50%)"},{label:"CAREGIVER",sublabel:"Available",left:"12%",top:"48%",transform:"translateY(-50%)"},{label:"EMERGENCY",sublabel:"Ready",right:"12%",top:"48%",transform:"translateY(-50%)"},{label:"RESIDENT",sublabel:"Protected",left:"50%",bottom:"10%",transform:"translateX(-50%)"}];function er({accent:e="#2dd4bf"}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden bg-[#020817]","aria-hidden":"true",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[linear-gradient(145deg,#020617_0%,#061426_45%,#020617_100%)]"}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[46%] h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]",style:{background:`radial-gradient(circle, ${e}38 0%, rgba(59,130,246,0.12) 38%, transparent 72%)`},animate:{opacity:[.45,.75,.45],scale:[.96,1.04,.96]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute inset-[-100px] opacity-[0.09]",style:{backgroundImage:`
            linear-gradient(${e}30 1px, transparent 1px),
            linear-gradient(90deg, ${e}30 1px, transparent 1px)
          `,backgroundSize:"64px 64px",maskImage:"radial-gradient(circle at center, black 15%, transparent 78%)"},animate:{x:[0,64],y:[0,64]},transition:{duration:32,repeat:1/0,ease:"linear"}}),(0,t.jsx)("svg",{className:"absolute inset-0 h-full w-full opacity-[0.12]",viewBox:"0 0 1200 800",preserveAspectRatio:"none",children:(0,t.jsxs)("g",{fill:"none",stroke:e,strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)(a.motion.path,{d:"M90 130 H390 V300 H510 V120 H790 V300 H1110 V660 H820 V520 H610 V690 H330 V540 H90 Z",strokeDasharray:"12 14",animate:{strokeDashoffset:[0,-220]},transition:{duration:28,repeat:1/0,ease:"linear"}}),(0,t.jsx)("path",{d:"M390 130 V300"}),(0,t.jsx)("path",{d:"M790 120 V300"}),(0,t.jsx)("path",{d:"M90 420 H330"}),(0,t.jsx)("path",{d:"M820 420 H1110"}),(0,t.jsx)("path",{d:"M510 300 H790"}),(0,t.jsx)("path",{d:"M610 520 H820"}),(0,t.jsx)("rect",{x:"145",y:"185",width:"130",height:"92",rx:"8"}),(0,t.jsx)("rect",{x:"905",y:"185",width:"130",height:"92",rx:"8"}),(0,t.jsx)("rect",{x:"145",y:"480",width:"120",height:"92",rx:"8"}),(0,t.jsx)("rect",{x:"920",y:"470",width:"105",height:"105",rx:"8"})]})}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full opacity-60",viewBox:"0 0 1200 800",preserveAspectRatio:"none",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("filter",{id:"haven-path-glow",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"4",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,t.jsxs)("linearGradient",{id:"haven-network-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#60a5fa",stopOpacity:"0.25"}),(0,t.jsx)("stop",{offset:"50%",stopColor:e,stopOpacity:"0.8"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#fbbf24",stopOpacity:"0.25"})]})]}),ei.map((i,s)=>(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:i,fill:"none",stroke:e,strokeWidth:"5",opacity:"0.07",filter:"url(#haven-path-glow)"}),(0,t.jsx)(a.motion.path,{d:i,fill:"none",stroke:"url(#haven-network-gradient)",strokeWidth:"1.5",strokeDasharray:"8 14",animate:{strokeDashoffset:[0,-180],opacity:[.25,.75,.25]},transition:{strokeDashoffset:{duration:12+s,repeat:1/0,ease:"linear"},opacity:{duration:4+s%3,repeat:1/0,ease:"easeInOut"}}})]},i))]}),ea.map((i,s)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full",style:{left:i.left,top:i.top,width:i.size,height:i.size,background:s%4==0?"#fbbf24":e,boxShadow:s%4==0?"0 0 18px rgba(251,191,36,0.65)":`0 0 18px ${e}`},animate:{scale:[.8,1.45,.8],opacity:[.3,.95,.3]},transition:{duration:3.5+s%4,delay:.18*s,repeat:1/0,ease:"easeInOut"}},`${i.left}-${i.top}`)),(0,t.jsxs)("div",{className:"absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2",children:[(0,t.jsx)(a.motion.div,{className:"absolute inset-0 rounded-full border",style:{borderColor:`${e}22`},animate:{rotate:360},transition:{duration:50,repeat:1/0,ease:"linear"}}),(0,t.jsx)(a.motion.div,{className:"absolute inset-10 rounded-full border border-dashed",style:{borderColor:`${e}30`},animate:{rotate:-360},transition:{duration:38,repeat:1/0,ease:"linear"}}),(0,t.jsx)(a.motion.div,{className:"absolute inset-[82px] rounded-full border",style:{borderColor:`${e}40`,boxShadow:`0 0 70px ${e}22`},animate:{scale:[.96,1.05,.96],opacity:[.4,.85,.4]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}}),(0,t.jsxs)(a.motion.div,{className:"absolute inset-[112px] overflow-hidden rounded-[42%] border backdrop-blur-md",style:{borderColor:`${e}55`,background:`radial-gradient(circle at 50% 42%, ${e}25, rgba(15,23,42,0.82) 70%)`,boxShadow:`inset 0 0 36px ${e}20, 0 0 55px ${e}30`},animate:{y:[0,-4,0],scale:[1,1.025,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"absolute left-[25%] top-[36%] h-2.5 w-8 rounded-full bg-cyan-200/90 shadow-[0_0_14px_rgba(165,243,252,0.85)]"}),(0,t.jsx)("div",{className:"absolute right-[25%] top-[36%] h-2.5 w-8 rounded-full bg-cyan-200/90 shadow-[0_0_14px_rgba(165,243,252,0.85)]"}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[58%] h-[2px] w-12 -translate-x-1/2 rounded-full",style:{background:e,boxShadow:`0 0 10px ${e}`},animate:{width:[42,56,42],opacity:[.45,.9,.45]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),Array.from({length:22}).map((i,s)=>(0,t.jsx)(a.motion.span,{className:"absolute h-1 w-1 rounded-full",style:{left:`${14+17*s%72}%`,top:`${12+23*s%72}%`,background:s%5==0?"#fbbf24":e},animate:{opacity:[.12,.85,.12],scale:[.7,1.4,.7]},transition:{duration:2.8+s%4,delay:.12*s,repeat:1/0,ease:"easeInOut"}},s))]}),(0,t.jsx)(a.motion.div,{className:"absolute inset-[112px] rounded-full border",style:{borderColor:`${e}55`},animate:{scale:[.85,1.75],opacity:[.45,0]},transition:{duration:4.5,repeat:1/0,ease:"easeOut"}})]}),es.map((i,s)=>(0,t.jsxs)(a.motion.div,{className:"absolute min-w-[122px] rounded-2xl border px-4 py-3 text-center backdrop-blur-lg",style:{left:i.left,right:i.right,top:i.top,bottom:i.bottom,transform:i.transform,borderColor:`${e}35`,background:"rgba(7,18,36,0.66)",boxShadow:`0 0 28px ${e}12`},animate:{y:[0,s%2==0?-7:7,0],opacity:[.65,1,.65]},transition:{duration:6+s,delay:.5*s,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"text-[10px] font-semibold tracking-[0.28em]",style:{color:e},children:i.label}),(0,t.jsx)("div",{className:"mt-1 text-[9px] tracking-[0.14em] text-slate-300/70",children:i.sublabel})]},i.label)),(0,t.jsx)("svg",{className:"absolute bottom-[15%] left-0 h-[110px] w-full opacity-25",viewBox:"0 0 1600 110",preserveAspectRatio:"none",children:(0,t.jsx)(a.motion.path,{d:"M0 60 H280 L320 60 L345 44 L372 78 L405 20 L445 94 L482 60 H720 L752 60 L780 42 L810 80 L845 18 L885 94 L920 60 H1160 L1190 60 L1220 45 L1250 77 L1285 22 L1320 92 L1360 60 H1600",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"16 20",animate:{strokeDashoffset:[0,-420]},transition:{duration:13,repeat:1/0,ease:"linear"}})}),(0,t.jsxs)(a.motion.div,{className:"absolute bottom-[11%] left-[8%] h-28 w-28 rounded-full border border-cyan-300/10",animate:{rotate:360},transition:{duration:42,repeat:1/0,ease:"linear"},children:[(0,t.jsx)("div",{className:"absolute inset-4 rounded-full border border-dashed border-cyan-300/15"}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:e,boxShadow:`0 0 18px ${e}`}})]}),(0,t.jsxs)(a.motion.div,{className:"absolute right-[7%] top-[14%] h-36 w-36 rounded-full border border-amber-300/10",animate:{rotate:-360},transition:{duration:55,repeat:1/0,ease:"linear"},children:[(0,t.jsx)("div",{className:"absolute inset-5 rounded-full border border-dashed border-amber-200/15"}),(0,t.jsx)("div",{className:"absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 bg-amber-200/20"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-1/2 h-5 w-[2px] -translate-x-1/2 bg-amber-200/20"})]}),Array.from({length:42}).map((i,s)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full",style:{left:`${19*s%100}%`,top:`${31*s%100}%`,width:s%7==0?3:2,height:s%7==0?3:2,background:s%8==0?"#fbbf24":e,boxShadow:s%8==0?"0 0 10px rgba(251,191,36,0.75)":`0 0 10px ${e}`},animate:{y:[0,-26-s%5*7,0],x:[0,s%2==0?9:-9,0],opacity:[.08,.65,.08]},transition:{duration:9+s%7,delay:s%9*.45,repeat:1/0,ease:"easeInOut"}},s)),(0,t.jsx)("div",{className:"absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-cyan-400/[0.04] to-transparent"}),(0,t.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-blue-950/45 to-transparent"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.55)_74%,rgba(2,6,23,0.94)_100%)]"})]})}function en({accent:e}){return(0,t.jsx)(er,{accent:e})}function eo({accent:e}){return(0,t.jsx)(er,{accent:e})}function el({accent:e}){return(0,t.jsx)(er,{accent:e})}function ed({accent:e,product:a}){switch(a){case"haven-ai":return(0,t.jsx)(en,{accent:e});case"adam":return(0,t.jsx)(eo,{accent:e});case"adromeda":return(0,t.jsx)(el,{accent:e});default:return(0,t.jsx)(er,{accent:e})}}function ec({}){let e=(0,i.useMemo)(()=>Array.from({length:220},(e,t)=>({id:t,x:37*t%100,y:61*t%100,size:1+t%3,delay:t%7*.5,duration:3+t%5,opacity:.3+t%6*.1})),[]);return(0,t.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at top, #0b1235 0%, #050817 40%, #02040b 100%)"}}),(0,t.jsx)(a.motion.div,{className:"absolute -left-64 top-20 h-[700px] w-[700px] rounded-full blur-[160px]",style:{background:"radial-gradient(circle, rgba(108,92,231,.30), transparent 70%)"},animate:{scale:[1,1.15,1],opacity:[.35,.6,.35]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute -right-64 bottom-0 h-[650px] w-[650px] rounded-full blur-[180px]",style:{background:"radial-gradient(circle, rgba(56,189,248,.25), transparent 70%)"},animate:{scale:[1.05,1.25,1.05],opacity:[.25,.5,.25]},transition:{duration:24,repeat:1/0,ease:"easeInOut"}}),e.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full bg-white",style:{left:`${e.x}%`,top:`${e.y}%`,width:e.size,height:e.size},animate:{opacity:[.25*e.opacity,e.opacity,.25*e.opacity],scale:[1,1.4,1]},transition:{duration:e.duration,delay:e.delay,repeat:1/0}},e.id)),[{size:700,duration:90,rotate:360},{size:900,duration:120,rotate:-360},{size:1100,duration:150,rotate:360},{size:1350,duration:180,rotate:-360}].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[78%] border border-cyan-400/15 rounded-full",style:{width:e.size,height:e.size,marginLeft:-e.size/2,marginTop:-e.size/2},animate:{rotate:e.rotate},transition:{duration:e.duration,repeat:1/0,ease:"linear"}},i)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 bottom-[-420px] h-[900px] w-[900px] rounded-full blur-[120px]",style:{marginLeft:-450,background:"radial-gradient(circle, rgba(59,130,246,.30), transparent 70%)"},animate:{opacity:[.35,.7,.35],scale:[1,1.08,1]},transition:{duration:8,repeat:1/0}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 bottom-[-360px] h-[760px] w-[760px] rounded-full overflow-hidden",style:{marginLeft:-380,background:"radial-gradient(circle at 30% 30%, #4fc3f7 0%, #1565c0 40%, #0b2447 70%, #04101d 100%)",boxShadow:"0 0 120px rgba(59,130,246,.35), inset 0 0 100px rgba(255,255,255,.08)"},animate:{rotate:360},transition:{duration:300,repeat:1/0,ease:"linear"},children:(0,t.jsx)(a.motion.div,{className:"absolute inset-0",style:{background:"repeating-linear-gradient(90deg, transparent 0 60px, rgba(255,255,255,.04) 61px 65px)"},animate:{x:[0,-240]},transition:{duration:40,repeat:1/0,ease:"linear"}})})]})}function ep({accent:e}){let i=Array.from({length:5},(e,t)=>({id:t,size:220+55*t,duration:28+8*t,delay:.8*t}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ec,{accent:e}),i.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2",animate:{rotate:[0,360]},transition:{duration:e.duration,repeat:1/0,ease:"linear"},children:(0,t.jsxs)(a.motion.div,{className:"relative border border-cyan-400/20 rounded-full",style:{width:e.size,height:e.size,marginLeft:-e.size/2,marginTop:-e.size/2},children:[(0,t.jsx)("div",{className:"absolute left-1/2 -top-2 -translate-x-1/2",children:(0,t.jsxs)(a.motion.div,{animate:{rotate:[0,360]},transition:{duration:8,repeat:1/0,ease:"linear"},children:[(0,t.jsx)("div",{className:"h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]"}),(0,t.jsx)("div",{className:"absolute -left-4 top-1 h-1 w-3 bg-cyan-300/60"}),(0,t.jsx)("div",{className:"absolute right-[-12px] top-1 h-1 w-3 bg-cyan-300/60"})]})}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border border-cyan-300/30",style:{width:12,height:12,marginLeft:-6,marginTop:-6},animate:{scale:[1,10],opacity:[.6,0]},transition:{duration:4,delay:e.delay,repeat:1/0}})]})},e.id)),(0,t.jsx)(a.motion.div,{className:"absolute inset-0",style:{background:"conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,.12) 18deg, transparent 36deg)",mixBlendMode:"screen"},animate:{rotate:[0,360]},transition:{duration:12,repeat:1/0,ease:"linear"}}),(0,t.jsx)("div",{className:"absolute top-10 left-10 font-mono text-cyan-300 text-xs tracking-[0.35em]",children:"ORBIT SENTINEL"}),(0,t.jsxs)("div",{className:"absolute top-10 right-10 text-right font-mono text-xs",children:[(0,t.jsx)("div",{className:"text-cyan-300",children:"STATUS"}),(0,t.jsx)("div",{className:"text-green-400",children:"SURVEILLANCE ACTIVE"})]}),(0,t.jsxs)("div",{className:"absolute bottom-10 left-10 font-mono text-xs",children:[(0,t.jsx)("div",{className:"text-cyan-300",children:"ACTIVE SATELLITES"}),(0,t.jsx)("div",{className:"text-white text-xl",children:"05"})]}),(0,t.jsxs)("div",{className:"absolute bottom-10 right-10 text-right font-mono text-xs",children:[(0,t.jsx)("div",{className:"text-cyan-300",children:"GLOBAL SCAN"}),(0,t.jsx)("div",{className:"text-white text-xl",children:"100%"})]})]})}[0,72,144,216,288].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[78%]",animate:{rotate:[e,e+360]},transition:{duration:70+12*i,repeat:1/0,ease:"linear"},style:{width:900,height:900,marginLeft:-450,marginTop:-450,transformOrigin:"50% 50%"},children:(0,t.jsx)("div",{className:"absolute left-1/2 top-0",style:{marginLeft:-12,marginTop:-12},children:(0,t.jsxs)(a.motion.div,{animate:{rotate:[0,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"relative",children:[(0,t.jsx)("div",{className:"absolute left-[-18px] top-[6px] h-[4px] w-[16px] rounded bg-cyan-300/70"}),(0,t.jsx)("div",{className:"absolute right-[-18px] top-[6px] h-[4px] w-[16px] rounded bg-cyan-300/70"}),(0,t.jsx)("div",{className:"h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.9)]"}),(0,t.jsx)(a.motion.div,{className:"absolute left-[4px] top-[14px] h-1.5 w-1.5 rounded-full bg-cyan-300",animate:{opacity:[.2,1,.2]},transition:{duration:1.8,repeat:1/0}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border border-cyan-300/40",style:{width:12,height:12,marginLeft:-6,marginTop:-6},animate:{scale:[1,6],opacity:[.6,0]},transition:{duration:4,repeat:1/0,delay:.8*i}})]})})},i)),Array.from({length:40}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute h-1 w-1 rounded-full bg-cyan-300",style:{left:"50%",top:"78%"},animate:{rotate:[9*i,9*i+360]},transition:{duration:45+i%10*4,repeat:1/0,ease:"linear"},children:(0,t.jsx)("div",{style:{width:420+i%4*70,height:1}})},`telemetry-${i}`)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[78%] rounded-full border border-cyan-400/20",style:{width:900,height:900,marginLeft:-450,marginTop:-450},animate:{scale:[1,1.4],opacity:[.5,0]},transition:{duration:6,repeat:1/0}}),(0,t.jsx)(a.motion.div,{className:"absolute h-[2px] w-40 rounded-full",style:{top:"18%",left:"-15%",background:"linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.9), rgba(255,255,255,0))"},animate:{x:["0vw","130vw"],y:["0vh","22vh"],opacity:[0,1,1,0]},transition:{duration:2.5,repeat:1/0,repeatDelay:14,ease:"easeOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 bottom-[-180px]",style:{width:900,height:500,marginLeft:-450,background:"radial-gradient(circle at center, rgba(34,211,238,.18), transparent 70%)",filter:"blur(100px)"},animate:{scale:[1,1.15,1],opacity:[.25,.45,.25]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.06]",style:{backgroundImage:`
            linear-gradient(rgba(34,211,238,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.15) 1px, transparent 1px)
          `,backgroundSize:"90px 90px",maskImage:"radial-gradient(circle at center, black 45%, transparent 95%)"}}),Array.from({length:12}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute bg-cyan-300/20",style:{height:1,width:160+i%4*80,left:`${10+7*i%80}%`,top:`${15+6*i%65}%`,rotate:`${-25+i%6*10}deg`},animate:{opacity:[.1,.5,.1]},transition:{duration:3+i%4,repeat:1/0}},`line-${i}`)),Array.from({length:18}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full bg-cyan-300",style:{width:4,height:4,left:`${8+5*i%84}%`,top:`${12+4*i%70}%`,boxShadow:"0 0 10px rgba(34,211,238,.7)"},animate:{scale:[1,1.8,1],opacity:[.4,1,.4]},transition:{duration:2+i%3,repeat:1/0}},`node-${i}`)),(0,t.jsxs)(a.motion.div,{className:"absolute left-8 top-8 text-cyan-300/70 text-xs font-mono tracking-[0.3em]",animate:{opacity:[.5,1,.5]},transition:{duration:4,repeat:1/0},children:[(0,t.jsx)("div",{children:"AURIS ORBIT"}),(0,t.jsx)("div",{className:"mt-2 text-white/80",children:"SATELLITE NETWORK"})]}),(0,t.jsxs)(a.motion.div,{className:"absolute right-8 top-8 text-right text-xs font-mono",animate:{opacity:[.4,1,.4]},transition:{duration:5,repeat:1/0},children:[(0,t.jsx)("div",{className:"text-cyan-300",children:"STATUS"}),(0,t.jsx)("div",{className:"text-emerald-400",children:"ONLINE"})]}),(0,t.jsxs)(a.motion.div,{className:"absolute left-8 bottom-8 text-xs font-mono",animate:{opacity:[.5,1,.5]},transition:{duration:6,repeat:1/0},children:[(0,t.jsx)("div",{className:"text-cyan-300",children:"SATELLITES"}),(0,t.jsx)("div",{className:"text-white text-lg",children:"05"})]}),(0,t.jsxs)(a.motion.div,{className:"absolute right-8 bottom-8 text-right text-xs font-mono",animate:{opacity:[.5,1,.5]},transition:{duration:5,repeat:1/0},children:[(0,t.jsx)("div",{className:"text-cyan-300",children:"GLOBAL COVERAGE"}),(0,t.jsx)("div",{className:"text-white text-lg",children:"100%"})]});let ex=[{id:"R-01",left:"18%",top:"28%",delay:0},{id:"R-02",left:"38%",top:"18%",delay:.7},{id:"R-03",left:"62%",top:"22%",delay:1.4},{id:"R-04",left:"80%",top:"34%",delay:2.1},{id:"R-05",left:"28%",top:"58%",delay:2.8},{id:"R-06",left:"52%",top:"48%",delay:3.5},{id:"R-07",left:"74%",top:"62%",delay:4.2}],em=[{id:"L-01",left:"18%",top:"28%",width:250,rotate:-12,delay:0},{id:"L-02",left:"38%",top:"18%",width:300,rotate:4,delay:.6},{id:"L-03",left:"52%",top:"48%",width:280,rotate:12,delay:1.2},{id:"L-04",left:"28%",top:"58%",width:360,rotate:-8,delay:1.8},{id:"L-05",left:"62%",top:"22%",width:260,rotate:28,delay:2.4}],eb=[.48,.62,.78,.9,1];function eu({accent:e}){return(0,t.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,t.jsx)(ec,{accent:e}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[46%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]",style:{background:"radial-gradient(circle, rgba(168,85,247,.26), rgba(34,211,238,.1) 42%, transparent 72%)"},animate:{opacity:[.3,.6,.3],scale:[.96,1.08,.96]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),em.map(e=>(0,t.jsx)("div",{className:"absolute h-px origin-left",style:{left:e.left,top:e.top,width:e.width,rotate:`${e.rotate}deg`,background:"linear-gradient(90deg, rgba(34,211,238,.08), rgba(34,211,238,.8), rgba(168,85,247,.75), rgba(34,211,238,.08))",boxShadow:"0 0 12px rgba(34,211,238,.35)"},children:(0,t.jsx)(a.motion.div,{className:"absolute left-0 top-1/2 h-1.5 w-16 -translate-y-1/2 rounded-full",style:{background:"linear-gradient(90deg, transparent, rgba(255,255,255,.95), rgba(34,211,238,.9), transparent)",filter:"blur(.3px)"},animate:{x:[0,e.width-64],opacity:[0,1,1,0]},transition:{duration:2.8,delay:e.delay,repeat:1/0,repeatDelay:1.2,ease:"easeInOut"}})},e.id)),ex.map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{y:[0,-6,0]},transition:{duration:4+i%3,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30",animate:{scale:[.8,2.4],opacity:[.65,0]},transition:{duration:3.4,delay:e.delay,repeat:1/0,ease:"easeOut"}}),(0,t.jsxs)("div",{className:"relative h-6 w-16",children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm border border-white/50",style:{background:"linear-gradient(135deg, rgba(255,255,255,.9), rgba(148,163,184,.4))",boxShadow:"0 0 14px rgba(255,255,255,.35), 0 0 24px rgba(34,211,238,.25)"}}),(0,t.jsx)("div",{className:"absolute left-0 top-1/2 h-4 w-5 -translate-y-1/2 border border-cyan-300/45",style:{background:"repeating-linear-gradient(90deg, rgba(34,211,238,.7) 0 2px, rgba(15,23,42,.85) 2px 5px)"}}),(0,t.jsx)("div",{className:"absolute right-0 top-1/2 h-4 w-5 -translate-y-1/2 border border-cyan-300/45",style:{background:"repeating-linear-gradient(90deg, rgba(34,211,238,.7) 0 2px, rgba(15,23,42,.85) 2px 5px)"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300",style:{boxShadow:"0 0 10px rgba(232,121,249,.95)"},animate:{opacity:[.25,1,.25]},transition:{duration:1.5,delay:e.delay,repeat:1/0}})]}),(0,t.jsx)("div",{className:"mt-2 text-center font-mono text-[8px] tracking-[0.22em] text-cyan-200/65",children:e.id})]},e.id)),(0,t.jsxs)(a.motion.div,{className:"absolute left-1/2 top-[46%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/25",animate:{rotate:360},transition:{duration:24,repeat:1/0,ease:"linear"},children:[(0,t.jsx)("div",{className:"absolute inset-4 rounded-full border border-cyan-300/25"}),(0,t.jsxs)("div",{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-slate-950/50 backdrop-blur-sm",children:[(0,t.jsx)(a.motion.div,{className:"absolute inset-2 rounded-full",style:{background:"conic-gradient(from 0deg, rgba(34,211,238,.8), rgba(168,85,247,.8), rgba(34,211,238,.8))",filter:"blur(7px)"},animate:{rotate:-360},transition:{duration:8,repeat:1/0,ease:"linear"}}),(0,t.jsx)("div",{className:"absolute inset-[14px] rounded-full bg-slate-950"}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white",style:{boxShadow:"0 0 14px rgba(255,255,255,.95), 0 0 30px rgba(34,211,238,.8)"},animate:{scale:[.85,1.3,.85]},transition:{duration:2.4,repeat:1/0,ease:"easeInOut"}})]})]}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[46%] h-[420px] w-[120px] -translate-x-1/2 -translate-y-full origin-bottom",style:{clipPath:"polygon(48% 100%, 52% 100%, 100% 0, 0 0)",background:"linear-gradient(180deg, transparent, rgba(168,85,247,.05) 30%, rgba(34,211,238,.22))",filter:"blur(3px)"},animate:{opacity:[.15,.6,.15],scaleX:[.8,1.08,.8]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),(0,t.jsxs)("div",{className:"absolute bottom-12 left-10",children:[(0,t.jsx)("div",{className:"mb-2 font-mono text-[10px] tracking-[0.3em] text-cyan-300/70",children:"SIGNAL STRENGTH"}),(0,t.jsx)("div",{className:"flex items-end gap-1",children:eb.map((e,i)=>(0,t.jsx)(a.motion.div,{className:"w-2 rounded-sm",style:{height:8+6*i,background:"linear-gradient(180deg, rgba(232,121,249,.95), rgba(34,211,238,.75))",boxShadow:"0 0 8px rgba(34,211,238,.35)",transformOrigin:"bottom"},animate:{scaleY:[e,1,e],opacity:[.45,1,.45]},transition:{duration:2.2,delay:.16*i,repeat:1/0,ease:"easeInOut"}},`signal-${i}`))})]}),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.36em] text-fuchsia-300",children:"ORBIT RELAY"}),(0,t.jsx)("div",{className:"mt-2 text-[10px] tracking-[0.22em] text-white/55",children:"GLOBAL COMMUNICATION CONSTELLATION"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono text-[10px]",children:[(0,t.jsx)("div",{className:"tracking-[0.28em] text-cyan-300",children:"LINK STATUS"}),(0,t.jsx)(a.motion.div,{className:"mt-1 tracking-[0.2em] text-emerald-400",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0},children:"ALL NODES CONNECTED"})]}),(0,t.jsxs)("div",{className:"absolute bottom-12 right-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[10px] tracking-[0.25em] text-cyan-300/70",children:"DATA THROUGHPUT"}),(0,t.jsx)("div",{className:"mt-1 text-xl tracking-[0.12em] text-white",children:"8.42 TB/s"}),(0,t.jsx)("div",{className:"mt-1 text-[9px] tracking-[0.2em] text-fuchsia-300/70",children:"LATENCY 12 ms"})]}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 42%, rgba(2,4,11,.18) 72%, rgba(2,4,11,.72) 100%)"}})]})}let eg=[{id:1,left:"22%",top:"34%",label:"CITY-001"},{id:2,left:"48%",top:"44%",label:"PORT-214"},{id:3,left:"72%",top:"28%",label:"GRID-812"},{id:4,left:"63%",top:"62%",label:"SITE-045"},{id:5,left:"32%",top:"66%",label:"ZONE-119"}];function ef({accent:e}){return(0,t.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,t.jsx)(ec,{accent:e}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-0",style:{width:280,height:"100%",marginLeft:-140,clipPath:"polygon(45% 0%,55% 0%,100% 100%,0% 100%)",background:"linear-gradient(180deg, rgba(34,211,238,.18), rgba(34,211,238,.02))",filter:"blur(2px)"},animate:{x:[-240,240,-240]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),eg.map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{scale:[1,1.08,1]},transition:{duration:2+i,repeat:1/0},children:[(0,t.jsxs)("div",{className:"h-12 w-12 border border-cyan-300/60 rounded-sm relative",children:[(0,t.jsx)(a.motion.div,{className:"absolute inset-0 border border-cyan-300",animate:{scale:[1,1.5],opacity:[.8,0]},transition:{duration:2,repeat:1/0,delay:.5*i}}),(0,t.jsx)("div",{className:"absolute -left-1 -top-1 h-2 w-2 bg-cyan-300"}),(0,t.jsx)("div",{className:"absolute right-[-4px] -top-1 h-2 w-2 bg-cyan-300"}),(0,t.jsx)("div",{className:"absolute -left-1 bottom-[-4px] h-2 w-2 bg-cyan-300"}),(0,t.jsx)("div",{className:"absolute right-[-4px] bottom-[-4px] h-2 w-2 bg-cyan-300"})]}),(0,t.jsx)("div",{className:"mt-2 font-mono text-[9px] tracking-[0.25em] text-cyan-300/70",children:e.label})]},e.id)),Array.from({length:18},(e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute left-0 right-0 h-px bg-cyan-300/10",style:{top:`${5.5*i}%`},animate:{opacity:[.05,.3,.05]},transition:{duration:3,delay:.15*i,repeat:1/0}},i)),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[.4em] text-cyan-300",children:"ORBIT VISION"}),(0,t.jsx)("div",{className:"mt-2 text-[10px] text-white/60 tracking-[.25em]",children:"EARTH OBSERVATION"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[.3em] text-cyan-300",children:"AI ANALYSIS"}),(0,t.jsx)(a.motion.div,{className:"mt-2 text-green-400 text-sm",animate:{opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0},children:"LIVE"})]}),(0,t.jsxs)("div",{className:"absolute left-10 bottom-10 font-mono",children:[(0,t.jsx)("div",{className:"text-[10px] tracking-[.3em] text-cyan-300",children:"OBJECTS DETECTED"}),(0,t.jsx)("div",{className:"text-3xl text-white",children:"127"})]}),(0,t.jsxs)("div",{className:"absolute right-10 bottom-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[10px] tracking-[.3em] text-cyan-300",children:"RESOLUTION"}),(0,t.jsx)("div",{className:"text-3xl text-white",children:"0.3m"}),(0,t.jsx)("div",{className:"text-[10px] text-cyan-300/70 mt-2",children:"AI TRACKING ENABLED"})]}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"radial-gradient(circle, rgba(34,211,238,.10), transparent 70%)",filter:"blur(70px)"},animate:{scale:[1,1.08,1],opacity:[.25,.45,.25]},transition:{duration:6,repeat:1/0}})]})}let eh=[{id:"cloud-1",top:"20%",left:"-18%",width:520,height:130,duration:28,opacity:.18},{id:"cloud-2",top:"34%",left:"-28%",width:680,height:160,duration:36,opacity:.14},{id:"cloud-3",top:"52%",left:"-22%",width:590,height:145,duration:32,opacity:.16}],ey=[{id:"P-01",left:"20%",top:"32%",value:"1008"},{id:"P-02",left:"42%",top:"24%",value:"1002"},{id:"P-03",left:"68%",top:"30%",value:"998"},{id:"P-04",left:"76%",top:"58%",value:"1005"},{id:"P-05",left:"34%",top:"64%",value:"1011"}],ej=Array.from({length:24},(e,t)=>({id:t,left:`${12+17*t%78}%`,top:`${20+13*t%50}%`,delay:t%8*.22,duration:1.4+t%5*.18}));function ev({accent:e}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)(ec,{accent:e}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-[48%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]",style:{background:"radial-gradient(circle, rgba(56,189,248,.25), rgba(14,165,233,.10) 38%, rgba(99,102,241,.08) 58%, transparent 74%)"},animate:{scale:[.96,1.08,.96],opacity:[.3,.58,.3]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),eh.map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full blur-[34px]",style:{top:e.top,left:e.left,width:e.width,height:e.height,opacity:e.opacity,background:"radial-gradient(ellipse at center, rgba(255,255,255,.8), rgba(186,230,253,.35) 45%, transparent 72%)"},animate:{x:["0vw","145vw"],y:[0,i%2==0?-16:14,0]},transition:{x:{duration:e.duration,repeat:1/0,ease:"linear"},y:{duration:8+2*i,repeat:1/0,ease:"easeInOut"}}},e.id)),(0,t.jsxs)(a.motion.div,{className:"absolute left-[58%] top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2",animate:{rotate:360},transition:{duration:34,repeat:1/0,ease:"linear"},children:[[0,1,2,3,4].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border",style:{width:90+52*e,height:90+52*e,marginLeft:-(90+52*e)/2,marginTop:-(90+52*e)/2,borderColor:e%2==0?"rgba(125,211,252,.35)":"rgba(165,180,252,.24)",borderTopColor:"transparent",borderLeftColor:e%2==0?"rgba(255,255,255,.16)":"transparent",boxShadow:2===e?"0 0 24px rgba(56,189,248,.18)":void 0},animate:{scale:[.96,1.04,.96]},transition:{duration:4+e,repeat:1/0,ease:"easeInOut"}},`storm-ring-${e}`)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/50 bg-slate-950/70",style:{boxShadow:"0 0 22px rgba(125,211,252,.55), inset 0 0 18px rgba(56,189,248,.15)"},animate:{scale:[.9,1.12,.9]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.95)]"})]}),[0,1,2].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute left-[58%] top-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20",style:{width:380+95*e,height:380+95*e},animate:{scale:[.92,1.08],opacity:[.45,0]},transition:{duration:4.5,delay:1.2*e,repeat:1/0,ease:"easeOut"}},`tracking-ring-${e}`)),(0,t.jsx)(a.motion.div,{className:"absolute left-[58%] top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,.18) 18deg, rgba(56,189,248,.05) 34deg, transparent 48deg)",maskImage:"radial-gradient(circle, transparent 0 10%, black 11% 100%)"},animate:{rotate:360},transition:{duration:9,repeat:1/0,ease:"linear"}}),ej.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute h-8 w-px rotate-[16deg]",style:{left:e.left,top:e.top,background:"linear-gradient(180deg, transparent, rgba(125,211,252,.8), transparent)"},animate:{y:[0,110],opacity:[0,.8,0]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"linear"}},`rain-${e.id}`)),ey.map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{y:[0,-5,0]},transition:{duration:3.5+.5*i,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25",animate:{scale:[.8,1.8],opacity:[.6,0]},transition:{duration:3,delay:.55*i,repeat:1/0,ease:"easeOut"}}),(0,t.jsxs)("div",{className:"relative rounded-md border border-cyan-300/25 bg-slate-950/55 px-3 py-2 font-mono backdrop-blur-sm",children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.22em] text-cyan-300/65",children:e.id}),(0,t.jsx)("div",{className:"mt-1 text-xs tracking-[0.1em] text-white",children:e.value}),(0,t.jsx)("div",{className:"text-[7px] tracking-[0.2em] text-cyan-200/45",children:"hPa"})]})]},e.id)),(0,t.jsx)(a.motion.div,{className:"absolute left-[70%] top-[34%] h-40 w-20",animate:{opacity:[0,0,1,.15,0,0]},transition:{duration:5.5,repeat:1/0,times:[0,.7,.74,.78,.84,1]},children:(0,t.jsx)("div",{className:"h-full w-full",style:{clipPath:"polygon(48% 0, 70% 0, 56% 38%, 80% 38%, 30% 100%, 42% 56%, 20% 56%)",background:"linear-gradient(180deg, rgba(255,255,255,.95), rgba(125,211,252,.82), transparent)",filter:"drop-shadow(0 0 10px rgba(125,211,252,.95))"}})}),Array.from({length:14},(e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute left-[8%] right-[8%] h-px",style:{top:`${16+5.2*i}%`,background:"linear-gradient(90deg, transparent, rgba(56,189,248,.12), transparent)"},animate:{opacity:[.04,.26,.04],x:[-16,16,-16]},transition:{duration:4+i%4,delay:.14*i,repeat:1/0,ease:"easeInOut"}},`atmos-line-${i}`)),(0,t.jsxs)("div",{className:"absolute bottom-12 left-10",children:[(0,t.jsx)("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-cyan-300/70",children:"TEMPERATURE BAND"}),(0,t.jsx)("div",{className:"h-2 w-52 rounded-full",style:{background:"linear-gradient(90deg, #2563eb, #22d3ee, #facc15, #f97316, #ef4444)",boxShadow:"0 0 10px rgba(56,189,248,.24)"}}),(0,t.jsxs)("div",{className:"mt-2 flex w-52 justify-between font-mono text-[8px] text-white/45",children:[(0,t.jsx)("span",{children:"-40°"}),(0,t.jsx)("span",{children:"0°"}),(0,t.jsx)("span",{children:"40°"})]})]}),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.38em] text-cyan-300",children:"ORBIT WEATHER"}),(0,t.jsx)("div",{className:"mt-2 text-[10px] tracking-[0.23em] text-white/55",children:"METEOROLOGICAL SATELLITE NETWORK"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono text-[10px]",children:[(0,t.jsx)("div",{className:"tracking-[0.28em] text-cyan-300",children:"STORM ANALYSIS"}),(0,t.jsx)(a.motion.div,{className:"mt-1 tracking-[0.2em] text-amber-300",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0},children:"ACTIVE SYSTEM DETECTED"})]}),(0,t.jsxs)("div",{className:"absolute bottom-12 right-10 grid grid-cols-3 gap-7 text-right font-mono",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.22em] text-cyan-300/65",children:"PRESSURE"}),(0,t.jsx)("div",{className:"mt-1 text-xl text-white",children:"998"}),(0,t.jsx)("div",{className:"text-[8px] text-white/40",children:"hPa"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.22em] text-cyan-300/65",children:"WIND"}),(0,t.jsx)("div",{className:"mt-1 text-xl text-white",children:"84"}),(0,t.jsx)("div",{className:"text-[8px] text-white/40",children:"mph"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.22em] text-cyan-300/65",children:"PRECIP"}),(0,t.jsx)("div",{className:"mt-1 text-xl text-white",children:"73%"}),(0,t.jsx)("div",{className:"text-[8px] text-white/40",children:"coverage"})]})]}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 42%, rgba(2,4,11,.14) 72%, rgba(2,4,11,.68) 100%)"}})]})}let ew=[{id:"SAT-102",left:"22%",top:"26%"},{id:"OBJ-447",left:"67%",top:"24%"},{id:"SAT-311",left:"78%",top:"55%"},{id:"DEB-019",left:"54%",top:"68%"},{id:"SAT-087",left:"28%",top:"58%"},{id:"OBJ-902",left:"44%",top:"34%"}];function eN({accent:e}){return(0,t.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,t.jsx)(ec,{accent:e}),[0,1,2,3].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border",style:{width:420+120*e,height:420+120*e,marginLeft:-(420+120*e)/2,marginTop:-(420+120*e)/2,borderColor:"rgba(34,211,238,.18)",boxShadow:"0 0 24px rgba(34,211,238,.15)"},animate:{rotate:e%2==0?360:-360,scale:[1,1.02,1]},transition:{rotate:{duration:90+25*e,repeat:1/0,ease:"linear"},scale:{duration:5,repeat:1/0}}},e)),[0,1,2].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border border-cyan-300/20",style:{width:320,height:320,marginLeft:-160,marginTop:-160},animate:{scale:[1,3],opacity:[.45,0]},transition:{duration:5,delay:1.6*e,repeat:1/0}},e)),ew.map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{y:[0,-5,0]},transition:{duration:3+i,repeat:1/0},children:[(0,t.jsx)(a.motion.div,{className:"h-4 w-4 rounded-full bg-cyan-300",style:{boxShadow:"0 0 16px rgba(34,211,238,.8)"},animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 rounded-full border border-cyan-300/20",style:{width:18,height:18,marginLeft:-9,marginTop:-9},animate:{scale:[1,3],opacity:[.5,0]},transition:{duration:2.8,repeat:1/0,delay:.4*i}}),(0,t.jsx)("div",{className:"mt-2 font-mono text-[8px] tracking-[.2em] text-cyan-300/70",children:e.id})]},e.id)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"conic-gradient(from 0deg, transparent, rgba(34,211,238,.12), transparent)",filter:"blur(4px)"},animate:{rotate:360},transition:{duration:18,repeat:1/0,ease:"linear"}}),Array.from({length:18},(e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute h-px bg-cyan-300/10",style:{width:180,left:`${10+5*i%80}%`,top:`${18+4*i%70}%`,rotate:`${i%6*12}deg`},animate:{opacity:[.05,.35,.05]},transition:{duration:2+i%3,repeat:1/0}},i)),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[.4em] text-cyan-300",children:"ORBIT GUARDIAN"}),(0,t.jsx)("div",{className:"mt-2 text-[10px] tracking-[.25em] text-white/60",children:"SPACE AWARENESS"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[.3em] text-cyan-300",children:"SHIELD"}),(0,t.jsx)(a.motion.div,{className:"mt-2 text-green-400",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0},children:"ACTIVE"})]}),(0,t.jsxs)("div",{className:"absolute left-10 bottom-10 font-mono",children:[(0,t.jsx)("div",{className:"text-[10px] tracking-[.25em] text-cyan-300",children:"TRACKED OBJECTS"}),(0,t.jsx)("div",{className:"text-3xl text-white",children:"142"})]}),(0,t.jsxs)("div",{className:"absolute right-10 bottom-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[10px] tracking-[.25em] text-cyan-300",children:"COLLISION RISK"}),(0,t.jsx)("div",{className:"text-3xl text-green-400",children:"LOW"}),(0,t.jsx)("div",{className:"mt-2 text-[9px] text-cyan-300/70",children:"ALL SATELLITES SAFE"})]})]})}function ek({accent:e,product:a}){switch(a){case"sentinel":return(0,t.jsx)(ep,{accent:e});case"relay":return(0,t.jsx)(eu,{accent:e});case"vision":return(0,t.jsx)(ef,{accent:e});case"weather":return(0,t.jsx)(ev,{accent:e});case"guardian":return(0,t.jsx)(eN,{accent:e});default:return(0,t.jsx)(ec,{accent:e})}}let e_=[{id:"road-1",left:"4%",top:"22%",width:420,rotate:8},{id:"road-2",left:"28%",top:"16%",width:510,rotate:28},{id:"road-3",left:"10%",top:"56%",width:460,rotate:-14},{id:"road-4",left:"52%",top:"62%",width:390,rotate:12},{id:"road-5",left:"63%",top:"18%",width:340,rotate:72},{id:"road-6",left:"34%",top:"44%",width:520,rotate:-4},{id:"road-7",left:"18%",top:"76%",width:470,rotate:-22}],eL=Array.from({length:34},(e,t)=>({id:t,left:`${8+17*t%84}%`,top:`${10+29*t%78}%`,size:3+t%4,delay:t%7*.35})),e$=[{id:"A",left:"18%",top:"34%",delay:0},{id:"B",left:"42%",top:"22%",delay:.8},{id:"C",left:"68%",top:"32%",delay:1.6},{id:"D",left:"76%",top:"64%",delay:2.4},{id:"E",left:"30%",top:"68%",delay:3.2}],eI=[{left:"14%",top:"72%"},{left:"24%",top:"64%"},{left:"34%",top:"58%"},{left:"44%",top:"48%"},{left:"56%",top:"42%"},{left:"66%",top:"32%"},{left:"78%",top:"24%"}];function eS({accent:e}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden bg-[#020817]",children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]",style:{background:`radial-gradient(circle, ${e}38, rgba(34,211,238,.14) 38%, transparent 72%)`},animate:{scale:[.95,1.08,.95],opacity:[.34,.62,.34]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute -inset-[140px]",style:{backgroundImage:`
            linear-gradient(rgba(56,189,248,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,.08) 1px, transparent 1px)
          `,backgroundSize:"46px 46px",transform:"perspective(900px) rotateX(58deg) scale(1.25)",transformOrigin:"center center",maskImage:"radial-gradient(circle at center, black 0%, black 52%, transparent 88%)"},animate:{backgroundPosition:["0px 0px","46px 46px"]},transition:{duration:8,repeat:1/0,ease:"linear"}}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-25",style:{backgroundImage:`
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
          `,backgroundSize:"18px 18px"}}),e_.map((e,i)=>(0,t.jsx)("div",{className:"absolute h-[3px] origin-left",style:{left:e.left,top:e.top,width:e.width,rotate:`${e.rotate}deg`,background:"linear-gradient(90deg, transparent, rgba(56,189,248,.25), rgba(255,255,255,.45), rgba(34,211,238,.2), transparent)",boxShadow:"0 0 12px rgba(56,189,248,.18)"},children:(0,t.jsx)(a.motion.div,{className:"absolute left-0 top-1/2 h-[5px] w-20 -translate-y-1/2 rounded-full",style:{background:"linear-gradient(90deg, transparent, rgba(255,255,255,.9), rgba(34,211,238,.95), transparent)",filter:"blur(.2px)"},animate:{x:[0,e.width-80],opacity:[0,1,1,0]},transition:{duration:3.5+i%3,delay:.55*i,repeat:1/0,repeatDelay:1.2,ease:"easeInOut"}})},e.id)),eL.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full bg-cyan-300",style:{left:e.left,top:e.top,width:e.size,height:e.size,boxShadow:"0 0 10px rgba(34,211,238,.75)"},animate:{opacity:[.2,1,.2],scale:[.8,1.45,.8]},transition:{duration:2.8+e.id%4,delay:e.delay,repeat:1/0,ease:"easeInOut"}},`map-node-${e.id}`)),e$.map(e=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{y:[0,-7,0]},transition:{duration:3.4,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-full h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35",animate:{scale:[.6,2],opacity:[.7,0]},transition:{duration:2.8,delay:e.delay,repeat:1/0,ease:"easeOut"}}),(0,t.jsx)("div",{className:"relative flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-cyan-400/80 font-mono text-[10px] text-slate-950",style:{boxShadow:"0 0 16px rgba(34,211,238,.7), 0 0 34px rgba(56,189,248,.28)"},children:e.id}),(0,t.jsx)("div",{className:"absolute left-1/2 top-[30px] h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/40 bg-cyan-400/80",style:{boxShadow:"5px 5px 12px rgba(34,211,238,.24)"}})]},`pin-${e.id}`)),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 1000 700",preserveAspectRatio:"none",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"atlas-route-gradient",x1:"0",x2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgba(34,211,238,.18)"}),(0,t.jsx)("stop",{offset:"45%",stopColor:"rgba(255,255,255,.92)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgba(59,130,246,.48)"})]}),(0,t.jsxs)("filter",{id:"atlas-route-glow",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"4",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,t.jsx)(a.motion.path,{d:"M 120 590 C 230 540, 260 500, 350 470 C 470 430, 520 350, 650 300 C 770 250, 820 190, 900 140",fill:"none",stroke:"url(#atlas-route-gradient)",strokeWidth:"5",strokeLinecap:"round",filter:"url(#atlas-route-glow)",initial:{pathLength:0,opacity:0},animate:{pathLength:[0,1,1],opacity:[0,1,.72]},transition:{duration:5.5,repeat:1/0,repeatDelay:1.5,ease:"easeInOut"}}),(0,t.jsx)(a.motion.circle,{r:"8",fill:"white",filter:"url(#atlas-route-glow)",animate:{offsetDistance:["0%","100%"],opacity:[0,1,1,0]},transition:{duration:5.5,repeat:1/0,repeatDelay:1.5,ease:"easeInOut"},style:{offsetPath:"path('M 120 590 C 230 540, 260 500, 350 470 C 470 430, 520 350, 650 300 C 770 250, 820 190, 900 140')"}})]}),eI.map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200 bg-slate-950",style:{left:e.left,top:e.top,boxShadow:"0 0 12px rgba(34,211,238,.72)"},animate:{scale:[.75,1.35,.75],opacity:[.4,1,.4]},transition:{duration:2.2,delay:.3*i,repeat:1/0,ease:"easeInOut"}},`route-point-${i}`)),[0,1,2].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25",animate:{scale:[.5,3.8],opacity:[.55,0]},transition:{duration:5.5,delay:1.7*e,repeat:1/0,ease:"easeOut"}},`gps-pulse-${e}`)),(0,t.jsxs)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-slate-950/65 backdrop-blur-sm",style:{boxShadow:"0 0 24px rgba(34,211,238,.4), inset 0 0 20px rgba(56,189,248,.12)"},animate:{scale:[.92,1.08,.92]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute inset-3 rounded-full border border-white/50",animate:{rotate:360},transition:{duration:8,repeat:1/0,ease:"linear"}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,.95)]"})]}),(0,t.jsx)(a.motion.div,{className:"absolute left-[6%] right-[6%] h-px",style:{background:"linear-gradient(90deg, transparent, rgba(34,211,238,.7), rgba(255,255,255,.9), rgba(34,211,238,.7), transparent)",boxShadow:"0 0 14px rgba(34,211,238,.5)"},animate:{top:["8%","92%","8%"],opacity:[0,.65,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.4em] text-cyan-300",children:"AURIS ATLAS"}),(0,t.jsx)("div",{className:"mt-2 text-[9px] tracking-[0.25em] text-white/50",children:"INTELLIGENT WAYFINDING NETWORK"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.28em] text-cyan-300/70",children:"SYSTEM STATUS"}),(0,t.jsx)(a.motion.div,{className:"mt-1 text-xs tracking-[0.18em] text-emerald-400",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0},children:"LIVE"})]}),(0,t.jsxs)("div",{className:"absolute bottom-10 left-10 font-mono",children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.26em] text-cyan-300/65",children:"ACTIVE DESTINATIONS"}),(0,t.jsx)("div",{className:"mt-1 text-2xl text-white",children:"128"})]}),(0,t.jsxs)("div",{className:"absolute bottom-10 right-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.26em] text-cyan-300/65",children:"ROUTE STATUS"}),(0,t.jsx)("div",{className:"mt-1 text-lg tracking-[0.12em] text-white",children:"OPTIMIZED"}),(0,t.jsx)("div",{className:"mt-1 text-[8px] tracking-[0.2em] text-cyan-200/50",children:"NO APP REQUIRED"})]}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 40%, rgba(2,8,23,.2) 70%, rgba(2,8,23,.82) 100%)"}})]})}let eA=["SHOPPING","DINING","ENTERTAINMENT","SERVICES","PARKING","AMENITIES"],eE=[{id:"nike",name:"Nike",category:"SHOPPING",detail:"Athletic Apparel",unit:"SUITE 214",left:"18%",top:"28%",delay:0},{id:"food-court",name:"Food Court",category:"DINING",detail:"12 Restaurants",unit:"LEVEL 2",left:"42%",top:"20%",delay:.5},{id:"cinema",name:"Cinema",category:"ENTERTAINMENT",detail:"14 Screens",unit:"NORTH WING",left:"68%",top:"28%",delay:1},{id:"guest-services",name:"Guest Services",category:"SERVICES",detail:"Visitor Assistance",unit:"CENTER COURT",left:"76%",top:"58%",delay:1.5},{id:"parking",name:"Parking A",category:"PARKING",detail:"Entrance Access",unit:"EAST GARAGE",left:"54%",top:"70%",delay:2},{id:"restrooms",name:"Restrooms",category:"AMENITIES",detail:"Accessible Facilities",unit:"LEVEL 1",left:"25%",top:"65%",delay:2.5}],eO=[{id:1,left:"23%",top:"42%",delay:0},{id:2,left:"36%",top:"54%",delay:.4},{id:3,left:"51%",top:"38%",delay:.8},{id:4,left:"64%",top:"49%",delay:1.2},{id:5,left:"72%",top:"36%",delay:1.6}],eR=[{id:1,left:"24%",top:"36%",width:210,rotate:18,delay:0},{id:2,left:"46%",top:"29%",width:180,rotate:10,delay:.7},{id:3,left:"58%",top:"57%",width:170,rotate:-18,delay:1.4},{id:4,left:"31%",top:"61%",width:190,rotate:-8,delay:2.1}],eT=Array.from({length:20},(e,t)=>({id:t,left:`${12+19*t%76}%`,top:`${18+31*t%64}%`,delay:t%8*.35,duration:3.5+t%5*.5}));function eC({accent:e}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)(eS,{accent:e}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]",style:{background:"radial-gradient(circle, rgba(34,211,238,.18), rgba(59,130,246,.08) 46%, transparent 74%)"},animate:{opacity:[.22,.48,.22],scale:[.95,1.08,.95]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),eT.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute h-1.5 w-1.5 rounded-full bg-cyan-200",style:{left:e.left,top:e.top,boxShadow:"0 0 9px rgba(34,211,238,.75)"},animate:{x:[0,16,-8,0],y:[0,-10,12,0],opacity:[.18,.9,.4,.18]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"easeInOut"}},`directory-activity-${e.id}`)),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-9 flex -translate-x-1/2 gap-2 rounded-2xl border border-cyan-300/15 bg-slate-950/65 p-2 font-mono backdrop-blur-md",style:{boxShadow:"0 18px 50px rgba(2,8,23,.4), inset 0 0 24px rgba(34,211,238,.04)"},animate:{y:[0,-3,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:eA.map((e,i)=>(0,t.jsx)(a.motion.div,{className:"rounded-lg border px-3 py-2 text-[8px] tracking-[0.18em]",animate:{color:["rgba(255,255,255,.42)","rgba(165,243,252,1)","rgba(255,255,255,.42)"],borderColor:["rgba(34,211,238,.08)","rgba(34,211,238,.45)","rgba(34,211,238,.08)"],backgroundColor:["rgba(15,23,42,.2)","rgba(34,211,238,.12)","rgba(15,23,42,.2)"]},transition:{duration:6,delay:.8*i,repeat:1/0,ease:"easeInOut"},children:e},e))}),(0,t.jsxs)(a.motion.div,{className:"absolute left-10 top-[18%] w-[310px] rounded-2xl border border-cyan-300/20 bg-slate-950/68 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 20px 60px rgba(2,8,23,.42), inset 0 0 26px rgba(34,211,238,.05)"},animate:{y:[0,-6,0]},transition:{duration:4.5,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.3em] text-cyan-300/65",children:"SEARCH DIRECTORY"}),(0,t.jsxs)("div",{className:"mt-4 flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-slate-900/65 px-4 py-3",children:[(0,t.jsx)(a.motion.div,{className:"h-3.5 w-3.5 rounded-full border border-cyan-200/70",animate:{scale:[.9,1.1,.9],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}}),(0,t.jsxs)("div",{className:"relative flex h-5 items-center text-sm text-white",children:[(0,t.jsx)(a.motion.span,{animate:{opacity:[1,1,1,0,0,1]},transition:{duration:8,repeat:1/0,times:[0,.55,.7,.76,.9,1]},children:"Nike"}),(0,t.jsx)(a.motion.span,{className:"ml-0.5 h-4 w-px bg-cyan-200",animate:{opacity:[0,1,0]},transition:{duration:.9,repeat:1/0}})]})]}),(0,t.jsxs)(a.motion.div,{className:"mt-4 rounded-xl border border-cyan-300/25 bg-cyan-400/8 p-4",animate:{borderColor:["rgba(34,211,238,.2)","rgba(34,211,238,.65)","rgba(34,211,238,.2)"],boxShadow:["0 0 0 rgba(34,211,238,0)","0 0 26px rgba(34,211,238,.18)","0 0 0 rgba(34,211,238,0)"]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm tracking-[0.08em] text-white",children:"NIKE"}),(0,t.jsx)("div",{className:"mt-1 text-[8px] tracking-[0.2em] text-cyan-200/60",children:"ATHLETIC APPAREL"})]}),(0,t.jsx)("div",{className:"rounded-lg border border-cyan-300/20 px-2 py-1 text-[8px] tracking-[0.14em] text-cyan-200",children:"SUITE 214"})]}),(0,t.jsxs)("div",{className:"mt-4 flex items-center justify-between border-t border-cyan-300/10 pt-3",children:[(0,t.jsx)("span",{className:"text-[8px] tracking-[0.18em] text-white/40",children:"WALK TIME"}),(0,t.jsx)("span",{className:"text-[10px] tracking-[0.16em] text-white",children:"3 MIN"})]})]}),(0,t.jsxs)("div",{className:"mt-4 flex justify-between text-[8px] tracking-[0.2em]",children:[(0,t.jsx)("span",{className:"text-white/35",children:"RESULTS FOUND"}),(0,t.jsx)("span",{className:"text-cyan-200",children:"01"})]})]}),eE.map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute w-44 rounded-xl border border-cyan-300/15 bg-slate-950/62 p-3 font-mono backdrop-blur-md",style:{left:e.left,top:e.top,boxShadow:"0 14px 40px rgba(2,8,23,.36), inset 0 0 18px rgba(34,211,238,.035)"},animate:{y:[0,-8,0],opacity:[.55,1,.55],borderColor:"nike"===e.id?["rgba(34,211,238,.2)","rgba(34,211,238,.7)","rgba(34,211,238,.2)"]:["rgba(34,211,238,.1)","rgba(34,211,238,.28)","rgba(34,211,238,.1)"]},transition:{duration:4+i%3,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.08em] text-white",children:e.name}),(0,t.jsx)("div",{className:"mt-1 text-[7px] tracking-[0.18em] text-cyan-300/55",children:e.category})]}),(0,t.jsx)(a.motion.div,{className:"relative h-5 w-5 rounded-full border border-cyan-200/45 bg-cyan-400/10",animate:{scale:[.9,1.2,.9]},transition:{duration:2.4,delay:e.delay,repeat:1/0},children:(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(34,211,238,.9)]"})})]}),(0,t.jsx)("div",{className:"mt-3 h-px bg-gradient-to-r from-cyan-300/25 to-transparent"}),(0,t.jsxs)("div",{className:"mt-3 flex items-end justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.16em] text-white/35",children:e.detail}),(0,t.jsx)("div",{className:"mt-1 text-[8px] tracking-[0.14em] text-cyan-100/75",children:e.unit})]}),(0,t.jsx)(a.motion.div,{className:"text-sm text-cyan-200",animate:{x:[0,4,0],opacity:[.4,1,.4]},transition:{duration:2,delay:e.delay,repeat:1/0},children:"→"})]})]},e.id)),eR.map(e=>(0,t.jsx)("div",{className:"absolute h-px origin-left",style:{left:e.left,top:e.top,width:e.width,rotate:`${e.rotate}deg`,background:"linear-gradient(90deg, rgba(34,211,238,.05), rgba(34,211,238,.55), rgba(255,255,255,.72), transparent)"},children:(0,t.jsx)(a.motion.div,{className:"absolute left-0 top-1/2 h-1.5 w-10 -translate-y-1/2 rounded-full",style:{background:"linear-gradient(90deg, transparent, rgba(255,255,255,.95), rgba(34,211,238,.8), transparent)",boxShadow:"0 0 12px rgba(34,211,238,.8)"},animate:{x:[0,e.width-40],opacity:[0,1,0]},transition:{duration:2.6,delay:e.delay,repeat:1/0,repeatDelay:1.1,ease:"easeInOut"}})},`directory-line-${e.id}`)),eO.map(e=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{y:[0,-5,0]},transition:{duration:3,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30",animate:{scale:[.45,1.8],opacity:[.7,0]},transition:{duration:2.8,delay:e.delay,repeat:1/0,ease:"easeOut"}}),(0,t.jsx)("div",{className:"relative h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-cyan-400",style:{boxShadow:"0 0 12px rgba(34,211,238,.9), 0 0 26px rgba(59,130,246,.4)"},children:(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"})})]},`directory-pin-${e.id}`)),(0,t.jsxs)(a.motion.div,{className:"absolute bottom-12 left-10 w-60 rounded-2xl border border-cyan-300/18 bg-slate-950/65 p-4 font-mono backdrop-blur-md",animate:{y:[0,-4,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.24em] text-cyan-300/55",children:"FEATURED DESTINATION"}),(0,t.jsxs)("div",{className:"mt-2 flex items-end justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-lg tracking-[0.08em] text-white",children:"NIKE"}),(0,t.jsx)("div",{className:"mt-1 text-[8px] tracking-[0.18em] text-white/40",children:"SHOPPING · SUITE 214"})]}),(0,t.jsx)(a.motion.div,{className:"flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-cyan-200",animate:{scale:[.9,1.12,.9]},transition:{duration:2,repeat:1/0},children:"↗"})]})]}),(0,t.jsxs)(a.motion.div,{className:"absolute bottom-12 right-10 w-60 rounded-2xl border border-cyan-300/18 bg-slate-950/65 p-4 font-mono backdrop-blur-md",animate:{y:[0,-4,0]},transition:{duration:4.4,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.2em] text-cyan-300/55",children:"LOCATIONS"}),(0,t.jsx)("div",{className:"mt-1 text-2xl text-white",children:"324"})]}),(0,t.jsxs)("div",{className:"border-l border-cyan-300/15 pl-4",children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.2em] text-cyan-300/55",children:"CATEGORIES"}),(0,t.jsx)("div",{className:"mt-1 text-2xl text-white",children:"18"})]})]}),(0,t.jsx)("div",{className:"mt-4 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"}),(0,t.jsxs)("div",{className:"mt-3 flex justify-between text-[8px] tracking-[0.18em]",children:[(0,t.jsx)("span",{className:"text-white/35",children:"DIRECTORY STATUS"}),(0,t.jsx)(a.motion.span,{className:"text-emerald-400",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0},children:"LIVE"})]})]}),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.4em] text-cyan-300",children:"ATLAS DIRECTORY"}),(0,t.jsx)("div",{className:"mt-2 text-[9px] tracking-[0.24em] text-white/50",children:"INTELLIGENT DESTINATION DISCOVERY"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-[17%] text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.24em] text-cyan-300/55",children:"SEARCH INDEX"}),(0,t.jsx)("div",{className:"mt-1 text-xs tracking-[0.16em] text-white",children:"SYNCHRONIZED"}),(0,t.jsx)(a.motion.div,{className:"mt-2 ml-auto h-1 w-32 overflow-hidden rounded-full bg-white/5",children:(0,t.jsx)(a.motion.div,{className:"h-full rounded-full bg-cyan-300",animate:{width:["15%","100%","15%"]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}})})]}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 43%, rgba(2,8,23,.14) 72%, rgba(2,8,23,.72) 100%)"}})]})}let ez=Array.from({length:32},(e,t)=>({id:t,left:`${12+23*t%76}%`,top:`${16+31*t%68}%`,x:18+t%5*8,y:12+t%4*7,delay:t%10*.32,duration:5+t%6*.7})),eM=[{id:"north-wing",left:"27%",top:"30%",size:180,delay:0},{id:"center-court",left:"52%",top:"48%",size:240,delay:2},{id:"food-court",left:"72%",top:"31%",size:190,delay:4},{id:"east-entry",left:"70%",top:"67%",size:150,delay:6},{id:"west-entry",left:"26%",top:"68%",size:135,delay:8}],eB=[{id:1,left:"18%",top:"38%",width:260,rotate:12,delay:0},{id:2,left:"42%",top:"35%",width:290,rotate:-10,delay:.9},{id:3,left:"24%",top:"62%",width:330,rotate:-4,delay:1.8},{id:4,left:"51%",top:"58%",width:260,rotate:18,delay:2.7},{id:5,left:"38%",top:"46%",width:220,rotate:40,delay:3.6}],eD=[{id:"qr-1",left:"20%",top:"52%",delay:0,label:"ENTRY A"},{id:"qr-2",left:"44%",top:"26%",delay:1.2,label:"KIOSK 04"},{id:"qr-3",left:"65%",top:"42%",delay:2.4,label:"LEVEL 2"},{id:"qr-4",left:"79%",top:"62%",delay:3.6,label:"PARKING B"}],eP=[{name:"NIKE",value:92,visits:"2,841"},{name:"FOOD COURT",value:78,visits:"2,104"},{name:"CINEMA",value:63,visits:"1,756"},{name:"GUEST SERVICES",value:47,visits:"1,209"},{name:"PARKING A",value:36,visits:"964"}],eY=[{name:"DIRECTORY",status:"ONLINE",delay:0},{name:"NAVIGATION",status:"ONLINE",delay:.4},{name:"QR NETWORK",status:"ONLINE",delay:.8},{name:"KIOSKS",status:"ONLINE",delay:1.2},{name:"ANALYTICS",status:"ACTIVE",delay:1.6}],eF=[[0,72],[55,68],[110,51],[165,58],[220,33],[275,42],[330,18],[385,30],[440,12],[495,24]],eG=[44,58,49,72,64,88,76,94,82,68,53,41],eH=Array.from({length:18},(e,t)=>({id:t,left:`${8+29*t%84}%`,top:`${12+17*t%76}%`,delay:t%7*.45,duration:4+t%5*.75}));function eU({accent:e}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)(eS,{accent:e}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]",style:{background:"radial-gradient(circle, rgba(34,211,238,.17), rgba(37,99,235,.08) 42%, transparent 73%)"},animate:{opacity:[.24,.52,.24],scale:[.94,1.08,.94]},transition:{duration:11,repeat:1/0,ease:"easeInOut"}}),eH.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute h-1 w-1 rounded-full bg-cyan-200",style:{left:e.left,top:e.top,boxShadow:"0 0 9px rgba(34,211,238,.85)"},animate:{y:[0,-24,8,0],x:[0,10,-7,0],opacity:[.12,.85,.32,.12],scale:[.7,1.4,.9,.7]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"easeInOut"}},`data-particle-${e.id}`)),eM.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute -translate-x-1/2 -translate-y-1/2 rounded-full",style:{left:e.left,top:e.top,width:e.size,height:e.size,background:"radial-gradient(circle, rgba(34,211,238,.34) 0%, rgba(59,130,246,.2) 25%, rgba(14,165,233,.08) 52%, transparent 74%)",filter:"blur(8px)"},animate:{scale:[.65,1.2,.76,1.05,.65],opacity:[.16,.68,.3,.52,.16]},transition:{duration:10,delay:e.delay,repeat:1/0,ease:"easeInOut"}},e.id)),eM.map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-cyan-300/30",style:{left:e.left,top:e.top,boxShadow:"0 0 18px rgba(34,211,238,.95), 0 0 45px rgba(37,99,235,.55)"},animate:{scale:[.8,1.45,.8],opacity:[.42,1,.42]},transition:{duration:3.2,delay:.7*i,repeat:1/0,ease:"easeInOut"},children:(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30",animate:{scale:[.45,2.2],opacity:[.75,0]},transition:{duration:3.5,delay:.7*i,repeat:1/0,ease:"easeOut"}})},`hotspot-core-${e.id}`)),eB.map(e=>(0,t.jsx)("div",{className:"absolute h-px origin-left",style:{left:e.left,top:e.top,width:e.width,rotate:`${e.rotate}deg`,background:"linear-gradient(90deg, transparent, rgba(34,211,238,.16), rgba(255,255,255,.3), rgba(34,211,238,.16), transparent)"},children:(0,t.jsx)(a.motion.div,{className:"absolute left-0 top-1/2 h-1.5 w-14 -translate-y-1/2 rounded-full",style:{background:"linear-gradient(90deg, transparent, rgba(255,255,255,.96), rgba(34,211,238,.88), transparent)",boxShadow:"0 0 14px rgba(34,211,238,.85)"},animate:{x:[0,e.width-56],opacity:[0,1,1,0]},transition:{duration:3.6,delay:e.delay,repeat:1/0,repeatDelay:1.1,ease:"easeInOut"}})},`flow-path-${e.id}`)),ez.map(e=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{x:[0,e.x,-(.45*e.x),0],y:[0,-e.y,.6*e.y,0]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"h-1.5 w-1.5 rounded-full bg-white",style:{boxShadow:"0 0 8px rgba(255,255,255,.95), 0 0 14px rgba(34,211,238,.65)"},animate:{opacity:[.25,1,.45,.25],scale:[.75,1.25,.85,.75]},transition:{duration:2.4,delay:e.delay,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-px w-8 -translate-y-1/2 origin-left",style:{background:"linear-gradient(90deg, rgba(34,211,238,.5), transparent)"},animate:{opacity:[0,.55,0],scaleX:[.2,1,.2]},transition:{duration:2.2,delay:e.delay,repeat:1/0}})]},`visitor-${e.id}`)),eD.map(e=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},animate:{y:[0,-5,0]},transition:{duration:3.8,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30",animate:{scale:[.45,2],opacity:[.7,0]},transition:{duration:3.2,delay:e.delay,repeat:1/0,ease:"easeOut"}}),(0,t.jsx)("div",{className:"relative grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-[2px] rounded-md border border-cyan-200/55 bg-slate-950/80 p-1 backdrop-blur-sm",style:{boxShadow:"0 0 15px rgba(34,211,238,.75), inset 0 0 10px rgba(34,211,238,.12)"},children:Array.from({length:9},(i,s)=>(0,t.jsx)(a.motion.div,{className:"rounded-[1px] bg-cyan-200",animate:{opacity:s%2==0?[.3,1,.3]:[.8,.25,.8]},transition:{duration:1.8,delay:e.delay+.08*s,repeat:1/0}},`${e.id}-pixel-${s}`))}),(0,t.jsx)("div",{className:"absolute left-3 top-3 whitespace-nowrap rounded border border-cyan-300/15 bg-slate-950/70 px-2 py-1 font-mono text-[7px] tracking-[0.16em] text-cyan-100/55 backdrop-blur-sm",children:e.label}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-px w-48 origin-left",style:{background:"linear-gradient(90deg, rgba(34,211,238,.8), rgba(255,255,255,.55), transparent)",boxShadow:"0 0 10px rgba(34,211,238,.5)"},animate:{scaleX:[0,1,0],opacity:[0,.85,0]},transition:{duration:3,delay:e.delay,repeat:1/0,repeatDelay:1.4,ease:"easeInOut"}})]},e.id)),(0,t.jsxs)(a.motion.div,{className:"absolute left-10 top-[18%] w-[390px] rounded-2xl border border-cyan-300/20 bg-slate-950/68 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 24px 70px rgba(2,8,23,.5), inset 0 0 30px rgba(34,211,238,.045)"},animate:{y:[0,-5,0]},transition:{duration:4.8,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-start justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.28em] text-cyan-300/65",children:"VISITOR ACTIVITY"}),(0,t.jsx)("div",{className:"mt-2 text-3xl tracking-[0.04em] text-white",children:"12,487"}),(0,t.jsx)("div",{className:"mt-1 text-[8px] tracking-[0.18em] text-emerald-400",children:"+18.4% TODAY"})]}),(0,t.jsx)(a.motion.div,{className:"rounded-lg border border-cyan-300/20 bg-cyan-400/8 px-3 py-2 text-[8px] tracking-[0.18em] text-cyan-100",animate:{borderColor:["rgba(34,211,238,.16)","rgba(34,211,238,.55)","rgba(34,211,238,.16)"]},transition:{duration:2.8,repeat:1/0},children:"LIVE"})]}),(0,t.jsxs)("div",{className:"relative mt-5 h-36 overflow-hidden rounded-xl border border-cyan-300/10 bg-slate-900/40",children:[(0,t.jsx)("div",{className:"absolute inset-0 opacity-35",style:{backgroundImage:`
                linear-gradient(rgba(34,211,238,.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,.1) 1px, transparent 1px)
              `,backgroundSize:"44px 28px"}}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 500 100",preserveAspectRatio:"none",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"insights-chart-line",x1:"0",x2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgba(34,211,238,.25)"}),(0,t.jsx)("stop",{offset:"55%",stopColor:"rgba(255,255,255,.95)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgba(59,130,246,.8)"})]}),(0,t.jsxs)("linearGradient",{id:"insights-chart-fill",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgba(34,211,238,.25)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgba(34,211,238,0)"})]}),(0,t.jsxs)("filter",{id:"insights-chart-glow",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"2.8",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,t.jsx)(a.motion.path,{d:`M ${eF.map(([e,t])=>`${e} ${t}`).join(" L ")}`,fill:"none",stroke:"url(#insights-chart-line)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#insights-chart-glow)",initial:{pathLength:0,opacity:0},animate:{pathLength:[0,1,1],opacity:[0,1,.85]},transition:{duration:5,repeat:1/0,repeatDelay:1.2,ease:"easeInOut"}}),(0,t.jsx)(a.motion.path,{d:`M 0 100 L ${eF.map(([e,t])=>`${e} ${t}`).join(" L ")} L 500 100 Z`,fill:"url(#insights-chart-fill)",initial:{opacity:0},animate:{opacity:[0,.8,.28]},transition:{duration:5,repeat:1/0,repeatDelay:1.2}}),eF.map(([e,i],s)=>(0,t.jsx)(a.motion.circle,{cx:e,cy:i,r:"3.5",fill:"white",filter:"url(#insights-chart-glow)",animate:{opacity:[.2,1,.2],r:[2.5,4.5,2.5]},transition:{duration:2.4,delay:.18*s,repeat:1/0}},`chart-point-${s}`))]}),(0,t.jsx)(a.motion.div,{className:"absolute bottom-0 top-0 w-px",style:{background:"linear-gradient(180deg, transparent, rgba(255,255,255,.8), rgba(34,211,238,.65), transparent)",boxShadow:"0 0 10px rgba(34,211,238,.65)"},animate:{left:["0%","100%"],opacity:[0,.9,0]},transition:{duration:4.4,repeat:1/0,ease:"linear"}})]}),(0,t.jsxs)("div",{className:"mt-4 flex justify-between text-[7px] tracking-[0.16em] text-white/35",children:[(0,t.jsx)("span",{children:"8 AM"}),(0,t.jsx)("span",{children:"10 AM"}),(0,t.jsx)("span",{children:"12 PM"}),(0,t.jsx)("span",{children:"2 PM"}),(0,t.jsx)("span",{children:"4 PM"}),(0,t.jsx)("span",{children:"6 PM"})]})]}),(0,t.jsxs)(a.motion.div,{className:"absolute right-10 top-[17%] flex h-[225px] w-[225px] flex-col items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/64 font-mono backdrop-blur-md",style:{boxShadow:"0 24px 70px rgba(2,8,23,.5), inset 0 0 35px rgba(34,211,238,.06)"},animate:{y:[0,-5,0]},transition:{duration:4.4,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("svg",{className:"absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] -rotate-90",viewBox:"0 0 200 200",children:[(0,t.jsx)("circle",{cx:"100",cy:"100",r:"82",fill:"none",stroke:"rgba(34,211,238,.08)",strokeWidth:"10"}),(0,t.jsx)(a.motion.circle,{cx:"100",cy:"100",r:"82",fill:"none",stroke:"rgba(34,211,238,.92)",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:515,initial:{strokeDashoffset:515},animate:{strokeDashoffset:[515,93,93]},transition:{duration:4,repeat:1/0,repeatDelay:1.6,ease:"easeInOut"},style:{filter:"drop-shadow(0 0 7px rgba(34,211,238,.8))"}}),(0,t.jsx)(a.motion.circle,{cx:"100",cy:"100",r:"66",fill:"none",stroke:"rgba(59,130,246,.32)",strokeWidth:"2",strokeDasharray:"4 10",animate:{rotate:360},transition:{duration:18,repeat:1/0,ease:"linear"},style:{transformOrigin:"100px 100px"}})]}),(0,t.jsx)("div",{className:"text-[8px] tracking-[0.28em] text-cyan-300/60",children:"FACILITY"}),(0,t.jsx)(a.motion.div,{className:"mt-2 text-5xl tracking-[-0.04em] text-white",animate:{scale:[.97,1.04,.97]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:"82%"}),(0,t.jsx)("div",{className:"mt-2 text-[9px] tracking-[0.22em] text-white/48",children:"OCCUPANCY"}),(0,t.jsx)(a.motion.div,{className:"mt-3 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1 text-[7px] tracking-[0.18em] text-emerald-400",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0},children:"NORMAL FLOW"})]}),(0,t.jsxs)(a.motion.div,{className:"absolute bottom-10 left-10 w-[330px] rounded-2xl border border-cyan-300/18 bg-slate-950/68 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 22px 65px rgba(2,8,23,.48), inset 0 0 26px rgba(34,211,238,.04)"},animate:{y:[0,-5,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.28em] text-cyan-300/65",children:"POPULAR DESTINATIONS"}),(0,t.jsx)("div",{className:"text-[7px] tracking-[0.16em] text-white/35",children:"LIVE RANKING"})]}),(0,t.jsx)("div",{className:"mt-4 space-y-3",children:eP.map((e,i)=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"w-4 text-[8px] text-cyan-300/50",children:["0",i+1]}),(0,t.jsx)("div",{className:"text-[8px] tracking-[0.16em] text-white/75",children:e.name})]}),(0,t.jsx)("div",{className:"text-[8px] tracking-[0.12em] text-cyan-100",children:e.visits})]}),(0,t.jsx)("div",{className:"mt-2 h-1 overflow-hidden rounded-full bg-white/5",children:(0,t.jsx)(a.motion.div,{className:"h-full rounded-full",style:{background:"linear-gradient(90deg, rgba(34,211,238,.42), rgba(255,255,255,.88), rgba(59,130,246,.62))",boxShadow:"0 0 10px rgba(34,211,238,.4)"},initial:{width:"0%"},animate:{width:`${e.value}%`},transition:{duration:2.4,delay:.28*i,repeat:1/0,repeatDelay:3,ease:"easeInOut"}})})]},e.name))})]}),(0,t.jsxs)(a.motion.div,{className:"absolute bottom-10 left-1/2 w-[360px] -translate-x-1/2 rounded-2xl border border-cyan-300/18 bg-slate-950/68 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 22px 65px rgba(2,8,23,.48), inset 0 0 26px rgba(34,211,238,.04)"},animate:{y:[0,-4,0]},transition:{duration:4.7,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.27em] text-cyan-300/65",children:"HOURLY TRAFFIC"}),(0,t.jsx)("div",{className:"mt-1 text-[8px] tracking-[0.14em] text-white/35",children:"VISITOR DISTRIBUTION"})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsx)("div",{className:"text-lg text-white",children:"1,284"}),(0,t.jsx)("div",{className:"text-[7px] tracking-[0.14em] text-emerald-400",children:"PEAK HOUR"})]})]}),(0,t.jsx)("div",{className:"mt-5 flex h-24 items-end gap-2",children:eG.map((e,i)=>(0,t.jsxs)("div",{className:"relative flex h-full flex-1 items-end overflow-hidden rounded-t",children:[(0,t.jsx)(a.motion.div,{className:"w-full rounded-t",style:{background:"linear-gradient(180deg, rgba(255,255,255,.84), rgba(34,211,238,.58), rgba(37,99,235,.22))",boxShadow:"0 0 10px rgba(34,211,238,.3)"},initial:{height:"0%"},animate:{height:["12%",`${e}%`,`${Math.max(18,e-12)}%`]},transition:{duration:3.8,delay:.12*i,repeat:1/0,repeatDelay:1.2,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-0 right-0 h-px bg-white",animate:{bottom:["0%",`${e}%`],opacity:[0,.8,0]},transition:{duration:3.8,delay:.12*i,repeat:1/0,repeatDelay:1.2}})]},`hourly-bar-${i}`))}),(0,t.jsxs)("div",{className:"mt-3 flex justify-between text-[6px] tracking-[0.1em] text-white/28",children:[(0,t.jsx)("span",{children:"8A"}),(0,t.jsx)("span",{children:"10A"}),(0,t.jsx)("span",{children:"12P"}),(0,t.jsx)("span",{children:"2P"}),(0,t.jsx)("span",{children:"4P"}),(0,t.jsx)("span",{children:"6P"})]})]}),(0,t.jsxs)(a.motion.div,{className:"absolute bottom-10 right-10 w-[285px] rounded-2xl border border-cyan-300/18 bg-slate-950/68 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 22px 65px rgba(2,8,23,.48), inset 0 0 26px rgba(34,211,238,.04)"},animate:{y:[0,-5,0]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.27em] text-cyan-300/65",children:"FACILITY SYSTEMS"}),(0,t.jsx)(a.motion.div,{className:"h-2 w-2 rounded-full bg-emerald-400",style:{boxShadow:"0 0 10px rgba(52,211,153,.9)"},animate:{opacity:[.35,1,.35],scale:[.8,1.25,.8]},transition:{duration:2,repeat:1/0}})]}),(0,t.jsx)("div",{className:"mt-4 space-y-3",children:eY.map(e=>(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-cyan-300/8 pb-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(a.motion.div,{className:"h-1.5 w-1.5 rounded-full bg-emerald-400",style:{boxShadow:"0 0 7px rgba(52,211,153,.8)"},animate:{opacity:[.3,1,.3]},transition:{duration:1.8,delay:e.delay,repeat:1/0}}),(0,t.jsx)("div",{className:"text-[8px] tracking-[0.17em] text-white/58",children:e.name})]}),(0,t.jsx)(a.motion.div,{className:"text-[7px] tracking-[0.16em] text-emerald-400",animate:{opacity:[.55,1,.55]},transition:{duration:2.2,delay:e.delay,repeat:1/0},children:e.status})]},e.name))}),(0,t.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-3 text-center",children:[(0,t.jsxs)("div",{className:"rounded-lg border border-cyan-300/10 bg-cyan-400/5 py-2",children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.14em] text-white/35",children:"UPTIME"}),(0,t.jsx)("div",{className:"mt-1 text-xs text-white",children:"99.9%"})]}),(0,t.jsxs)("div",{className:"rounded-lg border border-cyan-300/10 bg-cyan-400/5 py-2",children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.14em] text-white/35",children:"KIOSKS"}),(0,t.jsx)("div",{className:"mt-1 text-xs text-white",children:"24"})]}),(0,t.jsxs)("div",{className:"rounded-lg border border-cyan-300/10 bg-cyan-400/5 py-2",children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.14em] text-white/35",children:"QR NODES"}),(0,t.jsx)("div",{className:"mt-1 text-xs text-white",children:"86"})]})]})]}),(0,t.jsx)(a.motion.div,{className:"absolute right-[285px] top-[19%] w-48 rounded-xl border border-cyan-300/16 bg-slate-950/62 p-4 font-mono backdrop-blur-md",animate:{y:[0,-5,0]},transition:{duration:4.1,repeat:1/0,ease:"easeInOut"},children:(0,t.jsxs)("div",{className:"flex items-start justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.21em] text-cyan-300/58",children:"QR SCANS"}),(0,t.jsx)("div",{className:"mt-2 text-2xl text-white",children:"2,431"}),(0,t.jsx)("div",{className:"mt-1 text-[7px] tracking-[0.14em] text-emerald-400",children:"+23.8%"})]}),(0,t.jsx)(a.motion.div,{className:"grid h-9 w-9 grid-cols-3 gap-[2px] rounded-md border border-cyan-300/20 bg-cyan-400/6 p-1.5",animate:{scale:[.92,1.08,.92],boxShadow:["0 0 0 rgba(34,211,238,0)","0 0 18px rgba(34,211,238,.3)","0 0 0 rgba(34,211,238,0)"]},transition:{duration:2.4,repeat:1/0},children:Array.from({length:9},(e,i)=>(0,t.jsx)(a.motion.div,{className:"rounded-[1px] bg-cyan-200",animate:{opacity:i%3==0?[.25,1,.25]:[.85,.3,.85]},transition:{duration:1.6,delay:.08*i,repeat:1/0}},`metric-qr-${i}`))})]})}),(0,t.jsxs)(a.motion.div,{className:"absolute right-[285px] top-[36%] w-48 rounded-xl border border-cyan-300/16 bg-slate-950/62 p-4 font-mono backdrop-blur-md",animate:{y:[0,-5,0]},transition:{duration:4.4,delay:.4,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.21em] text-cyan-300/58",children:"ACTIVE ROUTES"}),(0,t.jsxs)("div",{className:"mt-2 flex items-end justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-2xl text-white",children:"318"}),(0,t.jsx)("div",{className:"mt-1 text-[7px] tracking-[0.14em] text-white/35",children:"LIVE SESSIONS"})]}),(0,t.jsxs)(a.motion.div,{className:"relative h-11 w-11 rounded-full border border-cyan-300/20",animate:{rotate:360},transition:{duration:9,repeat:1/0,ease:"linear"},children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,.9)]"}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1 h-2 w-px -translate-x-1/2 bg-cyan-200"}),(0,t.jsx)("div",{className:"absolute bottom-1 left-1/2 h-2 w-px -translate-x-1/2 bg-cyan-200/35"}),(0,t.jsx)("div",{className:"absolute left-1 top-1/2 h-px w-2 -translate-y-1/2 bg-cyan-200/35"}),(0,t.jsx)("div",{className:"absolute right-1 top-1/2 h-px w-2 -translate-y-1/2 bg-cyan-200"})]})]})]}),(0,t.jsxs)(a.motion.div,{className:"absolute left-[39%] top-[15%] w-[275px] rounded-2xl border border-cyan-300/18 bg-slate-950/66 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 18px 55px rgba(2,8,23,.44), inset 0 0 24px rgba(34,211,238,.045)"},animate:{y:[0,-6,0]},transition:{duration:4.6,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.24em] text-cyan-300/62",children:"ATLAS INTELLIGENCE"}),(0,t.jsx)(a.motion.div,{className:"h-2 w-2 rounded-full bg-cyan-300",style:{boxShadow:"0 0 10px rgba(34,211,238,.9)"},animate:{opacity:[.35,1,.35],scale:[.8,1.2,.8]},transition:{duration:2,repeat:1/0}})]}),(0,t.jsxs)("div",{className:"mt-4 text-sm leading-6 tracking-[0.04em] text-white/85",children:["Dining traffic is currently",(0,t.jsx)("span",{className:"text-cyan-200",children:" 18% above "}),"the normal weekday average."]}),(0,t.jsxs)("div",{className:"mt-4 rounded-xl border border-cyan-300/10 bg-cyan-400/5 p-3",children:[(0,t.jsx)("div",{className:"text-[7px] tracking-[0.18em] text-white/35",children:"RECOMMENDED ACTION"}),(0,t.jsx)("div",{className:"mt-2 text-[8px] leading-4 tracking-[0.12em] text-cyan-100/72",children:"INCREASE DIGITAL SIGNAGE SUPPORT NEAR CENTER COURT"})]}),(0,t.jsx)(a.motion.div,{className:"mt-4 h-px origin-left",style:{background:"linear-gradient(90deg, rgba(34,211,238,.75), transparent)"},animate:{scaleX:[.15,1,.15],opacity:[.25,.8,.25]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}})]}),(0,t.jsx)(a.motion.div,{className:"absolute bottom-[8%] top-[8%] w-px",style:{background:"linear-gradient(180deg, transparent, rgba(34,211,238,.55), rgba(255,255,255,.85), rgba(34,211,238,.55), transparent)",boxShadow:"0 0 16px rgba(34,211,238,.5)"},animate:{left:["8%","92%","8%"],opacity:[0,.55,0]},transition:{duration:13,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-[7%] right-[7%] h-px",style:{background:"linear-gradient(90deg, transparent, rgba(34,211,238,.4), rgba(255,255,255,.72), rgba(34,211,238,.4), transparent)",boxShadow:"0 0 12px rgba(34,211,238,.45)"},animate:{top:["10%","90%","10%"],opacity:[0,.42,0]},transition:{duration:11,repeat:1/0,ease:"easeInOut"}}),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.4em] text-cyan-300",children:"ATLAS INSIGHTS"}),(0,t.jsx)("div",{className:"mt-2 text-[9px] tracking-[0.24em] text-white/50",children:"LOCATION INTELLIGENCE PLATFORM"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.26em] text-cyan-300/60",children:"ANALYTICS STATUS"}),(0,t.jsx)(a.motion.div,{className:"mt-1 text-xs tracking-[0.18em] text-emerald-400",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0},children:"LIVE INTELLIGENCE"})]}),(0,t.jsxs)(a.motion.div,{className:"absolute left-1/2 top-10 -translate-x-1/2 rounded-full border border-cyan-300/15 bg-slate-950/50 px-5 py-2 font-mono backdrop-blur-sm",animate:{y:[0,-3,0],borderColor:["rgba(34,211,238,.12)","rgba(34,211,238,.34)","rgba(34,211,238,.12)"]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.25em] text-white/50",children:"FACILITY MODE"}),(0,t.jsx)("div",{className:"mt-1 text-center text-[10px] tracking-[0.2em] text-cyan-200",children:"SHOPPING CENTER"})]}),(0,t.jsx)("div",{className:"absolute left-5 top-5 h-14 w-14 border-l border-t border-cyan-300/24"}),(0,t.jsx)("div",{className:"absolute right-5 top-5 h-14 w-14 border-r border-t border-cyan-300/24"}),(0,t.jsx)("div",{className:"absolute bottom-5 left-5 h-14 w-14 border-b border-l border-cyan-300/24"}),(0,t.jsx)("div",{className:"absolute bottom-5 right-5 h-14 w-14 border-b border-r border-cyan-300/24"}),(0,t.jsx)("div",{className:"absolute left-5 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[7px] tracking-[0.26em] text-cyan-300/24",children:"ATLAS LOCATION GRID · 34.7465° N"}),(0,t.jsx)("div",{className:"absolute right-5 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[7px] tracking-[0.26em] text-cyan-300/24",children:"REAL-TIME FACILITY TELEMETRY"}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 44%, rgba(2,8,23,.13) 70%, rgba(2,8,23,.74) 100%)"}})]})}e.i(39474);var eV=e.i(25232),eW=e.i(71361),eX=e.i(91090),eK=e.i(68809),eZ=e.i(42070),eq=i,eJ=e.i(71015);function eQ(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class e0 extends eq.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,eZ.isHTMLElement)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,a=(0,eZ.isHTMLElement)(e)&&e.offsetWidth||0,i=(0,eZ.isHTMLElement)(e)&&e.offsetHeight||0,s=getComputedStyle(t),r=this.props.sizeRef.current;r.height=parseFloat(s.height),r.width=parseFloat(s.width),r.top=t.offsetTop,r.left=t.offsetLeft,r.right=a-r.width-r.left,r.bottom=i-r.height-r.top,r.direction=s.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function e1({children:e,isPresent:a,anchorX:s,anchorY:r,root:n,pop:o}){let l=(0,eq.useId)(),d=(0,eq.useRef)(null),c=(0,eq.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:p}=(0,eq.useContext)(eJ.MotionConfigContext),x=function(...e){return i.useCallback(function(...e){return t=>{let a=!1,i=e.map(e=>{let i=eQ(e,t);return a||"function"!=typeof i||(a=!0),i});if(a)return()=>{for(let t=0;t<i.length;t++){let a=i[t];"function"==typeof a?a():eQ(e[t],null)}}}}(...e),e)}(d,e.props?.ref??e?.ref);return(0,eq.useInsertionEffect)(()=>{let{width:e,height:t,top:i,left:x,right:m,bottom:b,direction:u}=c.current;if(a||!1===o||!d.current||!e||!t)return;let g="rtl"===u,f="left"===s?g?`right: ${m}`:`left: ${x}`:g?`left: ${x}`:`right: ${m}`,h="bottom"===r?`bottom: ${b}`:`top: ${i}`;d.current.dataset.motionPopId=l;let y=document.createElement("style");p&&(y.nonce=p);let j=n??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${f}px !important;
            ${h}px !important;
          }
        `),()=>{d.current?.removeAttribute("data-motion-pop-id"),j.contains(y)&&j.removeChild(y)}},[a]),(0,t.jsx)(e0,{isPresent:a,childRef:d,sizeRef:c,pop:o,children:!1===o?e:eq.cloneElement(e,{ref:x})})}let e2=({children:e,initial:a,isPresent:s,onExitComplete:r,custom:n,presenceAffectsLayout:o,mode:l,anchorX:d,anchorY:c,root:p})=>{let x=(0,eW.useConstant)(e5),m=(0,i.useId)(),b=(0,i.useRef)(s),u=(0,i.useRef)(r);(0,eX.useIsomorphicLayoutEffect)(()=>{b.current=s,u.current=r});let g=!0,f=(0,i.useMemo)(()=>(g=!1,{id:m,initial:a,isPresent:s,custom:n,onExitComplete:e=>{for(let t of(x.set(e,!0),x.values()))if(!t)return;r&&r()},register:e=>(x.set(e,!1),()=>{x.delete(e),b.current||x.size||u.current?.()})}),[s,x,r]);return o&&g&&(f={...f}),(0,i.useMemo)(()=>{x.forEach((e,t)=>x.set(t,!1))},[s]),i.useEffect(()=>{s||x.size||!r||r()},[s]),e=(0,t.jsx)(e1,{pop:"popLayout"===l,isPresent:s,anchorX:d,anchorY:c,root:p,children:e}),(0,t.jsx)(eK.PresenceContext.Provider,{value:f,children:e})};function e5(){return new Map}var e4=e.i(72444);let e3=e=>e.key||"";function e8(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}let e6=({children:e,custom:a,initial:s=!0,onExitComplete:r,presenceAffectsLayout:n=!0,mode:o="sync",propagate:l=!1,anchorX:d="left",anchorY:c="top",root:p})=>{let[x,m]=(0,e4.usePresence)(l),b=(0,i.useMemo)(()=>e8(e),[e]),u=l&&!x?[]:b.map(e3),g=(0,i.useRef)(!0),f=(0,i.useRef)(b),h=(0,eW.useConstant)(()=>new Map),y=(0,i.useRef)(new Set),[j,v]=(0,i.useState)(b),[w,N]=(0,i.useState)(b);(0,eX.useIsomorphicLayoutEffect)(()=>{g.current=!1,f.current=b;for(let e=0;e<w.length;e++){let t=e3(w[e]);u.includes(t)?(h.delete(t),y.current.delete(t)):!0!==h.get(t)&&h.set(t,!1)}},[w,u.length,u.join("-")]);let k=[];if(b!==j){let e=[...b];for(let t=0;t<w.length;t++){let a=w[t],i=e3(a);u.includes(i)||(e.splice(t,0,a),k.push(a))}return"wait"===o&&k.length&&(e=k),N(e8(e)),v(b),null}let{forceRender:_}=(0,i.useContext)(eV.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:w.map(e=>{let i=e3(e),j=(!l||!!x)&&(b===w||u.includes(i));return(0,t.jsx)(e2,{isPresent:j,initial:(!g.current||!!s)&&void 0,custom:a,presenceAffectsLayout:n,mode:o,root:p,onExitComplete:j?void 0:()=>{if(y.current.has(i)||!h.has(i))return;y.current.add(i),h.set(i,!0);let e=!0;h.forEach(t=>{t||(e=!1)}),e&&(_?.(),N(f.current),l&&m?.(),r&&r())},anchorX:d,anchorY:c,children:e},i)})})},e9=["search","results","route","arrived"],e7=Array.from({length:12},(e,t)=>({id:t,left:`${8+29*t%84}%`,top:`${10+37*t%78}%`,delay:.18*t}));function te(){let[e,s]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(e=>(e+1)%e9.length)},3e3);return()=>window.clearTimeout(e)},[e]);let r=e9[e];return(0,t.jsxs)("div",{className:"relative flex min-h-[560px] w-full items-center justify-center overflow-hidden",children:[(0,t.jsx)(a.motion.div,{className:"absolute h-[430px] w-[430px] rounded-full bg-cyan-400/15 blur-[100px]",animate:{scale:[.85,1.08,.85],opacity:[.35,.7,.35]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`
            linear-gradient(rgba(34,211,238,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.16) 1px, transparent 1px)
          `,backgroundSize:"38px 38px",maskImage:"radial-gradient(circle at center, black 20%, transparent 72%)",WebkitMaskImage:"radial-gradient(circle at center, black 20%, transparent 72%)"}}),e7.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute h-1 w-1 rounded-full bg-cyan-300",style:{left:e.left,top:e.top,boxShadow:"0 0 10px rgba(34,211,238,.9)"},animate:{y:[0,-15,5,0],opacity:[.15,.8,.25,.15]},transition:{duration:3.5+e.id%4,delay:e.delay,repeat:1/0,ease:"easeInOut"}},e.id)),[0,1,2].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full border border-cyan-300/10",style:{width:340+85*e,height:340+85*e},animate:{rotate:e%2==0?360:-360,opacity:[.12,.3,.12]},transition:{rotate:{duration:22+7*e,repeat:1/0,ease:"linear"},opacity:{duration:4+e,repeat:1/0,ease:"easeInOut"}},children:(0,t.jsx)("div",{className:"absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.9)]"})},e)),(0,t.jsxs)(a.motion.div,{className:"relative z-10 h-[520px] w-[260px] rounded-[42px] border border-white/20 bg-slate-950 p-2",style:{boxShadow:"0 35px 90px rgba(0,0,0,.75), 0 0 45px rgba(34,211,238,.2)"},initial:{opacity:0,y:80,scale:.82,rotateX:12},animate:{opacity:1,y:[0,-9,0],scale:1,rotateY:[-2,2,-2],rotateX:[1,-1,1]},transition:{opacity:{duration:.8},scale:{duration:.8},y:{duration:6,repeat:1/0,ease:"easeInOut"},rotateY:{duration:7,repeat:1/0,ease:"easeInOut"},rotateX:{duration:7,repeat:1/0,ease:"easeInOut"}},children:[(0,t.jsx)("div",{className:"absolute -left-[4px] top-24 h-12 w-[3px] rounded-l bg-slate-700"}),(0,t.jsx)("div",{className:"absolute -right-[4px] top-32 h-20 w-[3px] rounded-r bg-slate-700"}),(0,t.jsxs)("div",{className:"relative h-full overflow-hidden rounded-[35px] bg-[#030916]",children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-3 z-50 h-6 w-20 -translate-x-1/2 rounded-full bg-black"}),(0,t.jsxs)("div",{className:"absolute left-0 right-0 top-0 z-40 flex h-10 items-center justify-between px-5 pt-1 font-mono text-[8px] text-white/65",children:[(0,t.jsx)("span",{children:"9:41"}),(0,t.jsx)("span",{children:"● 5G ▰"})]}),(0,t.jsxs)("div",{className:"absolute left-0 right-0 top-10 z-30 flex items-center justify-between px-5 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-mono text-[7px] tracking-[0.28em] text-cyan-300/60",children:"AURIS"}),(0,t.jsx)("div",{className:"text-base font-semibold tracking-[0.12em] text-white",children:"ATLAS"})]}),(0,t.jsx)(a.motion.div,{className:"h-8 w-8 rounded-full border border-cyan-300/30 bg-cyan-400/10",animate:{boxShadow:["0 0 8px rgba(34,211,238,.15)","0 0 20px rgba(34,211,238,.5)","0 0 8px rgba(34,211,238,.15)"]},transition:{duration:2,repeat:1/0}})]}),(0,t.jsxs)(e6,{mode:"wait",children:["search"===r&&(0,t.jsxs)(a.motion.div,{className:"absolute inset-0 px-5 pt-28",initial:{opacity:0,x:25},animate:{opacity:1,x:0},exit:{opacity:0,x:-25},children:[(0,t.jsx)("div",{className:"text-[10px] text-white/45",children:"Where would you like to go?"}),(0,t.jsxs)("div",{className:"mt-4 flex h-13 items-center rounded-2xl border border-cyan-300/30 bg-white/[0.04] px-4 py-4",children:[(0,t.jsx)("span",{className:"text-cyan-200",children:"⌕"}),(0,t.jsxs)("div",{className:"ml-3 flex items-center text-sm text-white",children:["Nike",(0,t.jsx)(a.motion.span,{className:"ml-1 h-4 w-px bg-cyan-300",animate:{opacity:[0,1,0]},transition:{duration:.75,repeat:1/0}})]})]}),(0,t.jsx)("div",{className:"mt-7 font-mono text-[7px] tracking-[0.2em] text-white/30",children:"POPULAR CATEGORIES"}),(0,t.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:["SHOPPING","DINING","SERVICES","PARKING"].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center font-mono text-[7px] tracking-[0.1em] text-white/55",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1*i},children:e},e))})]},"search"),"results"===r&&(0,t.jsxs)(a.motion.div,{className:"absolute inset-0 px-5 pt-28",initial:{opacity:0,x:25},animate:{opacity:1,x:0},exit:{opacity:0,x:-25},children:[(0,t.jsx)("div",{className:"font-mono text-[7px] tracking-[0.2em] text-white/30",children:"SEARCH RESULTS"}),(0,t.jsxs)(a.motion.div,{className:"mt-4 rounded-2xl border border-cyan-300/45 bg-cyan-400/10 p-4",initial:{opacity:0,y:18},animate:{opacity:1,y:0},children:[(0,t.jsx)("div",{className:"text-sm font-medium text-white",children:"Nike Factory Store"}),(0,t.jsx)("div",{className:"mt-1 text-[9px] text-white/40",children:"Footwear & Apparel"}),(0,t.jsxs)("div",{className:"mt-4 flex justify-between font-mono text-[7px] tracking-[0.12em] text-cyan-200/70",children:[(0,t.jsx)("span",{children:"LEVEL 1"}),(0,t.jsx)("span",{children:"4 MIN WALK"})]})]}),(0,t.jsx)(a.motion.div,{className:"mt-5 flex items-center justify-center rounded-2xl bg-cyan-300 py-4 font-mono text-[8px] font-bold tracking-[0.18em] text-slate-950",animate:{boxShadow:["0 0 12px rgba(34,211,238,.2)","0 0 28px rgba(34,211,238,.55)","0 0 12px rgba(34,211,238,.2)"]},transition:{duration:2,repeat:1/0},children:"START ROUTE"})]},"results"),"route"===r&&(0,t.jsxs)(a.motion.div,{className:"absolute inset-0",initial:{opacity:0,scale:1.06},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:`
                      linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px)
                    `,backgroundSize:"28px 28px"}}),(0,t.jsx)("div",{className:"absolute left-[8%] top-[25%] h-[18%] w-[32%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]"}),(0,t.jsx)("div",{className:"absolute right-[8%] top-[22%] h-[22%] w-[30%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]"}),(0,t.jsx)("div",{className:"absolute bottom-[20%] left-[8%] h-[20%] w-[29%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]"}),(0,t.jsx)("div",{className:"absolute bottom-[18%] right-[8%] h-[21%] w-[34%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]"}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 260 520",preserveAspectRatio:"none",children:[(0,t.jsx)(a.motion.path,{d:"M55 430 L55 350 L95 350 L95 270 L145 270 L145 190 L205 190 L205 120",fill:"none",stroke:"rgba(34,211,238,.16)",strokeWidth:"12",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(a.motion.path,{d:"M55 430 L55 350 L95 350 L95 270 L145 270 L145 190 L205 190 L205 120",fill:"none",stroke:"#22d3ee",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.6,ease:"easeInOut"},style:{filter:"drop-shadow(0 0 7px rgba(34,211,238,.9))"}}),(0,t.jsx)(a.motion.circle,{r:"7",fill:"#ffffff",animate:{cx:[55,55,95,95,145,145,205,205],cy:[430,350,350,270,270,190,190,120]},transition:{duration:2.7,ease:"easeInOut"},style:{filter:"drop-shadow(0 0 8px rgba(34,211,238,1))"}})]}),(0,t.jsxs)(a.motion.div,{className:"absolute left-4 right-4 top-16 rounded-2xl border border-cyan-300/20 bg-slate-950/90 p-4 backdrop-blur-xl",initial:{opacity:0,y:-15},animate:{opacity:1,y:0},children:[(0,t.jsx)("div",{className:"font-mono text-[7px] tracking-[0.2em] text-cyan-300/60",children:"NEXT DIRECTION"}),(0,t.jsx)("div",{className:"mt-2 text-sm text-white",children:"Continue straight"}),(0,t.jsx)("div",{className:"mt-1 text-[9px] text-white/35",children:"180 feet"})]}),(0,t.jsxs)("div",{className:"absolute bottom-6 left-4 right-4 rounded-2xl border border-cyan-300/20 bg-slate-950/90 p-4 backdrop-blur-xl",children:[(0,t.jsx)("div",{className:"text-lg font-semibold text-white",children:"4 min"}),(0,t.jsx)("div",{className:"mt-1 font-mono text-[7px] tracking-[0.12em] text-white/35",children:"0.2 MI · LEVEL 1"})]})]},"route"),"arrived"===r&&(0,t.jsxs)(a.motion.div,{className:"absolute inset-0 flex flex-col items-center justify-center px-6 text-center",initial:{opacity:0,scale:.86},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.08},children:[(0,t.jsx)(a.motion.div,{className:"flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-4xl text-cyan-200",initial:{scale:0,rotate:-20},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:170,damping:13},style:{boxShadow:"0 0 35px rgba(34,211,238,.35)"},children:"✓"}),(0,t.jsx)("div",{className:"mt-7 font-mono text-[8px] tracking-[0.25em] text-cyan-300",children:"DESTINATION REACHED"}),(0,t.jsx)("div",{className:"mt-4 text-xl font-semibold text-white",children:"Nike Factory Store"}),(0,t.jsx)("div",{className:"mt-2 text-[10px] text-white/40",children:"Level 1"})]},"arrived")]}),(0,t.jsx)(a.motion.div,{className:"absolute -bottom-[20%] -top-[20%] w-16 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent",animate:{left:["-35%","125%"]},transition:{duration:3.5,repeat:1/0,repeatDelay:6,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"absolute bottom-2 left-1/2 z-50 h-1 w-20 -translate-x-1/2 rounded-full bg-white/60"})]})]}),(0,t.jsx)(a.motion.div,{className:"absolute bottom-3 h-12 w-64 rounded-full bg-cyan-400/15 blur-2xl",animate:{scaleX:[.8,1.12,.8],opacity:[.25,.55,.25]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}})]})}let tt=[{id:"start",left:"18%",top:"72%",label:"START"},{id:"turn-1",left:"32%",top:"60%",label:"TURN LEFT"},{id:"turn-2",left:"48%",top:"49%",label:"CONTINUE"},{id:"turn-3",left:"64%",top:"36%",label:"TURN RIGHT"},{id:"destination",left:"80%",top:"23%",label:"DESTINATION"}],ta=[{id:1,left:"25%",top:"65%",rotate:-35,delay:0},{id:2,left:"39%",top:"55%",rotate:-28,delay:.4},{id:3,left:"54%",top:"44%",rotate:-24,delay:.8},{id:4,left:"69%",top:"32%",rotate:-20,delay:1.2}],ti=Array.from({length:24},(e,t)=>({id:t,rotate:15*t,height:t%6==0?10:5,opacity:t%6==0?.8:.35}));function ts({accent:e}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)(eS,{accent:e}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-760px w-760px -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]",style:{background:"radial-gradient(circle, rgba(14,165,233,.18), rgba(34,211,238,.08) 42%, transparent 72%)"},animate:{opacity:[.24,.5,.24],scale:[.96,1.06,.96]},transition:{duration:9,repeat:1/0,ease:"easeInOut"}}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 1000 700",preserveAspectRatio:"none",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"atlas-navigate-route",x1:"0",x2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgba(34,211,238,.35)"}),(0,t.jsx)("stop",{offset:"45%",stopColor:"rgba(255,255,255,.98)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgba(59,130,246,.7)"})]}),(0,t.jsxs)("filter",{id:"atlas-navigate-glow",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"5",result:"blur"}),(0,t.jsxs)("feMerge",{children:[(0,t.jsx)("feMergeNode",{in:"blur"}),(0,t.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,t.jsx)(a.motion.path,{d:"M 150 585 C 235 555, 280 505, 355 470 C 460 420, 520 360, 625 310 C 735 255, 800 205, 870 145",fill:"none",stroke:"rgba(34,211,238,.12)",strokeWidth:"14",strokeLinecap:"round"}),(0,t.jsx)(a.motion.path,{d:"M 150 585 C 235 555, 280 505, 355 470 C 460 420, 520 360, 625 310 C 735 255, 800 205, 870 145",fill:"none",stroke:"url(#atlas-navigate-route)",strokeWidth:"6",strokeLinecap:"round",filter:"url(#atlas-navigate-glow)",initial:{pathLength:0,opacity:0},animate:{pathLength:[0,1,1],opacity:[0,1,.85]},transition:{duration:5.8,repeat:1/0,repeatDelay:1.2,ease:"easeInOut"}}),(0,t.jsx)(a.motion.circle,{r:"11",fill:"white",filter:"url(#atlas-navigate-glow)",style:{offsetPath:"path('M 150 585 C 235 555, 280 505, 355 470 C 460 420, 520 360, 625 310 C 735 255, 800 205, 870 145')"},animate:{offsetDistance:["0%","100%"],opacity:[0,1,1,0]},transition:{duration:5.8,repeat:1/0,repeatDelay:1.2,ease:"easeInOut"}})]}),tt.map((e,i)=>(0,t.jsxs)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top},initial:{opacity:0,scale:.7},animate:{opacity:[.35,1,.55],scale:[.9,1.12,.9]},transition:{duration:2.8,delay:.45*i,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100 bg-slate-950",style:{boxShadow:"0 0 12px rgba(34,211,238,.9), 0 0 26px rgba(14,165,233,.35)"}}),(0,t.jsx)("div",{className:"absolute left-3 top-2 whitespace-nowrap rounded-md border border-cyan-300/20 bg-slate-950/65 px-2 py-1 font-mono text-[8px] tracking-[0.18em] text-cyan-200/70 backdrop-blur-sm",children:e.label})]},e.id)),ta.map(e=>(0,t.jsx)(a.motion.div,{className:"absolute",style:{left:e.left,top:e.top,rotate:`${e.rotate}deg`},animate:{opacity:[.15,1,.15],x:[0,8,0]},transition:{duration:2,delay:e.delay,repeat:1/0,ease:"easeInOut"},children:(0,t.jsx)("div",{className:"h-0 w-0 border-y-[6px] border-l-12px border-y-transparent border-l-cyan-200",style:{filter:"drop-shadow(0 0 8px rgba(34,211,238,.8))"}})},e.id)),(0,t.jsx)(a.motion.div,{className:"absolute left-[18%] top-[72%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30",animate:{scale:[.65,1.8],opacity:[.7,0]},transition:{duration:3.2,repeat:1/0,ease:"easeOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute left-[18%] top-[72%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-blue-500",style:{boxShadow:"0 0 20px rgba(59,130,246,.9), 0 0 40px rgba(34,211,238,.42)"},animate:{scale:[.9,1.14,.9]},transition:{duration:2.4,repeat:1/0,ease:"easeInOut"}}),(0,t.jsxs)(a.motion.div,{className:"absolute left-[80%] top-[23%] -translate-x-1/2 -translate-y-full",animate:{y:[0,-8,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)("div",{className:"relative flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-blue-500",style:{boxShadow:"0 0 20px rgba(59,130,246,.85), 0 0 40px rgba(34,211,238,.4)"},children:(0,t.jsx)("div",{className:"h-4 w-4 rounded-full bg-white"})}),(0,t.jsx)("div",{className:"absolute left-1/2 top-40px h-5 w-5 -translate-x-1/2 rotate-45 border-b border-r border-white/40 bg-blue-500"}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-full h-16 w-16 -translate-x-1/2 rounded-full border border-cyan-300/35",animate:{scale:[.5,2],opacity:[.7,0]},transition:{duration:2.6,repeat:1/0,ease:"easeOut"}})]}),(0,t.jsxs)(a.motion.div,{className:"absolute left-10 top-[28%] w-64 rounded-2xl border border-cyan-300/20 bg-slate-950/60 p-5 font-mono backdrop-blur-md",style:{boxShadow:"0 18px 60px rgba(2,8,23,.35), inset 0 0 28px rgba(34,211,238,.05)"},animate:{y:[0,-6,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(a.motion.div,{className:"flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10",animate:{rotate:[0,-8,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:(0,t.jsxs)("div",{className:"relative h-7 w-7",children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-0 h-7 w-1 -translate-x-1/2 rounded-full bg-cyan-200"}),(0,t.jsx)("div",{className:"absolute left-3px top-1px h-1 w-4 rotate-[-35deg] rounded-full bg-cyan-200"})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.28em] text-cyan-300/65",children:"NEXT TURN"}),(0,t.jsx)("div",{className:"mt-1 text-xl tracking-[0.08em] text-white",children:"120 ft"}),(0,t.jsx)("div",{className:"mt-1 text-[10px] tracking-[0.16em] text-cyan-100/70",children:"TURN LEFT"})]})]}),(0,t.jsx)("div",{className:"mt-5 h-px bg-linear-to-r from-transparent via-cyan-300/25 to-transparent"}),(0,t.jsxs)("div",{className:"mt-4 flex justify-between text-[9px] tracking-[0.18em]",children:[(0,t.jsx)("span",{className:"text-white/45",children:"DESTINATION"}),(0,t.jsx)("span",{className:"text-cyan-200",children:"NORTH WING"})]})]}),(0,t.jsx)(a.motion.div,{className:"absolute bottom-12 left-1/2 w-330px -translate-x-1/2 rounded-2xl border border-cyan-300/20 bg-slate-950/65 px-6 py-4 font-mono backdrop-blur-md",style:{boxShadow:"0 16px 50px rgba(2,8,23,.4), inset 0 0 24px rgba(34,211,238,.04)"},animate:{y:[0,-4,0]},transition:{duration:3.8,repeat:1/0,ease:"easeInOut"},children:(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-4 text-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.22em] text-cyan-300/60",children:"ARRIVAL"}),(0,t.jsx)("div",{className:"mt-1 text-lg text-white",children:"2:14 PM"})]}),(0,t.jsxs)("div",{className:"border-x border-cyan-300/15",children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.22em] text-cyan-300/60",children:"TIME"}),(0,t.jsx)("div",{className:"mt-1 text-lg text-white",children:"4 min"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.22em] text-cyan-300/60",children:"DISTANCE"}),(0,t.jsx)("div",{className:"mt-1 text-lg text-white",children:"0.2 mi"})]})]})}),(0,t.jsxs)(a.motion.div,{className:"absolute right-10 top-[26%] h-36 w-36 rounded-full border border-cyan-300/20 bg-slate-950/40 backdrop-blur-sm",animate:{rotate:[0,2,-2,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},children:[ti.map(e=>(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2",style:{rotate:`${e.rotate}deg`},children:(0,t.jsx)("div",{className:"mx-auto bg-cyan-200",style:{width:1,height:e.height,opacity:e.opacity}})},e.id)),(0,t.jsx)("div",{className:"absolute left-1/2 top-2 -translate-x-1/2 font-mono text-[10px] text-cyan-200",children:"N"}),(0,t.jsx)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/35",children:"S"}),(0,t.jsx)("div",{className:"absolute left-2 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/35",children:"W"}),(0,t.jsx)("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/35",children:"E"}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-12 w-2 -translate-x-1/2 -translate-y-full origin-bottom",style:{clipPath:"polygon(50% 0, 100% 100%, 50% 82%, 0 100%)",background:"linear-gradient(180deg, rgba(255,255,255,.98), rgba(34,211,238,.85))",filter:"drop-shadow(0 0 8px rgba(34,211,238,.8))"},animate:{rotate:[-12,6,-12]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-cyan-400"})]}),(0,t.jsxs)("div",{className:"absolute left-10 top-10 font-mono",children:[(0,t.jsx)("div",{className:"text-xs tracking-[0.4em] text-cyan-300",children:"ATLAS NAVIGATE"}),(0,t.jsx)("div",{className:"mt-2 text-[9px] tracking-[0.24em] text-white/50",children:"TURN-BY-TURN WAYFINDING"})]}),(0,t.jsxs)("div",{className:"absolute right-10 top-10 text-right font-mono",children:[(0,t.jsx)("div",{className:"text-[9px] tracking-[0.28em] text-cyan-300/65",children:"ROUTE STATUS"}),(0,t.jsx)(a.motion.div,{className:"mt-1 text-xs tracking-[0.2em] text-emerald-400",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0},children:"GUIDANCE ACTIVE"})]}),(0,t.jsxs)(a.motion.div,{className:"absolute right-10 bottom-12 rounded-lg border border-cyan-300/15 bg-slate-950/55 px-4 py-3 font-mono backdrop-blur-sm",animate:{opacity:[.35,1,.35]},transition:{duration:3,repeat:1/0},children:[(0,t.jsx)("div",{className:"text-[8px] tracking-[0.24em] text-cyan-300/60",children:"ROUTE ENGINE"}),(0,t.jsx)("div",{className:"mt-1 text-[10px] tracking-[0.18em] text-white",children:"OPTIMAL PATH"})]}),(0,t.jsx)("div",{className:"absolute right-32 top-16 z-30",children:(0,t.jsx)("div",{className:"w-520px scale-125 origin-top-right",children:(0,t.jsx)(te,{})})}),(0,t.jsx)("div",{className:"absolute inset-0 z-30 pointer-events-none",style:{background:"radial-gradient(circle at center, transparent 44%, rgba(2,8,23,.16) 72%, rgba(2,8,23,.7) 100%)"}}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 44%, rgba(2,8,23,.16) 72%, rgba(2,8,23,.7) 100%)"}})]})}function tr({accent:e,product:a}){switch(a){case"directory":return(0,t.jsx)(eC,{accent:e});case"navigate":return(0,t.jsx)(ts,{accent:e});case"insights":return(0,t.jsx)(eU,{accent:e});default:return(0,t.jsx)(eS,{accent:e})}}function tn(){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[#050914]"}),(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 35%, rgba(37, 99, 235, 0.18), transparent 55%)"}}),(0,t.jsx)(a.motion.div,{className:"absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]",animate:{scale:[1,1.08,1],opacity:[.35,.55,.35]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]",animate:{scale:[1.05,1,1.05],opacity:[.3,.5,.3]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.07]",style:{backgroundImage:`
            linear-gradient(rgba(96, 165, 250, 0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.45) 1px, transparent 1px)
          `,backgroundSize:"64px 64px",maskImage:"linear-gradient(to bottom, black, transparent 90%)",WebkitMaskImage:"linear-gradient(to bottom, black, transparent 90%)"}}),(0,t.jsx)(a.motion.div,{className:"absolute top-0 h-full w-[280px] bg-gradient-to-r from-transparent via-cyan-300/[0.04] to-transparent blur-2xl",initial:{x:"-40vw"},animate:{x:"140vw"},transition:{duration:18,repeat:1/0,repeatDelay:5,ease:"linear"}}),(0,t.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050914] to-transparent"})]})}function to(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-md",animate:{scale:[1,1.06,1],boxShadow:["0 0 20px rgba(34,211,238,.25)","0 0 70px rgba(34,211,238,.55)","0 0 20px rgba(34,211,238,.25)"]},transition:{duration:4,repeat:1/0}}),[{x:-260,y:-150,delay:0},{x:260,y:-150,delay:.5},{x:-260,y:150,delay:1},{x:260,y:150,delay:1.5}].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-20 w-20 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md",style:{marginLeft:e.x,marginTop:e.y},animate:{y:[0,-10,0],opacity:[.65,1,.65]},transition:{duration:4,repeat:1/0,delay:e.delay},children:(0,t.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,t.jsx)(a.motion.div,{className:"h-5 w-5 rounded-full bg-cyan-400",animate:{scale:[1,1.4,1]},transition:{duration:2,repeat:1/0}})})},i)),(0,t.jsx)("svg",{className:"absolute inset-0 h-full w-full opacity-30",preserveAspectRatio:"none",children:[["50%","50%","30%","30%"],["50%","50%","70%","30%"],["50%","50%","30%","70%"],["50%","50%","70%","70%"]].map((e,i)=>(0,t.jsx)(a.motion.line,{x1:e[0],y1:e[1],x2:e[2],y2:e[3],stroke:"#22d3ee",strokeWidth:"2",strokeDasharray:"10 10",animate:{strokeDashoffset:[0,-60]},transition:{duration:3,repeat:1/0,ease:"linear",delay:.4*i}},i))}),Array.from({length:30}).map((e,i)=>{let s=8+17*i%84,r=8+29*i%84;return(0,t.jsx)(a.motion.div,{className:"absolute h-2 w-2 rounded-full bg-cyan-300",style:{left:`${s}%`,top:`${r}%`},animate:{opacity:[0,1,0],scale:[.5,1.5,.5]},transition:{duration:2+i%4,repeat:1/0,delay:i%8*.4}},i)}),(0,t.jsx)(a.motion.div,{className:"absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20",animate:{rotate:360},transition:{duration:40,repeat:1/0,ease:"linear"},children:(0,t.jsx)("div",{className:"absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"})})]})}function tl(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{}),[{top:"14%",right:"10%",delay:0},{top:"34%",right:"18%",delay:1},{top:"58%",right:"8%",delay:2}].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute z-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md",style:{width:210,height:135,top:e.top,right:e.right},animate:{y:[0,-10,0],opacity:[.65,1,.65]},transition:{duration:5,repeat:1/0,delay:e.delay},children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("div",{className:"mb-3 h-3 w-28 rounded bg-cyan-400/50"}),[0,1,2].map(e=>(0,t.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,t.jsx)(a.motion.div,{className:"h-3 w-3 rounded-full bg-cyan-400",animate:{scale:[1,1.4,1],opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,delay:.35*e}}),(0,t.jsx)("div",{className:"h-2 rounded bg-slate-600",style:{width:`${70-12*e}%`}})]},e))]})},i)),(0,t.jsx)("div",{className:"absolute left-[10%] top-[82%] w-[72%]",children:(0,t.jsxs)("div",{className:"relative h-1 rounded-full bg-slate-700",children:[(0,t.jsx)(a.motion.div,{className:"absolute left-0 top-0 h-1 rounded-full bg-cyan-400",animate:{width:["15%","85%","15%"]},transition:{duration:8,repeat:1/0}}),[0,25,50,75,100].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute top-1/2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-900",style:{left:`${e}%`,transform:"translate(-50%, -50%)"},animate:{boxShadow:["0 0 0px #22d3ee","0 0 18px #22d3ee","0 0 0px #22d3ee"]},transition:{duration:2,repeat:1/0,delay:.4*i}},i))]})}),(0,t.jsx)("svg",{className:"absolute inset-0 h-full w-full opacity-20",preserveAspectRatio:"none",children:(0,t.jsx)(a.motion.path,{d:"M1100 180 C900 220 850 380 950 520",stroke:"#22d3ee",strokeWidth:"2",fill:"none",strokeDasharray:"10 10",animate:{strokeDashoffset:[0,-80]},transition:{duration:5,repeat:1/0,ease:"linear"}})})]})}function td(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{}),[{top:"15%",right:"10%",delay:0},{top:"36%",right:"18%",delay:1},{top:"60%",right:"12%",delay:2}].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute z-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md",style:{width:220,height:125,top:e.top,right:e.right},animate:{y:[0,-8,0],opacity:[.65,1,.65]},transition:{duration:4.5,repeat:1/0,delay:e.delay},children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,t.jsx)("div",{className:"h-3 w-24 rounded bg-cyan-400/50"}),(0,t.jsx)(a.motion.div,{className:"h-3 w-3 rounded-full bg-emerald-400",animate:{scale:[1,1.5,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}})]}),[0,1,2].map(e=>(0,t.jsx)("div",{className:"mb-2 h-2 rounded bg-slate-600",style:{width:`${80-12*e}%`}},e))]})},i)),Array.from({length:14}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute h-3 w-3 rounded-full bg-cyan-300",style:{left:`${5+6*i}%`,top:`${25+i%3*18}%`},animate:{x:[0,220,440],opacity:[0,1,0],scale:[.5,1.2,.5]},transition:{duration:5,repeat:1/0,delay:.35*i,ease:"linear"}},i)),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full opacity-25",preserveAspectRatio:"none",children:[(0,t.jsx)(a.motion.path,{d:"M100 240 L420 240 L700 360 L1080 360",stroke:"#22d3ee",strokeWidth:"2",fill:"none",strokeDasharray:"10 10",animate:{strokeDashoffset:[0,-80]},transition:{duration:5,repeat:1/0,ease:"linear"}}),(0,t.jsx)(a.motion.path,{d:"M100 520 L500 520 L820 460 L1180 460",stroke:"#60a5fa",strokeWidth:"2",fill:"none",strokeDasharray:"12 12",animate:{strokeDashoffset:[0,-90]},transition:{duration:6,repeat:1/0,ease:"linear"}})]}),Array.from({length:10}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full border border-cyan-300/40 bg-cyan-400/10",style:{width:20,height:20,left:`${15+7*i}%`,bottom:`${8+i%2*8}%`},animate:{y:[0,-12,0],opacity:[.3,1,.3]},transition:{duration:3,repeat:1/0,delay:.25*i}},i))]})}function tc(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{}),[0,1,2].map(e=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md",style:{width:90,height:250,right:`${10+8*e}%`,top:`${18+6*e}%`},animate:{y:[0,-10,0]},transition:{duration:5+e,repeat:1/0},children:(0,t.jsx)("div",{className:"flex h-full flex-col justify-evenly p-3",children:Array.from({length:8}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"h-4 rounded bg-slate-700",animate:{opacity:[.45,1,.45]},transition:{duration:2,repeat:1/0,delay:.15*i},children:(0,t.jsx)("div",{className:"ml-2 mt-1 h-2 w-2 rounded-full bg-cyan-400"})},i))})},e)),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full opacity-25",preserveAspectRatio:"none",children:[(0,t.jsx)(a.motion.path,{d:"M220 220 L520 320 L760 220 L1100 380",stroke:"#38bdf8",strokeWidth:"2",fill:"none",strokeDasharray:"8 8",animate:{strokeDashoffset:[0,-80]},transition:{duration:5,repeat:1/0,ease:"linear"}}),[220,520,760,1100].map((e,i)=>(0,t.jsx)(a.motion.circle,{cx:e,cy:i%2==0?220:1===i?320:380,r:"8",fill:"#67e8f9",animate:{r:[8,12,8],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0,delay:.4*i}},i))]}),Array.from({length:14}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute border border-cyan-300/30 bg-cyan-400/10",style:{width:18,height:18,left:`${13*i%100}%`,top:`${17*i%100}%`,transform:"rotate(45deg)"},animate:{y:[0,-12,0],rotate:[45,225,405],opacity:[.3,.9,.3]},transition:{duration:7,repeat:1/0,delay:.25*i}},i))]})}function tp(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{}),[{top:"14%",right:"12%",delay:0},{top:"36%",right:"22%",delay:1.2},{top:"60%",right:"10%",delay:2.4}].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute z-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md",style:{top:e.top,right:e.right,width:180,height:110},animate:{y:[0,-12,0],opacity:[.55,.9,.55]},transition:{duration:5,repeat:1/0,delay:e.delay},children:(0,t.jsxs)("div",{className:"p-4 space-y-3",children:[(0,t.jsx)("div",{className:"h-2 w-20 rounded bg-cyan-400/50"}),(0,t.jsx)("div",{className:"flex items-end gap-2 h-10",children:[30,55,20,70,45].map((e,i)=>(0,t.jsx)(a.motion.div,{className:"w-3 rounded bg-cyan-400",animate:{height:[e,e+18,e]},transition:{duration:2,repeat:1/0,delay:.25*i},style:{height:e}},i))})]})},i)),(0,t.jsxs)("svg",{className:"absolute inset-0 z-0 h-full w-full opacity-20",preserveAspectRatio:"none",children:[(0,t.jsx)(a.motion.path,{d:"M0 500 C300 200 700 700 1400 320",fill:"none",stroke:"#22d3ee",strokeWidth:"3",strokeDasharray:"12 12",animate:{strokeDashoffset:[0,-120]},transition:{duration:8,repeat:1/0,ease:"linear"}}),(0,t.jsx)(a.motion.path,{d:"M0 620 C400 350 900 780 1600 250",fill:"none",stroke:"#60a5fa",strokeWidth:"2",strokeDasharray:"8 14",animate:{strokeDashoffset:[0,-100]},transition:{duration:10,repeat:1/0,ease:"linear"}})]}),Array.from({length:25}).map((e,i)=>(0,t.jsx)(a.motion.div,{className:"absolute rounded-full bg-cyan-300",style:{left:`${17*i%100}%`,top:`${29*i%100}%`,width:5,height:5},animate:{opacity:[.2,1,.2],scale:[1,1.8,1]},transition:{duration:2.5,repeat:1/0,delay:.12*i}},i))]})}let tx=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim(),tm=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var tb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let tu=(0,i.createContext)({}),tg=(0,i.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:s,className:r="",children:n,iconNode:o,...l},d)=>{let{size:c=24,strokeWidth:p=2,absoluteStrokeWidth:x=!1,color:m="currentColor",className:b=""}=(0,i.useContext)(tu)??{},u=s??x?24*Number(a??p)/Number(t??c):a??p;return(0,i.createElement)("svg",{ref:d,...tb,width:t??c??tb.width,height:t??c??tb.height,stroke:e??m,strokeWidth:u,className:tx("lucide",b,r),...!n&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(l)&&{"aria-hidden":"true"},...l},[...o.map(([e,t])=>(0,i.createElement)(e,t)),...Array.isArray(n)?n:[n]])}),tf=(e,t)=>{let a=(0,i.forwardRef)(({className:a,...s},r)=>(0,i.createElement)(tg,{ref:r,iconNode:t,className:tx(`lucide-${tm(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...s}));return a.displayName=tm(e),a},th=tf("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),ty=tf("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),tj=tf("lock-open",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);function tv(){let[e,s]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=window.setInterval(()=>{s(e=>!e)},2200);return()=>window.clearInterval(e)},[]),(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)(tn,{}),(0,t.jsxs)(a.motion.div,{className:"absolute right-[4%] top-[6%] z-20 flex h-[520px] w-[520px] items-center justify-center",animate:{y:[0,-10,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},children:[(0,t.jsx)(a.motion.div,{className:"absolute h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[80px]",animate:{scale:[1,1.15,1],opacity:[.35,.65,.35]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(a.motion.div,{className:"absolute h-[470px] w-[470px] rounded-full border border-dashed border-cyan-300/30",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),(0,t.jsx)(a.motion.div,{className:"relative z-10",animate:{scale:e?1:1.06},transition:{duration:.4},children:(0,t.jsx)(ty,{size:380,strokeWidth:1.4,className:"text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]"})}),(0,t.jsx)("div",{className:"absolute z-20 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/40 bg-[#050914]/90 shadow-[0_0_35px_rgba(34,211,238,0.55)]",children:(0,t.jsx)(e6,{mode:"wait",children:e?(0,t.jsx)(a.motion.div,{initial:{opacity:0,scale:.6,rotate:-12},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:.6,rotate:12},transition:{duration:.35},children:(0,t.jsx)(th,{size:64,strokeWidth:1.8,className:"text-white"})},"locked"):(0,t.jsx)(a.motion.div,{initial:{opacity:0,scale:.6,rotate:12},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:.6,rotate:-12},transition:{duration:.35},children:(0,t.jsx)(tj,{size:64,strokeWidth:1.8,className:"text-cyan-300"})},"unlocked")})})]})]})}function tw({productId:e}){switch(e){case"command":return(0,t.jsx)(to,{});case"projects":return(0,t.jsx)(tl,{});case"service-desk":return(0,t.jsx)(td,{});case"assets":return(0,t.jsx)(tc,{});case"analytics":return(0,t.jsx)(tp,{});case"identity":return(0,t.jsx)(tv,{});default:return(0,t.jsx)(tn,{})}}var tN=e.i(61285);function tk(){return(0,t.jsxs)("div",{"aria-hidden":"true",className:"jsx-c2fa68c7811cd03f medical-default-background",children:[(0,t.jsx)("div",{className:"jsx-c2fa68c7811cd03f medical-base"}),(0,t.jsx)("div",{className:"jsx-c2fa68c7811cd03f medical-grid"}),(0,t.jsx)("div",{className:"jsx-c2fa68c7811cd03f medical-red-glow medical-red-glow-left"}),(0,t.jsx)("div",{className:"jsx-c2fa68c7811cd03f medical-red-glow medical-red-glow-right"}),(0,t.jsxs)("svg",{viewBox:"0 0 1600 220",preserveAspectRatio:"none",className:"jsx-c2fa68c7811cd03f medical-ecg",children:[(0,t.jsx)("path",{d:"   M 0 120   L 220 120   L 270 120   L 300 95   L 330 145   L 365 45   L 405 175   L 440 120   L 650 120   L 700 120   L 730 96   L 760 144   L 795 48   L 835 172   L 870 120   L 1080 120   L 1130 120   L 1160 96   L 1190 144   L 1225 48   L 1265 172   L 1300 120   L 1600 120   ",className:"jsx-c2fa68c7811cd03f medical-ecg-shadow"}),(0,t.jsx)("path",{d:"   M 0 120   L 220 120   L 270 120   L 300 95   L 330 145   L 365 45   L 405 175   L 440 120   L 650 120   L 700 120   L 730 96   L 760 144   L 795 48   L 835 172   L 870 120   L 1080 120   L 1130 120   L 1160 96   L 1190 144   L 1225 48   L 1265 172   L 1300 120   L 1600 120   ",className:"jsx-c2fa68c7811cd03f medical-ecg-line"})]}),(0,t.jsxs)("div",{className:"jsx-c2fa68c7811cd03f medical-cross medical-cross-one",children:[(0,t.jsx)("span",{className:"jsx-c2fa68c7811cd03f"}),(0,t.jsx)("span",{className:"jsx-c2fa68c7811cd03f"})]}),(0,t.jsxs)("div",{className:"jsx-c2fa68c7811cd03f medical-cross medical-cross-two",children:[(0,t.jsx)("span",{className:"jsx-c2fa68c7811cd03f"}),(0,t.jsx)("span",{className:"jsx-c2fa68c7811cd03f"})]}),(0,t.jsxs)("div",{className:"jsx-c2fa68c7811cd03f medical-cross medical-cross-three",children:[(0,t.jsx)("span",{className:"jsx-c2fa68c7811cd03f"}),(0,t.jsx)("span",{className:"jsx-c2fa68c7811cd03f"})]}),(0,t.jsx)("div",{className:"jsx-c2fa68c7811cd03f medical-vignette"}),(0,t.jsx)(tN.default,{id:"c2fa68c7811cd03f",children:".medical-default-background.jsx-c2fa68c7811cd03f{pointer-events:none;z-index:0;background:#020617;position:absolute;inset:0;overflow:hidden}.medical-base.jsx-c2fa68c7811cd03f{background:radial-gradient(circle at 50% 45%,#1e293b61,#0000 48%),linear-gradient(145deg,#020617 0%,#07101f 48%,#020617 100%);position:absolute;inset:0}.medical-grid.jsx-c2fa68c7811cd03f{opacity:.16;background-image:linear-gradient(#ef44441f 1px,#0000 1px),linear-gradient(90deg,#ef44441f 1px,#0000 1px);background-size:70px 70px;animation:28s linear infinite medicalGridDrift;position:absolute;inset:-80px;-webkit-mask-image:radial-gradient(circle,#000 20%,#0000 78%);mask-image:radial-gradient(circle,#000 20%,#0000 78%)}.medical-red-glow.jsx-c2fa68c7811cd03f{filter:blur(100px);opacity:.13;background:#dc2626;border-radius:50%;width:520px;height:520px;position:absolute}.medical-red-glow-left.jsx-c2fa68c7811cd03f{top:18%;left:-260px}.medical-red-glow-right.jsx-c2fa68c7811cd03f{bottom:8%;right:-300px}.medical-ecg.jsx-c2fa68c7811cd03f{opacity:.52;width:110%;height:220px;position:absolute;top:50%;left:-5%;overflow:visible;transform:translateY(-50%)}.medical-ecg-shadow.jsx-c2fa68c7811cd03f,.medical-ecg-line.jsx-c2fa68c7811cd03f{fill:none;stroke-linecap:round;stroke-linejoin:round}.medical-ecg-shadow.jsx-c2fa68c7811cd03f{stroke:#dc26262e;stroke-width:11px;filter:blur(8px)}.medical-ecg-line.jsx-c2fa68c7811cd03f{stroke:#f871719e;stroke-width:2px;stroke-dasharray:12 18;filter:drop-shadow(0 0 7px #ef444473);animation:14s linear infinite medicalEcgIdle}.medical-cross.jsx-c2fa68c7811cd03f{opacity:.07;width:28px;height:28px;animation:12s ease-in-out infinite medicalCrossFloat;position:absolute}.medical-cross.jsx-c2fa68c7811cd03f span.jsx-c2fa68c7811cd03f{background:#fff;border-radius:4px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.medical-cross.jsx-c2fa68c7811cd03f span.jsx-c2fa68c7811cd03f:first-child{width:28px;height:8px}.medical-cross.jsx-c2fa68c7811cd03f span.jsx-c2fa68c7811cd03f:last-child{width:8px;height:28px}.medical-cross-one.jsx-c2fa68c7811cd03f{top:22%;left:16%}.medical-cross-two.jsx-c2fa68c7811cd03f{animation-delay:-4s;top:30%;right:18%;transform:scale(.72)}.medical-cross-three.jsx-c2fa68c7811cd03f{animation-delay:-8s;bottom:18%;left:72%;transform:scale(.55)}.medical-vignette.jsx-c2fa68c7811cd03f{background:radial-gradient(circle,#0000 30%,#02061757 70%,#020617e0 100%),linear-gradient(#ffffff04,#0000 35%,#02061775);animation:7s ease-in-out infinite medicalIdlePulse;position:absolute;inset:0}@keyframes medicalGridDrift{0%{transform:translate(0)}to{transform:translate(70px,70px)}}@keyframes medicalEcgIdle{0%{stroke-dashoffset:0}to{stroke-dashoffset:-600px}}@keyframes medicalCrossFloat{0%,to{transform:translateY(0)rotate(0)}50%{transform:translateY(-20px)rotate(12deg)}}@keyframes medicalIdlePulse{0%,to{box-shadow:inset 0 0 #dc262600}50%{box-shadow:inset 0 0 120px #dc26260b}}@media (prefers-reduced-motion:reduce){.medical-grid.jsx-c2fa68c7811cd03f,.medical-ecg-line.jsx-c2fa68c7811cd03f,.medical-cross.jsx-c2fa68c7811cd03f,.medical-vignette.jsx-c2fa68c7811cd03f{animation:none}}"})]})}let t_=[14,24,38,19,48,31,57,26,42,64,34,51,22,39,58,29,46,68,37,53,25,43,61,32,49,21,36,55,28,45,65,34,50,24,41,59,30,47,67,36,52,27,44,62,33,48,23,40],tL=[{left:"12%",top:"22%",delay:"-0.4s"},{left:"19%",top:"46%",delay:"-1.8s"},{left:"10%",top:"72%",delay:"-3.2s"},{left:"29%",top:"16%",delay:"-2.3s"},{left:"34%",top:"67%",delay:"-4.1s"},{left:"46%",top:"31%",delay:"-1.2s"},{left:"52%",top:"78%",delay:"-3.7s"},{left:"64%",top:"17%",delay:"-2.8s"},{left:"69%",top:"53%",delay:"-0.9s"},{left:"81%",top:"26%",delay:"-4.5s"},{left:"87%",top:"69%",delay:"-2s"},{left:"75%",top:"84%",delay:"-3.4s"}];function t$({accent:e="#38bdf8"}){return(0,t.jsxs)("div",{className:"scribe-background","aria-hidden":"true",children:[(0,t.jsx)("div",{className:"scribe-bg-glow scribe-bg-glow-one"}),(0,t.jsx)("div",{className:"scribe-bg-glow scribe-bg-glow-two"}),(0,t.jsx)("div",{className:"scribe-bg-grid"}),(0,t.jsx)("div",{className:"scribe-bg-vignette"}),(0,t.jsxs)("div",{className:"scribe-bg-wave",children:[(0,t.jsx)("div",{className:"scribe-bg-wave-line"}),(0,t.jsx)("div",{className:"scribe-bg-bars",children:t_.map((e,a)=>(0,t.jsx)("span",{style:{height:`${e}px`,animationDelay:`${-.055*a}s`}},a))})]}),(0,t.jsxs)("div",{className:"scribe-bg-microphone",children:[(0,t.jsx)("div",{className:"scribe-bg-mic-ripple ripple-one"}),(0,t.jsx)("div",{className:"scribe-bg-mic-ripple ripple-two"}),(0,t.jsx)("div",{className:"scribe-bg-mic-ripple ripple-three"}),(0,t.jsx)("div",{className:"scribe-bg-mic-body",children:(0,t.jsxs)("div",{className:"scribe-bg-mic-slots",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})}),(0,t.jsx)("div",{className:"scribe-bg-mic-arm"}),(0,t.jsx)("div",{className:"scribe-bg-mic-base"})]}),(0,t.jsxs)("div",{className:"scribe-bg-document document-one",children:[(0,t.jsxs)("div",{className:"scribe-bg-document-header",children:[(0,t.jsx)("span",{children:"CLINICAL NOTE"}),(0,t.jsx)("i",{})]}),(0,t.jsxs)("div",{className:"scribe-bg-document-section",children:[(0,t.jsx)("strong",{children:"SUBJECTIVE"}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{className:"short-line"})]}),(0,t.jsxs)("div",{className:"scribe-bg-document-section",children:[(0,t.jsx)("strong",{children:"OBJECTIVE"}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{className:"medium-line"})]}),(0,t.jsxs)("div",{className:"scribe-bg-document-footer",children:[(0,t.jsx)("span",{children:"AI GENERATED"}),(0,t.jsx)("span",{children:"97.8%"})]})]}),(0,t.jsxs)("div",{className:"scribe-bg-document document-two",children:[(0,t.jsxs)("div",{className:"scribe-bg-document-header",children:[(0,t.jsx)("span",{children:"SOAP NOTE"}),(0,t.jsx)("i",{})]}),(0,t.jsxs)("div",{className:"scribe-bg-document-section",children:[(0,t.jsx)("strong",{children:"ASSESSMENT"}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{className:"medium-line"})]}),(0,t.jsxs)("div",{className:"scribe-bg-document-section",children:[(0,t.jsx)("strong",{children:"PLAN"}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{className:"short-line"})]})]}),(0,t.jsxs)("div",{className:"scribe-bg-transcript transcript-one",children:[(0,t.jsx)("div",{className:"scribe-bg-speaker-dot"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"PHYSICIAN"}),(0,t.jsx)("span",{children:"Continue current treatment..."})]}),(0,t.jsx)("i",{})]}),(0,t.jsxs)("div",{className:"scribe-bg-transcript transcript-two",children:[(0,t.jsx)("div",{className:"scribe-bg-speaker-dot"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"PATIENT"}),(0,t.jsx)("span",{children:"Symptoms have improved..."})]})]}),(0,t.jsxs)("div",{className:"scribe-bg-code code-one",children:[(0,t.jsx)("small",{children:"ICD-10"}),(0,t.jsx)("strong",{children:"R06.02"}),(0,t.jsx)("span",{children:"Shortness of breath"})]}),(0,t.jsxs)("div",{className:"scribe-bg-code code-two",children:[(0,t.jsx)("small",{children:"CONFIDENCE"}),(0,t.jsx)("strong",{children:"97.8%"}),(0,t.jsx)("span",{children:"Clinical context verified"})]}),(0,t.jsxs)("div",{className:"scribe-bg-neural-network",children:[(0,t.jsxs)("svg",{className:"scribe-bg-connections",viewBox:"0 0 1000 700",preserveAspectRatio:"none",children:[(0,t.jsx)("path",{d:"M120 154 L290 112 L460 217 L640 119 L810 182"}),(0,t.jsx)("path",{d:"M190 322 L460 217 L690 371 L870 483"}),(0,t.jsx)("path",{d:"M100 504 L340 469 L520 546 L750 588"}),(0,t.jsx)("path",{d:"M290 112 L340 469"}),(0,t.jsx)("path",{d:"M640 119 L690 371 L750 588"}),(0,t.jsx)("path",{d:"M190 322 L100 504"}),(0,t.jsx)("path",{d:"M460 217 L520 546"}),(0,t.jsx)("path",{d:"M810 182 L690 371"})]}),tL.map((e,a)=>(0,t.jsx)("span",{className:"scribe-bg-node",style:{left:e.left,top:e.top,animationDelay:e.delay}},a))]}),(0,t.jsxs)("div",{className:"scribe-bg-ai-core",children:[(0,t.jsx)("div",{className:"scribe-bg-core-ring ring-outer"}),(0,t.jsx)("div",{className:"scribe-bg-core-ring ring-middle"}),(0,t.jsx)("div",{className:"scribe-bg-core-ring ring-inner"}),(0,t.jsx)("div",{className:"scribe-bg-core-center",children:(0,t.jsx)("span",{children:"AI"})})]}),(0,t.jsxs)("div",{className:"scribe-bg-security",children:[(0,t.jsx)("div",{className:"scribe-bg-lock",children:(0,t.jsx)("span",{})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"ENCRYPTED"}),(0,t.jsx)("small",{children:"CLINICAL SESSION"})]})]}),(0,t.jsx)("div",{className:"scribe-bg-scan-line"}),(0,t.jsx)("style",{children:`
        .scribe-background {
          position: absolute;
          z-index: 0;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 18% 34%,
              ${e}12,
              transparent 32%
            ),
            radial-gradient(
              circle at 78% 68%,
              ${e}0d,
              transparent 38%
            );
        }

        .scribe-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.35;
          animation: scribeBgGlow 9s ease-in-out infinite;
        }

        .scribe-bg-glow-one {
          left: -9%;
          top: 8%;
          width: 410px;
          height: 410px;
          background: ${e}38;
        }

        .scribe-bg-glow-two {
          right: -8%;
          bottom: -14%;
          width: 520px;
          height: 520px;
          background: ${e}22;
          animation-delay: -4.5s;
        }

        .scribe-bg-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.1;
          background-image:
            linear-gradient(${e}24 1px, transparent 1px),
            linear-gradient(90deg, ${e}24 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            rgba(0, 0, 0, 0.65) 42%,
            transparent 82%
          );
          animation: scribeBgGrid 30s linear infinite;
        }

        .scribe-bg-vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.16),
              transparent 28%,
              transparent 72%,
              rgba(2, 6, 23, 0.2)
            ),
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(2, 6, 23, 0.34) 100%
            );
        }

        .scribe-bg-wave {
          position: absolute;
          left: -4%;
          top: 50%;
          width: 108%;
          height: 132px;
          opacity: 0.23;
          transform: translateY(-50%);
        }

        .scribe-bg-wave-line {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            ${e}66,
            ${e},
            ${e}66,
            transparent
          );
          box-shadow: 0 0 15px ${e}55;
        }

        .scribe-bg-bars {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .scribe-bg-bars span {
          width: 2px;
          max-height: 96px;
          min-height: 7px;
          border-radius: 999px;
          background: linear-gradient(
            to bottom,
            transparent,
            ${e},
            transparent
          );
          box-shadow: 0 0 8px ${e};
          animation: scribeBgWave 1.15s ease-in-out infinite alternate;
        }

        .scribe-bg-microphone {
          position: absolute;
          left: 6%;
          top: 28%;
          width: 145px;
          height: 190px;
          opacity: 0.23;
          transform: rotate(-8deg);
          animation: scribeBgMicFloat 8s ease-in-out infinite;
        }

        .scribe-bg-mic-body {
          position: absolute;
          left: 50%;
          top: 18px;
          width: 56px;
          height: 92px;
          overflow: hidden;
          border: 1px solid ${e}99;
          border-radius: 30px;
          background: linear-gradient(
            145deg,
            ${e}1c,
            rgba(2, 6, 23, 0.55)
          );
          box-shadow:
            0 0 28px ${e}25,
            inset 0 0 18px ${e}13;
          transform: translateX(-50%);
        }

        .scribe-bg-mic-slots {
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .scribe-bg-mic-slots span {
          width: 2px;
          height: 54px;
          border-radius: 999px;
          background: ${e}77;
          box-shadow: 0 0 7px ${e};
        }

        .scribe-bg-mic-arm {
          position: absolute;
          left: 50%;
          top: 105px;
          width: 78px;
          height: 46px;
          border-right: 2px solid ${e}88;
          border-bottom: 2px solid ${e}88;
          border-left: 2px solid ${e}88;
          border-radius: 0 0 42px 42px;
          transform: translateX(-50%);
        }

        .scribe-bg-mic-arm::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45px;
          width: 2px;
          height: 25px;
          background: ${e}88;
          transform: translateX(-50%);
        }

        .scribe-bg-mic-base {
          position: absolute;
          left: 50%;
          bottom: 5px;
          width: 68px;
          height: 2px;
          border-radius: 999px;
          background: ${e}99;
          box-shadow: 0 0 10px ${e};
          transform: translateX(-50%);
        }

        .scribe-bg-mic-ripple {
          position: absolute;
          left: 50%;
          top: 58px;
          border: 1px solid ${e}88;
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%);
          animation: scribeBgRipple 4.2s ease-out infinite;
        }

        .ripple-one {
          width: 70px;
          height: 70px;
        }

        .ripple-two {
          width: 70px;
          height: 70px;
          animation-delay: -1.4s;
        }

        .ripple-three {
          width: 70px;
          height: 70px;
          animation-delay: -2.8s;
        }

        .scribe-bg-document {
          position: absolute;
          width: 190px;
          padding: 15px;
          border: 1px solid ${e}35;
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.32),
            rgba(2, 6, 23, 0.48)
          );
          box-shadow:
            0 22px 55px rgba(0, 0, 0, 0.28),
            inset 0 0 20px rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(6px);
          opacity: 0.18;
        }

        .document-one {
          left: 23%;
          bottom: 5%;
          transform: rotate(-7deg);
          animation: scribeBgDocumentOne 11s ease-in-out infinite;
        }

        .document-two {
          right: 4%;
          top: 13%;
          transform: rotate(6deg) scale(0.88);
          animation: scribeBgDocumentTwo 12s ease-in-out infinite;
        }

        .scribe-bg-document-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid ${e}24;
          color: ${e};
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .scribe-bg-document-header i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${e};
          box-shadow: 0 0 9px ${e};
        }

        .scribe-bg-document-section {
          margin-top: 10px;
        }

        .scribe-bg-document-section strong {
          display: block;
          margin-bottom: 7px;
          color: ${e};
          font-size: 5px;
          letter-spacing: 1px;
        }

        .scribe-bg-document-section span {
          display: block;
          width: 100%;
          height: 3px;
          margin-top: 5px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.21);
        }

        .scribe-bg-document-section .short-line {
          width: 48%;
        }

        .scribe-bg-document-section .medium-line {
          width: 72%;
        }

        .scribe-bg-document-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          padding-top: 7px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.3);
          font-family: "Courier New", monospace;
          font-size: 5px;
        }

        .scribe-bg-transcript {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 190px;
          padding: 10px 12px;
          border: 1px solid ${e}30;
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.35);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          opacity: 0.2;
          backdrop-filter: blur(5px);
        }

        .transcript-one {
          left: 7%;
          bottom: 12%;
          animation: scribeBgTranscriptOne 9s ease-in-out infinite;
        }

        .transcript-two {
          right: 18%;
          top: 8%;
          animation: scribeBgTranscriptTwo 10s ease-in-out infinite;
        }

        .scribe-bg-speaker-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${e};
          box-shadow: 0 0 12px ${e};
          animation: scribeBgDot 1.8s ease-in-out infinite;
        }

        .scribe-bg-transcript > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .scribe-bg-transcript strong {
          color: ${e};
          font-size: 5px;
          letter-spacing: 1px;
        }

        .scribe-bg-transcript span {
          color: rgba(255, 255, 255, 0.48);
          font-size: 7px;
        }

        .scribe-bg-transcript i {
          width: 1px;
          height: 12px;
          background: ${e};
          animation: scribeBgCursor 0.8s steps(2) infinite;
        }

        .scribe-bg-code {
          position: absolute;
          display: flex;
          width: 126px;
          flex-direction: column;
          gap: 3px;
          padding: 10px 12px;
          border-left: 2px solid ${e}88;
          border-radius: 3px 9px 9px 3px;
          background: linear-gradient(
            90deg,
            ${e}0e,
            rgba(2, 6, 23, 0.22)
          );
          opacity: 0.2;
        }

        .code-one {
          left: 39%;
          top: 9%;
          animation: scribeBgCodeOne 8s ease-in-out infinite;
        }

        .code-two {
          right: 9%;
          bottom: 17%;
          animation: scribeBgCodeTwo 9s ease-in-out infinite;
        }

        .scribe-bg-code small {
          color: rgba(255, 255, 255, 0.28);
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .scribe-bg-code strong {
          color: ${e};
          font-family: "Courier New", monospace;
          font-size: 12px;
        }

        .scribe-bg-code span {
          color: rgba(255, 255, 255, 0.36);
          font-size: 5px;
        }

        .scribe-bg-neural-network {
          position: absolute;
          inset: 0;
          opacity: 0.15;
        }

        .scribe-bg-connections {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .scribe-bg-connections path {
          fill: none;
          stroke: ${e};
          stroke-width: 0.65;
          stroke-dasharray: 7 11;
          filter: drop-shadow(0 0 4px ${e});
          animation: scribeBgConnections 18s linear infinite;
        }

        .scribe-bg-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border: 1px solid ${e};
          border-radius: 50%;
          background: ${e};
          box-shadow:
            0 0 8px ${e},
            0 0 18px ${e}88;
          animation: scribeBgNode 4.5s ease-in-out infinite;
        }

        .scribe-bg-ai-core {
          position: absolute;
          right: 25%;
          bottom: 7%;
          width: 126px;
          height: 126px;
          opacity: 0.17;
          animation: scribeBgCoreFloat 10s ease-in-out infinite;
        }

        .scribe-bg-core-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${e}99;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .ring-outer {
          width: 118px;
          height: 118px;
          border-style: dashed;
          animation: scribeBgSpin 19s linear infinite;
        }

        .ring-middle {
          width: 88px;
          height: 88px;
          animation: scribeBgSpinReverse 13s linear infinite;
        }

        .ring-inner {
          width: 58px;
          height: 58px;
          border-style: dotted;
          animation: scribeBgSpin 8s linear infinite;
        }

        .scribe-bg-core-center {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 37px;
          height: 37px;
          place-items: center;
          border-radius: 50%;
          background: ${e}17;
          box-shadow:
            0 0 22px ${e}77,
            inset 0 0 12px ${e}28;
          transform: translate(-50%, -50%);
        }

        .scribe-bg-core-center span {
          color: ${e};
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .scribe-bg-security {
          position: absolute;
          left: 48%;
          bottom: 3%;
          display: flex;
          align-items: center;
          gap: 9px;
          opacity: 0.18;
          animation: scribeBgSecurity 8s ease-in-out infinite;
        }

        .scribe-bg-lock {
          position: relative;
          width: 24px;
          height: 20px;
          border: 1px solid ${e};
          border-radius: 4px;
          box-shadow: 0 0 10px ${e}44;
        }

        .scribe-bg-lock::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -12px;
          width: 13px;
          height: 13px;
          border: 1px solid ${e};
          border-bottom: 0;
          border-radius: 8px 8px 0 0;
          transform: translateX(-50%);
        }

        .scribe-bg-lock span {
          position: absolute;
          left: 50%;
          top: 6px;
          width: 3px;
          height: 7px;
          border-radius: 999px;
          background: ${e};
          transform: translateX(-50%);
        }

        .scribe-bg-security > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .scribe-bg-security strong {
          color: ${e};
          font-size: 6px;
          letter-spacing: 1px;
        }

        .scribe-bg-security small {
          color: rgba(255, 255, 255, 0.35);
          font-size: 5px;
          letter-spacing: 0.8px;
        }

        .scribe-bg-scan-line {
          position: absolute;
          z-index: 8;
          left: 0;
          top: -12%;
          width: 100%;
          height: 10%;
          opacity: 0;
          border-bottom: 1px solid ${e}5c;
          background: linear-gradient(
            to bottom,
            transparent,
            ${e}08,
            ${e}20,
            transparent
          );
          animation: scribeBgScan 11s ease-in-out infinite;
        }

        @keyframes scribeBgGlow {
          0%,
          100% {
            opacity: 0.22;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.42;
            transform: scale(1.1);
          }
        }

        @keyframes scribeBgGrid {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(52px, 52px);
          }
        }

        @keyframes scribeBgWave {
          from {
            opacity: 0.28;
            transform: scaleY(0.26);
          }

          to {
            opacity: 0.9;
            transform: scaleY(1);
          }
        }

        @keyframes scribeBgMicFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-8deg);
          }

          50% {
            transform: translateY(-14px) rotate(-5deg);
          }
        }

        @keyframes scribeBgRipple {
          0% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.7);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2.3);
          }
        }

        @keyframes scribeBgDocumentOne {
          0%,
          100% {
            transform: translateY(0) rotate(-7deg);
          }

          50% {
            transform: translateY(-13px) rotate(-4deg);
          }
        }

        @keyframes scribeBgDocumentTwo {
          0%,
          100% {
            transform: translateY(0) rotate(6deg) scale(0.88);
          }

          50% {
            transform: translateY(12px) rotate(3deg) scale(0.9);
          }
        }

        @keyframes scribeBgTranscriptOne {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(10px, -9px);
          }
        }

        @keyframes scribeBgTranscriptTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-9px, 10px);
          }
        }

        @keyframes scribeBgDot {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.22);
          }
        }

        @keyframes scribeBgCursor {
          0%,
          45% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }

        @keyframes scribeBgCodeOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scribeBgCodeTwo {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(11px);
          }
        }

        @keyframes scribeBgConnections {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes scribeBgNode {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.75);
          }

          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        @keyframes scribeBgCoreFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }

        @keyframes scribeBgSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scribeBgSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes scribeBgSecurity {
          0%,
          100% {
            opacity: 0.12;
            transform: translateY(0);
          }

          50% {
            opacity: 0.24;
            transform: translateY(-7px);
          }
        }

        @keyframes scribeBgScan {
          0%,
          63% {
            top: -12%;
            opacity: 0;
          }

          69% {
            opacity: 0.22;
          }

          94% {
            top: 108%;
            opacity: 0.03;
          }

          100% {
            top: 108%;
            opacity: 0;
          }
        }

        @media (max-width: 900px) {
          .scribe-bg-document,
          .scribe-bg-code,
          .scribe-bg-security {
            opacity: 0.1;
          }

          .scribe-bg-microphone {
            left: 1%;
            transform: scale(0.8) rotate(-8deg);
          }

          .scribe-bg-ai-core {
            right: 7%;
          }
        }

        @media (max-width: 650px) {
          .scribe-bg-document,
          .scribe-bg-transcript,
          .scribe-bg-code,
          .scribe-bg-security,
          .scribe-bg-microphone {
            display: none;
          }

          .scribe-bg-wave {
            opacity: 0.16;
          }

          .scribe-bg-ai-core {
            right: -15px;
            bottom: 5%;
            transform: scale(0.75);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scribe-background *,
          .scribe-background *::before,
          .scribe-background *::after {
            animation: none !important;
          }
        }
      `})]})}let tI=[{label:"ER",sublabel:"ENTRY",left:"8%",top:"66%",status:"active"},{label:"TR",sublabel:"TRAUMA",left:"29%",top:"27%",status:"critical"},{label:"CT",sublabel:"IMAGING",left:"51%",top:"18%",status:"active"},{label:"ICU",sublabel:"6 / 8",left:"73%",top:"29%",status:"occupied"},{label:"OR",sublabel:"READY",left:"62%",top:"67%",status:"active"},{label:"LAB",sublabel:"ONLINE",left:"39%",top:"70%",status:"active"},{label:"MRI",sublabel:"AVAILABLE",left:"84%",top:"59%",status:"available"}],tS=[{id:"P01",left:"18%",top:"54%",delay:"-0.5s",color:"#ef4444"},{id:"P08",left:"42%",top:"43%",delay:"-1.5s",color:"#f97316"},{id:"P14",left:"58%",top:"55%",delay:"-2.5s",color:"#eab308"},{id:"P17",left:"76%",top:"45%",delay:"-3.5s",color:"#22c55e"}],tA=[{left:"7%",top:"18%",delay:"-0.4s"},{left:"18%",top:"37%",delay:"-1.2s"},{left:"27%",top:"12%",delay:"-2.4s"},{left:"38%",top:"31%",delay:"-3.1s"},{left:"49%",top:"11%",delay:"-0.9s"},{left:"58%",top:"38%",delay:"-2.1s"},{left:"68%",top:"15%",delay:"-3.7s"},{left:"79%",top:"39%",delay:"-1.8s"},{left:"91%",top:"20%",delay:"-2.9s"},{left:"22%",top:"78%",delay:"-3.4s"},{left:"48%",top:"82%",delay:"-1.5s"},{left:"72%",top:"76%",delay:"-2.6s"},{left:"89%",top:"84%",delay:"-0.7s"}];function tE({accent:e="#38bdf8"}){return(0,t.jsxs)("div",{className:"triage-background","aria-hidden":"true",children:[(0,t.jsx)("div",{className:"triage-bg-glow triage-bg-glow-red"}),(0,t.jsx)("div",{className:"triage-bg-glow triage-bg-glow-orange"}),(0,t.jsx)("div",{className:"triage-bg-glow triage-bg-glow-blue"}),(0,t.jsx)("div",{className:"triage-bg-grid"}),(0,t.jsx)("div",{className:"triage-bg-vignette"}),(0,t.jsxs)("div",{className:"triage-bg-blueprint",children:[(0,t.jsxs)("svg",{className:"triage-bg-floor-lines",viewBox:"0 0 1000 650",preserveAspectRatio:"none",children:[(0,t.jsx)("path",{d:"M80 430 H235 V245 H420 V115 H610 V210 H840 V380 H930"}),(0,t.jsx)("path",{d:"M235 245 V500 H420 V445 H610 V530 H840 V380"}),(0,t.jsx)("path",{d:"M420 115 V445"}),(0,t.jsx)("path",{d:"M610 210 V530"}),(0,t.jsx)("path",{d:"M235 365 H840"}),(0,t.jsx)("path",{className:"triage-bg-route-red",d:"M70 500 C180 500 180 300 300 300 C410 300 430 180 520 180"}),(0,t.jsx)("path",{className:"triage-bg-route-orange",d:"M95 535 C270 535 305 390 470 390 C620 390 690 270 830 270"}),(0,t.jsx)("path",{className:"triage-bg-route-blue",d:"M90 455 C225 455 320 540 475 540 C640 540 715 460 905 460"})]}),tI.map(e=>(0,t.jsxs)("div",{className:`triage-bg-department triage-bg-${e.status}`,style:{left:e.left,top:e.top},children:[(0,t.jsx)("span",{children:e.label}),(0,t.jsx)("small",{children:e.sublabel}),"critical"===e.status&&(0,t.jsx)("i",{className:"triage-bg-room-alert"})]},e.label)),tS.map(e=>(0,t.jsxs)("div",{className:"triage-bg-patient",style:{left:e.left,top:e.top,animationDelay:e.delay,"--patient-color":e.color},children:[(0,t.jsx)("span",{}),(0,t.jsx)("small",{children:e.id})]},e.id)),(0,t.jsx)("div",{className:"triage-bg-route-pulse route-pulse-one"}),(0,t.jsx)("div",{className:"triage-bg-route-pulse route-pulse-two"}),(0,t.jsx)("div",{className:"triage-bg-route-pulse route-pulse-three"})]}),(0,t.jsxs)("div",{className:"triage-bg-ekg",children:[(0,t.jsx)("div",{className:"triage-bg-ekg-base"}),(0,t.jsx)("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"triage-bg-ekg-line",children:(0,t.jsx)("path",{d:"M0 62 H105 L126 62 L145 24 L170 97 L193 48 L211 62 H335 L355 62 L374 21 L398 102 L421 45 L440 62 H575 L595 62 L615 26 L639 96 L660 49 L680 62 H820 L840 62 L860 20 L884 103 L905 47 L924 62 H1060 L1080 62 L1100 25 L1124 98 L1145 48 L1164 62 H1200"})}),(0,t.jsx)("div",{className:"triage-bg-ekg-glow"})]}),(0,t.jsxs)("div",{className:"triage-bg-ambulance ambulance-one",children:[(0,t.jsx)("div",{className:"triage-bg-ambulance-light"}),(0,t.jsx)("div",{className:"triage-bg-ambulance-body",children:(0,t.jsx)("span",{children:"+"})}),(0,t.jsx)("div",{className:"triage-bg-wheel wheel-one"}),(0,t.jsx)("div",{className:"triage-bg-wheel wheel-two"})]}),(0,t.jsxs)("div",{className:"triage-bg-ambulance ambulance-two",children:[(0,t.jsx)("div",{className:"triage-bg-ambulance-light"}),(0,t.jsx)("div",{className:"triage-bg-ambulance-body",children:(0,t.jsx)("span",{children:"+"})}),(0,t.jsx)("div",{className:"triage-bg-wheel wheel-one"}),(0,t.jsx)("div",{className:"triage-bg-wheel wheel-two"})]}),(0,t.jsxs)("div",{className:"triage-bg-helicopter",children:[(0,t.jsx)("div",{className:"triage-bg-helicopter-blade"}),(0,t.jsx)("div",{className:"triage-bg-helicopter-tail"}),(0,t.jsx)("div",{className:"triage-bg-helicopter-body",children:(0,t.jsx)("span",{children:"+"})}),(0,t.jsx)("div",{className:"triage-bg-helicopter-skid skid-one"}),(0,t.jsx)("div",{className:"triage-bg-helicopter-skid skid-two"})]}),(0,t.jsx)("div",{className:"triage-bg-helicopter-route",children:(0,t.jsx)("span",{})}),(0,t.jsxs)("div",{className:"triage-bg-stat stat-capacity",children:[(0,t.jsx)("small",{children:"ED CAPACITY"}),(0,t.jsx)("strong",{children:"18 / 22"}),(0,t.jsx)("div",{className:"triage-bg-progress",children:(0,t.jsx)("span",{style:{width:"82%"}})})]}),(0,t.jsxs)("div",{className:"triage-bg-stat stat-incoming",children:[(0,t.jsx)("small",{children:"INCOMING"}),(0,t.jsx)("strong",{children:"04"}),(0,t.jsx)("span",{children:"AMBULANCES"})]}),(0,t.jsxs)("div",{className:"triage-bg-stat stat-wait",children:[(0,t.jsx)("small",{children:"AVERAGE WAIT"}),(0,t.jsx)("strong",{children:"11 MIN"}),(0,t.jsx)("span",{children:"↓ 3 MIN"})]}),(0,t.jsxs)("div",{className:"triage-bg-stat stat-critical",children:[(0,t.jsx)("div",{className:"triage-bg-critical-dot"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("small",{children:"CRITICAL"}),(0,t.jsx)("strong",{children:"02 ACTIVE"})]})]}),(0,t.jsxs)("div",{className:"triage-bg-alert",children:[(0,t.jsx)("div",{className:"triage-bg-alert-icon",children:"!"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("small",{children:"TRAUMA ALERT"}),(0,t.jsx)("strong",{children:"Stroke team activated"}),(0,t.jsx)("span",{children:"Inbound ETA 03 minutes"})]})]}),(0,t.jsxs)("div",{className:"triage-bg-ai-network",children:[(0,t.jsxs)("svg",{viewBox:"0 0 1000 650",preserveAspectRatio:"none",className:"triage-bg-ai-lines",children:[(0,t.jsx)("path",{d:"M70 117 L180 240 L270 78 L380 202 L490 72"}),(0,t.jsx)("path",{d:"M490 72 L580 247 L680 97 L790 254 L910 130"}),(0,t.jsx)("path",{d:"M180 240 L220 507 L480 533 L720 494 L890 546"}),(0,t.jsx)("path",{d:"M380 202 L480 533"}),(0,t.jsx)("path",{d:"M580 247 L720 494"}),(0,t.jsx)("path",{d:"M790 254 L890 546"})]}),tA.map((e,a)=>(0,t.jsx)("span",{className:"triage-bg-ai-node",style:{left:e.left,top:e.top,animationDelay:e.delay}},a))]}),(0,t.jsxs)("div",{className:"triage-bg-ai-core",children:[(0,t.jsx)("div",{className:"triage-bg-ai-ring ai-ring-one"}),(0,t.jsx)("div",{className:"triage-bg-ai-ring ai-ring-two"}),(0,t.jsx)("div",{className:"triage-bg-ai-ring ai-ring-three"}),(0,t.jsx)("div",{className:"triage-bg-ai-center",children:(0,t.jsx)("span",{children:"AI"})}),(0,t.jsx)("small",{children:"ROUTING"})]}),(0,t.jsxs)("div",{className:"triage-bg-radar",children:[(0,t.jsx)("div",{className:"triage-bg-radar-circle radar-circle-one"}),(0,t.jsx)("div",{className:"triage-bg-radar-circle radar-circle-two"}),(0,t.jsx)("div",{className:"triage-bg-radar-circle radar-circle-three"}),(0,t.jsx)("div",{className:"triage-bg-radar-cross radar-cross-horizontal"}),(0,t.jsx)("div",{className:"triage-bg-radar-cross radar-cross-vertical"}),(0,t.jsx)("div",{className:"triage-bg-radar-sweep"}),(0,t.jsx)("span",{className:"radar-point radar-point-one"}),(0,t.jsx)("span",{className:"radar-point radar-point-two"}),(0,t.jsx)("span",{className:"radar-point radar-point-three"})]}),(0,t.jsxs)("div",{className:"triage-bg-medical-cross cross-one",children:[(0,t.jsx)("span",{}),(0,t.jsx)("i",{})]}),(0,t.jsxs)("div",{className:"triage-bg-medical-cross cross-two",children:[(0,t.jsx)("span",{}),(0,t.jsx)("i",{})]}),(0,t.jsxs)("div",{className:"triage-bg-medical-cross cross-three",children:[(0,t.jsx)("span",{}),(0,t.jsx)("i",{})]}),(0,t.jsx)("div",{className:"triage-bg-beacon beacon-one",children:(0,t.jsx)("span",{})}),(0,t.jsx)("div",{className:"triage-bg-beacon beacon-two",children:(0,t.jsx)("span",{})}),(0,t.jsx)("div",{className:"triage-bg-scan-line"}),(0,t.jsx)("style",{children:`
        .triage-background {
          position: absolute;
          z-index: 0;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 18% 28%,
              rgba(239, 68, 68, 0.1),
              transparent 34%
            ),
            radial-gradient(
              circle at 82% 66%,
              rgba(249, 115, 22, 0.07),
              transparent 40%
            ),
            radial-gradient(
              circle at 54% 18%,
              ${e}0b,
              transparent 35%
            );
        }

        .triage-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.3;
          animation: triageBgGlow 8s ease-in-out infinite;
        }

        .triage-bg-glow-red {
          left: -10%;
          top: 10%;
          width: 430px;
          height: 430px;
          background: rgba(239, 68, 68, 0.32);
        }

        .triage-bg-glow-orange {
          right: -8%;
          bottom: -12%;
          width: 500px;
          height: 500px;
          background: rgba(249, 115, 22, 0.2);
          animation-delay: -4s;
        }

        .triage-bg-glow-blue {
          left: 42%;
          top: -18%;
          width: 380px;
          height: 380px;
          background: ${e}1e;
          animation-delay: -2s;
        }

        .triage-bg-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.09;
          background-image:
            linear-gradient(${e}24 1px, transparent 1px),
            linear-gradient(90deg, ${e}24 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            rgba(0, 0, 0, 0.62) 48%,
            transparent 86%
          );
          animation: triageBgGridMove 28s linear infinite;
        }

        .triage-bg-vignette {
          position: absolute;
          z-index: 20;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.25),
              transparent 24%,
              transparent 76%,
              rgba(2, 6, 23, 0.25)
            ),
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(2, 6, 23, 0.36) 100%
            );
        }

        .triage-bg-blueprint {
          position: absolute;
          left: 6%;
          top: 13%;
          width: 88%;
          height: 72%;
          opacity: 0.19;
          transform: perspective(900px) rotateX(7deg);
          animation: triageBgBlueprintFloat 11s ease-in-out infinite;
        }

        .triage-bg-floor-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .triage-bg-floor-lines path {
          fill: none;
          stroke: ${e}66;
          stroke-width: 1.1;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .triage-bg-floor-lines .triage-bg-route-red {
          stroke: #ef4444;
          stroke-width: 1.6;
          stroke-dasharray: 8 12;
          filter: drop-shadow(0 0 5px #ef4444);
          animation: triageBgRouteFlow 7s linear infinite;
        }

        .triage-bg-floor-lines .triage-bg-route-orange {
          stroke: #f97316;
          stroke-width: 1.4;
          stroke-dasharray: 6 10;
          filter: drop-shadow(0 0 5px #f97316);
          animation: triageBgRouteFlow 9s linear infinite reverse;
        }

        .triage-bg-floor-lines .triage-bg-route-blue {
          stroke: ${e};
          stroke-width: 1.2;
          stroke-dasharray: 5 9;
          filter: drop-shadow(0 0 4px ${e});
          animation: triageBgRouteFlow 8s linear infinite;
        }

        .triage-bg-department {
          position: absolute;
          display: flex;
          width: 68px;
          height: 54px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: 1px solid ${e}55;
          border-radius: 9px;
          background: rgba(5, 12, 27, 0.54);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.28),
            inset 0 0 14px ${e}0a;
          backdrop-filter: blur(4px);
          transform: translate(-50%, -50%);
          animation: triageBgRoomFloat 6s ease-in-out infinite;
        }

        .triage-bg-department span {
          color: ${e};
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.8px;
        }

        .triage-bg-department small {
          color: rgba(255, 255, 255, 0.35);
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .triage-bg-department.triage-bg-critical {
          border-color: rgba(239, 68, 68, 0.68);
          background: rgba(239, 68, 68, 0.08);
          box-shadow:
            0 0 24px rgba(239, 68, 68, 0.15),
            inset 0 0 18px rgba(239, 68, 68, 0.08);
        }

        .triage-bg-critical span {
          color: #ef4444;
        }

        .triage-bg-department.triage-bg-occupied {
          border-color: rgba(249, 115, 22, 0.54);
        }

        .triage-bg-occupied span {
          color: #f97316;
        }

        .triage-bg-department.triage-bg-available {
          border-color: rgba(34, 197, 94, 0.5);
        }

        .triage-bg-available span {
          color: #22c55e;
        }

        .triage-bg-room-alert {
          position: absolute;
          right: -4px;
          top: -4px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow:
            0 0 9px #ef4444,
            0 0 18px rgba(239, 68, 68, 0.7);
          animation: triageBgAlertPulse 1.15s ease-in-out infinite;
        }

        .triage-bg-patient {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.5);
          font-family: "Courier New", monospace;
          transform: translate(-50%, -50%);
          animation: triageBgPatientFloat 3.5s ease-in-out infinite;
        }

        .triage-bg-patient span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--patient-color);
          box-shadow:
            0 0 8px var(--patient-color),
            0 0 16px var(--patient-color);
        }

        .triage-bg-patient small {
          color: var(--patient-color);
          font-size: 6px;
          font-weight: 800;
        }

        .triage-bg-route-pulse {
          position: absolute;
          width: 24px;
          height: 24px;
          border: 1px solid #ef4444;
          border-radius: 50%;
          opacity: 0;
          animation: triageBgRoutePulse 3.2s ease-out infinite;
        }

        .route-pulse-one {
          left: 27%;
          top: 28%;
        }

        .route-pulse-two {
          left: 49%;
          top: 19%;
          border-color: ${e};
          animation-delay: -1.1s;
        }

        .route-pulse-three {
          right: 14%;
          top: 57%;
          border-color: #22c55e;
          animation-delay: -2.2s;
        }

        .triage-bg-ekg {
          position: absolute;
          left: -6%;
          top: 51%;
          width: 112%;
          height: 130px;
          opacity: 0.2;
          transform: translateY(-50%);
        }

        .triage-bg-ekg-base {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(239, 68, 68, 0.55),
            rgba(239, 68, 68, 0.9),
            rgba(239, 68, 68, 0.55),
            transparent
          );
        }

        .triage-bg-ekg-line {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .triage-bg-ekg-line path {
          fill: none;
          stroke: #ef4444;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1400;
          filter: drop-shadow(0 0 6px #ef4444);
          animation: triageBgEkgDraw 6s linear infinite;
        }

        .triage-bg-ekg-glow {
          position: absolute;
          right: 15%;
          top: 50%;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.7);
          filter: blur(10px);
          transform: translateY(-50%);
          animation: triageBgEkgGlow 1.2s ease-in-out infinite;
        }

        .triage-bg-ambulance {
          position: absolute;
          z-index: 5;
          width: 70px;
          height: 36px;
          opacity: 0.24;
        }

        .ambulance-one {
          left: -90px;
          bottom: 8%;
          animation: triageBgAmbulanceDrive 15s linear infinite;
        }

        .ambulance-two {
          left: -120px;
          bottom: 19%;
          transform: scale(0.72);
          animation: triageBgAmbulanceDriveTwo 19s linear infinite;
          animation-delay: -8s;
        }

        .triage-bg-ambulance-body {
          position: absolute;
          inset: 6px 0 4px;
          display: grid;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 5px 9px 5px 5px;
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
          font-size: 17px;
          font-weight: 950;
          box-shadow:
            0 0 14px rgba(239, 68, 68, 0.35),
            inset 0 0 12px rgba(239, 68, 68, 0.08);
        }

        .triage-bg-ambulance-light {
          position: absolute;
          z-index: 2;
          left: 23px;
          top: 1px;
          width: 14px;
          height: 5px;
          border-radius: 4px 4px 0 0;
          background: #ef4444;
          box-shadow: 0 0 11px #ef4444;
          animation: triageBgEmergencyLight 0.55s steps(2) infinite;
        }

        .triage-bg-wheel {
          position: absolute;
          bottom: 0;
          width: 12px;
          height: 12px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          background: #020617;
          animation: triageBgWheelSpin 0.65s linear infinite;
        }

        .triage-bg-wheel.wheel-one {
          left: 10px;
        }

        .triage-bg-wheel.wheel-two {
          right: 10px;
        }

        .triage-bg-helicopter {
          position: absolute;
          z-index: 4;
          left: -150px;
          top: 9%;
          width: 105px;
          height: 56px;
          opacity: 0.17;
          animation: triageBgHelicopterFly 24s linear infinite;
        }

        .triage-bg-helicopter-body {
          position: absolute;
          left: 26px;
          top: 20px;
          display: grid;
          width: 55px;
          height: 27px;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 20px 24px 12px 14px;
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          font-size: 12px;
          font-weight: 950;
        }

        .triage-bg-helicopter-tail {
          position: absolute;
          right: 1px;
          top: 29px;
          width: 31px;
          height: 2px;
          background: #ef4444;
          transform: rotate(-7deg);
        }

        .triage-bg-helicopter-tail::after {
          content: "";
          position: absolute;
          right: -2px;
          top: -8px;
          width: 2px;
          height: 17px;
          background: #ef4444;
        }

        .triage-bg-helicopter-blade {
          position: absolute;
          left: 5px;
          top: 11px;
          width: 95px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #ef4444,
            transparent
          );
          transform-origin: center;
          animation: triageBgBladeSpin 0.18s linear infinite;
        }

        .triage-bg-helicopter-blade::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -9px;
          width: 2px;
          height: 20px;
          background: #ef4444;
          transform: translateX(-50%);
        }

        .triage-bg-helicopter-skid {
          position: absolute;
          top: 49px;
          width: 38px;
          height: 7px;
          border-bottom: 1px solid #ef4444;
          border-radius: 50%;
        }

        .skid-one {
          left: 25px;
        }

        .skid-two {
          left: 46px;
        }

        .triage-bg-helicopter-route {
          position: absolute;
          left: 8%;
          top: 17%;
          width: 84%;
          height: 1px;
          opacity: 0.13;
          border-top: 1px dashed #ef4444;
          transform: rotate(-4deg);
        }

        .triage-bg-helicopter-route span {
          position: absolute;
          left: 0;
          top: -3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 9px #ef4444;
          animation: triageBgRouteDot 12s linear infinite;
        }

        .triage-bg-stat {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 126px;
          padding: 12px 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 11px;
          background: rgba(2, 6, 23, 0.42);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.22);
          opacity: 0.17;
          backdrop-filter: blur(6px);
        }

        .triage-bg-stat small {
          color: rgba(255, 255, 255, 0.32);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .triage-bg-stat strong {
          color: #ffffff;
          font-family: "Courier New", monospace;
          font-size: 15px;
        }

        .triage-bg-stat > span {
          color: ${e};
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .stat-capacity {
          left: 4%;
          top: 9%;
          animation: triageBgStatFloatOne 9s ease-in-out infinite;
        }

        .stat-incoming {
          right: 6%;
          top: 10%;
          border-color: rgba(239, 68, 68, 0.26);
          animation: triageBgStatFloatTwo 8s ease-in-out infinite;
        }

        .stat-incoming strong,
        .stat-incoming > span {
          color: #ef4444;
        }

        .stat-wait {
          left: 10%;
          bottom: 12%;
          animation: triageBgStatFloatThree 10s ease-in-out infinite;
        }

        .stat-critical {
          right: 7%;
          bottom: 10%;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          border-color: rgba(239, 68, 68, 0.28);
          animation: triageBgStatFloatFour 7s ease-in-out infinite;
        }

        .stat-critical > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .stat-critical strong {
          color: #ef4444;
          font-size: 11px;
        }

        .triage-bg-progress {
          width: 100%;
          height: 3px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
        }

        .triage-bg-progress span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, ${e}, #f97316);
          box-shadow: 0 0 8px ${e};
          animation: triageBgCapacityPulse 2.5s ease-in-out infinite;
        }

        .triage-bg-critical-dot {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ef4444;
          box-shadow:
            0 0 10px #ef4444,
            0 0 20px rgba(239, 68, 68, 0.7);
          animation: triageBgAlertPulse 1s ease-in-out infinite;
        }

        .triage-bg-alert {
          position: absolute;
          left: 50%;
          top: 8%;
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 220px;
          padding: 11px 14px;
          border: 1px solid rgba(239, 68, 68, 0.32);
          border-radius: 11px;
          background: linear-gradient(
            90deg,
            rgba(239, 68, 68, 0.08),
            rgba(2, 6, 23, 0.44)
          );
          box-shadow: 0 0 26px rgba(239, 68, 68, 0.1);
          opacity: 0.18;
          transform: translateX(-50%);
          animation: triageBgAlertFloat 8s ease-in-out infinite;
        }

        .triage-bg-alert-icon {
          display: grid;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          font-size: 15px;
          font-weight: 950;
          box-shadow: 0 0 13px rgba(239, 68, 68, 0.35);
          animation: triageBgAlertPulse 1.1s ease-in-out infinite;
        }

        .triage-bg-alert > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .triage-bg-alert small {
          color: #ef4444;
          font-size: 5px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .triage-bg-alert strong {
          color: rgba(255, 255, 255, 0.75);
          font-size: 8px;
        }

        .triage-bg-alert span {
          color: rgba(255, 255, 255, 0.34);
          font-size: 6px;
        }

        .triage-bg-ai-network {
          position: absolute;
          inset: 0;
          opacity: 0.12;
        }

        .triage-bg-ai-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .triage-bg-ai-lines path {
          fill: none;
          stroke: ${e};
          stroke-width: 0.65;
          stroke-dasharray: 6 11;
          filter: drop-shadow(0 0 4px ${e});
          animation: triageBgAiLineFlow 16s linear infinite;
        }

        .triage-bg-ai-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border: 1px solid ${e};
          border-radius: 50%;
          background: ${e};
          box-shadow:
            0 0 7px ${e},
            0 0 15px ${e}88;
          animation: triageBgAiNode 4s ease-in-out infinite;
        }

        .triage-bg-ai-core {
          position: absolute;
          right: 22%;
          bottom: 5%;
          width: 130px;
          height: 130px;
          opacity: 0.16;
          animation: triageBgAiCoreFloat 10s ease-in-out infinite;
        }

        .triage-bg-ai-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${e}99;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .ai-ring-one {
          width: 122px;
          height: 122px;
          border-style: dashed;
          animation: triageBgSpin 18s linear infinite;
        }

        .ai-ring-two {
          width: 92px;
          height: 92px;
          animation: triageBgSpinReverse 13s linear infinite;
        }

        .ai-ring-three {
          width: 60px;
          height: 60px;
          border-style: dotted;
          animation: triageBgSpin 8s linear infinite;
        }

        .triage-bg-ai-center {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 50%;
          background: ${e}16;
          box-shadow:
            0 0 22px ${e}66,
            inset 0 0 12px ${e}22;
          transform: translate(-50%, -50%);
        }

        .triage-bg-ai-center span {
          color: ${e};
          font-size: 11px;
          font-weight: 950;
        }

        .triage-bg-ai-core > small {
          position: absolute;
          left: 50%;
          bottom: -4px;
          color: ${e};
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1.2px;
          transform: translateX(-50%);
        }

        .triage-bg-radar {
          position: absolute;
          left: 2%;
          top: 31%;
          width: 150px;
          height: 150px;
          opacity: 0.12;
          border: 1px solid #ef4444;
          border-radius: 50%;
        }

        .triage-bg-radar-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(239, 68, 68, 0.65);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .radar-circle-one {
          width: 105px;
          height: 105px;
        }

        .radar-circle-two {
          width: 70px;
          height: 70px;
        }

        .radar-circle-three {
          width: 35px;
          height: 35px;
        }

        .triage-bg-radar-cross {
          position: absolute;
          left: 50%;
          top: 50%;
          background: rgba(239, 68, 68, 0.55);
          transform: translate(-50%, -50%);
        }

        .radar-cross-horizontal {
          width: 100%;
          height: 1px;
        }

        .radar-cross-vertical {
          width: 1px;
          height: 100%;
        }

        .triage-bg-radar-sweep {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 50%;
          height: 1px;
          background: linear-gradient(
            90deg,
            #ef4444,
            rgba(239, 68, 68, 0)
          );
          transform-origin: left center;
          animation: triageBgRadarSweep 5s linear infinite;
        }

        .radar-point {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: triageBgRadarPoint 2s ease-in-out infinite;
        }

        .radar-point-one {
          left: 29%;
          top: 36%;
        }

        .radar-point-two {
          right: 24%;
          top: 44%;
          animation-delay: -0.7s;
        }

        .radar-point-three {
          left: 48%;
          bottom: 18%;
          animation-delay: -1.4s;
        }

        .triage-bg-medical-cross {
          position: absolute;
          width: 44px;
          height: 44px;
          opacity: 0.11;
          animation: triageBgCrossFloat 9s ease-in-out infinite;
        }

        .triage-bg-medical-cross span,
        .triage-bg-medical-cross i {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 3px;
          background: #ef4444;
          box-shadow: 0 0 12px rgba(239, 68, 68, 0.7);
          transform: translate(-50%, -50%);
        }

        .triage-bg-medical-cross span {
          width: 12px;
          height: 42px;
        }

        .triage-bg-medical-cross i {
          width: 42px;
          height: 12px;
        }

        .cross-one {
          right: 13%;
          top: 31%;
        }

        .cross-two {
          left: 31%;
          bottom: 4%;
          transform: scale(0.7);
          animation-delay: -3s;
        }

        .cross-three {
          right: 37%;
          top: 17%;
          transform: scale(0.55);
          animation-delay: -6s;
        }

        .triage-bg-beacon {
          position: absolute;
          width: 60px;
          height: 60px;
          opacity: 0.1;
        }

        .triage-bg-beacon span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 12px #ef4444;
          transform: translate(-50%, -50%);
        }

        .triage-bg-beacon::before,
        .triage-bg-beacon::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border: 1px solid #ef4444;
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%);
          animation: triageBgBeacon 3s ease-out infinite;
        }

        .triage-bg-beacon::after {
          animation-delay: -1.5s;
        }

        .beacon-one {
          left: 45%;
          top: 24%;
        }

        .beacon-two {
          right: 10%;
          bottom: 26%;
          transform: scale(0.75);
        }

        .triage-bg-scan-line {
          position: absolute;
          z-index: 15;
          left: 0;
          top: -12%;
          width: 100%;
          height: 10%;
          opacity: 0;
          border-bottom: 1px solid rgba(239, 68, 68, 0.4);
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(239, 68, 68, 0.02),
            rgba(239, 68, 68, 0.1),
            transparent
          );
          animation: triageBgScan 10s ease-in-out infinite;
        }

        @keyframes triageBgGlow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.42;
            transform: scale(1.1);
          }
        }

        @keyframes triageBgGridMove {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(48px, 48px);
          }
        }

        @keyframes triageBgBlueprintFloat {
          0%,
          100% {
            transform: perspective(900px) rotateX(7deg) translateY(0);
          }

          50% {
            transform: perspective(900px) rotateX(7deg) translateY(-10px);
          }
        }

        @keyframes triageBgRouteFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -140;
          }
        }

        @keyframes triageBgRoomFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }

        @keyframes triageBgAlertPulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.78);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes triageBgPatientFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-7px);
          }
        }

        @keyframes triageBgRoutePulse {
          0% {
            opacity: 0.5;
            transform: scale(0.35);
          }

          100% {
            opacity: 0;
            transform: scale(2.5);
          }
        }

        @keyframes triageBgEkgDraw {
          0% {
            stroke-dashoffset: 1400;
          }

          45%,
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes triageBgEkgGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: translateY(-50%) scale(0.7);
          }

          50% {
            opacity: 0.8;
            transform: translateY(-50%) scale(1.25);
          }
        }

        @keyframes triageBgAmbulanceDrive {
          0% {
            left: -90px;
          }

          38% {
            left: 22%;
          }

          49% {
            left: 22%;
          }

          100% {
            left: 110%;
          }
        }

        @keyframes triageBgAmbulanceDriveTwo {
          0% {
            left: -120px;
          }

          100% {
            left: 112%;
          }
        }

        @keyframes triageBgEmergencyLight {
          0% {
            opacity: 1;
          }

          50% {
            opacity: 0.12;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes triageBgWheelSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageBgHelicopterFly {
          0% {
            left: -150px;
            transform: translateY(0);
          }

          45% {
            transform: translateY(18px);
          }

          100% {
            left: 112%;
            transform: translateY(-12px);
          }
        }

        @keyframes triageBgBladeSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageBgRouteDot {
          from {
            left: 0;
          }

          to {
            left: 100%;
          }
        }

        @keyframes triageBgStatFloatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes triageBgStatFloatTwo {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes triageBgStatFloatThree {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(9px);
          }
        }

        @keyframes triageBgStatFloatFour {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes triageBgCapacityPulse {
          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes triageBgAlertFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }

          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        @keyframes triageBgAiLineFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes triageBgAiNode {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.75);
          }

          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        @keyframes triageBgAiCoreFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }

        @keyframes triageBgSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes triageBgSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes triageBgRadarSweep {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageBgRadarPoint {
          0%,
          100% {
            opacity: 0.25;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes triageBgCrossFloat {
          0%,
          100% {
            opacity: 0.07;
            transform: translateY(0) rotate(0deg);
          }

          50% {
            opacity: 0.15;
            transform: translateY(-11px) rotate(8deg);
          }
        }

        @keyframes triageBgBeacon {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.4);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3);
          }
        }

        @keyframes triageBgScan {
          0%,
          62% {
            top: -12%;
            opacity: 0;
          }

          69% {
            opacity: 0.3;
          }

          94% {
            top: 108%;
            opacity: 0.03;
          }

          100% {
            top: 108%;
            opacity: 0;
          }
        }

        @media (max-width: 900px) {
          .triage-bg-stat,
          .triage-bg-alert {
            opacity: 0.1;
          }

          .triage-bg-blueprint {
            left: 1%;
            width: 98%;
          }

          .triage-bg-radar {
            left: -55px;
          }

          .triage-bg-ai-core {
            right: 5%;
          }
        }

        @media (max-width: 650px) {
          .triage-bg-stat,
          .triage-bg-alert,
          .triage-bg-radar,
          .triage-bg-medical-cross,
          .triage-bg-helicopter,
          .triage-bg-helicopter-route {
            display: none;
          }

          .triage-bg-blueprint {
            top: 17%;
            height: 62%;
            opacity: 0.12;
          }

          .triage-bg-department {
            width: 50px;
            height: 42px;
          }

          .triage-bg-department span {
            font-size: 7px;
          }

          .triage-bg-ekg {
            opacity: 0.12;
          }

          .triage-bg-ambulance {
            opacity: 0.14;
          }

          .triage-bg-ai-core {
            right: -20px;
            bottom: 3%;
            transform: scale(0.75);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .triage-background *,
          .triage-background *::before,
          .triage-background *::after {
            animation: none !important;
          }
        }
      `})]})}function tO({accent:e="#dc2626"}){return(0,t.jsxs)("div",{"aria-hidden":"true",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-background",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-base"}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-grid"}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-glow pulse-glow-left"}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-glow pulse-glow-right"}),(0,t.jsxs)("svg",{viewBox:"0 0 1600 240",preserveAspectRatio:"none",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-page-ecg",children:[(0,t.jsx)("path",{d:"   M0 125   L180 125   L225 125   L250 104   L274 148   L305 52   L338 182   L370 125   L555 125   L600 125   L625 104   L649 148   L680 52   L713 182   L745 125   L930 125   L975 125   L1000 104   L1024 148   L1055 52   L1088 182   L1120 125   L1305 125   L1350 125   L1375 104   L1399 148   L1430 52   L1463 182   L1495 125   L1600 125   ",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-page-ecg-shadow"}),(0,t.jsx)("path",{d:"   M0 125   L180 125   L225 125   L250 104   L274 148   L305 52   L338 182   L370 125   L555 125   L600 125   L625 104   L649 148   L680 52   L713 182   L745 125   L930 125   L975 125   L1000 104   L1024 148   L1055 52   L1088 182   L1120 125   L1305 125   L1350 125   L1375 104   L1399 148   L1430 52   L1463 182   L1495 125   L1600 125   ",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-page-ecg-line"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-rings",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-ring pulse-ring-one"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-ring pulse-ring-two"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-ring pulse-ring-three"}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-heart",children:(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"♥"})})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-status-card pulse-status-connected",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-status-icon",children:"●"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"PATIENT STATUS"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"CONNECTED"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-status-card pulse-status-sensor",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-status-icon",children:"⌁"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"WIRELESS SENSOR"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"ACTIVE"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-status-card pulse-status-central",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-status-icon",children:"⬢"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"CENTRAL STATION"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"SYNCHRONIZED"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-scan"}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-shine"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-header",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"AURIS MEDICAL"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"LIVE PATIENT TELEMETRY"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-live",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),"LIVE"]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-patient-meta",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"PATIENT"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"AUR-MED-2048"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"BED"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"ICU-12"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"STATUS"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-stable",children:"STABLE"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"NETWORK"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"SECURE"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-main",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-wave-panel",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-panel-label",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"ECG LEAD II"}),(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"25 MM/S"})]}),(0,t.jsxs)("svg",{viewBox:"0 0 800 160",preserveAspectRatio:"none",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-ecg",children:[(0,t.jsx)("path",{d:"   M0 84   L92 84   L126 84   L146 66   L166 104   L192 21   L220 130   L250 84   L356 84   L390 84   L410 66   L430 104   L456 21   L484 130   L514 84   L620 84   L654 84   L674 66   L694 104   L720 21   L748 130   L780 84   L800 84   ",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-ecg-shadow"}),(0,t.jsx)("path",{d:"   M0 84   L92 84   L126 84   L146 66   L166 104   L192 21   L220 130   L250 84   L356 84   L390 84   L410 66   L430 104   L456 21   L484 130   L514 84   L620 84   L654 84   L674 66   L694 104   L720 21   L748 130   L780 84   L800 84   ",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-ecg-line"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-resp-row",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"RESP"}),(0,t.jsx)("svg",{viewBox:"0 0 800 70",preserveAspectRatio:"none",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:(0,t.jsx)("path",{d:"   M0 38   C55 8 105 8 160 38   C215 68 265 68 320 38   C375 8 425 8 480 38   C535 68 585 68 640 38   C695 8 745 8 800 38   ",className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-heart-rate",children:[(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"HEART RATE"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"72"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"BPM"})]}),(0,t.jsx)("p",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"NORMAL SINUS RHYTHM"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vitals",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-label",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"SpO₂"}),(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"OXYGEN"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-number",children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"98"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"%"})]}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-meter",children:(0,t.jsx)("span",{style:{width:"98%"},className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-label",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"NIBP"}),(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"PRESSURE"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-number pulse-bp",children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"118"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"/76"})]}),(0,t.jsx)("p",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"MAP 90 MMHG"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-label",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"RESP"}),(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"RATE"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-number",children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"16"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"/MIN"})]}),(0,t.jsx)("p",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"REGULAR"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-label",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"TEMP"}),(0,t.jsx)("small",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"CORE"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vital-number",children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"98.6"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"°F"})]}),(0,t.jsx)("p",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"WITHIN RANGE"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-monitor-footer",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"CENTRAL STATION CONNECTED"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"ENCRYPTED TELEMETRY"}),(0,t.jsx)("span",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"UPDATED 08:42:16"})]})]}),(0,t.jsx)("div",{className:tN.default.dynamic([["b3f6d3e4151053a",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" pulse-vignette"}),(0,t.jsx)(tN.default,{id:"b3f6d3e4151053a",dynamic:[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e],children:`.pulse-background.__jsx-style-dynamic-selector{z-index:0;pointer-events:none;isolation:isolate;color:#fff;background:#020617;position:absolute;inset:0;overflow:hidden}.pulse-base.__jsx-style-dynamic-selector{background:radial-gradient(circle at 76% 38%, ${e}24 0%, transparent 37%), radial-gradient(circle at 18% 68%, ${e}18 0%, transparent 32%), linear-gradient(140deg, #020617 0%, #07101f 45%, #020617 100%);position:absolute;inset:0}.pulse-grid.__jsx-style-dynamic-selector{opacity:.17;background-image:linear-gradient(#ffffff0b 1px, transparent 1px), linear-gradient(90deg, #ffffff0b 1px, transparent 1px), linear-gradient(${e}16 1px, transparent 1px), linear-gradient(90deg, ${e}16 1px, transparent 1px);background-size:80px 80px,80px 80px,20px 20px,20px 20px;animation:30s linear infinite pulseGridMove;position:absolute;inset:-80px;-webkit-mask-image:radial-gradient(circle at 65% 45%,#000 18%,#0000 78%);mask-image:radial-gradient(circle at 65% 45%,#000 18%,#0000 78%)}.pulse-glow.__jsx-style-dynamic-selector{filter:blur(110px);border-radius:50%;animation:5s ease-in-out infinite pulseBreath;position:absolute}.pulse-glow-left.__jsx-style-dynamic-selector{background:${e}18;width:480px;height:480px;bottom:2%;left:-180px}.pulse-glow-right.__jsx-style-dynamic-selector{background:${e}22;width:560px;height:560px;animation-delay:-2.5s;top:-100px;right:-120px}.pulse-page-ecg.__jsx-style-dynamic-selector{opacity:.18;width:110%;height:240px;position:absolute;top:49%;left:-5%;transform:translateY(-50%)}.pulse-page-ecg-shadow.__jsx-style-dynamic-selector,.pulse-page-ecg-line.__jsx-style-dynamic-selector{fill:none;stroke-linecap:round;stroke-linejoin:round}.pulse-page-ecg-shadow.__jsx-style-dynamic-selector{stroke:${e}42;stroke-width:14px;filter:blur(10px)}.pulse-page-ecg-line.__jsx-style-dynamic-selector{stroke:${e};stroke-width:2px;stroke-dasharray:260 1340;filter:drop-shadow(0 0 8px ${e});animation:6s linear infinite pulsePageEcg}.pulse-rings.__jsx-style-dynamic-selector{width:180px;height:180px;position:absolute;top:55%;left:15%;transform:translate(-50%,-50%)}.pulse-ring.__jsx-style-dynamic-selector{border:1px solid ${e}72;opacity:0;border-radius:50%;animation:2.4s ease-out infinite pulseRing;position:absolute;inset:0}.pulse-ring-two.__jsx-style-dynamic-selector{animation-delay:.8s}.pulse-ring-three.__jsx-style-dynamic-selector{animation-delay:1.6s}.pulse-heart.__jsx-style-dynamic-selector{border:1px solid ${e}80;width:68px;height:68px;box-shadow:0 0 34px ${e}32, inset 0 0 22px ${e}18;background:#020617e6;border-radius:50%;place-items:center;animation:1.2s ease-in-out infinite pulseHeart;display:grid;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pulse-heart.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:${e};text-shadow:0 0 12px ${e};font-size:29px}.pulse-status-card.__jsx-style-dynamic-selector{z-index:6;border:1px solid ${e}46;box-shadow:0 20px 50px #00000075, 0 0 24px ${e}14;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);background:#050b19d6;border-radius:13px;align-items:center;gap:11px;padding:12px 14px;display:flex;position:absolute}.pulse-status-card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child{flex-direction:column;gap:3px;display:flex}.pulse-status-card.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:#ffffff52;letter-spacing:.9px;font-size:6px;font-weight:900}.pulse-status-card.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#fff;letter-spacing:.8px;font-size:8px;font-weight:900}.pulse-status-icon.__jsx-style-dynamic-selector{border:1px solid ${e}55;background:${e}0f;width:31px;height:31px;color:${e};border-radius:8px;place-items:center;font-size:14px;animation:1.2s ease-in-out infinite pulseStatusIcon;display:grid}.pulse-status-connected.__jsx-style-dynamic-selector{animation:8s ease-in-out infinite pulseFloatOne;top:17%;left:5%}.pulse-status-sensor.__jsx-style-dynamic-selector{animation:10s ease-in-out infinite pulseFloatTwo;bottom:13%;left:8%}.pulse-status-central.__jsx-style-dynamic-selector{animation:9s ease-in-out infinite pulseFloatThree;bottom:7%;right:5%}.pulse-monitor.__jsx-style-dynamic-selector{z-index:5;border:1px solid ${e}68;width:min(620px,50vw);min-height:475px;box-shadow:0 38px 115px #000000a8, 0 0 58px ${e}20, inset 0 0 42px #ffffff06;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);background:linear-gradient(145deg,#0f172ae8,#020617fa);border-radius:26px;padding:22px;animation:7s ease-in-out infinite pulseMonitorFloat,1.2s ease-in-out infinite pulseMonitorBeat;position:absolute;top:50%;right:4.5%;overflow:hidden;transform:translateY(-50%)}.pulse-monitor-scan.__jsx-style-dynamic-selector{z-index:8;opacity:0;border-bottom:1px solid ${e}80;background:linear-gradient(to bottom, transparent, ${e}14, ${e}42, transparent);width:100%;height:12%;animation:8s ease-in-out infinite pulseScan;position:absolute;top:-16%;left:0}.pulse-monitor-shine.__jsx-style-dynamic-selector{opacity:0;background:linear-gradient(90deg,#0000,#ffffff24,#0000);width:28%;height:190%;animation:10s ease-in-out infinite pulseShine;position:absolute;top:-45%;left:-45%;transform:rotate(18deg)}.pulse-monitor-header.__jsx-style-dynamic-selector{z-index:2;border-bottom:1px solid ${e}32;justify-content:space-between;align-items:center;padding-bottom:15px;display:flex;position:relative}.pulse-monitor-header.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child{flex-direction:column;gap:5px;display:flex}.pulse-monitor-header.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:${e};letter-spacing:1.8px;font-size:8px;font-weight:950}.pulse-monitor-header.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#fff;letter-spacing:1.8px;font-size:15px;font-weight:950}.pulse-live.__jsx-style-dynamic-selector{color:${e};letter-spacing:1.2px;align-items:center;gap:7px;font-size:8px;font-weight:950;display:flex}.pulse-live.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:${e};width:8px;height:8px;box-shadow:0 0 13px ${e};border-radius:50%;animation:1.2s ease-in-out infinite pulseLive}.pulse-patient-meta.__jsx-style-dynamic-selector{z-index:2;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin-top:12px;display:grid;position:relative}.pulse-patient-meta.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{background:#ffffff05;border:1px solid #ffffff0b;border-radius:8px;flex-direction:column;gap:5px;padding:9px;display:flex}.pulse-patient-meta.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:#ffffff4d;letter-spacing:.8px;font-size:5px;font-weight:900}.pulse-patient-meta.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#ffffffd4;font-family:Courier New,monospace;font-size:7px}.pulse-patient-meta.__jsx-style-dynamic-selector .pulse-stable.__jsx-style-dynamic-selector{color:${e}}.pulse-monitor-main.__jsx-style-dynamic-selector{z-index:2;grid-template-columns:1fr 130px;gap:10px;margin-top:10px;display:grid;position:relative}.pulse-wave-panel.__jsx-style-dynamic-selector,.pulse-heart-rate.__jsx-style-dynamic-selector,.pulse-vital.__jsx-style-dynamic-selector{background:#02061785;border:1px solid #ffffff0d;border-radius:12px}.pulse-wave-panel.__jsx-style-dynamic-selector{padding:11px;overflow:hidden}.pulse-panel-label.__jsx-style-dynamic-selector,.pulse-vital-label.__jsx-style-dynamic-selector{justify-content:space-between;align-items:center;display:flex}.pulse-panel-label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector,.pulse-vital-label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff7a;letter-spacing:1px;font-size:6px;font-weight:900}.pulse-panel-label.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector,.pulse-vital-label.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:${e};letter-spacing:.8px;font-size:5px;font-weight:900}.pulse-monitor-ecg.__jsx-style-dynamic-selector{width:100%;height:112px}.pulse-monitor-ecg-shadow.__jsx-style-dynamic-selector,.pulse-monitor-ecg-line.__jsx-style-dynamic-selector{fill:none;stroke-linecap:round;stroke-linejoin:round}.pulse-monitor-ecg-shadow.__jsx-style-dynamic-selector{stroke:${e}48;stroke-width:11px;filter:blur(7px)}.pulse-monitor-ecg-line.__jsx-style-dynamic-selector{stroke:${e};stroke-width:2.4px;stroke-dasharray:205 595;filter:drop-shadow(0 0 6px ${e});animation:3.5s linear infinite pulseMonitorEcg}.pulse-resp-row.__jsx-style-dynamic-selector{border-top:1px solid #ffffff0a;grid-template-columns:34px 1fr;align-items:center;gap:8px;padding-top:5px;display:grid}.pulse-resp-row.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff52;letter-spacing:.7px;font-size:5px;font-weight:900}.pulse-resp-row.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{width:100%;height:30px}.pulse-resp-row.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:none;stroke:#ffffff52;stroke-width:1.5px;stroke-dasharray:100 700;animation:7s linear infinite pulseResp}.pulse-heart-rate.__jsx-style-dynamic-selector{text-align:center;flex-direction:column;justify-content:center;padding:13px;display:flex}.pulse-heart-rate.__jsx-style-dynamic-selector>small.__jsx-style-dynamic-selector{color:#ffffff57;letter-spacing:1px;font-size:6px;font-weight:900}.pulse-heart-rate.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{justify-content:center;align-items:flex-end;margin-top:8px;display:flex}.pulse-heart-rate.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:${e};text-shadow:0 0 18px ${e}55;font-size:54px;line-height:.9;animation:1.2s ease-in-out infinite pulseNumber}.pulse-heart-rate.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff6b;margin:0 0 5px 4px;font-size:6px;font-weight:900}.pulse-heart-rate.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,.pulse-vital.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#ffffff40;letter-spacing:.7px;margin:8px 0 0;font-size:5px;font-weight:900}.pulse-vitals.__jsx-style-dynamic-selector{z-index:2;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:9px;display:grid;position:relative}.pulse-vital.__jsx-style-dynamic-selector{padding:10px;animation:1.2s ease-in-out infinite pulseVitalBeat}.pulse-vital.__jsx-style-dynamic-selector:nth-child(2){animation-delay:50ms}.pulse-vital.__jsx-style-dynamic-selector:nth-child(3){animation-delay:.1s}.pulse-vital.__jsx-style-dynamic-selector:nth-child(4){animation-delay:.15s}.pulse-vital-number.__jsx-style-dynamic-selector{align-items:flex-end;margin-top:8px;display:flex}.pulse-vital-number.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#fff;font-size:24px;line-height:1}.pulse-vital-number.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:${e};margin:0 0 2px 3px;font-size:6px;font-weight:900}.pulse-bp.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-bottom:1px;font-size:15px}.pulse-meter.__jsx-style-dynamic-selector{background:#ffffff0f;border-radius:999px;height:3px;margin-top:9px;overflow:hidden}.pulse-meter.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{border-radius:inherit;background:${e};height:100%;box-shadow:0 0 8px ${e};animation:2s ease-in-out infinite pulseMeter;display:block}.pulse-monitor-footer.__jsx-style-dynamic-selector{z-index:2;color:#ffffff36;letter-spacing:.65px;border-top:1px solid #ffffff0b;justify-content:space-between;margin-top:11px;padding-top:9px;font-family:Courier New,monospace;font-size:5px;display:flex;position:relative}.pulse-vignette.__jsx-style-dynamic-selector{z-index:10;background:radial-gradient(circle,#0000 30%,#02061733 67%,#020617c7 100%),linear-gradient(#ffffff03,#0000 32%,#0206176b);position:absolute;inset:0}@keyframes pulseGridMove{0%{transform:translate(0)}to{transform:translate(80px,80px)}}@keyframes pulseBreath{0%,to{opacity:.5;transform:scale(.92)}50%{opacity:1;transform:scale(1.08)}}@keyframes pulsePageEcg{0%{stroke-dashoffset:1600px}to{stroke-dashoffset:0}}@keyframes pulseRing{0%{opacity:.55;transform:scale(.32)}to{opacity:0;transform:scale(1.55)}}@keyframes pulseHeart{0%,60%,to{transform:translate(-50%,-50%)scale(1)}68%{transform:translate(-50%,-50%)scale(1.14)}76%{transform:translate(-50%,-50%)scale(1.02)}84%{transform:translate(-50%,-50%)scale(1.09)}}@keyframes pulseStatusIcon{0%,60%,to{transform:scale(1)}68%{transform:scale(1.12)}84%{transform:scale(1.05)}}@keyframes pulseLive{0%,60%,to{opacity:.65;transform:scale(1)}68%{opacity:1;transform:scale(1.22)}84%{transform:scale(1.08)}}@keyframes pulseMonitorFloat{0%,to{margin-top:0}50%{margin-top:-10px}}@keyframes pulseMonitorBeat{0%,60%,to{border-color:${e}55;box-shadow:0 38px 115px #000000a8, 0 0 46px ${e}18, inset 0 0 42px #ffffff06}68%{border-color:${e}a0;box-shadow:0 38px 115px #000000a8, 0 0 72px ${e}35, inset 0 0 46px ${e}0e}84%{border-color:${e}78}}@keyframes pulseMonitorEcg{0%{stroke-dashoffset:800px}to{stroke-dashoffset:0}}@keyframes pulseResp{0%{stroke-dashoffset:800px}to{stroke-dashoffset:0}}@keyframes pulseNumber{0%,60%,to{transform:scale(1)}68%{transform:scale(1.09)}76%{transform:scale(1.01)}84%{transform:scale(1.055)}}@keyframes pulseVitalBeat{0%,60%,to{border-color:#ffffff0d;transform:scale(1)}68%{border-color:${e}45;transform:scale(1.015)}84%{transform:scale(1.006)}}@keyframes pulseMeter{0%,to{opacity:.72}50%{opacity:1}}@keyframes pulseScan{0%,62%{opacity:0;top:-16%}68%{opacity:.5}94%{opacity:.08;top:108%}to{opacity:0;top:108%}}@keyframes pulseShine{0%,65%{opacity:0;left:-45%}72%{opacity:.18}92%{opacity:0;left:125%}to{opacity:0;left:125%}}@keyframes pulseFloatOne{0%,to{transform:translateY(0)rotate(-1deg)}50%{transform:translateY(-12px)rotate(1deg)}}@keyframes pulseFloatTwo{0%,to{transform:translateY(0)rotate(1deg)}50%{transform:translateY(11px)rotate(-1deg)}}@keyframes pulseFloatThree{0%,to{transform:translateY(0)}50%{transform:translateY(-9px)}}@media (width<=1050px){.pulse-monitor.__jsx-style-dynamic-selector{width:58vw;right:3%}.pulse-status-connected.__jsx-style-dynamic-selector,.pulse-status-sensor.__jsx-style-dynamic-selector{left:3%}}@media (width<=760px){.pulse-monitor.__jsx-style-dynamic-selector{width:calc(100% - 30px);min-height:430px;padding:15px;left:50%;right:auto;transform:translate(-50%,-50%)}.pulse-monitor-main.__jsx-style-dynamic-selector{grid-template-columns:1fr 105px}.pulse-patient-meta.__jsx-style-dynamic-selector,.pulse-vitals.__jsx-style-dynamic-selector{grid-template-columns:repeat(2,minmax(0,1fr))}.pulse-rings.__jsx-style-dynamic-selector,.pulse-status-card.__jsx-style-dynamic-selector,.pulse-monitor-footer.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:nth-child(2){display:none}}@media (prefers-reduced-motion:reduce){.pulse-grid.__jsx-style-dynamic-selector,.pulse-glow.__jsx-style-dynamic-selector,.pulse-page-ecg-line.__jsx-style-dynamic-selector,.pulse-ring.__jsx-style-dynamic-selector,.pulse-heart.__jsx-style-dynamic-selector,.pulse-status-card.__jsx-style-dynamic-selector,.pulse-status-icon.__jsx-style-dynamic-selector,.pulse-monitor.__jsx-style-dynamic-selector,.pulse-monitor-scan.__jsx-style-dynamic-selector,.pulse-monitor-shine.__jsx-style-dynamic-selector,.pulse-live.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector,.pulse-monitor-ecg-line.__jsx-style-dynamic-selector,.pulse-resp-row.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector,.pulse-heart-rate.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector,.pulse-vital.__jsx-style-dynamic-selector,.pulse-meter.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{animation:none}}`})]})}let tR=[{label:"PATIENT ID",value:"AUR-MED-2048"},{label:"DOB",value:"06 / 14 / 1987"},{label:"ROOM",value:"ICU-12"},{label:"CARE STATUS",value:"ACTIVE"}],tT=[{label:"LAB VERIFIED",detail:"08:42:16",left:"7%",top:"19%",delay:"-2s"},{label:"HIPAA SECURE",detail:"AES-256",left:"12%",top:"72%",delay:"-7s"},{label:"MRI COMPLETE",detail:"IMG-033",right:"5%",top:"67%",delay:"-11s"}],tC=[{left:"13%",top:"34%",delay:"0s"},{left:"22%",top:"47%",delay:"-1.2s"},{left:"11%",top:"59%",delay:"-2.7s"},{right:"11%",top:"29%",delay:"-0.8s"},{right:"18%",top:"48%",delay:"-2s"},{right:"9%",top:"58%",delay:"-3.1s"}];function tz({accent:e}){return(0,t.jsxs)("div",{"aria-hidden":"true",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-background",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-base"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-grid"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-scanlines"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-glow chart-glow-left"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-glow chart-glow-right"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-network-lines",children:(0,t.jsxs)("svg",{viewBox:"0 0 1600 900",preserveAspectRatio:"none",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("path",{d:"M 90 305 C 220 260 300 365 425 330",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M 105 520 C 260 470 330 590 470 535",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M 1160 265 C 1285 220 1370 330 1525 285",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M 1120 535 C 1275 470 1395 610 1535 540",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M 245 425 C 480 320 630 510 820 425",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M 815 425 C 1035 320 1190 510 1370 415",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})]})}),tC.map((a,i)=>(0,t.jsx)("div",{style:{left:a.left,right:a.right,top:a.top,animationDelay:a.delay},className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-network-node",children:(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})},i)),tT.map(a=>(0,t.jsxs)("div",{style:{left:a.left,right:a.right,top:a.top,animationDelay:a.delay},className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-background-label",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:a.label}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:a.detail})]},a.label)),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-hero",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-hero-aura"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-document chart-document-back",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-document-tab",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"IMAGING"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"IMG-033"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-imaging-preview",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-imaging-ring chart-imaging-ring-one"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-imaging-ring chart-imaging-ring-two"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-imaging-core"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-imaging-crosshair chart-crosshair-x"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-imaging-crosshair chart-crosshair-y"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-document-lines",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-document chart-document-middle",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-document-tab",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"MEDICATIONS"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"04 ACTIVE"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-medication-list",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-medication-icon"}),(0,t.jsxs)("p",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"Medication 01"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"08:00 • Administered"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-medication-icon"}),(0,t.jsxs)("p",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"Medication 02"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"12:00 • Scheduled"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-medication-icon"}),(0,t.jsxs)("p",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"Medication 03"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"18:00 • Scheduled"})]})]})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-record",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-record-shine"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-record-scan"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-record-header",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-eyebrow",children:"AURIS MEDICAL RECORD SYSTEM"}),(0,t.jsx)("h3",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"PATIENT CHART"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-sync-status",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-status-dot"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-status-words",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"SYNCING"}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"VERIFYING"}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"ENCRYPTED"}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"SYNCHRONIZED"})]})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-patient-header",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-patient-avatar",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-avatar-ring"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-avatar-head"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-avatar-body"}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-avatar-status"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-patient-identity",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"PATIENT PROFILE"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"AUTHORIZED CLINICAL RECORD"}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-identity-bars",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-security-badge",children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("path",{d:"M12 3L19 6V11C19 15.4 16.1 19.4 12 21C7.9 19.4 5 15.4 5 11V6L12 3Z",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M9.5 12L11.2 13.7L14.8 10",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})]}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"SECURE"})]})]}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-patient-grid",children:tR.map(a=>(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-patient-detail",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:a.label}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:a.value})]},a.label))}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-clinical-grid",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-clinical-panel chart-vitals-panel",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-panel-header",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"LIVE VITALS"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"MONITORING"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-vitals",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"HEART RATE"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"72"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"BPM"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"OXYGEN"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"97"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"%"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"TEMP"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"98.6"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"°F"})]})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-clinical-panel chart-lab-panel",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-panel-header",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"LAB RESULTS"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"VERIFIED"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-lab-results",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"WBC"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"7.4"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"HGB"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"14.1"})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"GLU"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"92"})]})]})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-activity",children:[(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-panel-header",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"CLINICAL ACTIVITY"}),(0,t.jsx)("small",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"LIVE TELEMETRY"})]}),(0,t.jsxs)("svg",{viewBox:"0 0 700 92",preserveAspectRatio:"none",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-activity-line",children:[(0,t.jsx)("path",{d:"   M 0 48   L 95 48   L 120 48   L 140 35   L 158 64   L 180 14   L 204 74   L 228 48   L 330 48   L 355 48   L 375 35   L 393 64   L 415 14   L 439 74   L 463 48   L 565 48   L 590 48   L 610 35   L 628 64   L 650 14   L 674 74   L 700 48   ",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-activity-baseline"}),(0,t.jsx)("path",{d:"   M 0 48   L 95 48   L 120 48   L 140 35   L 158 64   L 180 14   L 204 74   L 228 48   L 330 48   L 355 48   L 375 35   L 393 64   L 415 14   L 439 74   L 463 48   L 565 48   L 590 48   L 610 35   L 628 64   L 650 14   L 674 74   L 700 48   ",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-activity-glow"}),(0,t.jsx)("path",{d:"   M 0 48   L 95 48   L 120 48   L 140 35   L 158 64   L 180 14   L 204 74   L 228 48   L 330 48   L 355 48   L 375 35   L 393 64   L 415 14   L 439 74   L 463 48   L 565 48   L 590 48   L 610 35   L 628 64   L 650 14   L 674 74   L 700 48   ",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-activity-path"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-record-footer",children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"DATABASE NODE: MED-01"}),(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"LAST UPDATE: 08:42:16"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-floating-card chart-floating-lab",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-floating-icon chart-flask-icon",children:(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"LAB ANALYSIS"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"COMPLETE"})]})]}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-floating-card chart-floating-cloud",children:[(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-cloud-icon",children:(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})}),(0,t.jsxs)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("span",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"CLOUD SYNC"}),(0,t.jsx)("strong",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:"ONLINE"})]})]}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-floating-lock",children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]]),children:[(0,t.jsx)("rect",{x:"5",y:"10",width:"14",height:"11",rx:"2",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("path",{d:"M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])}),(0,t.jsx)("circle",{cx:"12",cy:"15",r:"1.2",className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])})]})})]}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-global-pulse"}),(0,t.jsx)("div",{className:tN.default.dynamic([["619466acfbb01395",[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]]])+" chart-vignette"}),(0,t.jsx)(tN.default,{id:"619466acfbb01395",dynamic:[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e],children:`.chart-background.__jsx-style-dynamic-selector{z-index:0;pointer-events:none;background:#020617;position:absolute;inset:0;overflow:hidden}.chart-base.__jsx-style-dynamic-selector{background:radial-gradient(circle at 76% 34%, ${e}24, transparent 34%), radial-gradient(circle at 18% 30%, #ffffff0b, transparent 28%), radial-gradient(circle at 88% 78%, #dc262629, transparent 30%), linear-gradient(135deg, #020617 0%, #07111f 31%, #13070c 55%, #07111f 77%, #020617 100%);background-size:140% 140%;animation:22s ease-in-out infinite alternate chartBaseMove;position:absolute;inset:-12%}.chart-grid.__jsx-style-dynamic-selector{opacity:.14;background-image:linear-gradient(#f871711f 1px,#0000 1px),linear-gradient(90deg,#f871711f 1px,#0000 1px);background-size:58px 58px;animation:28s linear infinite chartGridMove;position:absolute;inset:-80px;-webkit-mask-image:radial-gradient(circle at 70% 40%,#000 12%,#0000 75%);mask-image:radial-gradient(circle at 70% 40%,#000 12%,#0000 75%)}.chart-scanlines.__jsx-style-dynamic-selector{opacity:.065;background:repeating-linear-gradient(#0000 0 5px,#ffffff12 6px);position:absolute;inset:0}.chart-glow.__jsx-style-dynamic-selector{filter:blur(110px);border-radius:50%;position:absolute}.chart-glow-left.__jsx-style-dynamic-selector{background:${e}1c;width:480px;height:480px;animation:15s ease-in-out infinite chartGlowLeft;top:18%;left:-250px}.chart-glow-right.__jsx-style-dynamic-selector{background:#ef444426;width:620px;height:620px;animation:18s ease-in-out infinite chartGlowRight;bottom:-210px;right:-280px}.chart-network-lines.__jsx-style-dynamic-selector{opacity:.2;position:absolute;inset:0}.chart-network-lines.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{width:100%;height:100%}.chart-network-lines.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:none;stroke:${e};stroke-width:1px;stroke-dasharray:8 15;animation:18s linear infinite chartNetworkTravel}.chart-network-node.__jsx-style-dynamic-selector{border:1px solid ${e}55;width:13px;height:13px;box-shadow:0 0 16px ${e}35;background:#020617db;border-radius:50%;animation:9s ease-in-out infinite chartNodeFloat;position:absolute}.chart-network-node.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:${e};box-shadow:0 0 12px ${e};border-radius:50%;animation:2.6s ease-in-out infinite chartNodePulse;position:absolute;inset:3px}.chart-background-label.__jsx-style-dynamic-selector{opacity:.28;color:#fff9;flex-direction:column;gap:4px;min-width:110px;font-family:Courier New,monospace;animation:13s ease-in-out infinite chartLabelFloat;display:flex;position:absolute}.chart-background-label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{letter-spacing:1.7px;font-size:8px;font-weight:800}.chart-background-label.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:${e};letter-spacing:1.2px;font-size:7px}.chart-hero.__jsx-style-dynamic-selector{perspective:1400px;width:min(650px,49vw);height:min(610px,72vh);min-height:520px;display:none;position:absolute;top:max(88px,min(10vh,125px));right:max(28px,min(5vw,92px))}.chart-hero-aura.__jsx-style-dynamic-selector{background:radial-gradient(circle at center, ${e}1d, transparent 65%);filter:blur(30px);border-radius:42%;animation:7s ease-in-out infinite chartHeroAura;position:absolute;inset:5% 3% 4%}.chart-document.__jsx-style-dynamic-selector,.chart-record.__jsx-style-dynamic-selector{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background:linear-gradient(145deg,#0f172ae0,#020617f5);border:1px solid #f8717140;position:absolute;overflow:hidden;box-shadow:0 28px 80px #0000007a,inset 0 0 30px #ffffff06}.chart-document.__jsx-style-dynamic-selector{border-radius:18px;width:70%;height:70%}.chart-document-back.__jsx-style-dynamic-selector{opacity:.58;animation:12s ease-in-out infinite chartDocumentBack;top:2%;right:0;transform:rotate(7deg)translateZ(-90px)}.chart-document-middle.__jsx-style-dynamic-selector{opacity:.68;animation:14s ease-in-out infinite chartDocumentMiddle;bottom:1%;left:0;transform:rotate(-6deg)translateZ(-50px)}.chart-document-tab.__jsx-style-dynamic-selector{color:#ffffffa6;letter-spacing:1.5px;border-bottom:1px solid #f8717124;justify-content:space-between;align-items:center;padding:16px 18px;font-size:8px;font-weight:800;display:flex}.chart-document-tab.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:#fca5a5;font-size:7px}.chart-imaging-preview.__jsx-style-dynamic-selector{border:1px solid ${e}33;background:radial-gradient(circle,#ffffff1a,#0000 58%),#020617a6;border-radius:16px;width:150px;height:150px;margin:32px auto 20px;position:relative;overflow:hidden}.chart-imaging-ring.__jsx-style-dynamic-selector{border:1px solid #f8717159;border-radius:48% 52% 46% 54%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.chart-imaging-ring-one.__jsx-style-dynamic-selector{width:105px;height:118px;animation:15s linear infinite chartImagingRotate}.chart-imaging-ring-two.__jsx-style-dynamic-selector{width:75px;height:88px;animation:11s linear infinite chartImagingRotateReverse}.chart-imaging-core.__jsx-style-dynamic-selector{background:${e}22;width:42px;height:55px;box-shadow:0 0 24px ${e}33, inset 0 0 14px ${e}44;border-radius:45%;animation:3.2s ease-in-out infinite chartImagingCore;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.chart-imaging-crosshair.__jsx-style-dynamic-selector{background:${e}35;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.chart-crosshair-x.__jsx-style-dynamic-selector{width:100%;height:1px}.chart-crosshair-y.__jsx-style-dynamic-selector{width:1px;height:100%}.chart-document-lines.__jsx-style-dynamic-selector{flex-direction:column;gap:9px;padding:0 30px;display:flex}.chart-document-lines.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:#ffffff13;border-radius:999px;height:4px;display:block}.chart-document-lines.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:nth-child(2){width:72%}.chart-document-lines.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:nth-child(3){width:86%}.chart-medication-list.__jsx-style-dynamic-selector{flex-direction:column;gap:12px;padding:28px;display:flex}.chart-medication-list.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{background:#ffffff05;border:1px solid #ffffff0d;border-radius:10px;align-items:center;gap:12px;padding:10px;display:flex}.chart-medication-icon.__jsx-style-dynamic-selector{border:1px solid #f8717173;border-radius:999px;flex-shrink:0;width:28px;height:12px;position:relative;transform:rotate(-28deg)}.chart-medication-icon.__jsx-style-dynamic-selector:after{content:"";background:#f8717173;width:1px;height:12px;position:absolute;top:-1px;left:50%}.chart-medication-list.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{flex-direction:column;gap:4px;margin:0;display:flex}.chart-medication-list.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#ffffffa3;letter-spacing:1px;font-size:8px}.chart-medication-list.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:#ffffff40;font-size:7px}.chart-record.__jsx-style-dynamic-selector{border-color:${e}68;width:86%;min-height:495px;box-shadow:0 35px 110px #00000094, 0 0 42px ${e}1f, inset 0 0 34px #ffffff09;border-radius:22px;padding:22px;animation:8s ease-in-out infinite chartRecordFloat;top:50%;left:50%;transform:translate(-50%,-50%)}.chart-record-shine.__jsx-style-dynamic-selector{opacity:.18;background:linear-gradient(90deg,#0000,#ffffff29,#0000);width:40%;height:160%;animation:10s ease-in-out infinite chartRecordShine;position:absolute;top:-30%;left:-35%;transform:rotate(18deg)}.chart-record-scan.__jsx-style-dynamic-selector{z-index:8;opacity:0;background:linear-gradient(to bottom, transparent, ${e}19, ${e}55, transparent);border-bottom:1px solid ${e}55;filter:blur(.2px);width:100%;height:16%;animation:9s ease-in-out infinite chartRecordScan;position:absolute;top:-18%;left:0}.chart-record-header.__jsx-style-dynamic-selector{z-index:2;border-bottom:1px solid #f8717126;justify-content:space-between;align-items:flex-start;padding-bottom:17px;display:flex;position:relative}.chart-eyebrow.__jsx-style-dynamic-selector{color:#ffffff61;letter-spacing:1.7px;font-size:7px;font-weight:800;display:block}.chart-record-header.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:#fff;letter-spacing:2.4px;margin:7px 0 0;font-size:17px;font-weight:900}.chart-sync-status.__jsx-style-dynamic-selector{color:#fca5a5;letter-spacing:1.2px;align-items:center;gap:8px;padding-top:5px;font-size:8px;font-weight:800;display:flex}.chart-status-dot.__jsx-style-dynamic-selector{background:${e};width:7px;height:7px;box-shadow:0 0 13px ${e};border-radius:50%;flex-shrink:0;animation:2s ease-in-out infinite chartStatusPulse}.chart-status-words.__jsx-style-dynamic-selector{width:94px;height:12px;position:relative;overflow:hidden}.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{opacity:0;text-align:right;animation:12s linear infinite chartStatusCycle;position:absolute;inset:0}.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:nth-child(2){animation-delay:3s}.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:nth-child(3){animation-delay:6s}.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:nth-child(4){animation-delay:9s}.chart-patient-header.__jsx-style-dynamic-selector{z-index:2;align-items:center;gap:15px;padding:18px 0 15px;display:flex;position:relative}.chart-patient-avatar.__jsx-style-dynamic-selector{border:1px solid ${e}55;background:radial-gradient(circle at 50% 38%, ${e}19, transparent 62%), #ffffff05;border-radius:14px;flex-shrink:0;width:56px;height:56px;position:relative;overflow:hidden}.chart-avatar-ring.__jsx-style-dynamic-selector{border:1px dashed ${e}44;border-radius:50%;animation:12s linear infinite chartAvatarRotate;position:absolute;inset:7px}.chart-avatar-head.__jsx-style-dynamic-selector{border:2px solid #ffffffb3;border-radius:50%;width:15px;height:15px;position:absolute;top:12px;left:50%;transform:translate(-50%)}.chart-avatar-body.__jsx-style-dynamic-selector{border:2px solid #ffffffb3;border-bottom:0;border-radius:17px 17px 0 0;width:31px;height:19px;position:absolute;bottom:7px;left:50%;transform:translate(-50%)}.chart-avatar-status.__jsx-style-dynamic-selector{background:${e};width:7px;height:7px;box-shadow:0 0 8px ${e};border:2px solid #07111f;border-radius:50%;position:absolute;bottom:6px;right:6px}.chart-patient-identity.__jsx-style-dynamic-selector{flex-direction:column;flex:1;gap:5px;min-width:0;display:flex}.chart-patient-identity.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{color:#fca5a5;letter-spacing:1.4px;font-size:7px;font-weight:800}.chart-patient-identity.__jsx-style-dynamic-selector>strong.__jsx-style-dynamic-selector{color:#ffffffc7;letter-spacing:1.1px;font-size:9px}.chart-identity-bars.__jsx-style-dynamic-selector{flex-direction:column;gap:4px;margin-top:3px;display:flex}.chart-identity-bars.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:#ffffff12;border-radius:999px;width:80%;height:3px;display:block}.chart-identity-bars.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:first-child{background:${e}35;width:52%}.chart-identity-bars.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:last-child{width:67%}.chart-security-badge.__jsx-style-dynamic-selector{border:1px solid ${e}2d;background:${e}0c;border-radius:12px;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;gap:3px;width:48px;height:48px;display:flex}.chart-security-badge.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{fill:none;width:20px;height:20px;stroke:${e};stroke-width:1.6px}.chart-security-badge.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff6b;letter-spacing:.8px;font-size:5px;font-weight:800}.chart-patient-grid.__jsx-style-dynamic-selector{z-index:2;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;display:grid;position:relative}.chart-patient-detail.__jsx-style-dynamic-selector{background:#ffffff05;border:1px solid #ffffff0d;border-radius:8px;justify-content:space-between;align-items:center;padding:9px 11px;display:flex}.chart-patient-detail.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff4d;letter-spacing:1px;font-size:6px;font-weight:800}.chart-patient-detail.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#ffffffc2;letter-spacing:.5px;font-family:Courier New,monospace;font-size:7px}.chart-clinical-grid.__jsx-style-dynamic-selector{z-index:2;grid-template-columns:1.35fr .65fr;gap:9px;margin-top:10px;display:grid;position:relative}.chart-clinical-panel.__jsx-style-dynamic-selector{background:#02061761;border:1px solid #ffffff0d;border-radius:10px;padding:11px}.chart-panel-header.__jsx-style-dynamic-selector{color:#ffffff61;letter-spacing:1.2px;justify-content:space-between;align-items:center;font-size:6px;font-weight:800;display:flex}.chart-panel-header.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:#f87171;letter-spacing:1px;font-size:5px}.chart-vitals.__jsx-style-dynamic-selector{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-top:10px;display:grid}.chart-vitals.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{background:linear-gradient(145deg,#ef44440d,#ffffff03);border:1px solid #f871711c;border-radius:8px;padding:8px}.chart-vitals.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector,.chart-lab-results.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff47;letter-spacing:.8px;font-size:5px;font-weight:800;display:block}.chart-vitals.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#fff;margin-top:5px;font-size:16px;line-height:1;display:inline-block}.chart-vitals.__jsx-style-dynamic-selector small.__jsx-style-dynamic-selector{color:#fca5a5;margin-left:3px;font-size:5px;font-weight:800}.chart-lab-results.__jsx-style-dynamic-selector{flex-direction:column;gap:5px;margin-top:9px;display:flex}.chart-lab-results.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{background:#ffffff06;border-radius:6px;justify-content:space-between;align-items:center;padding:5px 7px;display:flex}.chart-lab-results.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#ffffffc7;font-family:Courier New,monospace;font-size:8px}.chart-activity.__jsx-style-dynamic-selector{z-index:2;background:#02061773;border:1px solid #ffffff0d;border-radius:10px;margin-top:9px;padding:10px 11px 2px;position:relative;overflow:hidden}.chart-activity-line.__jsx-style-dynamic-selector{width:100%;height:55px;overflow:visible}.chart-activity-baseline.__jsx-style-dynamic-selector,.chart-activity-glow.__jsx-style-dynamic-selector,.chart-activity-path.__jsx-style-dynamic-selector{fill:none;stroke-linecap:round;stroke-linejoin:round}.chart-activity-baseline.__jsx-style-dynamic-selector{stroke:#f8717114;stroke-width:1px}.chart-activity-glow.__jsx-style-dynamic-selector{stroke:${e}48;stroke-width:8px;filter:blur(5px)}.chart-activity-path.__jsx-style-dynamic-selector{stroke:${e};stroke-width:2px;stroke-dasharray:170 530;filter:drop-shadow(0 0 5px ${e});animation:4.2s linear infinite chartLineTravel}.chart-record-footer.__jsx-style-dynamic-selector{z-index:2;color:#ffffff38;letter-spacing:.8px;justify-content:space-between;align-items:center;padding-top:8px;font-family:Courier New,monospace;font-size:5px;display:flex;position:relative}.chart-floating-card.__jsx-style-dynamic-selector{z-index:6;border:1px solid ${e}33;min-width:130px;box-shadow:0 15px 35px #00000059, 0 0 17px ${e}16;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background:#050b19d1;border-radius:12px;align-items:center;gap:9px;padding:10px 12px;display:flex;position:absolute}.chart-floating-card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child{flex-direction:column;gap:3px;display:flex}.chart-floating-card.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:#ffffff57;letter-spacing:1px;font-size:6px;font-weight:800}.chart-floating-card.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{color:#fff;letter-spacing:1px;font-size:7px}.chart-floating-lab.__jsx-style-dynamic-selector{animation:9s ease-in-out infinite chartFloatingLab;top:10%;left:-3%}.chart-floating-cloud.__jsx-style-dynamic-selector{animation:11s ease-in-out infinite chartFloatingCloud;bottom:8%;right:-2%}.chart-floating-icon.__jsx-style-dynamic-selector{border:1px solid ${e}33;background:${e}0c;border-radius:8px;width:26px;height:26px;position:relative}.chart-flask-icon.__jsx-style-dynamic-selector:before{content:"";border:1.5px solid ${e};border-top:0;border-radius:0 0 5px 5px;width:7px;height:9px;position:absolute;top:5px;left:9px;transform:skew(-7deg)}.chart-flask-icon.__jsx-style-dynamic-selector:after{content:"";border-left:1.5px solid ${e};border-right:1.5px solid ${e};width:5px;height:5px;position:absolute;top:3px;left:10px}.chart-cloud-icon.__jsx-style-dynamic-selector{border:1px solid ${e}33;background:${e}0c;border-radius:8px;width:26px;height:26px;position:relative}.chart-cloud-icon.__jsx-style-dynamic-selector:before{content:"";border:1.5px solid ${e};border-radius:8px;width:16px;height:8px;position:absolute;top:11px;left:5px}.chart-cloud-icon.__jsx-style-dynamic-selector:after{content:"";border:1.5px solid ${e};background:#050b19e6;border-bottom:0;border-radius:50% 50% 0 0;width:9px;height:9px;position:absolute;top:7px;left:9px}.chart-floating-lock.__jsx-style-dynamic-selector{z-index:7;border:1px solid ${e}35;width:42px;height:42px;box-shadow:0 0 22px ${e}1b;background:#050b19d1;border-radius:50%;place-items:center;animation:10s ease-in-out infinite chartFloatingLock;display:grid;position:absolute;top:8%;right:6%}.chart-floating-lock.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{fill:none;width:20px;height:20px;stroke:${e};stroke-width:1.5px}.chart-global-pulse.__jsx-style-dynamic-selector{opacity:0;background:radial-gradient(circle at 75% 42%, ${e}15, transparent 48%);animation:8s ease-in-out infinite chartGlobalPulse;position:absolute;inset:0}.chart-vignette.__jsx-style-dynamic-selector{background:radial-gradient(circle at 72% 43%,#0000 20%,#0206171f 55%,#020617d1 100%),linear-gradient(#0206172e,#0000 24% 74%,#0206179e);position:absolute;inset:0}@keyframes chartBaseMove{0%{background-position:0%;transform:translate(-2%,-2%)scale(1)}to{background-position:100%;transform:translate(3%,2%)scale(1.05)}}@keyframes chartGridMove{0%{transform:translate(0)}to{transform:translate(58px,58px)}}@keyframes chartNetworkTravel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-160px}}@keyframes chartNodeFloat{0%,to{transform:translateY(0)}50%{transform:translateY(-12px)}}@keyframes chartNodePulse{0%,to{opacity:.35;transform:scale(.7)}50%{opacity:1;transform:scale(1)}}@keyframes chartLabelFloat{0%,to{opacity:.18;transform:translateY(0)}50%{opacity:.4;transform:translateY(-16px)}}@keyframes chartHeroAura{0%,to{opacity:.55;transform:scale(.95)}50%{opacity:1;transform:scale(1.07)}}@keyframes chartRecordFloat{0%,to{transform:translate(-50%,-50%)translateY(0)rotateX(0)rotateY(0)}50%{transform:translate(-50%,-50%)translateY(-9px)rotateX(1deg)rotateY(-1.2deg)}}@keyframes chartDocumentBack{0%,to{transform:translateZ(-90px)rotate(7deg)}50%{transform:translate3d(12px,-10px,-90px)rotate(9deg)}}@keyframes chartDocumentMiddle{0%,to{transform:translateZ(-50px)rotate(-6deg)}50%{transform:translate3d(-13px,12px,-50px)rotate(-8deg)}}@keyframes chartImagingRotate{0%{transform:translate(-50%,-50%)rotate(0)}to{transform:translate(-50%,-50%)rotate(360deg)}}@keyframes chartImagingRotateReverse{0%{transform:translate(-50%,-50%)rotate(360deg)}to{transform:translate(-50%,-50%)rotate(0)}}@keyframes chartImagingCore{0%,to{opacity:.4;transform:translate(-50%,-50%)scale(.92)}50%{opacity:.9;transform:translate(-50%,-50%)scale(1.08)}}@keyframes chartRecordShine{0%,72%{opacity:0;left:-45%}78%{opacity:.18}92%{opacity:0;left:125%}to{opacity:0;left:125%}}@keyframes chartRecordScan{0%,68%{opacity:0;top:-18%}73%{opacity:.55}94%{opacity:.1;top:105%}to{opacity:0;top:105%}}@keyframes chartStatusPulse{0%,to{opacity:.45;transform:scale(.82)}50%{opacity:1;transform:scale(1.16)}}@keyframes chartStatusCycle{0%{opacity:0;transform:translateY(6px)}5%,20%{opacity:1;transform:translateY(0)}25%,to{opacity:0;transform:translateY(-6px)}}@keyframes chartAvatarRotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes chartLineTravel{0%{stroke-dashoffset:700px}to{stroke-dashoffset:0}}@keyframes chartFloatingLab{0%,to{transform:translateY(0)rotate(-1deg)}50%{transform:translateY(-13px)rotate(1deg)}}@keyframes chartFloatingCloud{0%,to{transform:translateY(0)rotate(1deg)}50%{transform:translateY(12px)rotate(-1deg)}}@keyframes chartFloatingLock{0%,to{transform:translateY(0)rotate(0)}50%{transform:translateY(-11px)rotate(5deg)}}@keyframes chartGlowLeft{0%,to{transform:translate(0)scale(1)}50%{transform:translate(75px,30px)scale(1.12)}}@keyframes chartGlowRight{0%,to{transform:translate(0)scale(1)}50%{transform:translate(-85px,-42px)scale(1.13)}}@keyframes chartGlobalPulse{0%,72%,to{opacity:0;transform:scale(.94)}82%{opacity:.8;transform:scale(1)}92%{opacity:.08;transform:scale(1.08)}}@media (width<=1100px){.chart-hero.__jsx-style-dynamic-selector{width:52vw;right:2vw}.chart-record.__jsx-style-dynamic-selector{width:90%}}@media (width<=900px){.chart-hero.__jsx-style-dynamic-selector{width:min(620px,90vw);height:590px;top:17%;right:50%;transform:translate(50%)}.chart-background-label.__jsx-style-dynamic-selector,.chart-network-node.__jsx-style-dynamic-selector{opacity:.12}}@media (width<=620px){.chart-hero.__jsx-style-dynamic-selector{width:96vw;height:530px;min-height:500px;top:18%}.chart-record.__jsx-style-dynamic-selector{width:91%;min-height:450px;padding:16px}.chart-record-header.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:14px}.chart-sync-status.__jsx-style-dynamic-selector{font-size:6px}.chart-status-words.__jsx-style-dynamic-selector{width:75px}.chart-document.__jsx-style-dynamic-selector{width:73%}.chart-patient-header.__jsx-style-dynamic-selector{gap:10px;padding:13px 0}.chart-patient-avatar.__jsx-style-dynamic-selector{width:48px;height:48px}.chart-security-badge.__jsx-style-dynamic-selector{width:42px;height:42px}.chart-patient-grid.__jsx-style-dynamic-selector{gap:5px}.chart-patient-detail.__jsx-style-dynamic-selector{padding:7px}.chart-clinical-grid.__jsx-style-dynamic-selector{grid-template-columns:1fr}.chart-lab-panel.__jsx-style-dynamic-selector{display:none}.chart-floating-card.__jsx-style-dynamic-selector{transform:scale(.8)}.chart-floating-lab.__jsx-style-dynamic-selector{left:-1%}.chart-floating-cloud.__jsx-style-dynamic-selector{right:-1%}}@media (prefers-reduced-motion:reduce){.chart-base.__jsx-style-dynamic-selector,.chart-grid.__jsx-style-dynamic-selector,.chart-network-lines.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector,.chart-network-node.__jsx-style-dynamic-selector,.chart-network-node.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector,.chart-background-label.__jsx-style-dynamic-selector,.chart-hero-aura.__jsx-style-dynamic-selector,.chart-document.__jsx-style-dynamic-selector,.chart-record.__jsx-style-dynamic-selector,.chart-imaging-ring.__jsx-style-dynamic-selector,.chart-imaging-core.__jsx-style-dynamic-selector,.chart-record-shine.__jsx-style-dynamic-selector,.chart-record-scan.__jsx-style-dynamic-selector,.chart-status-dot.__jsx-style-dynamic-selector,.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector,.chart-avatar-ring.__jsx-style-dynamic-selector,.chart-activity-path.__jsx-style-dynamic-selector,.chart-floating-card.__jsx-style-dynamic-selector,.chart-floating-lock.__jsx-style-dynamic-selector,.chart-glow.__jsx-style-dynamic-selector,.chart-global-pulse.__jsx-style-dynamic-selector{animation:none}.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{display:none}.chart-status-words.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:last-child{opacity:1;display:block;transform:none}}`})]})}function tM({accent:e="#22d3ee"}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20",style:{background:`radial-gradient(circle, ${e}55 0%, transparent 75%)`}}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:48px_48px]"}),(0,t.jsx)("div",{className:"absolute left-0 top-[28%] h-px w-full bg-cyan-400/10"}),(0,t.jsx)("div",{className:"absolute left-0 top-[50%] h-px w-full bg-cyan-400/10"}),(0,t.jsx)("div",{className:"absolute left-0 top-[72%] h-px w-full bg-cyan-400/10"}),(0,t.jsx)("div",{className:"absolute left-[25%] top-0 h-full w-px bg-cyan-400/10"}),(0,t.jsx)("div",{className:"absolute left-1/2 top-0 h-full w-px bg-cyan-400/10"}),(0,t.jsx)("div",{className:"absolute left-[75%] top-0 h-full w-px bg-cyan-400/10"}),[["20%","22%"],["48%","18%"],["78%","24%"],["26%","52%"],["55%","55%"],["82%","58%"],["18%","82%"],["52%","80%"],["78%","82%"]].map(([a,i],s)=>(0,t.jsx)("div",{className:"absolute h-3 w-3 rounded-full animate-pulse",style:{left:a,top:i,background:e,boxShadow:`0 0 18px ${e}`,animationDelay:`${.35*s}s`}},s)),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full opacity-30",viewBox:"0 0 1000 700",preserveAspectRatio:"none",children:[(0,t.jsx)("path",{d:"M180 160 L360 160 L360 320 L620 320 L620 520 L820 520",stroke:e,strokeWidth:"2",fill:"none",strokeDasharray:"8 10",children:(0,t.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-180",dur:"12s",repeatCount:"indefinite"})}),(0,t.jsx)("path",{d:"M200 520 L200 250 L520 250 L520 120 L760 120",stroke:e,strokeWidth:"1.5",fill:"none",strokeDasharray:"6 8",opacity:".55",children:(0,t.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-150",dur:"18s",repeatCount:"indefinite"})})]}),(0,t.jsx)("div",{className:"absolute left-[14%] top-[18%] h-24 w-16 rounded-xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm animate-[float_9s_ease-in-out_infinite]"}),(0,t.jsx)("div",{className:"absolute right-[18%] top-[30%] h-20 w-14 rounded-xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm animate-[float_11s_ease-in-out_infinite]"}),(0,t.jsx)("div",{className:"absolute left-[72%] bottom-[16%] h-24 w-16 rounded-xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm animate-[float_13s_ease-in-out_infinite]"}),[15,32,48,67,82].map(a=>(0,t.jsx)("div",{className:"absolute top-[50%] h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300",style:{left:`${a}%`,boxShadow:`0 0 10px ${e}`}},a)),(0,t.jsx)("div",{className:"absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-cyan-400/5 to-transparent"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-cyan-950/20 to-transparent"}),(0,t.jsx)("svg",{className:"absolute bottom-10 left-0 w-full opacity-15",viewBox:"0 0 1200 120",children:(0,t.jsx)("path",{d:"M0 60 H180 L220 60 L250 20 L285 95 L330 45 L370 60 H1200",stroke:e,strokeWidth:"2",fill:"none",children:(0,t.jsx)("animate",{attributeName:"stroke-dashoffset",from:"600",to:"0",dur:"7s",repeatCount:"indefinite"})})})]})}function tB({accent:e="#38bdf8"}){return(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20",style:{background:`radial-gradient(circle, ${e}55 0%, transparent 75%)`}}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:44px_44px]"}),(0,t.jsx)("svg",{className:"absolute inset-0 h-full w-full opacity-10",viewBox:"0 0 1200 800",children:Array.from({length:18}).map((a,i)=>(0,t.jsx)("g",{transform:`translate(${i%6*220},${230*Math.floor(i/6)})`,children:(0,t.jsx)("polygon",{points:"60,0 120,35 120,105 60,140 0,105 0,35",stroke:e,strokeWidth:"1",fill:"none"})},i))}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full opacity-30",viewBox:"0 0 1200 800",children:[(0,t.jsx)("path",{d:"M120 150 L400 150 L600 320 L900 320 L1080 150",stroke:e,strokeWidth:"2",fill:"none",strokeDasharray:"8 10",children:(0,t.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-200",dur:"10s",repeatCount:"indefinite"})}),(0,t.jsx)("path",{d:"M160 620 L360 500 L620 520 L820 360 L1050 560",stroke:"#8b5cf6",strokeWidth:"1.5",fill:"none",strokeDasharray:"6 8",opacity:".5",children:(0,t.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-180",dur:"15s",repeatCount:"indefinite"})}),(0,t.jsx)("path",{d:"M250 300 L520 160 L840 260 L1040 120",stroke:"#ffffff",strokeWidth:"1",fill:"none",strokeDasharray:"4 6",opacity:".25",children:(0,t.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-120",dur:"18s",repeatCount:"indefinite"})})]}),[["12%","18%"],["32%","22%"],["52%","40%"],["72%","28%"],["88%","18%"],["20%","72%"],["42%","60%"],["66%","70%"],["86%","62%"]].map(([a,i],s)=>(0,t.jsx)("div",{className:"absolute h-3 w-3 rounded-full animate-pulse",style:{left:a,top:i,background:e,boxShadow:`0 0 16px ${e}`,animationDelay:`${.3*s}s`}},s)),(0,t.jsx)("div",{className:"absolute left-[14%] top-[22%] text-cyan-300/15 text-6xl animate-[float_12s_ease-in-out_infinite]",children:"☁"}),(0,t.jsx)("div",{className:"absolute right-[18%] top-[16%] text-cyan-300/10 text-5xl animate-[float_15s_ease-in-out_infinite]",children:"☁"}),(0,t.jsx)("div",{className:"absolute left-[76%] bottom-[18%] text-cyan-300/10 text-6xl animate-[float_18s_ease-in-out_infinite]",children:"☁"}),(0,t.jsx)("div",{className:"absolute left-[28%] top-[58%] text-cyan-400/15 text-3xl animate-pulse",children:"🔒"}),(0,t.jsx)("div",{className:"absolute right-[24%] bottom-[28%] text-cyan-400/15 text-3xl animate-pulse",children:"🛡"}),(0,t.jsxs)("div",{className:"absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2",children:[(0,t.jsx)("div",{className:"absolute inset-0 rounded-full animate-ping opacity-20",style:{background:e}}),(0,t.jsx)("div",{className:"absolute inset-2 rounded-full",style:{background:e,boxShadow:`0 0 35px ${e}`}})]}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15 animate-[spin_30s_linear_infinite]"}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 animate-[spin_45s_linear_reverse_infinite]"}),Array.from({length:45}).map((e,a)=>(0,t.jsx)("div",{className:"absolute h-1 w-1 rounded-full bg-cyan-300 opacity-60",style:{left:`${11*a%100}%`,top:`${17*a%100}%`,animationDelay:`${a%8*.4}s`,animationDuration:`${3+a%4}s`}},a)),(0,t.jsx)("div",{className:"absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-cyan-400/5 to-transparent"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-blue-950/20 to-transparent"})]})}function tD({accent:e="#dc2626",productId:a}){switch(a){case"scribe":return(0,t.jsx)(t$,{accent:e});case"triage":return(0,t.jsx)(tE,{accent:e});case"pulse":return(0,t.jsx)(tO,{accent:e});case"chart":return(0,t.jsx)(tz,{accent:e});case"rounds":return(0,t.jsx)(tM,{accent:e});case"medsync":return(0,t.jsx)(tB,{accent:e});default:return(0,t.jsx)(tk,{})}}e.s(["default",0,function({accent:e,variant:i,product:s}){return"terra"===i?(0,t.jsx)(et,{accent:e,product:s}):"haven"===i?(0,t.jsx)(ed,{accent:e,product:s}):"orbit"===i?(0,t.jsx)(ek,{accent:e,product:s}):"atlas"===i?(0,t.jsx)(tr,{accent:e,product:s}):"enterprise"===i?(0,t.jsx)(tw,{accent:e,productId:s}):"medical"===i?(0,t.jsx)(tD,{accent:e,productId:s}):"aura"===i?(0,t.jsx)(j,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1},children:Array.from({length:40}).map((i,s)=>{let r=83*s%100;return(0,t.jsx)(a.motion.div,{initial:{y:900+s%8*70,x:0,opacity:0,rotate:-20},animate:{y:-200,x:[0,80,-35,120],opacity:[0,.8,.55,0],rotate:[-20,25,-10,35]},transition:{duration:9+s%7,repeat:1/0,delay:.16*s,ease:"linear"},style:{position:"absolute",left:`${r}%`,bottom:-100,width:4+s%4*2,height:20+s%6*8,borderRadius:999,background:`linear-gradient(
                  to bottom,
                  transparent,
                  ${e},
                  transparent
                )`,filter:"blur(1.5px)",boxShadow:`0 0 14px ${e}`}},s)})}),(0,t.jsx)(a.motion.div,{animate:{scale:[1,1.08,1],opacity:[.18,.28,.18]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",top:-250,right:-250,width:700,height:700,borderRadius:"50%",background:e,filter:"blur(180px)",opacity:.2,pointerEvents:"none",zIndex:0}})]})}],70717)},90960,e=>{"use strict";var t=e.i(66663),a=e.i(23215);e.s(["default",0,function({children:e,delay:i=0,y:s=60}){return(0,t.jsx)(a.motion.section,{initial:{opacity:0,y:s,filter:"blur(10px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.2},transition:{duration:.8,delay:i,ease:[.22,1,.36,1]},children:e})}])}]);