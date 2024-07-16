"use strict";

// 1 - length - Satr, massiv uzunligini qaytaradi
// const user = "Abdulaziz"; // 9
// const user2 = "Oybek"; // 5

// console.log(user.length); // Satrdagi element lar sonini qaytaradi

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 10 ta element

// console.log(arr.length);

// let person = "Peter";
// // console.log(person[2]); // t, sanoq 0 dan boshlanadi

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(array[5]) // 6 qaytaradi, chunki sanoq 0 dan boshlanadi



// 2 - toUpperCase()- satr ni barcha harflarini katta qilib beradi

// REMEMBER: Barcha metodlar yangi o'zgarishga ega satr qaytaradi original satrni o'zgartirmaydi

// let studentName = "thomas";
// console.log(studentName.toUpperCase()); // thomas = THOMAS

// 3 - toLowerCase() - satr ni barcha harflarini kichkina qilib beradi

// let personName = "THOMAS";
// console.log(personName.toLowerCase()); // THOMAS = thomas



// 4 - indexOf() - satrdagi harflarni indeksini qaytaradi
// const greeting = "Hello"; // Sanoq 0 dan boshlanadi

// console.log(greeting.indexOf("o")); // o harfini indeksi 4
// console.log(greeting.indexOf("r")); // Javob: -1 = false chunki o'zgaruvchimizda unday harf yo'q
// console.log(greeting.indexOf("w")); // Javob: -1 = false chunki o'zgaruvchimizda unday harf yo'q
// console.log(greeting.indexOf("p")); // Javob: -1 = false chunki o'zgaruvchimizda unday harf yo'q


// 5 - slice() - satrni bir qismini kebi olishga yordam beradi
// const sayHelloWorld = "Hello world";

// console.log(sayHelloWorld.slice(0, 6)); // Javob: Hello
// console.log(sayHelloWorld.slice(6, 11)); // Javob: world
// console.log(sayHelloWorld.slice(6)); // Javob: world
// console.log(sayHelloWorld.slice(-5, -1)); // Javob: worl. Biz slice() metodi ni har doim ham negativ raqamlar bilan ishlatavermaymiz

// 6 - substring() - satrni bir qismini kebi olishga yordam beradi huddi slice() ga o'xshab ammo negativ qaramlar bilan ishlamaydi

// const substring = "Substring method";

// console.log(substring.substring(0, 9)) // Javob: Substring 
// console.log(substring.substring(-5, -9)); // Javob: hech narsa qaytarmaydi chunki biz negativ raqam ishlatganmiz

// 7 - substr() - bu ham substringni bratishkasi (bu metod sal eskiroq, hozirgi kunlarda biz uni ishlatmaymiz)
// const substr = "Substr method";

// console.log(substr.substr(0, 6)); // Returns Substr 

// RAQAM METODLARI

// Global Object - Math = bu global obyekt o'z ichida ko'plab number metodlarini jamlaydi shunga bazi bir number metodlarini ishlatishimmiz uchun biz shu obyektni chaqirishmmiz kerak

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