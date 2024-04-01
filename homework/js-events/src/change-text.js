function changeText() {
  let DOMdiv = document.getElementById('div');
  const DOMtextarea = document.createElement('textarea');

  addEventListener('keydown', function (event) {
    // Here I made a key combination
    if (event.key === 'e' && event.ctrlKey) {
      // to prevent from default browser behavior
      event.preventDefault();

      // We need to use value here, not textContent!
      DOMtextarea.value = DOMdiv.textContent;
      DOMdiv.textContent = '';

      DOMdiv.append(DOMtextarea);
    }
  });

  addEventListener('keydown', function (event) {
    if (event.key === 's' && event.ctrlKey) {
      event.preventDefault();
      DOMdiv.textContent = DOMtextarea.value;

      DOMtextarea.remove();
    }
  });
}

export default changeText;
