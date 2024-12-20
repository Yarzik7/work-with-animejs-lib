import anime from '../node_modules/animejs/lib/anime.es.js';

const animeElRef = document.querySelector('.js-anime-el');

anime({
  targets: animeElRef,
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 8000,
  loop: true,
});
