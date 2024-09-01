"use strict";

/* const calc = [1, 2, 3];

function logger(x, y, z) {
  console.log(x + y + z);
}

logger(...calc); // spread operatori

const arr = ["x", "y"];
const newArr = [...arr]; // arr massivining nusxasini olish

console.log(arr);
console.log(newArr);
 */

const numbers = {
  x: 10,
  y: 5,
};

const newNumbers = { ...numbers }; // obyektni kopiya qilish

console.log(numbers);
console.log(newNumbers);
