(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('*{margin:0;padding:0;box-sizing:border-box;min-width:0}body{min-height:100vh}h1,h2,h3,h4,p{text-wrap:balance}body{background-color:#faf9fd}@font-face{font-family:Montserrat;src:url(/assets/Montserrat-Medium-DZ4qtIu-.ttf) format("truetype");font-weight:400;font-style:normal}.cardWp{width:209px;background-color:#fff;padding:8px;border-radius:8px;font-family:Montserrat;font-style:normal;font-size:.75rem;line-height:1.125rem;display:flex;flex-direction:column;justify-content:space-between}.cardWp .title{display:flex;align-items:center;justify-content:space-between;font-size:1rem;line-height:1.5rem}.cardWp .title svg{width:24px;height:24px;color:#1760a5}.cardWp .price{text-align:end;font-size:1rem;line-height:1.5rem}.habitsWp[data-v-71c84f09]{width:100%;margin:0;padding:0;font-weight:400;background-color:transparent;display:flex;flex-wrap:wrap;gap:16px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var n=Object.defineProperty;var o=(t,a,e)=>a in t?n(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var s=(t,a,e)=>(o(t,typeof a!="symbol"?a+"":a,e),e);import{c as p,A as c,i as l}from"./i18n-Cpt28fp2.js";class i extends HTMLElement{constructor(){super();s(this,"app",null)}connectedCallback(){try{this.app=p(c),this.app.use(l),this.app.mount(this);let e=window.localStorage.getItem("language")||"es";l.global.locale.value=e}catch(e){console.log({error:e})}}disconnectedCallback(){this.app&&this.app.unmount()}}customElements.define("habits-mfe",i);
