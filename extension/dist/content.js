(()=>{"use strict";var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)};t.d({},{L:()=>a,g:()=>c});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function e(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function p(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,a=Object.create(o.prototype),c=new j(r||[]);return i(a,"_invoke",{value:L(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var h={};function d(){}function y(){}function v(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(T([])));x&&x!==r&&o.call(x,c)&&(m=x);var w=v.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,e){function r(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==n(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=f(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function k(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,s,(function(){return this})),t.AsyncIterator=E,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new E(p(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:T(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function r(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function o(t){return i.apply(this,arguments)}function i(){var t;return t=e().mark((function t(n){var r,o,i,a,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=new URL(n).hostname,o=r.split(".")[1],i="https://extension-orpin.vercel.app/api/vendor?vendorName=".concat(o),t.next=6,fetch(i);case 6:return a=t.sent,t.next=9,a.json();case 9:return c=t.sent,t.abrupt("return",c);case 13:throw t.prev=13,t.t0=t.catch(0),console.error("Error:",t.t0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[0,13]])})),i=function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))},i.apply(this,arguments)}var a=document.createElement("button");a.innerHTML="SG",a.id="myExtensionButton";var c=document.createElement("div");c.id="myExtensionPopup";var s=window.location.href;o(s);var u={};o(s).then((function(t){console.log(t),u=t,t&&(t.risks.length>0||t.tips.length>0)&&(document.body.appendChild(a),c.innerHTML=function(t){return"\n  <div>\n  <div class='header'>\n    <h1>Scam Guardian</h1>\n  </div>\n\n  <section>\n\n  <p class=\"riskText\">Risks</p>\n\n  <ul class='listItem'>\n   <li class='list riskList'>".concat(t.risks[0],"</li>\n   <li class='list riskList'>").concat(t.risks[1],"</li>\n   <li class='list riskList'>").concat(t.risks[2],"</li>\n  </ul>\n\n  <div class='border'></div>\n\n  <p class=\"tipsText\">Tips</p>\n\n  <ul class=\"listItem\">\n    <li class='list tipsList'>").concat(t.tips[0],"</li>\n    <li class='list tipsList'>").concat(t.tips[1],"</li>\n    <li class='list tipsList'>").concat(t.tips[2],"</li>\n  </ul>\n\n  </section>\n  </div>\n")}(u),document.body.appendChild(c))})).catch((function(t){console.error(t)})),function(t){var n=document.createElement("style");n.textContent=t,document.head.appendChild(n)}('\n#myExtensionButton {\n  position:fixed;\n  right:10px;\n  bottom:200px;\n  z-index:999;\n  padding:1rem;\n  font-size:1.5rem;\n  background-color:#0F69D2;\n  color:#fff;\n  border:none;\n  font-weight:700;\n  transition: transform ease-in-out .3s;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius:10px;\n  cursor:pointer;\n}\n#myExtensionButton:hover{\n  transform:scale(1.2);\n}\n#myExtensionPopup{\n  width:25vw;\n  height:auto;\n  max-height: 80vh;\n  right:4rem;\n  top:1rem;\n  border:1px solid #000;\n  border-radius : 5px;\n  position:fixed;\n  z-index:10000;\n  background-color:#fff;\n  display:none;\n  overflow-y: scroll;\n}\n#myExtensionPopup .header{\n  background:#0F69D2;\n   width:25vw;\n  color:white;\n  text-align:center;\n  font-weight:700;\n  font-size:1em;\n  padding:8px;\n  cursor:pointer;\n}\n#myExtensionPopup section{\n  position:relative;\n  overflow:hidden;\n  color:black;\n  background-color:white;\n}\n\n#myExtensionPopup .listItem{\n  position:relative;\n  padding:0.5rem;\n  margin-right:0.5rem;\n\n}\n#myExtensionPopup p{\n  font-size:1rem;\n  font-weight:700;\n  margin:10px;\n}\n\n#myExtensionPopup .riskList{\n  font-size:1rem;\n  list-style-type:" ☠️ ";\n  padding-left:0.5rem;\n\n}\n\n#myExtensionPopup .tipsList{\n  font-size:1rem;\n  list-style-type:" 💡 ";\n  padding-left:0.5rem;\n}\n\n\n#myExtensionPopup .tipsText{\n  font-size:1.5rem;\n  color:green;\n  font-weight:600;\n  text-decoration:underline;\n}\n\n#myExtensionPopup .riskText{\n  font-size:1.5rem;\n  color:red;\n  font-weight:600;\n  text-decoration:underline;\n}\n\n#myExtensionPopup .border{\n  border:0.5px solid lightgray;\n  width:100%;\n}\n\n'),c.style.display="none",function(){var t=!1,n=!1,e=0,r=!1;function o(t){var e=t.clientY;a.style.bottom="".concat(window.innerHeight-e,"px"),n=!0}a.addEventListener("click",(function(t){var n=(new Date).getTime();n-e<=300&&(r?(a.style.right="10px",r=!1):(a.style.right="-50px",r=!0),a.style.transition="right 0.5s",setTimeout((function(){a.style.transition=""}),500)),e=n,t.preventDefault()})),a.addEventListener("mousedown",(function(){t=!0,n=!1,setTimeout((function(){t&&document.addEventListener("mousemove",o)}),500)})),document.addEventListener("mouseup",(function(){t&&(t=!1,document.removeEventListener("mousemove",o),n||("none"===c.style.display?c.style.display="block":c.style.display="none"))}))}()})();