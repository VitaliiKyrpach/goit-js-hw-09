const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.setAttribute("disabled",""),r.removeAttribute("disabled");const d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);r.addEventListener("click",(function t(){clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled",""),r.removeEventListener("click",t)}))})),r.setAttribute("disabled","");
//# sourceMappingURL=01-color-switcher.0dc2a263.js.map
