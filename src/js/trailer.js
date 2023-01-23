'use strict';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { cardsList } from './popular';

const YOUTUBE = 'http://www.youtube.com/embed/';

cardsList.addEventListener('click', createTrailer);
const modalCardInfo = document.querySelector('.modal__trailer');

//function by click on image
async function createTrailer(event) {
  currentId = event.target.parentNode.dataset.id; // const id of film

  addMovieInfo(currentId);
  // //Find all info about film, get object
  async function addMovieInfo(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=daf1fe8995a61d2fecc007eaa464ca98`
    );
    modalCardInfo.innerHTML = '';
    let key = '';
    createMovieTrailer(data);

    function createMovieTrailer(obj) {
      const { results } = obj;
      results.forEach(res => {
        if (res.name.includes('Official')) {
          return (key = res.key);
        }
      });

      modalCardInfo.innerHTML = `
         <iframe
          class="trailer__video"
           src="${YOUTUBE}${key}"
          title="YouTube player"
          frameborder="0"
          allow="acc"
            width="640"
            height="360"
          ></iframe>
        `;
    }
  }
}

// <h2 class="modal-filmoteka__title title">
//   Watch trailer
// </h2>
