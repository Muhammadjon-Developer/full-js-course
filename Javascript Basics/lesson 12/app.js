"use strict";

// 1 - length
// const user = "Abdulaziz"; // 9
// const user2 = "Oybek"; // 5

// console.log(user.length); // Returns the number of characters (elements) in a string

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 10 elements

// console.log(arr.length);

// let person = "Peter";
// // console.log(person[2]); // t, count will start from 0

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(array[5]) // Returns 6, because count will start from 0



// 2 - toUpperCase()

// REMEMBER: All methods returns as a new string it doesn't change the original string

// let studentName = "thomas";
// console.log(studentName.toUpperCase()); // thomas = THOMAS

// 3 - toLowerCase()

// let personName = "THOMAS";
// console.log(personName.toLowerCase()); // THOMAS = thomas



// 4 - indexOf()
// const greeting = "Hello"; // Count will start from 0

// console.log(greeting.indexOf("o")); // The index of this letter o it's 4
// console.log(greeting.indexOf("r")); // Returns -1 = false because this letter is not exist in the greeting variable
// console.log(greeting.indexOf("w")); // Returns -1 = false because this letter is not exist in the greeting variable
// console.log(greeting.indexOf("p")); // Returns -1 = false because this letter is not exist in the greeting variable


// 5 - slice() 
const sayHelloWorld = "Hello world";

console.log(sayHelloWorld.slice(0, 6)); // Returns Hello
console.log(sayHelloWorld.slice(6, 11)); // Returns world
console.log(sayHelloWorld.slice(6)); // Returns world
console.log(sayHelloWorld.slice(-5, -1)); // Returns worl we don't use this slice with negative numbers every time