import cubeFaceComponent from './cubeFaceComponent.mjs';

const cubeComponent = ({ size = 50 } = { size: 50 }) => {
  const cubeElement = document.createElement('div');
  cubeElement.classList.add('cube');
  cubeElement.style.width = `${size}px`;
  cubeElement.style.height = `${size}px`;

  const offset = size / 2;

  const cubeFaceComponentClasses = [
    { faceClass: 'front-face', transform: `translate3d(0, 0, ${offset}px)` },
    { faceClass: 'back-face', transform: `translate3d(0, 0, -${offset}px)` },
    { faceClass: 'top-face', transform: `translate3d(0, -${offset}px, 0) rotateX(90deg)` },
    { faceClass: 'bottom-face', transform: `translate3d(0, ${offset}px, 0) rotateX(90deg)` },
    { faceClass: 'left-face', transform: `translate3d(-${offset}px, 0, 0) rotateY(90deg)` },
    { faceClass: 'right-face', transform: `translate3d(${offset}px, 0, 0) rotateY(90deg)` },
  ];

  const cubeFaces = cubeFaceComponentClasses.map(({ faceClass, transform }) => {
    const cubeFace = cubeFaceComponent({ classNames: [faceClass] });
    cubeFace.style.transform = transform;
    return cubeFace;
  });

  cubeElement.append(...cubeFaces);

  return cubeElement;
};

export default cubeComponent;
