function hasIdQueryParam(t){return new URLSearchParams(new URL(window.location).search).has("id")}!function(t,n){"use strict";var r={};t.PubSub?(r=t.PubSub,console.warn("PubSub already loaded, using existing version")):(t.PubSub=r,function(t){var n={},r=-1,e="*";function o(t,n,r){try{t(n,r)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function i(t,n,r){t(n,r)}function u(t,r,e,u){var c,s=n[r],a=u?i:o;if(Object.prototype.hasOwnProperty.call(n,r))for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&a(s[c],t,e)}function c(t){var r=String(t);return Boolean(Object.prototype.hasOwnProperty.call(n,r)&&function(t){var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!0;return!1}(n[r]))}function s(t,n,r,o){var i=function(t,n,r){return function(){var o=String(t),i=o.lastIndexOf(".");for(u(t,t,n,r);-1!==i;)i=(o=o.substr(0,i)).lastIndexOf("."),u(t,o,n,r);u(t,e,n,r)}}(t="symbol"==typeof t?t.toString():t,n,o);return!!function(t){for(var n=String(t),r=c(n)||c(e),o=n.lastIndexOf(".");!r&&-1!==o;)o=(n=n.substr(0,o)).lastIndexOf("."),r=c(n);return r}(t)&&(!0===r?i():setTimeout(i,0),!0)}t.publish=function(n,r){return s(n,r,!1,t.immediateExceptions)},t.publishSync=function(n,r){return s(n,r,!0,t.immediateExceptions)},t.subscribe=function(t,e){if("function"!=typeof e)return!1;t="symbol"==typeof t?t.toString():t,Object.prototype.hasOwnProperty.call(n,t)||(n[t]={});var o="uid_"+String(++r);return n[t][o]=e,o},t.subscribeAll=function(n){return t.subscribe(e,n)},t.subscribeOnce=function(n,r){var e=t.subscribe(n,(function(){t.unsubscribe(e),r.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){n={}},t.clearSubscriptions=function(t){var r;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t)&&delete n[r]},t.countSubscriptions=function(t){var r,e,o=0;for(r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t)){for(e in n[r])o++;break}return o},t.getSubscriptions=function(t){var r,e=[];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t)&&e.push(r);return e},t.unsubscribe=function(r){var e,o,i,u="string"==typeof r&&(Object.prototype.hasOwnProperty.call(n,r)||function(t){var r;for(r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t))return!0;return!1}(r)),c=!u&&"string"==typeof r,s="function"==typeof r,a=!1;if(!u){for(e in n)if(Object.prototype.hasOwnProperty.call(n,e)){if(o=n[e],c&&o[r]){delete o[r],a=r;break}if(s)for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&o[i]===r&&(delete o[i],a=!0)}return a}t.clearSubscriptions(r)}}(r)),"object"==typeof exports?(void 0!==module&&module.exports&&(exports=module.exports=r),exports.PubSub=r,module.exports=exports=r):"function"==typeof define&&define.amd&&define((function(){return r}))}("object"==typeof window&&window||this),hasIdQueryParam()||(document.getElementById("loading").style.display="none"),window._builderPubsub=window.PubSub;