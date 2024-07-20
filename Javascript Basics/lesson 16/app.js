"use strict";

// length:
// const arr = ["apple", "orange", "banana", "lemon", "grape"];
// console.log(arr.length); // massivda nechta elemnt borligi aniqlab beradi


// METODLAR:

// 1 - pop() - massvining ohirgi elementini olib tashlaydi
// const arr = ["apple", "orange", "banana", "lemon", "grape", "cucumber", "carrot"];
// array.pop();
// console.log(array);


// 2 - push() - massvining ohirga elementini qo'shadi 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.push(10);
// console.log(arr);


// shift() va unshift() dan foydalanish tavsiya etilmaydi nega ? : Tassavur qiling serverdan juda katta bir massivda ma'lumotlar kelyapti agarga siz u massivdan biror-bir elemnt qo'shib yoki olib tashlasangiz massiv o'z elementlarini indeksini yangilashga vaqt sariflaydi va bu tezlikka tasir qiladi. Lekin pop() va push() metodlaridan juda keng foydalinaladi chunki u metodlar massivga faqatgina ohiriga element qo'shadi yokida olib tashlaydi holos va bu umuman zinoysiz

// 3 - shift() - massvining boshidagi elementini olib tashlaydi
// const arr = ["salom", "moshina", "uy", "uzbekistan", "kod", "javascript"];
// arr.shift();
// console.log(arr);

// 4 - unshift() - massvining boshiga element qo'shadi
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.unshift(0);
// console.log(arr);

// for bilan itaratsiya
// const array = ["olma", "karam", "baqlajon", "sabzi", "bodring", "salad", "osh", "somsa", "shashlik", "o'rik"];

// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for of bilan itaratsiya
// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let value of massiv) {
//   console.log(value);
// }


// 5 - forEach() - massivlar bilan eng ko'p ishlatiladigan tsikl usuli
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach((item, index, arr) => {
//   console.log(`${index}: ${item} into arr ${arr}`);
// })


// 6 - split() - matin ma'lumot turini massivga o'zgartiradi, 7 - sort() - ma'lumotlarni ingliz alfavit ketma-ketligi bo'yicha ko'rsatadi
// const movies = prompt("What's your favorite movies", "");
// const userMovies = movies.split(", "); // har bir probel yoki , keyin massivga qo'shiladi o'sha yozgan narsamiz
// userMovies.sort(); // ma'lumotni ingliz alfavit ketma-ketligi bo'yicha ko'rsatadi
// console.log(userMovies);

// sort() - metodi raqamlar bilan:
// const numbers = [2, 12, 8, 30];
// numbers.sort(); // Eslab qolamiz sort() metodini raqamlar bilan ishlatayotganda u faqatgina raqamning birinchi soniga qarab hisoblaydi
// console.log(numbers); // javob: 12, 2, 30, 8 - bu yerda 12 sonida boshida 1 soni bor va sort() uni birinchiga qo'yadi va hokazo...

// AMMO BU NI TO'G'IRLASHNING 2 USULI BOR:
// 1 Usul - Biz sort() metodi sonlarni o'sish tartibida ko'rsatishi uchun function yozamiz:
// const raqamlar = [2, 12, 8, 30];
// raqamlar.sort(compareFn); // function nimizni berib qo'yamiz ammo chaqirmaymiz
// console.log(raqamlar); // 2, 8, 12, 30

// function compareFn(a, b) {
//   return a - b;
// }

// 2 Usul - Biz sort() metodi sonlarni o'sish tartibida ko'rsatishning 2 chi usuli uchun sort() ichiga arrow function yozamiz:
const raqamlar = [2, 12, 8, 30];
raqamlar.sort((a, b) => a - b); // function nimizni berib qo'yamiz ammo chaqirmaymiz
console.log(raqamlar);


