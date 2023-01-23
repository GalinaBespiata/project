import axios from 'axios';
import { getPopular } from './popular.js';
<<<<<<< Updated upstream

// функционал кнопок пагинации

const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.firstPage');
const lastPageRef = document.querySelector('.lastPage');
const containerRef = document.querySelector('.pagination-container');
const allBtnPagination = document.querySelectorAll('.pagination__item');
// console.log(allBtnPagination);
const leftArrowRef = document.querySelector('.arrow-left');
const rightArrowRef = document.querySelector('.arrow-right');
const leftDotsRef = document.querySelector('.dotsLeft');
const rightDotsRef = document.querySelector('.dotsRight');

let currentPage = 1;

// totalPages надо получить из {getPopular} + {searchFilm} запроса на сервер!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let totalPages = 100;

lastPageRef.textContent = totalPages;

containerRef.addEventListener('click', onPaginationClick);

if (window.innerWidth <= 768) {
  leftDotsRef.remove();
  leftArrowRef.classList.add('hidden');
  firstPageRef.remove();
  rightDotsRef.remove();
  rightArrowRef.classList.add('hidden');
  lastPageRef.remove();
}
if (window.innerWidth > 768) {
  leftDotsRef.classList.add('hidden');
  leftArrowRef.classList.add('hidden');
  firstPageRef.classList.add('hidden');
}

