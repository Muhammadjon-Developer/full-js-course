"use strict";

// console.log("Open modal");

// declaration function
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

let age = 15; // global variable

function sayMyName(name, surname) {
  let age = 21; // local variable
  console.log(`My name is ${name} ${surname}`); // = My name is John Smith
  console.log(age); // Answer: 21
}

sayMyName("John", "Smith");
console.log(age); // Answer: 15, if you calling to age variable in the function Error: age is not defined because it is local variable we can use it only in inside the function