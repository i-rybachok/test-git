// * Normal level

// task 1
const userName = prompt("What's your name?", 'Bob'); // here I used a default parameter (the second one)
let greeting = 'Hello, ';
greeting += userName; // here I used '+=' to concatenate
console.log(greeting);

// task 2
const userAge = prompt('What is your birth year?'); // here i didn't use a default parameter
let currentYear = 2024;
console.log('You are ' + (currentYear - userAge) + ' years old'); // here I used '+' for concatenation (the space won;t be added unless i do it myself)

// task 3
const squareSide = prompt("What is the length of square's one side?", 3);
console.log('The perimeter is', squareSide * 4); // here I used ',' to concatenate (the space will be added by default)

// * Upper level

// task 1
const radius = prompt('Enter the radius of a circle, please', 4);
const PI = 3.14; //I named the variable in uppercase beacause it is an primitives, it is an unchangable mathemetical law
console.log('The approximate area of a circle is ' + radius * radius * PI); //the area of square = radius^2 * PI

// task 2
const distance = prompt('Enter the distance between cities (in km)', 100);
const time = prompt('Enter the time of the trip (in hours)', 3);
const speed = distance / time;
console.log('The minimum speed should be ' + speed + '(km/h)');

// task 3
const dollars = prompt('Enter the euros', 100);
const euros = dollars * 0.91;
console.log('In euros it will be: ' + euros);

// * Usage of prompt, alert and confirm

// prompt was used in previous exercises

// alert
const a = alert('Show a message'); // it will only show a message in a module window

// confirm
const b = confirm('Do you like jazz?'); //it asks only true/false questions
