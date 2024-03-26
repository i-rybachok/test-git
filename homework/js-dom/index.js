// Дістаю елемент за id
// .getElementById поверне лише 1 елемент, але багато інших - список
let DOMList = document.getElementById('list');

let playlist = [
  {
    author: 'LED ZEPPELIN',

    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',

    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',

    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',

    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',

    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',

    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',

    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',

    song: 'ENTER SANDMAN',
  },
];

// Створюю функцію для додавання усіх li в list
function addDOMListItems(playlist, DOMList) {
  playlist.forEach((item) => {
    let DOMListItem = document.createElement('li');

    // Додаю клас до li (для практики)
    DOMListItem.classList.add('js-list-item');

    // Додаю текст до li
    DOMListItem.textContent = `${item.author}: ${item.song}`;

    // Додаю li в ol
    DOMList.append(DOMListItem);
  });
}

addDOMListItems(playlist, DOMList);

// Додати до кожного другого li колір
for (let i = 0; i < DOMList.childNodes.length; i++) {
  if (i % 2) {
    DOMList.childNodes[i].style.color = 'green';
  }
}
