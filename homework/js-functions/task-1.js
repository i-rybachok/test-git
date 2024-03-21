// * task 1
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

// Стрілочна функція
const countArgs = (...args) => {
  let sumArgs = 0;
  for (let i = 0; i < args.length; i++) {
    sumArgs += 1;
  }
  return sumArgs;
};

export default countArgs;
