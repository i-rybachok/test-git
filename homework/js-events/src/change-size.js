const changeSize = () => {
  const BORDER_SIZE = 4;
  const panel = document.getElementById('right_panel');

  // // Щоб текст не виділявся
  // addEventListener('onmousedown', (event) => {
  //   console.log(event.target);
  //   if (event.target === panel) {
  //     event.preventDefault();
  //   }
  // });

  let m_pos;
  function resize(e) {
    const dx = e.x - m_pos;
    m_pos = e.x;
    panel.style.width = parseInt(getComputedStyle(panel, '').width) + dx + 'px';
  }

  panel.addEventListener('mousedown', function (e) {
    if (e.offsetX > BORDER_SIZE) {
      m_pos = e.x;
      document.addEventListener('mousemove', resize, false);
    }
  });

  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', resize, false);
  });
};

export default changeSize;
