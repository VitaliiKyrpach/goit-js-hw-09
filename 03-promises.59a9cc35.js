var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");function i(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{amount:t,delay:n,step:r}}=e.currentTarget;let l=Number(n.value);for(let e=0;e<t.value;e++)i(e+1,l+Number(r.value)*e).then((e=>{o.Notify.success(e)})).catch((e=>{o.Notify.failure(e)}))}));
//# sourceMappingURL=03-promises.59a9cc35.js.map