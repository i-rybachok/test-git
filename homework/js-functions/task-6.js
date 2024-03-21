// * task 6
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function checkPerfectNumber(number) {
  let sumDivisors = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sumDivisors += i;
    }
  }

  return number === sumDivisors;
}

export default checkPerfectNumber;
