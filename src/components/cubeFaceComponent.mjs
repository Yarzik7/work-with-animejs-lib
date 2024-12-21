const cubeFaceComponent = ({ classNames = [] }) => {
  const cubeFaceElement = document.createElement('div');
  cubeFaceElement.classList.add('cube-face', ...classNames);

  return cubeFaceElement;
};

export default cubeFaceComponent;
