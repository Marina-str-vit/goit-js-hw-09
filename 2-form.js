import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},o={form:document.querySelector(".login-form"),label:document.querySelectorAll("label"),input:document.querySelectorAll("input"),textarea:document.querySelectorAll("textarea"),button:document.querySelector("button")};o.label.forEach(function(e){e.classList.add("label-form")});o.input.forEach(function(e){e.classList.add("input-form")});o.textarea.forEach(function(e){e.classList.add("message-form")});o.button.classList.add("button-form");document.querySelector(".feedback-form").addEventListener("input",e=>{const t=e.target.closest("input, textarea");if(t){const{name:l,value:c}=t;a[l]=c.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))}});const r=localStorage.getItem("feedback-form-state");if(r&&r!=="null"){const e=JSON.parse(r);Object.keys(e).forEach(t=>{a[t]=e[t],document.querySelector(`[name="${t}"]`).value=e[t]})}document.querySelector(".feedback-form").addEventListener("submit",e=>{e.preventDefault(),a.email===""||a.message===""?alert("Fill please all fields"):(console.log(a),localStorage.removeItem("feedback-form-state"),document.querySelector(".feedback-form").reset(),Object.keys(a).forEach(t=>{a[t]=""}))});
//# sourceMappingURL=2-form.js.map
