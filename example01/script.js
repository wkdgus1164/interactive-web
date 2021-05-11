(function () {
  const stage = document.querySelector('.stage');
  const clickHandler = e => e.target.classList.contains('ilbuni') && stage.removeChild(e.target);
  stage.addEventListener('click', clickHandler);
})();