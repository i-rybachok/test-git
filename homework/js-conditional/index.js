// * task 1
// Запитай у користувача його вік і визначи, ким він є:
// дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const userAge = +prompt(`Будь даска, введіть Ваш вік`, 55);

if (userAge < 0 || isNaN(userAge)) {
  throw new Error(`Неправильно введені дані`);
} else if (userAge >= 60) {
  console.log(`Пенсіонер`);
} else if (userAge >= 18) {
  console.log(`Дорослий`);
} else if (userAge >= 12) {
  console.log(`Підліток`);
} else if (userAge >= 0) {
} else {
  console.log(`Дитина`);
}

// * task 2
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const symbols = `)!@#$%^&*(`;
const number = +prompt(`Будь даска, введіть число від 0 до 9`, 9);

if (number >= 0 && number <= 9 && !isNaN(number)) {
  console.log(`${symbols[number]}`);
} else {
  throw new Error(`Неправильно введені дані`);
}

// * task 3
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let startRangeNum = +prompt(`Введіть початок діапазону`, 1);
const endRangeNum = +prompt(`Введіть кінець діапазону`, 11);

let sum = 0;
for (; startRangeNum <= endRangeNum; startRangeNum++) {
  sum += startRangeNum;
}

console.log(`Сума чисел = ${sum}`);

// * task 4
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const firstNum = +prompt(`Введіть перше число`, 40);
const secondNum = +prompt(`Введіть друге число`, 36);

let maxDivisor = 1;
if (isNaN(firstNum) || isNaN(secondNum)) {
  throw new Error(`Неправильно введені дані`);
} else {
  for (let i = 1; i <= firstNum && i <= secondNum; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      maxDivisor = i;
    }
  }
}

console.log(`Найбільший дільник: ${maxDivisor}`);

// * task 5
// Запитай у користувача число і виведи всі дільники цього числа.
const numberForDivision = +prompt(`Введіть число`, 24);
let divisors = [];

for (let i = 1; i < numberForDivision; i++) {
  if (numberForDivision % i === 0) {
    divisors += `${i}, `;
  }
}
divisors += `${numberForDivision}.`;

console.log(`Дільника числа ${numberForDivision}: ${divisors}`);

// * task 6
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const fiveDigitNumber = prompt(`Введіть п'ятизначне число`, 12321);

if (
  isNaN(fiveDigitNumber) ||
  fiveDigitNumber < 10000 ||
  fiveDigitNumber > 99999
) {
  throw new Error(`Неправильно введені дані`);
} else if (
  !(
    fiveDigitNumber[0] === fiveDigitNumber[4] &&
    fiveDigitNumber[1] === fiveDigitNumber[3]
  )
) {
  console.log(`Число не є паліндромом`);
} else {
  console.log(`Число є паліндромом`);
}

// * task 7
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
const sumOfShopping = +prompt(`Введіть суму покупки`, 123);

if (sumOfShopping <= 0 || isNaN(sumOfShopping)) {
  throw new Error(`Неправильно введені дані`);
} else if (sumOfShopping < 200) {
  console.log(`Знижки немає`);
} else if (sumOfShopping < 300) {
  console.log(`Знижка 3%`);
} else if (sumOfShopping < 500) {
  console.log(`Знижка 5%`);
} else {
  console.log(`Знижка 7%`);
}

// * task 8
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let userNumbers = [];
let sumPositive = 0;
let sumNegative = 0;
let sumZero = 0;
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 10; i++) {
  let userNumber = +prompt(`Введіть ${i} число`, 12);
  if (isNaN(userNumber)) {
    throw new Error(`Неправильно введені дані`);
  }
  userNumbers[i - 1] = userNumber;
  if (userNumber % 2 === 0) {
    sumEven += 1;
  } else {
    sumOdd += 1;
  }

  if (userNumber === 0) {
    sumZero += 1;
  } else if (userNumber > 0) {
    sumPositive += 1;
  } else {
    sumNegative += 1;
  }
}

console.log(
  `Ви маєте ${sumPositive} додатніх, ${sumNegative} від'ємних, ${sumZero} нулів, ${sumEven} парних і ${sumOdd} непарних`
);

// * task 9
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let userAnswear = true;
let daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednsday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

while (userAnswear) {
  for (let i = 0; i < 7; i++)
    if (userAnswear) {
      if (i === 7) {
        i === 0;
      }
      userAnswear = confirm(
        `It is ${daysOfTheWeek[i]}. Do you want to see the next day of the week?`
      );
    } else {
      break;
    }
}

// * task 10
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його
// наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача
//  «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100.
//  І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
let range = 100 / 2;
let start = 100 / 2;

const num = +prompt(`Будь даска, введіть число від 0 до 100`, 55); //можно і alert, оскільки ми число вгадуємо, і ці дані не потрібні для коду
let question = confirm(`Ваше число >= ${range}?`);

let i = 0;
while (i <= 5) {
  start /= 2;

  if (question) {
    question = confirm(`Ваше число > ${range + start}?`);
    range += start;
  } else {
    question = confirm(`Ваше число > ${range - start}?`);
    range -= start;
  }

  i++;
}

if (question) {
  alert(`Ваше число: ${Math.ceil(range)}`);
} else {
  alert(`Ваше число: ${Math.floor(range)}`);
}

// * task 11
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// * task 12
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

const checkDate = (date) => {
  if (isNaN(date) || date <= 0) {
    throw new Error('Wrong data');
  }
};

const userDay = +prompt(`Будь даска, введіть день дати`, 20);
checkDate(userDay);
const userMonth = +prompt(`Будь даска, введіть місяць дати`, 3);
checkDate(userMonth);
const userYear = +prompt(`Будь даска, введіть рік дати`, 2024);
checkDate(userYear);

const dateArray = [userDay, userMonth, userYear];

if (userDay >= 32 || userMonth >= 13) {
  throw new Error(`Неправильно введена дата`);
}

// Спочатку перевіряємо все з високосними роками (лютий = 29 днів, і не 28; рік націло ділиться на 4)
if (dateArray[0] === 29 && dateArray[1] === 2 && dateArray[2] % 4 === 0) {
  dateArray[1] += 1;
  dateArray[0] = 1;
} else if (dateArray[0] === 28 && dateArray[1] === 2 && dateArray[2] % 4) {
  dateArray[1] += 1;
  dateArray[0] = 1;
  // Далі перевіряємо кінець року
} else if (dateArray[0] === 31 && dateArray[1] === 12) {
  dateArray[2] += 1;
  dateArray[1] = 1;
  dateArray[0] = 1;
  // Перевіряємо кінець місяців
} else if (dateArray[0] === 30 && dateArray[1] % 2 === 0) {
  dateArray[1] += 1;
  dateArray[0] = 1;
} else if (dateArray[0] === 31 && dateArray[1] % 2 === 1) {
  dateArray[1] += 1;
  dateArray[0] = 1;
  // Звичайна дата (місяць або рік не закінчується)
} else {
  dateArray[0] += 1;
}

console.log(`Наступний день: ${dateArray}`);
