var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequire335d;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequire335d=i);var l=i("4Qwz3");i("evwAu"),i("8lrg8"),i("aSEpN");var n=i("6AedE"),o=i("lrfPX"),r=i("49Vsg");(0,o.default)("queue");const d=document.querySelectorAll("[data-display-selector]");function s(e){function t(){e.target.classList.contains("btn--active")||(d[0].classList.toggle("btn--active"),d[1].classList.toggle("btn--active"))}switch(e.target.dataset.displaySelector){case"watched":case"queue":t()}}function c(e){switch(e.target.dataset.displaySelector){case"watched":(0,r.displayLoader)(),s(e),(0,o.default)("watched"),(0,n.initializeModal)();break;case"queue":(0,r.displayLoader)(),s(e),(0,o.default)("queue"),(0,n.initializeModal)()}}for(const e of d)e.addEventListener("click",c);i("aqoEj"),(0,l.startHiding)();
//# sourceMappingURL=myLibrary.f93995f1.js.map
