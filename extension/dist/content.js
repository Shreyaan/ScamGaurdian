(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof h?n:h,a=Object.create(o.prototype),c=new j(r||[]);return i(a,"_invoke",{value:L(t,e,c)}),a}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function h(){}function v(){}function y(){}var m={};u(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(I([])));b&&b!==r&&o.call(b,c)&&(m=b);var w=y.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function S(n,e){function r(i,a,c,l){var s=d(n[i],n,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=d(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}function E(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,E(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=d(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,s,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:I(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,n,e,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void e(t)}c.done?n(l):Promise.resolve(l).then(r,o)}function r(){var t;return t=n().mark((function t(e){var r,o,i,a,c,l,s,u;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=new URL(e).hostname,o=r.split(".")[1],i=JSON.parse(localStorage.getItem("vendorInfo")),a=localStorage.getItem("vendorInfoTime"),!i||!a){t.next=13;break}if(c=(new Date).getTime(),console.log(c-a),!(c-a<864e5)){t.next=11;break}return t.abrupt("return",i);case 11:t.next=15;break;case 13:localStorage.removeItem("vendorInfo"),localStorage.removeItem("vendorInfoTime");case 15:return l="https://extension-orpin.vercel.app/api/vendor?vendorName=".concat(o),t.next=18,fetch(l);case 18:return s=t.sent,t.next=21,s.json();case 21:return u=t.sent,localStorage.setItem("vendorInfo",JSON.stringify(u)),localStorage.setItem("vendorInfoTime",(new Date).getTime()),t.abrupt("return",u);case 27:throw t.prev=27,t.t0=t.catch(0),console.error("Error:",t.t0),t.t0;case 31:case"end":return t.stop()}}),t,null,[[0,27]])})),r=function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,l,"next",t)}function l(t){e(a,o,i,c,l,"throw",t)}c(void 0)}))},r.apply(this,arguments)}function o(){var t=!1,n=!1,e=0,r=!1;function o(t){var e=t.clientY;l.style.bottom="".concat(window.innerHeight-e,"px"),n=!0}!0===function(){var t=localStorage.getItem("buttonMovedState-extension");if(t){return t=JSON.parse(t),(new Date).getTime()-t.time>432e5?(localStorage.removeItem("buttonMovedState-extension"),!1):t.buttonMovedState}return!1}()?(l.style.right="-40px",r=!0):(l.style.right="10px",r=!1),l.addEventListener("click",(function(t){var n=(new Date).getTime();n-e<=300&&(r?(l.style.right="10px",r=!1):(l.style.right="-40px",r=!0),l.style.transition="right 0.5s",setTimeout((function(){l.style.transition=""}),500)),e=n,t.preventDefault(),function(t){var n=(new Date).getTime(),e={buttonMovedState:t,time:n};localStorage.setItem("buttonMovedState-extension",JSON.stringify(e))}(r)})),l.addEventListener("mousedown",(function(){t=!0,n=!1,setTimeout((function(){t&&document.addEventListener("mousemove",o)}),500)})),document.addEventListener("mouseup",(function(){t&&(t=!1,document.removeEventListener("mousemove",o),n||("none"===s.style.display?s.style.display="block":s.style.display="none"))}))}var i,a,c,l=((i=document.createElement("button")).innerHTML="SG",i.id="myExtensionButton",i),s=function(){var t=document.createElement("div");return t.id="myExtensionPopup",t.style.display="none",t}();function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}a=window.location.href,c={},function(t){return r.apply(this,arguments)}(a).then((function(t){var n,e;c=t,t&&((null==t||null===(n=t.risks)||void 0===n?void 0:n.length)>0||(null==t||null===(e=t.tips)||void 0===e?void 0:e.length)>0)&&(function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];n.forEach((function(t){return document.body.appendChild(t)}))}(l,s),o(),s.innerHTML=function(t){return'\n    <div>\n      <div class=\'header\'>\n        <h1>Scam Guardian</h1>\n      </div>\n  \n      <section>\n  \n        <p class="riskText">Risks:</p>\n\n        <div class="accordion">\n\n          <div class="panels">\n              <input type="checkbox" name="panel" id="panel-1">\n             <label for="panel-1"> ☠️ Risk 1</label>\n\n              <div class="accordion-content   accordion-content-small">\n                  <p class="accordion-body">'.concat(t.risks[0],'</p>\n                </div>\n          </div>\n          <div class="panels">\n              <input type="checkbox" name="panel" id="panel-2">\n             <label for="panel-2"> ☠️ Risk 2</label>\n\n              <div class="accordion-content accordion-content-small">\n                  <p class="accordion-body">').concat(t.risks[1],'</p>\n                </div>\n          </div>\n          <div class="panels">\n              <input type="checkbox" name="panel" id="panel-3">\n             <label for="panel-3"> ☠️ Risk 3</label>\n\n              <div class="accordion-content   accordion-content-small">\n                  <p class="accordion-body">').concat(t.risks[2],'</p>\n                </div>\n          </div>\n        </div>\n\n\n        <p class="tipsText">Tips:</p>\n\n        <div class="accordion">\n\n          <div class="panels">\n              <input type="checkbox" name="panel" id="panel-4">\n             <label for="panel-4"> 💡 Tip 1</label>\n\n              <div class="accordion-content   accordion-content-small">\n                  <p class="accordion-body">').concat(t.tips[0],'</p>\n                </div>\n          </div>\n          <div class="panels">\n              <input type="checkbox" name="panel" id="panel-5">\n             <label for="panel-5"> 💡 Tip 2</label>\n\n              <div class="accordion-content accordion-content-small">\n                  <p class="accordion-body">').concat(t.tips[1],'</p>\n                </div>\n          </div>\n          <div class="panels">\n              <input type="checkbox" name="panel" id="panel-6">\n             <label for="panel-6"> 💡 Tip 3</label>\n\n              <div class="accordion-content   accordion-content-small">\n                  <p class="accordion-body">').concat(t.tips[2],"</p>\n                </div>\n          </div>\n        </div>\n\n\n      </section>\n    </div>\n    \n    \n  ")}(c))})).catch((function(t){console.error(t)})),chrome.runtime.onMessage.addListener((function(t,n,e){if("scan_urls"===t.message){var r={domains:Array.from(document.querySelectorAll("a")).map((function(t){return function(t){try{var n=new URL(t).hostname.split(".");return n.slice(-2),n.join(".")}catch(n){return console.error("Invalid URL encountered: ".concat(t)),null}}(t.href)})).filter(Boolean).join("\n")};fetch("https://extension-orpin.vercel.app/api/check-domains",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(t){return t.json()})).then((function(t){var n=t.filter((function(t){return t.isBlacklisted})).map((function(t){return t.domainName})),e=u(new Set(n));e.length>0?(alert("Warning! The following domains could be blacklisted:\n"+e.join("\n")),console.log(e.join("\n"))):alert("No blacklisted domains found!")})).catch((function(t){console.error(t)}))}}))})();