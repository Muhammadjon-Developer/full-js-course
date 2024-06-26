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
// console.log(clientAge) // you will get an error message: clientAge is not defined = null because we did not create the clientAge variable

// undifined
let und;
// console.log(und); // there we will get undifined message from console because we have created a variable, but not assigned a value to it

// Object
const thief = {
  //key: value
  age: 30, // number
  jacket: "black", // string
  isLong: false, // boolean
};

// console.log(thief) // how to get full object with keys + values
// console.log(thief.age) // how to get an age key value
// console.log(thief.jacket) // how to get an jacket key value
// console.log(thief.isLong) // how to get an isLong key value
// console.log(thief['age']) // how to get an age key value - method - 2
// console.log(thief['jacket']) // how to get an jacket key value - method - 2
// console.log(thief['isLong']) // how to get an isLong key value - method - 2    BETTER TO USE FIRST METHOD


// Array
//                0       1        2      3  4   5
const colors = ["red", "black", "green", 10, [], {}];   // the array always counts from 0
console.log(colors[0]);  // you will get a red 
