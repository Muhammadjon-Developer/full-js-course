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
// const sayHelloWorld = "Hello world";

// console.log(sayHelloWorld.slice(0, 6)); // Returns Hello
// console.log(sayHelloWorld.slice(6, 11)); // Returns world
// console.log(sayHelloWorld.slice(6)); // Returns world
// console.log(sayHelloWorld.slice(-5, -1)); // Returns worl we don't use this slice with negative numbers every time

// 6 - substring()
// const substring = "Substring method";

// console.log(substring.substring(0, 9)) // Returns Substring 
// console.log(substring.substring(-5, -9)); // Returns nothing because we can't use negative numbers in substring 

// 7 - substr() - this method little bit old, in current days we don't need to use this
// const substr = "Substr method";

// console.log(substr.substr(0, 6)); // Returns Substr 


// ENDI BARCHA NARSANI O'ZBEKCHA YOZAMAN KAROCHI TUSHUNGAN TUSHUNDI TUSHUNMAGAN PEREVODCHIKDAN TARJIMA QILAVERSIN 👌

// RAQAM METODLARI

// Global Object - Math = this object contains number methods. We usually use this object when we use some number methods

// 1 - round() - bu bizga sonlarimmizni yaxlidlashga yordam beradi
// const num = 10.9;
// console.log(Math.round(num)); // javob 11

// const num2 = 10.5;
// console.log(Math.round(num2)); // javob 11

// const num3 = 10.3;
// console.log(Math.round(num3)); // javob 10 


// 2 - parseInt() - bu metod ma'lumot turini number ga o'zgartirib butun sonni ko'rsatadi
// const borderWidth = "10.7px";
// console.log(parseInt(borderWidth)); // javob 10

// 3 - parseFloat() - bu metod ma'lumot turini number ga o'zgartirib yozgan sonimizni o'zgarishlarsiz ko'rsatadi
// const borderHeight = "10.7px";
// console.log(parseFloat(borderHeight)); // javob 10.7