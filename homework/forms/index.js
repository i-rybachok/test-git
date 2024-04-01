function getDataFromForm() {
  //* for adding error messages
  const addError = (id, opacity = 1) => {
    const DOMError = document.getElementById(id);

    DOMError.style.opacity = opacity;
  };

  //* for checking the correct email
  const REGEXP_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //* get form from DOM
  const DOMform = document.getElementById('js-form');

  //* check if it exists
  if (!DOMform) return;

  DOMform.addEventListener('submit', (event) => {
    //* remove default behavior of brawser
    event.preventDefault();
    console.log('event: ', event);

    //* get data
    const formData = new FormData(event.target);
    console.log('formData: ', formData);

    // * Setting rules for:
    //firstName
    const firstName = formData.get('firstName');

    if (!firstName) {
      return addError('js-firstname-error');
    }

    if (firstName.length <= 2) {
      return addError('js-firstname-error');
    }

    addError('js-firstname-error', 0);

    //lastName
    const lastName = formData.get('lastName');

    if (!lastName) {
      return addError('js-lastname-error');
    }

    if (lastName.length <= 2) {
      return addError('js-lastname-error');
    }

    addError('js-lastname-error', 0);

    //email
    const email = formData.get('email');

    if (!email) {
      return addError('js-email-error');
    }

    if (!REGEXP_EMAIL.test(email)) {
      return addError('js-email-error');
    }

    addError('js-email-error', 0);

    // city
    const city = formData.get('city');

    if (!city) {
      return addError('js-city-error');
    }

    if (city.length <= 2) {
      return addError('js-city-error');
    }

    addError('js-city-error', 0);

    const gender = formData.get('gender');
    const country = formData.get('country');

    // * Getting all data in an object
    const data = {
      firstName,
      lastName,
      email,
      gender,
      country,
      city,
    };

    console.log(data);
  });
}

getDataFromForm();
