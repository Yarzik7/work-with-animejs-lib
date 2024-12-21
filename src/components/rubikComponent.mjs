import cubeComponent from './cubeComponent.mjs';

const rubikComponent = ({ size = 3, cubeSize = 50 } = { size: 3, cubeSize: 50 }) => {
  const rubikElement = document.createElement('div');
  rubikElement.classList.add('rubik');
  rubikElement.style.width = `${cubeSize * size}px`;
  rubikElement.style.height = `${cubeSize * size}px`;

  const rubikCubeElements = [];
  const offsetZ = (size * cubeSize) / 2 - cubeSize / 2;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        const cube = cubeComponent({ size: cubeSize });
        cube.style.width = `${cubeSize}px`;
        cube.style.height = `${cubeSize}px`;
        cube.style.transform = `
          translateX(${x * cubeSize}px)
          translateY(${y * cubeSize}px)
          translateZ(${z * cubeSize - offsetZ}px)
        `;
        rubikCubeElements.push(cube);
      }
    }
  }

  rubikElement.append(...rubikCubeElements);

  return rubikElement;
};

export default rubikComponent;
