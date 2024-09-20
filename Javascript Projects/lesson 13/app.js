"use strict";

// function logger(speed) {
//   console.log(this);
//   console.log(
//     `My car is ${this.name}, and color is ${this.color}. Max speed is ${speed}km/h`
//   );
// }

// const car = {
//   name: "Banan",
//   color: "Black",
// };

// // call, apply, bind
// logger.call(car, 300); // parameterlarga argument beryotgan call metodida shunchaki , bilan beriladi
// logger.apply(car, [300]); // parametrlagra argument beryotganda apply metodida massiv ichiga beriladi

// logger();

// bind - bizga yangi funksiya qaytaradi
// bind = ulash

/* function calc(number) {
  return this * number;
}

const multiple2 = calc.bind(2);
console.log(multiple2(10));
console.log(multiple2(15));
 */

const btn = document.querySelector("button");

// function () {} - bu holatda ya'ni oddiy(declaration) funksiyada context this elementni o'ziga teng, unchalik ishlatilinmaydi
// () => {} - bu holatda ya'ni strelkali(arrow) funksiyada context this global window obyektiga teng, pashti xar doim shu usul ishlatilinadi

// btn.addEventListener("click", (e) => {
//   e.target.style.width = "400px"; // event target ishlatsak bo'ladi
// });


// arrow ya'ni strelkali funksiyada hech qanday o'zining shaxsiy contextiga ega emas, u xar doim o'zini tepasidagi context ga qaram bo'ladi 

// const obj = {
//   x: 10,
//   y: 15,
//   sum: function () {
//     const logger = () => {
//       console.log(this.x); // 10
//       console.log(this.y); // 15
//     };
//     logger();
//   },
// };

// obj.sum();


