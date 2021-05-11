(function () {
  const stageElem = document.querySelector('.stage');
  let currentItem;

  const activate = element => {
    element.classList.add('door-opened');
    currentItem = element;
  }

  const inactivate = element => {
    element.classList.remove('door-opened');
  }

  const doorHandler = (e) => {
    const targetElem = e.target;

    if (currentItem) inactivate(currentItem);

    if (targetElem.classList.contains('door-body')) {
      activate(targetElem.parentNode);
    }
  }

  stageElem.addEventListener('click', doorHandler);
  activate(document.querySelector('.door:first-child'));
})();