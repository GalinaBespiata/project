import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const cardMain = document.querySelector('.cards__wrap');
let id = 0;
cardMain.addEventListener('click', onClick);

function onClick(evt) {
  console.log(evt.target);
  getCard(evt.target.id).then(data => {
    console.log(data);
  });
}
('');

async function getPopular() {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=004aa31770cc2729c6dd319813b8b5dc'
  );
  console.log(data);
  return data.results;
}

async function getCard(id) {
  const res = await axios.get(
    'https://api.themoviedb.org/3/movie/${id}?api_key=004aa31770cc2729c6dd319813b8b5dc'
  );
  console.log(res);
  return data.results;
}
async function renderMarkup(movies) {
  const markup = movies
    .map(movie => {
      return `<li class="cards__item"> 
          <img 
            class="cards__photo" 
            alt="movie" 
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
            width="450" 
            loading="lazy" 
          /> 
          <h3 class="cards__title">${movie.title}</h3> 
          <p class="cards__info">${movie.genre_ids} | ${movie.release_date}</p> 
        </li>`;
    })
    .join('');
  cardsList.insertAdjacentHTML('beforeend', markup);
}

async function loadPopular() {
  try {
    const popularMovies = await getPopular();
    renderMarkup(popularMovies);
  } catch (error) {
    console.log(error);
  }
}

//
async function loadCard() {
  try {
    const modalMovies = await getCard();
    renderCard(modalMovies);
  } catch (error) {
    console.log(error);
  }
}

async function renderMarkup(movies) {
  id = movies.id;
  const markup = movies
    .map(movie => {
      return `<li class="cards__item" data-id="${movie.id}"> 
          <img 
            class="cards__photo" 
            alt="movie" 
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
            width="450" 
            loading="lazy" 
          /> 
          <h3 class="cards__title">${movie.title}</h3> 
          <p class="cards__info">${movie.genre_ids} | ${movie.release_date}</p> 
        </li>`;
    })
    .join('');
  cardsList.insertAdjacentHTML('beforeend', markup);
}
