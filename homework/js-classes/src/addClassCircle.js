// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

const addClassCircle = () => {
  class Circle {
    constructor(radius) {
      this.radius = radius;
      this.PI = 3.14;
    }
    get radius() {
      return this._radius;
    }

    set radius(newRadius) {
      this._radius = newRadius;
    }

    get diameter() {
      return this.radius * 2;
    }

    getArea() {
      return this.PI * this.radius ** 2;
    }

    getLength() {
      return 2 * this.PI * this.radius;
    }
  }

  let circle1 = new Circle(5);
  console.log(circle1.radius); // without get() in class i would get undefined

  console.log((circle1.radius = 6));

  console.log(circle1.diameter);

  console.log(circle1.getArea());

  console.log(circle1.getLength());
};

export default addClassCircle;
