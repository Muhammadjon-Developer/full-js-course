"use strict";

// console.log("Open modal");

// function sayHelloWorld(text) {
//   console.log(text);
// }

// sayHelloWorld("Hello world!");
// sayHelloWorld("Hello Javascript!");

// function calc(a, b) {
//   console.log(a + b); // = 5 + 10 = 15, 45 + 56 = 101, 78 + 61 = 139
// }

// calc(5, 10);
// calc(45, 56);
// calc(78, 61);

// let age = 15; // Global o'zgaruvchi

// function sayMyName(name, surname) {
//   let age = 21; // Mahalliy o'zgaruvchi
//   console.log(`My name is ${name} ${surname}`); // = My name is John Smith
//   console.log(age); // Javob: 21
// }

// sayMyName("John", "Smith");
// console.log(age); // Javob: 15, chunki function ni ichidagi o'zgaruvchi chaqira olmaymiz tashqarida


// RETURN = Funksiya ishlashini to'xtatadi va javobni qaytaradi
// function calc(a, b) {
//   return a + b;
// }

// // console.log(calc(10, 5));
// // console.log(calc(65, 89));

// const sumOfAandB = calc(10, 10);
// console.log(sumOfAandB);


// FUNCTION TURLARI

// 1. - Function Declaration biz shu yergacha yuqorida faqat declaration function ni ishlatganmiz 👆 | Misol: function foo() {code...} - Script kodimiz ishlashni boshlashidan oldin yaratilgan bo'ladi, va biz unifunksiyadan oldin chaqirishimiz mumkin.


// const sumOfAandB = calc(10, 10);
// console.log(sumOfAandB);

// function calc(a, b) {
//   return a + b;
// }

// 2. - Function Expression | Misol: let foo = function() {code...} - Qachonki kodimiz ushbu funksyiaga yetib kelganda yaratiladi, faqat funksiyadan keyin chaqiriladi.

// const logger = function() {
//   console.log("Hello world!");
// }

// logger();


// 3. - Arrow Function | Misol: const foo = () => {} - O'zini shaxsiy context this mavjud emas

const calc = (a, b) => a + b;
console.log(calc(5, 2));