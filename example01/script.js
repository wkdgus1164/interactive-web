(function () {
  const ilbuniGroup = document.querySelectorAll('.ilbuni');
  const stage = document.querySelector('.stage');

  const clickHandler = e => {
    stage.removeChild(e.currentTarget);
    console.log(this);
  }

  for (let i = 0; i < ilbuniGroup.length; i++) {
    ilbuniGroup[i].addEventListener('click', clickHandler);
  }
})();