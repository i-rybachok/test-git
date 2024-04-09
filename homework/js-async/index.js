function getMovies() {
  const API = 'http://www.omdbapi.com/?apikey=560c1e00&';

  // const options = { method: 'GET', headers: { accept: 'application/json' } };

  // fetch('https://api.themoviedb.org/3/authentication', options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  // Get form and if it exists
  const DOMForm = document.getElementById('js-form');
  if (!DOMForm) return;

  DOMForm.addEventListener('submit', (event) => {
    //* remove default behavior of browser
    event.preventDefault();

    //* get data
    const formData = new FormData(event.target);
    console.log('formData: ', formData);

    // * Setting rules for:
    // nameMovie
    const movieName = formData.get('movieName');

    // type
    const type = formData.get('type');

    // * Getting all data in an object
    const data = {
      movieName,
      type,
    };

    console.log(data);
  });
}

getMovies();
