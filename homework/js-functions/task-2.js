// * task 2
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function compareTwoNumbers(numberOne, numberTwo) {
  if (typeof numberOne !== 'number') {
    throw new Error('Неправильно введені дані');
  }

  switch (true) {
    case numberOne > numberTwo: {
      return 1;
    }
    case numberOne < numberTwo: {
      return -1;
    }
    default: {
      return 0;
    }
  }
}

export default compareTwoNumbers;
