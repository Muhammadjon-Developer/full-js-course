"use strict";

const car = {
  name: "mercedes",
  color: "grey",
  extra: {
    tyre: 1,
    airBag: true,
  }
};

// Obyektni chuqur klonlash
const clone = JSON.parse(JSON.stringify(car)); // obyektni to'liq klonlash, ya'ni uchidagi obyektlar bilan ham klonlash
clone.extra.tyre = 2;

console.log(clone);
console.log(car);

/* const objToJSON = JSON.stringify(car); // obyektni json o'giradi = stringify();
const jsonToObj = JSON.parse(objToJSON); // json ni obyektga o'giradi = parse();

console.log(objToJSON);  
console.log(jsonToObj);
 */




