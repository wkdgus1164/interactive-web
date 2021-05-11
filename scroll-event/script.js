(function () {

  const scrollHandler = () => {
    const outputElement = document.querySelector('.output');
    const ilbunElement = document.querySelector('.ilbuni');
    // outputElement.innerHTML = window.pageYOffset; // 해당 Element 가 페이지 내 세로 축에서 몇 픽셀의 위치에 있는지 반환한다.

    // 스크롤할 때마다 Element 가 상하좌우로부터 얼마나 떨어져 있는지 반환한다. top/left/bottom/right 등 속성이 있음.
    let positionY = ilbunElement.getBoundingClientRect().top;
    outputElement.innerHTML = positionY;

    if (positionY < window.innerHeight * 0.2) {
      ilbunElement.classList.add('zoom');
    } else {
      ilbunElement.classList.remove('zoom');
    }
  }

  window.addEventListener('scroll', scrollHandler);
})();