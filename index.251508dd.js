!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire335d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire335d=o),o("1Eh3C"),o("iRCFg");var r=o("14zMx"),i=o("kPSUl"),c=o("bpxeT"),s=o("2TvXO"),l="2f202abcab3fe0934220a17698275697";function d(e){return u.apply(this,arguments)}function u(){return u=e(c)(e(s).mark((function t(n){var a,o,r,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:1,e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(l,"&query=").concat(n,"&language=en-US&page=").concat(a,"&include_adult=false"));case 4:return o=e.sent,e.next=7,o.json();case 7:return r=e.sent,console.log(r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[1,12]])}))),u.apply(this,arguments)}function p(e){var t=document.querySelector("[data-markup-output]");d(e).then((function(e){console.log(e),0===e.total_results?document.querySelector(".not-found").classList.remove("is-hidden"):document.querySelector(".not-found").classList.add("is-hidden"),t.innerHTML=e.results.map((function(e){var t=e.backdrop_path,n=e.poster_path,a=e.title,o=e.genre_ids,r=e.release_date,c=e.vote_average,s=e.id;return'\n      <div class="item" data-id="'.concat(s,'" data-modal-open>\n        <img class="item__image" src="https://image.tmdb.org/t/p/w300').concat(null!==n?n:t,'" alt=" Poster of: ').concat(a,'" />\n        <div class="item__info">\n          <h3 class="item__title">').concat(a,'</h3>\n          <p class="item__genres" data-genres>').concat((0,i.default)(o),'</p>\n          <span class="item__separator">|</span>\n          <p class="item__year">').concat(new Date(r).getFullYear(),'</p>\n          <p class="item__rating">').concat(Number(c).toFixed(1),"</p>\n        </div>\n      </div>\n      ")})).join("")}))}var f=document.querySelector("[data-input]");console.log(f);var g=document.querySelector("[data-search]");function m(){var e=f.value;""!==e?(document.querySelector(".not-found").classList.add("is-hidden"),p(e)):document.querySelector(".not-found").classList.remove("is-hidden")}console.log(g),g.addEventListener("click",m),f.addEventListener("keypress",(function(e){"Enter"===e.key&&m()})),o("fj9x3");r=o("14zMx");o("1Eh3C");var v=o("2mLY7");document.querySelector(".pagination ul").addEventListener("click",(function(e){if(pageNum=e.target.dataset.page,"dots"===e.target.dataset.page)return void console.log("Selected dots, doing nothing...");h.scrollIntoView({behavior:"smooth"}),(0,r.default)("trending",pageNum),(0,v.initializeModal)()}));var h=document.querySelector("header");(0,r.default)()}();
//# sourceMappingURL=index.251508dd.js.map
