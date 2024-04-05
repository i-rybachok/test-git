// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один
//не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.

const addClassMarker = () => {
  class Marker {
    constructor(color, ink) {
      this.color = color;
      this.ink = ink;
      this.div = document.getElementById('js-ink-div');
    }

    writeWithMarker(phrase) {
      if (this.ink <= 0) {
        return 'No more ink!';
      }
      if (phrase.replaceAll(' ', '').length > this.ink * 2) {
        return 'Not enough ink!';
      }
      for (let i = 0; i < phrase.replaceAll(' ', '').length; i++) {
        this.ink -= 0.5;
      }
      this.div.style.color = this.color;
      this.div.textContent = phrase;
      return `You have ${this.ink}% of ink left`;
    }
  }

  class BetterMarker extends Marker {
    refillMarker(moreInk) {
      this.ink += moreInk;
      return `Now you have ${this.ink}% of ink left`;
    }
  }

  const markerGreen = new BetterMarker('green', 7);
  console.log(markerGreen.writeWithMarker('I am the best'));

  console.log(markerGreen.refillMarker(50));
};

export default addClassMarker;
