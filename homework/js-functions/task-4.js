// * task 4
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function concatNumbers(numOne, numTwo, numThree) {
  const stringOne = numOne.toString();
  const stringTwo = numTwo.toString();
  const stringThree = numThree.toString();

  return stringOne + stringTwo + stringThree;
}

export default concatNumbers;
