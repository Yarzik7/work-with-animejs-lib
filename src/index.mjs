import rubikComponent from './components/rubikComponent.mjs';

const boxRef = document.querySelector('.js-scene');

const rubik = rubikComponent({ size: 3, cubeSize: 100 });

anime({
  targets: rubik,
  loop: true,
  easing: 'linear',
  rotateY: 360,
  rotateX: 360,
  duration: 7000,
});

boxRef.append(rubik);
