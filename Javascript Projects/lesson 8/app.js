"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth; // userga ko'rinadigan width to'liq elementni o'zini width ni o'lchami
// const height = box.clientHeight; // userga ko'rinadigan height to'liq elementni o'zini height ni o'lchami
// console.log(width);
// console.log(height);

// offsetWidth va offsetHeight dan unchalik ko'p foydalanilmaydi clientHeight, clientWidth bilan bir-xil narsa faqat offser border larni ham qo'shib hisolaydi

// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width);
// console.log(height);

// scrollHeight va scrollWidth, scrollWidth unchalik ushlatilmaydi, scrollWidth ni huddi scrollHeight ga o'xshab ishlatish mumkin
// const height = box.scrollHeight; // scroll ni ham qo'shib hisoblaydi
// console.log(height);

// btn.addEventListener("click", () => {
// box.style.height = box.scrollHeight + "px";
// console.log(box.scrollTop); // hozir turgan eng yuqori nuqtagacha shuncha px
// });

// const style = window.getComputedStyle(box); // o'z html elementimizni computed stillarini js dan olish. Computed styles = Default stillar
// console.log(style); // barcha computed stillar
// console.log(style.display); // display stilini value si

console.log(document.documentElement.clientWidth); // butun website ning width
