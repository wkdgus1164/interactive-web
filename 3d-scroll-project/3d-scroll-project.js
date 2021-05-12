// window.pageYOffset : 페이지가 스크롤될 때 현재 Y축 위치가 최상단으로부터 몇 픽셀 떨어져 있는지 찾을 수 있다.
// document.body.offsetHeight : body 의 높이를 찾을 수 있다.
// window.innerHeight : window 객체 (브라우저 창) 의 높이를 찾을 수 있다.
(function () {
  const $houseElement = document.querySelector('.house');
  const $barElement = document.querySelector('.progress-bar');

  let maxScrollValue;
  let scrollPercent;

  // body 의 높이에서 브라우저 창의 높이를 빼면 전체 스크롤할 수 있는 범위가 산출된다.
  const windowResizeHandler = () => maxScrollValue = document.body.offsetHeight - window.innerHeight;

  const windowScrollHandler = () => {
    scrollPercent = pageYOffset / maxScrollValue;
    const zMove = scrollPercent * 980 - 490;
    $houseElement.style.transform = `translateZ(${zMove}vw)`;

    progressbarController();
  }

  const progressbarController = () => $barElement.style.width = `${scrollPercent * 100}%`;

  window.addEventListener('scroll', windowScrollHandler);
  window.addEventListener('resize', windowResizeHandler);
  windowResizeHandler();
})();