"use strict";

/* let x = 10;
let y = x;

y = y + 5;

console.log(x);
console.log(y);

let isMarried = false;
let isArray = isMarried;

isArray = true;

console.log(isMarried);
console.log(isArray); */

/* const number = { 
  x: 10,
  y: 5
};

const newNumber = number;  // havola

newNumber.x = 15; 

console.log(number);
console.log(newNumber); */

/* function nusxaObj(obj) {
  let objNusxa = {};

  for (let key in obj) {
    objNusxa[key] = obj[key];
  }

  return objNusxa;
}

const numbers = {
  x: 10,
  y: 5,
  z: {
    a: 1,
    b: 2,
  },
};

const newNumbers = nusxaObj(numbers);

newNumbers.x = 15;
newNumbers.z.a = 10;

console.log(newNumbers);
console.log(numbers);
 */

/* const numbers = {
  x: 10,
  y: 5,
}

const newNumbers = Object.assign({}, numbers);

numbers.z = 20;

console.log(newNumbers);
 */

/* const numbers = {
  a: 1,
  b: 2,
};

const addNumber = {
  c: 3,
};

const allNumbers = Object.assign(numbers, addNumber);

console.log(allNumbers);
 */

const arr = [1, 2, 3];
const numbers = arr.slice(); // butun massiv kopiya qilish

numbers[0] = "Oybek";

console.log(arr);
console.log(numbers);

// SPREAD OPERATORI
const barcelona = ["Lewandowski", "Rapinha"];
const realMadrid = ["Mbappe", "Vinicius"];

const mixTeams = [...barcelona, ...realMadrid]; // massivlarni bir biriga qo'shish

console.log(mixTeams);