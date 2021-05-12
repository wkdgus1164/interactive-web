(function () {
  const $houseElement = document.querySelector('.house');

  const windowScrollHandler = () => {
    console.log(window.pageYOffset);
  }

  window.addEventListener('scroll', windowScrollHandler);
})();