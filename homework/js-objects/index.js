// * task 1
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
// обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//   Метод, який виводить на екран інформацію про автомобіль.
//   Додавання ім’я водія у список
//   Перевірка водія на наявність його ім’я у списку
//   Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через
// кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const auto = {
  producer: 'Ford',
  model: 'Fusion 2',
  year: 2017,
  averageSpeed: 150,
  volumeFuel: 2,
  averageFuel: 0.5,
  drivers: ['John', 'Alice', 'Bob'],
  showInfo: function () {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    });
  },
  addDriver: function (driver) {
    this.drivers.push(driver);
  },
  checkDriver: function (driver) {
    console.log(this.drivers.includes(driver));
  },
};

auto.addDriver('Adam');
auto.showInfo();

auto.checkDriver('Bob');

// * task 2
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//  Для виведення часу на екран.
//  Зміни часу на передану кількість секунд.
//  Зміни часу на передану кількість хвилин.
//  Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75».
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
  hours: 3,
  minutes: 24,
  seconds: 47,
  changeSeconds: function (userSeconds) {
    this.seconds = (userSeconds % 60) + this.seconds;
    if (this.seconds + userSeconds >= 60) {
      this.minutes += Math.floor(userSeconds / 60);
      if (this.seconds >= 60) {
        this.seconds -= 60 * Math.floor(userSeconds / 60);
      }
    }
  },
  changeMinutes: function (userMinutes) {
    this.minutes = (userMinutes % 60) + this.minutes;
    if (this.minutes + userMinutes >= 60) {
      this.hours += Math.floor(userMinutes / 60);
      if (this.minutes >= 60) {
        this.minutes -= 60 * Math.floor(userMinutes / 60);
      }
    }
  },
  changeHours: function (userHours) {
    this.hours += userHours;
  },

  showTime: function () {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    });
  },
};

time.changeSeconds(121);
time.changeMinutes(125);
time.changeHours(2);
time.showTime();

// * task 3
// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
//   Складання 2-х об'єктів-дробів.
//   Віднімання 2-х об'єктів-дробів.
//   Множення 2-х об'єктів-дробів.
//   Ділення 2-х об'єктів-дробів.
//   Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

// ! Які додаткові методи потрібно створити? Все вже і так працює
const fraction = {
  fraction: 0.2,
  cutFraction: function (numbersAfterComma) {
    return this.fraction.toFixed(numbersAfterComma);
  },
  addFraction: function (fractionUser, numbersAfterComma) {
    return (this.fraction + fractionUser).toFixed(numbersAfterComma);
  },
  subtractFraction: function (fractionUser, numbersAfterComma) {
    return (this.fraction - fractionUser).toFixed(numbersAfterComma);
  },
  multiplyFraction: function (fractionUser, numbersAfterComma) {
    return (this.fraction * fractionUser).toFixed(numbersAfterComma);
  },
  divideFraction: function (fractionUser, numbersAfterComma) {
    return (this.fraction / fractionUser).toFixed(numbersAfterComma);
  },
};

console.log(fraction.cutFraction(3));
console.log(fraction.addFraction(0.3, 2));
console.log(fraction.subtractFraction(0.3, 2));
console.log(fraction.multiplyFraction(0.3, 2));
console.log(fraction.divideFraction(0.3, 2));
