function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),c?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=g();if(O(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=g(),n=O(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:j(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),S=document.querySelector("textarea"),O=document.querySelector("input"),h=JSON.parse(localStorage.getItem("feedback-form-state"))||{};JSON.parse(localStorage.getItem("feedback-form-state"))&&(y.message.value=h.message||"",y.email.value=h.email||""),y.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.value||""===S.value)return alert("Please fill in all the fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.target.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h)),console.log(e.target.value)}),500));
//# sourceMappingURL=03-feedback.08625e51.js.map
