!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.setAttribute("disabled",""),r.removeAttribute("disabled");var a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);r.addEventListener("click",(function t(){clearInterval(a),e.removeAttribute("disabled"),r.setAttribute("disabled",""),r.removeEventListener("click",t)}))})),r.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.5711646c.js.map