function onPaginationClick(event) {
  if (event.target.classList.contains('pagination-btn')) {
    console.log(event.target.tagName);
    if (Number(event.target.textContent)) {
      console.log(currentPage);
      currentPage = Number(event.target.textContent);
      console.log(currentPage);
      console.log(event.target.tagName);
    }
    // additional if
    // if(currentPage < 5) {
    //   console.log(currentPage);
    //   // leftDotsRef.classList.add("hidden");
    //   // leftArrowRef.classList.add("hidden");
    //   // firstPageRef.classList.add("hidden");
    //   console.log(currentPage);
    //   console.log(event.target.tagName);
    // }
    // if(currentPage > totalPages-5) {
    //   console.log(currentPage);
    //   // rightDotsRef.classList.add("hidden");
    //   // rightArrowRef.classList.add("hidden");
    //   // lastPageRef.classList.add("hidden");
    //   console.log(currentPage);
    //   console.log(event.target.tagName);
    // }
    //   console.log(currentPage);
    //   // leftDotsRef.classList.add("hidden");
    //   // rightDotsRef.classList.add("hidden");
    //   console.log(currentPage);
    //   console.log(event.target.tagName);

    if (event.target.classList.contains('pagination__item')) {
      console.log(currentPage);
      allBtnPagination.forEach(e =>
        e.classList.remove('pagination__item--active')
      );
      event.target.classList.add('pagination__item--active');
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (
      event.target.classList.contains('arrow-right') &&
      currentPage < totalPages - 5
    ) {
      console.log(currentPage);
      allBtnPagination.forEach(e =>
        e.classList.remove('pagination__item--active')
      );
      btn1Ref.classList.add('pagination__item--active');
      btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
      currentPage = Number(btn1Ref.textContent);
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (event.target.classList.contains('arrow-left') && currentPage > 5) {
      console.log(currentPage);
      allBtnPagination.forEach(e =>
        e.classList.remove('pagination__item--active')
      );
      btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
      btn5Ref.classList.add('pagination__item--active');
      currentPage = Number(btn5Ref.textContent);
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (event.target.classList.contains('firstPage')) {
      console.log(currentPage);
      allBtnPagination.forEach(e =>
        e.classList.remove('pagination__item--active')
      );
      btn1Ref.textContent = 1;
      btn2Ref.textContent = 2;
      btn3Ref.textContent = 3;
      btn4Ref.textContent = 4;
      btn5Ref.textContent = 5;
      btn1Ref.classList.add('pagination__item--active');
      currentPage = btn1Ref.textContent;
      // leftArrowRef.classList.add("hidden");
      // leftDotsRef.classList.add("hidden");
      // firstPageRef.classList.add("hidden");
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (event.target.classList.contains('lastPage')) {
      console.log(currentPage);
      allBtnPagination.forEach(e =>
        e.classList.remove('pagination__item--active')
      );
      btn1Ref.textContent = Number(btn1Ref.textContent) - 4;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 3;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 2;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 1;
      btn5Ref.textContent = lastPageRef.textContent;
      btn5Ref.classList.add('pagination__item--active');
      currentPage = btn5Ref.textContent;
      // rightArrowRef.classList.add("hidden");
      // rightDotsRef.classList.add("hidden");
      // lastPageRef.classList.add("hidden");
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (Number(event.target.textContent) === totalPages) {
      console.log(currentPage);
      allBtnPagination.forEach(e => e.classList.remove('pagination__item--active')
      );
      btn1Ref.textContent = totalPages - 4;
      btn2Ref.textContent = totalPages - 3;
      btn3Ref.textContent = totalPages - 2;
      btn4Ref.textContent = totalPages - 1;
      btn5Ref.textContent = totalPages;
      btn5Ref.classList.add('pagination__item--active');
      console.log(currentPage);
      console.log(event.target.tagName);
    }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (currentPage <= 5) {
      console.log(currentPage);
        leftDotsRef.classList.remove('hidden');
        leftArrowRef.classList.remove('hidden');
        firstPageRef.classList.remove('hidden');
        leftArrowRef.classList.add('hidden');
        leftDotsRef.classList.add('hidden');
        firstPageRef.classList.add('hidden');
        rightArrowRef.classList.remove('hidden');
        rightDotsRef.classList.remove('hidden');
        lastPageRef.classList.remove('hidden');
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (currentPage > 5) {
      console.log(currentPage);
      leftArrowRef.classList.remove('hidden');
      leftDotsRef.classList.remove('hidden');
      firstPageRef.classList.remove('hidden');
      rightArrowRef.classList.remove('hidden');
      rightDotsRef.classList.remove('hidden');
      lastPageRef.classList.remove('hidden');
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    if (currentPage >= totalPages - 5) {
      console.log(currentPage);
      rightArrowRef.classList.remove('hidden');
      rightDotsRef.classList.remove('hidden');
      lastPageRef.classList.remove('hidden');
      rightArrowRef.classList.add('hidden');
      rightDotsRef.classList.add('hidden');
      lastPageRef.classList.add('hidden');
      console.log(currentPage);
      console.log(event.target.tagName);
    }

    // getPopular(currentPage).then(data => console.log(data));
  }
=======
// import { getByName } from './search.js';

import { renderMarkup } from './popular.js';
// let functionKeyNumber = '';
const paginationBox = document.querySelector('.pagination-container');
console.log('paginationBox', paginationBox);
let globalCurrentpage = 0;

export function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  // functionKeyNumber = key;
  globalCurrentpage = currentPage;
  if (currentPage > 1) {
    markup += `<li class="pagination__item arrow-left" >&#129144;</li>`;
    markup += `<li class="pagination__item">1</li>`;
  }
  if (currentPage > 4) {
    markup += `<li  class="pagination__item dotsLeft">...</span>`;
  }
  if (currentPage > 3) {
    markup += `<li  class="pagination__item">${beforeTwoPage}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li  class="pagination__item">${beforePage}</li>`;
  }
  markup += `<li class="pagination__item pagination__item--active">${currentPage}</li>`;
  if (allPages - 1 > currentPage) {
    markup += `<li  class="pagination__item">${afterPage}</li>`;
  }
  if (allPages - 2 > currentPage) {
    markup += `<li class="pagination__item">${afterTwoPage}</li>`;
  }
  if (allPages - 3 > currentPage) {
    markup += `<li  class="pagination__item dotsRight">...</li>`;
  }
  if (allPages > currentPage) {
    markup += `<li  class="pagination__item">${allPages}</li>`;
    markup += `<li  class="pagination__item arrow-right">&#129146;<li>`;
  }
  paginationBox.innerHTML = markup;
}
paginationBox.addEventListener('click', handlerPagination);

function handlerPagination(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  if (evt.target.textContent === '🡸') {
    getPopular((globalCurrentpage -= 1)).then(
      ({ results, page, total_pages }) => {
        renderMarkup(results);
        pagination(page, total_pages);
      }
    );
    return;
  }

  if (evt.target.textContent === '🡺') {
    getPopular((globalCurrentpage += 1)).then(
      ({ results, page, total_pages }) => {
        renderMarkup(results);
        pagination(page, total_pages);
      }
    );
    return;
  }
  
  const page = evt.target.textContent;
  console.log(page);
  getPopular(page).then(({ results, page, total_pages }) => {
    renderMarkup(results);
    pagination(page, total_pages);
  });
>>>>>>> Stashed changes
}
