// В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. Це годинники для різних куточків світу.
// Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock відбувається через class.
// Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

// getCurrentDate
// getCurrentDateTime
// deleteClock

// 1 кнопка — показує користувачу час у текстовому варіанті
// 2 кнопка — показує користувачу поточну дату й час у текстовому варіанті
// 3 кнопка — видаляє годинник зі «стіни» годинників

const addClassClock = () => {
  const DOMClock1 = document.getElementById('clock1');
  const DOMClock2 = document.getElementById('clock2');
  const DOMClock3 = document.getElementById('clock3');

  class Clock {
    constructor(time) {
      this.time = new Date(time);
    }

    getCurrentTime() {
      this.time = this.time.getHours();
    }

    getCurrentDate() {
      this.time = this.time.getDate();
    }

    deleteClock(DOMClock) {
      DOMClock.textContent = '';
    }
  }

  const DOMform = document.getElementById('js-form-time');
  if (!DOMform) return;

  DOMform.addEventListener('submit', (event) => {
    event.preventDefault();

    //* get data
    const formData = new FormData(event.target);

    // * Setting rules for:
    //time
    const time = formData.get('time');

    if (!time) {
      throw new Error('No time is entered');
    }

    if (time.length < 7) {
      throw new Error('Not enough numbers');
    }

    const data = {
      time,
    };

    //* Add time to the clock
    // Create a new example of a class
    const newClock = new Clock(data.time);

    // add textContent to a free clock
    if (!DOMClock1.textContent) {
      DOMClock1.textContent = newClock.time;
    } else if (!DOMClock2.textContent) {
      DOMClock2.textContent = newClock.time;
    } else if (!DOMClock3.textContent) {
      DOMClock3.textContent = newClock.time;
    } else {
      throw new Error('No more space for new clocks');
    }

    //* Add showTime buttons
    const DOMshowTimeButton =
      document.getElementsByClassName('js-show-time-clock');

    DOMshowTimeButton[0].addEventListener('click', () => {
      newClock.getCurrentTime();
      DOMClock1.textContent = newClock.time;
    });

    DOMshowTimeButton[1].addEventListener('click', () => {
      newClock.getCurrentTime();
      DOMClock2.textContent = newClock.time;
    });

    DOMshowTimeButton[2].addEventListener('click', () => {
      newClock.getCurrentTime();
      DOMClock3.textContent = newClock.time;
    });

    //* Add showDate buttons
    const DOMshowDateButton =
      document.getElementsByClassName('js-show-date-clock');
    console.log('DOMshowDateButton: ', DOMshowDateButton);

    DOMshowDateButton[0].addEventListener('click', () => {
      newClock.getCurrentDate();
      DOMClock1.textContent = newClock.time;
    });

    DOMshowDateButton[1].addEventListener('click', () => {
      newClock.getCurrentDate();
      DOMClock2.textContent = newClock.time;
    });

    DOMshowDateButton[2].addEventListener('click', () => {
      newClock.getCurrentDate();
      DOMClock3.textContent = newClock.time;
    });

    //* Add delete buttons
    const DOMdeleteButton = document.getElementsByClassName('js-delete-button');

    DOMdeleteButton[0].addEventListener('click', () => {
      newClock.deleteClock(DOMClock1);
    });

    DOMdeleteButton[1].addEventListener('click', () => {
      newClock.deleteClock(DOMClock2);
    });

    DOMdeleteButton[2].addEventListener('click', () => {
      newClock.deleteClock(DOMClock3);
    });
  });
};

export default addClassClock;
