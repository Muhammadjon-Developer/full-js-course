"use strict";

// Number
let number = 3.6; // Data Type = Number
// console.log(8 / 0); // Infinity
// console.log(-8 / 0); // -Infinity
// console.log("Jack" * 5); // NaN

// String
const clientName1 = "Sam";
const clientName2 = "Bob";
const clientName3 = `Luke`;

// Boolean
const isMarried = false;
const isCircleEarth = true;

// true = ha | rost | tog'ri
// false = yo'q | yolg'on | notog'ri

// null
// console.log(clientAge) // error: clientAge is not defined = null because we did not create the clientAge variable

// undefined
let und;
// console.log(und); // javob: undefined chunki bizning o'zgaruvchimizning qiymati yo'q

// Object
const thief = {
  //key: value
  age: 30, // number
  jacket: "black", // string
  isLong: false, // boolean
};

// console.log(thief) // mana qanday qilib obyektni kalitlari + javob lari bilan olish
// console.log(thief.age) // age kalitining qiymatini olish
// console.log(thief.jacket) // jacket kalitining qiymatini olish
// console.log(thief.isLong) // isLong kalitining qiymatini olish
// console.log(thief['age']) // age kalitini qiymatini olish - method - 2
// console.log(thief['jacket']) // jacket kalitining qiymatini olish - method - 2
// console.log(thief['isLong']) // isLong kalitining qiymatini olish - method - 2    BETTER TO USE FIRST METHOD

// Array
//                0       1        2      3  4   5
const colors = ["red", "black", "green", 10, [], {}]; // massiv doim 0 dan boshlab sanaydi
console.log(colors[0]); // javob red
