import anime from '../node_modules/animejs/lib/anime.es.js';

import rubikComponent from './components/rubikComponent.mjs';

const boxRef = document.querySelector('.decorator-box');

const rubik = rubikComponent({ size: 3, cubeSize: 100 });

anime({
  targets: rubik,
  loop: true,
  easing: 'linear',
  rotateY: 360,
  rotateX: 360,
  duration: 8000,
});

boxRef.append(rubik);
