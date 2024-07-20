"use strict";

// let x = 10;
// let y = x; // = 10

// y = y + 5;

// console.log(x); // Javob: 10
// console.log(y); // Javob: 15


const number = {
  x: 10,
  y: 5 
}

const newNumber = number; // nusha emas havola

newNumber.x = 15;

console.log(number); 
console.log(newNumber);