(() => {
  let yOffset = 0;

  // 현재 스크롤 위치 (yOffset) 보다 이전에 위치한 스크롤 섹션들의 스크롤 높이 값의 합
  let previewMultipleHeight = 0;

  // 현재 활성화된 씬
  let currentScene = 0;

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

  function scrollLoop() {
    previewMultipleHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      previewMultipleHeight += sceneInformation[i].scrollHeight;
    }

    if (yOffset > previewMultipleHeight + sceneInformation[currentScene].scrollHeight) currentScene++;
    if (yOffset < previewMultipleHeight) {
      if (currentScene === 0) return;
      currentScene--;
    }
  }

  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  setSectionHeight();
})();