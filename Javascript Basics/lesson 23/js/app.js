"use strict";

const box = document.querySelector("#box");
const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll(".circle");
const circle = document.querySelector(".circle");
const hearts = document.querySelectorAll(".heart");
const circleWrapper = document.querySelector(".circle__wrapper");

/* box.style.backgroundColor = "red";
box.style.width = "100px";
box.style.height = "100px";
bu stillarni bitta qilib yozish ilojisi bor 👇 */

box.style.cssText = "background-color: red; width: 100px; height: 100px;"; // oddiy css ga o'xshab yozib ketaveramiz

buttons[0].style.width = "100px";
circles[1].style.backgroundColor = "yellow";
circle.style.backgroundColor = "blue";

/* for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "green";
} */

/* hearts.forEach((item) => {
  item.style.backgroundColor = "grey";
});
 */

const btn = document.createElement("button"); // element yaratish
// const text = document.createTextNode("i am text"); // oddiy text yaratish

document.body.append(btn); // body ni ichiga button nimizni qo'shish

const myCircle = document.createElement("div");

myCircle.classList.add("circle");
/* document.body.append(myCircle); // body ni ichiga button nimizni qo'shish  
circleWrapper.append(myCircle); // circleWrapper ni ichiga button nimizni qo'shish
circleWrapper.before(myCircle); // circleWrapper dan oldin qo'shish
circleWrapper.after(myCircle); // circleWrapper dan keyin qo'shish 
circles[0].before(myCircle); // circles ni eng birinchi elementidan oldin qo'shish
circles[0].after(myCircle); // circles ni eng birinchi elementidan keyin qo'shish 
circles[1].remove(); // circles ni 1 index dagi elementi o'chirib tashlandi */
// circles[1].replaceWith(myCircle); // circles ning 1 index dagi elementini o'rniga myCircle ni qo'ydik

/* circleWrapper.append(myCircle);
myCircle.innerHTML = "<pre>E</pre>"; // javascript da html dagi ma'lumotlarni yozish elementlarga
myCircle.textContent = "E"; // faqat biron-bir element ichiga text yozish uchun metod
// circleWrapper.insertAdjacentHTML("afterbegin", "<pre>E</pre>"); html elementlarini js da yozish yana bir metodi */