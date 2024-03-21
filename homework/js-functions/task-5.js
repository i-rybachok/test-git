// * task 5
// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// Функціональний вираз (зробила для прикладу)
// ! Але краще так не робити!

const calcArea = function (width, height) {
  if (
    (isNaN(width) && isNaN(height)) ||
    (typeof width !== 'number' && typeof height !== 'number') ||
    (isNaN(width) && typeof height !== 'number') ||
    (isNaN(height) && typeof width !== 'number')
  ) {
    throw new Error('Wrong data');
  } else if (isNaN(width) || typeof width !== 'number') {
    return height * height;
  } else if (isNaN(height) || typeof height !== 'number') {
    return width * width;
  } else {
    return width * height;
  }
};

export default calcArea;
