"use strict";

let startNum = 1;

// First
// while (startNum <= 10) {
//   console.log(startNum);
//   startNum++;
// }

// Second
// do {
//   console.log(startNum);
//   startNum++;
// }while(startNum <= 10) 

// 3 chinchi usul - eng ommabop usul
for (let i = 1; i <= 10; i++) {
  if(i === 8) {
    // break;
    continue;
  }
  console.log(i);
}