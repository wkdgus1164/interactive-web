(function () {
  const scrollHandler = () => {
    const outputElement = document.querySelector('.output');
    outputElement.innerHTML = window.pageYOffset;
  }

  window.addEventListener('scroll', scrollHandler);
})();