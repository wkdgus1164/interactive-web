(() => {
  const sceneInformation = [
    {
      type: 'sticky',

      // 브라우저 높이의 5배로 scrollHeight 를 세팅한다.
      multipleHeight: 5,

      // 디바이스마다 크기가 다르기 때문에 우선 0으로 설정한다.
      scrollHeight: 0,
      objects: {
        container: document.querySelector('#scroll-section-0'),
      }
    },
    {
      type: 'normal',
      multipleHeight: 5,
      scrollHeight: 0,
      objects: {
        container: document.querySelector('#scroll-section-1'),
      }
    },
    {
      type: 'sticky',
      multipleHeight: 5,
      scrollHeight: 0,
      objects: {
        container: document.querySelector('#scroll-section-2'),
      }
    },
    {
      type: 'sticky',
      multipleHeight: 5,
      scrollHeight: 0,
      objects: {
        container: document.querySelector('#scroll-section-3'),
      }
    }
  ];

  const setSectionHeight = () => {
    for (let i in sceneInformation) {
      sceneInformation[i].scrollHeight = sceneInformation[i].multipleHeight * window.innerHeight;
      sceneInformation[i].objects.container.style.height = `${sceneInformation[i].scrollHeight}px`;
    }
  }

  window.addEventListener('resize', setSectionHeight);
  setSectionHeight();
})();