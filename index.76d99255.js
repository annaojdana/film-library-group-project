!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire335d;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){o[e]=n},n.parcelRequire335d=i);var d=i("8nTf5");i("gUytU"),i("1Eh3C"),i("jhdVd");var r=i("14zMx");i("kWq4m"),i("fj9x3"),i("4Gi5n"),i("0yA7T"),i("iQCka"),i("inC9c");var u=i("hKHmD"),c=i("dDDEV"),a=i("1t1Wn"),l={getItem:function(n){return document.cookie.split(";").map((function(e){return e.split("=")})).reduce((function(n,t){var o=e(a)(t,2),i=o[0],d=o[1];return e(c)({},n,e(u)({},i.trim(),d))}),{})[n]},setItem:function(e,n){document.cookie="".concat(e,"=").concat(n,";")}},f="jdc_consent";window.onload=function(){var e=document.getElementById("consent-popup");document.getElementById("btn-pop").addEventListener("click",(function(n){l.setItem(f,!0),e.classList.add("hidden")})),l.getItem(f)||setTimeout((function(){e.classList.remove("hidden")}),2e3)},i("j7vkM"),i("7nIxh"),(0,d.startHiding)(),(0,r.default)()}();
//# sourceMappingURL=index.76d99255.js.map
