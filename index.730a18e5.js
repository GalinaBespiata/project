!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequired7c6=r);var i=r("bpxeT"),c=r("8nrFW"),o=r("2TvXO"),s=r("dIxxU"),l=(i=r("bpxeT"),o=r("2TvXO"),s=r("dIxxU"),r("h6c0i")),u=r("7rQOT"),p=document.querySelector(".form"),d=document.querySelector("#search"),g=document.querySelector(".notification"),f="";function _(){return(_=t(i)(t(o).mark((function e(n){var a,r,i,c,s;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),u.Loading.standard(),u.Loading.remove(800),a=n.currentTarget,r=a.elements.search,f=r.value,!(r.value.length<2)){t.next=9;break}return l.Notify.warning("Its name too short.Enter the correct movie name, please."),n.currentTarget.reset(),t.abrupt("return");case 9:return t.prev=9,t.next=12,m(f.trim(),1);case 12:i=t.sent,c=i.results,i.page,s=i.total_pages,document.querySelector(".cards__list"),Array.isArray(c)&&c.length?(T(c),y(1,s)):g.classList.remove("close"),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(9),console.log(t.t0);case 23:case"end":return t.stop()}}),e,null,[[9,20]])})))).apply(this,arguments)}function m(t,e){return v.apply(this,arguments)}function v(){return(v=t(i)(t(o).mark((function e(n,a){var r;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.get("https://api.themoviedb.org/3/search/movie?api_key=004aa31770cc2729c6dd319813b8b5dc&query=".concat(n,"&page=").concat(a));case 2:return r=t.sent.data,t.abrupt("return",r);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}d.addEventListener("keyup",(function(t){g.classList.add("close")})),p.addEventListener("submit",(function(t){return _.apply(this,arguments)}));var h=document.querySelector(".pagination-container"),x=0;function y(t,e){var n="",a=t-2,r=t-1,i=t+1,c=t+2;x=t,t>1&&(n+='<li class="pagination__item arrow-left" >&#129144;</li>',n+='<li class="pagination__item">1</li>'),window.innerWidth>=768?(t>4&&(n+='<li  class="pagination__item dotsLeft">...</span>'),t>3&&(n+='<li  class="pagination__item">'.concat(a,"</li>")),t>2&&(n+='<li  class="pagination__item">'.concat(r,"</li>")),n+='<li class="pagination__item pagination__item--active">'.concat(t,"</li>"),e-1>t&&(n+='<li  class="pagination__item">'.concat(i,"</li>")),e-2>t&&(n+='<li class="pagination__item">'.concat(c,"</li>")),e-3>t&&(n+='<li  class="pagination__item dotsRight">...</li>'),e>t&&(n+='<li  class="pagination__item">'.concat(e,"</li>"),n+='<li  class="pagination__item arrow-right">&#129146;</li>')):(t>3&&(n+='<li  class="pagination__item">'.concat(a,"</li>")),t>2&&(n+='<li  class="pagination__item">'.concat(r,"</li>")),n+='<li class="pagination__item pagination__item--active">'.concat(t,"</li>"),e-1>t&&(n+='<li  class="pagination__item">'.concat(i,"</li>")),e-2>t&&(n+='<li class="pagination__item">'.concat(c,"</li>")),e>t&&(n+='<li  class="pagination__item">'.concat(e,"</li>"),n+='<li  class="pagination__item arrow-right">&#129146;</li>')),h.innerHTML=n}h.addEventListener("click",(function(t){if(f){if("LI"!==t.target.nodeName)return;if("..."===t.target.textContent)return;if("🡸"===t.target.textContent)return void m(f,x-=1).then((function(t){var e=t.results,n=t.page,a=t.total_pages;T(e),y(n,a)}));if("🡺"===t.target.textContent)return void m(f,x+=1).then((function(t){var e=t.results,n=t.page,a=t.total_pages;T(e),y(n,a)}));var e=t.target.textContent;m(f,e).then((function(t){var e=t.results,n=t.page,a=t.total_pages;T(e),y(n,a)}))}else{if("LI"!==t.target.nodeName)return;if("..."===t.target.textContent)return;if("🡸"===t.target.textContent)return void L(x-=1).then((function(t){var e=t.results,n=t.page,a=t.total_pages;T(e),y(n,a)}));if("🡺"===t.target.textContent)return void L(x+=1).then((function(t){var e=t.results,n=t.page,a=t.total_pages;T(e),y(n,a)}));L(t.target.textContent).then((function(t){var e=t.results,n=t.page,a=t.total_pages;T(e),y(n,a)}))}}));var w=document.querySelector(".cards__list");"/library.html"!==window.location.pathname&&function(){q.apply(this,arguments)}();var b=[];function L(){return k.apply(this,arguments)}function k(){return k=t(i)(t(o).mark((function e(){var n,a,r=arguments;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,s.default.get("https://api.themoviedb.org/3/trending/movie/week?api_key=004aa31770cc2729c6dd319813b8b5dc&page=".concat(n));case 3:return a=t.sent.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),e)}))),k.apply(this,arguments)}function T(e){w.innerHTML="";var n=e.map((function(e){return'<li class="cards__item" data-id="'.concat(e.id,'">\n\n     \n          <img\n            class="cards__photo"\n            alt="movie"\n            src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'"\n            width="450"\n            loading="lazy"\n          />\n          <h3 class="cards__title">').concat(e.title,'</h3>\n          <p class="cards__info">').concat((n=b,a=e.genre_ids,r=n.reduce((function(e,n){return a.includes(n.id)?t(c)(e).concat([n.name]):e}),[]),r.length>2?r.slice(0,2):r).join(", ")," | ").concat(e.release_date.split("-")[0],"</p>\n        </li>");var n,a,r})).join("");w.insertAdjacentHTML("beforeend",n)}function q(){return(q=t(i)(t(o).mark((function e(){var n,a,r;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L();case 3:return n=t.sent,a=n.results,n.page,r=n.total_pages,t.next=9,C();case 9:b=t.sent,T(a),y(1,r),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function C(){return O.apply(this,arguments)}function O(){return(O=t(i)(t(o).mark((function e(){var n;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=004aa31770cc2729c6dd319813b8b5dc");case 2:return n=t.sent.data,t.abrupt("return",n.genres);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}r("5xtVg"),r("5YNLl"),r("cDXQO"),r("5rAtq")}();
//# sourceMappingURL=index.730a18e5.js.map
