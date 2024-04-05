const DOMButton = document.getElementById('js-button');

if (DOMButton) {
  DOMButton.addEventListener('click', () => {
    console.log('AAAAA');

    const data = {
      firstName: 'Ira',
      email: 'rybachok19ira@gmail.com',
    };

    const dataToString = JSON.stringify(data);
    fetch('http://localhost:3000/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: dataToString,
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
      });
  });
}
