// * task 1
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const num1 = 0.1;
const num2 = 0.2;
console.log(`${(num1 + num2).toFixed(1)}`);

// * task 2
//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const string = '1';
const num = 2;
console.log(`${+string + num}`);

// * task 3
// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const gb = +prompt(`Please enter the Hb`, 10);
const mb = 820;
// 1 gb = 1000 mb
const files = (gb * 1000) / mb;
console.log(`You can download ${files.toFixed(0)} files`);

// * task 4
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

// * task 5
// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const threeNum = +prompt(`Please enter the three-digit number`, 123);
const firstDigit = Math.floor(threeNum / 100);
const secondDigit = Math.floor((threeNum % 100) / 10);
const thirdDigit = threeNum % 10;
console.log(`The reversed number: ${thirdDigit}${secondDigit}${firstDigit}`);

// * task 6
// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const sum = +prompt(`Please enter the sum of the investing`, 10000);
const years = 2 / 12; // we need years, not months
const interest = 0.05;
// income = (sum * (1 + year-interest) ** years) - sum
const income = (sum * (1 + interest) ** years - sum).toFixed(2);
console.log(`Your income is: ${income}`);
