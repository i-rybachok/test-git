// * task 3
// Напиши функцію, яка обчислює факторіал переданого їй числа.
function calcFactorial(userNumber) {
  if (isNaN(userNumber)) {
    throw new Error('Wrong data');
  } else if (userNumber !== 1) {
    return userNumber * calcFactorial(userNumber - 1);
  } else {
    return 1;
  }
}

export default calcFactorial;
