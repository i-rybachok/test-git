// * task 7
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

import checkPerfectNumber from './task-6.js';

function checkPerfectNumRange(min, max) {
  let PerfectNumRange = [];

  for (; min <= max; min++) {
    if (checkPerfectNumber(min)) {
      PerfectNumRange += `${min} `;
    }
  }

  return `Perfect numbers in the given range are: ${PerfectNumRange}`;
}

export default checkPerfectNumRange;
