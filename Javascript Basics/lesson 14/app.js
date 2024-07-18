// "use strict";

function first(cb) {
  // code
  setTimeout(() => {
    console.log(1);
    cb();
  }, 1000);  // 1000 millisekund = 1 sekund
  
}

function second() {
  // code
  console.log(2);
}

first(second);

// CallBack nima ? - biror bir function nimiz ishga tushganidan keyin ishlaydigan function dir

// function edu(subject, callback) {
//   console.log(`I want to teach ${subject}`);
//   callback();
// }

// function done() {
//   console.log("That's great");
// }

// edu("JavaScript", done); // hech qachon callback function ni chaqirmaymiz chunki biz uni chqirsak u avtomatik tarzda ishlab ketadi, ammo bizga u biror bir function dan keyin ishlashi kerak