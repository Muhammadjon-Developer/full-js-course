"use strict";

const btn = document.querySelector("#btn");


function myAnimation() {
  const car = document.querySelector(".car");
  let pos = 0;

  const timerId = setInterval(frame, 10);

  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      console.log(pos);
      pos++;
      car.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);



// let timerId;
// let i = 0;

// btn.addEventListener("click", () => {
//   // timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500); // optimizatsiya
// });

/* setTimeout(() => {
  console.log("Set timeout");
}, 1000); // 1000 millisekund = 1 sekund */

// clearTimeout(timerId); // setTimeoutni o'chirish, (to'xtatish)

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId); // to'xtatish
//   }
//   console.log("Set timeout");
//   i++;
// }

/* setTimeout(
  (text) => {
    console.log(text);
  },
  1000,
  "Set timeout"
);
 */

// let id = setTimeout(function log() {
//   console.log("Hello log");
//   id = setTimeout(log, 500);
// }, 500);
