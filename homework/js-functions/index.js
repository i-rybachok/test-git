import countArgs from './task-1.js';
import compareTwoNumbers from './task-2.js';
import calcFactorial from './task-3.js';
import concatNumbers from './task-4.js';
import calcArea from './task-5.js';
import checkPerfectNumber from './task-6.js';
import checkPerfectNumRange from './task-7.js';

// Всі функції - декларативні, окрім task-1(стрілочна) і task-5(функціональний вираз)
console.log(compareTwoNumbers(1, 2));
console.log(countArgs(1, 2, 3, 'a', {}));
console.log(calcFactorial(6));
console.log(concatNumbers(1, 4, 9));
console.log(calcArea(2, 3));
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumRange(1, 28));
