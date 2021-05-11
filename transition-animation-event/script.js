const ballElement = document.querySelector('.ball');

const clickHandler = e => {
  ballElement.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}

const ballHandler = e => {
  ballElement.classList.add('end');

  // elapsedTime : transition 이 진행된 시간을 출력.
  console.log(e.elapsedTime);

  // propertyName: transition 이 진행되고 변경된 값의 속성명을 출력.
  console.log(e.propertyName);
}

window.addEventListener('click', clickHandler);

// transitionend : transition 이 끝날 때 실행됨.
// transitionstart : transition 이 시작될 때 실행됨.
ballElement.addEventListener('transitionstart', ballHandler);