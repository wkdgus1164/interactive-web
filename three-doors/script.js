(function () {
  const stageElem = document.querySelector('.stage');

  const doorHandler = (e) => {
    const targetElem = e.target;

    if (targetElem.classList.contains('door-body')) {
      targetElem.parentNode.classList.add('door-opened');
    }
  }

  stageElem.addEventListener('click', doorHandler);
})();