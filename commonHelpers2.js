import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form"),r="feedback-form-state";document.querySelector(".feedback-input-email");document.querySelector(".message");const n=t.elements.email,m=t.elements.message;t.addEventListener("input",d(c,500));t.addEventListener("submit",u);let e=JSON.parse(localStorage.getItem(r))||{};n.value=e.email||"";m.value=e.message||"";function c(a){return e={email:n.value,message:m.value},localStorage.setItem(r,JSON.stringify(e)),e}function u(a){a.preventDefault(),n.value.trim()!==""&&m.value.trim()!==""?(console.log(e),localStorage.removeItem(r),t.reset()):alert("Це ще не все!")}function d(a,o){let l,s;return function(...i){l&&Date.now()-l<=o&&clearTimeout(s),l=Date.now(),s=setTimeout(()=>a(...i),o)}}
//# sourceMappingURL=commonHelpers2.js.map