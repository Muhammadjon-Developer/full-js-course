"use strict";

// Old way - Eski usullar
/* const box = document.getElementById("box");
const buttons = document.getElementById("button"); // massiv qaytaradi har doim
const circles = document.getElementsByClassName("circle"); // massiv qaytaradi har doim

console.log(box);
console.log(buttons);
console.log(circles);
 */

// New way - Yangi usullar
const box = document.querySelector("#box");
// console.log(box);

const buttons = document.querySelector("#button"); // massiv qaytaradi har doim
// console.log(buttons);

const circles = document.querySelector(".circle"); // massiv qaytaradi har doim
// console.log(circles);

const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

const hearts = wrapper.querySelectorAll(".heart"); // butun document ichidan emas faqatgina wrapper dan qidiradi
// console.log(hearts);

hearts.forEach((item) => {
  console.log(item);
});
