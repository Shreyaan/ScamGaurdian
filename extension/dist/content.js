(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,a=Object.create(o.prototype),c=new I(r||[]);return i(a,"_invoke",{value:L(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function d(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(P([])));x&&x!==r&&o.call(x,c)&&(y=x);var w=m.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function E(n,e){function r(i,a,c,s){var u=p(n[i],n,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=p(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function S(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,S(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=p(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:P(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function r(){var t;return t=n().mark((function t(e){var r,o,i,a,c,s,u,l;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=new URL(e).hostname,o=r.split(".")[1],i=JSON.parse(localStorage.getItem("vendorInfo")),a=localStorage.getItem("vendorInfoTime"),!i||!a){t.next=13;break}if(c=(new Date).getTime(),console.log(c-a),!(c-a<864e5)){t.next=11;break}return t.abrupt("return",i);case 11:t.next=15;break;case 13:localStorage.removeItem("vendorInfo"),localStorage.removeItem("vendorInfoTime");case 15:return s="https://extension-orpin.vercel.app/api/vendor?vendorName=".concat(o),t.next=18,fetch(s);case 18:return u=t.sent,t.next=21,u.json();case 21:return l=t.sent,localStorage.setItem("vendorInfo",JSON.stringify(l)),localStorage.setItem("vendorInfoTime",(new Date).getTime()),t.abrupt("return",l);case 27:throw t.prev=27,t.t0=t.catch(0),console.error("Error:",t.t0),t.t0;case 31:case"end":return t.stop()}}),t,null,[[0,27]])})),r=function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,s,"next",t)}function s(t){e(a,o,i,c,s,"throw",t)}c(void 0)}))},r.apply(this,arguments)}var o='\n#myExtensionButton {\n  position:fixed;\n  right:10px;\n  bottom:200px;\n  z-index:999;\n  padding:1rem;\n  font-size:1.5rem;\n  background-color:#0F69D2;\n  color:#fff;\n  border:none;\n  font-weight:700;\n  transition: transform ease-in-out .3s;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  border-radius:10px;\n  cursor:pointer;\n}\n#myExtensionButton:hover{\n  transform:scale(1.2);\n}\n#myExtensionPopup{\n  width:25vw;\n  height:auto;\n  max-height: 80vh;\n  right:4rem;\n  top:1rem;\n  border:1px solid #000;\n  border-radius : 5px;\n  position:fixed;\n  z-index:10000;\n  background-color:#fff;\n  display:none;\n  overflow-y: scroll;\n}\n#myExtensionPopup .header{\n  background:#0F69D2;\n   width:25vw;\n  color:white;\n  text-align:center;\n  font-weight:700;\n  font-size:1em;\n  padding:8px;\n  cursor:pointer;\n}\n#myExtensionPopup section{\n  position:relative;\n  overflow:hidden;\n  color:black;\n  background-color:white;\n}\n\n#myExtensionPopup .listItem{\n  position:relative;\n  padding:0.5rem;\n  margin-right:0.5rem;\n\n}\n#myExtensionPopup p{\n  font-size:1rem;\n  font-weight:700;\n  margin:10px;\n}\n\n#myExtensionPopup .riskList{\n  font-size:1rem;\n  list-style-type:" ☠️ ";\n  padding-left:0.5rem;\n\n}\n\n#myExtensionPopup .tipsList{\n  font-size:1rem;\n  list-style-type:" 💡 ";\n  padding-left:0.5rem;\n}\n\n\n#myExtensionPopup .tipsText{\n  font-size:1.5rem;\n  color:green;\n  font-weight:600;\n  text-decoration:underline;\n}\n\n#myExtensionPopup .riskText{\n  font-size:1.5rem;\n  color:red;\n  font-weight:600;\n  text-decoration:underline;\n}\n\n#myExtensionPopup .border{\n  border:0.5px solid lightgray;\n  width:100%;\n}\n\n';function i(){var t=!1,n=!1,e=0,r=!1;function o(t){var e=t.clientY;u.style.bottom="".concat(window.innerHeight-e,"px"),n=!0}!0===function(){var t=localStorage.getItem("buttonMovedState-extension");if(t){return t=JSON.parse(t),(new Date).getTime()-t.time>432e5?(localStorage.removeItem("buttonMovedState-extension"),!1):t.buttonMovedState}return!1}()?(u.style.right="-40px",r=!0):(u.style.right="10px",r=!1),u.addEventListener("click",(function(t){var n=(new Date).getTime();n-e<=300&&(r?(u.style.right="10px",r=!1):(u.style.right="-40px",r=!0),u.style.transition="right 0.5s",setTimeout((function(){u.style.transition=""}),500)),e=n,t.preventDefault(),function(t){var n=(new Date).getTime(),e={buttonMovedState:t,time:n};localStorage.setItem("buttonMovedState-extension",JSON.stringify(e))}(r)})),u.addEventListener("mousedown",(function(){t=!0,n=!1,setTimeout((function(){t&&document.addEventListener("mousemove",o)}),500)})),document.addEventListener("mouseup",(function(){t&&(t=!1,document.removeEventListener("mousemove",o),n||("none"===l.style.display?l.style.display="block":l.style.display="none"))}))}var a,c,s,u=((a=document.createElement("button")).innerHTML="SG",a.id="myExtensionButton",a),l=function(){var t=document.createElement("div");return t.id="myExtensionPopup",t.style.display="none",t}();c=window.location.href,s={},function(t){return r.apply(this,arguments)}(c).then((function(t){var n;s=t,t&&(t.risks.length>0||t.tips.length>0)&&(function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];n.forEach((function(t){return document.body.appendChild(t)}))}(u,l),(n=document.createElement("style")).textContent=o,document.head.appendChild(n),i(),l.innerHTML=function(t){return"\n  <div>\n  <div class='header'>\n    <h1>Scam Guardian</h1>\n  </div>\n\n  <section>\n\n  <p class=\"riskText\">Risks</p>\n\n  <ul class='listItem'>\n   <li class='list riskList'>".concat(t.risks[0],"</li>\n   <li class='list riskList'>").concat(t.risks[1],"</li>\n   <li class='list riskList'>").concat(t.risks[2],"</li>\n  </ul>\n\n  <div class='border'></div>\n\n  <p class=\"tipsText\">Tips</p>\n\n  <ul class=\"listItem\">\n    <li class='list tipsList'>").concat(t.tips[0],"</li>\n    <li class='list tipsList'>").concat(t.tips[1],"</li>\n    <li class='list tipsList'>").concat(t.tips[2],"</li>\n  </ul>\n\n  </section>\n  </div>\n")}(s))})).catch((function(t){console.error(t)}))})();