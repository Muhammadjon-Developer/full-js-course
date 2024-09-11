"use strict";

// const now = new Date(); // hozirgi data ni olish = yil, oy, sana, soat, minut, sekund
// console.log(now);

// const past = new Date(0);
// console.log(past); // javascript da sanoq shu vaqtdan boshlab hisoblanadi

// const getFullYear = new Date().getFullYear(); // hozirgi to'liq yilni o'zini olish
// console.log(getFullYear);

// const getMonth = new Date().getMonth(); // hozirgi oyni olish = sanoq 0 dan boshlanadi
// console.log(getMonth);

// const getDate = new Date().getDate(); // hozirgi sanani olish
// console.log(getDate);

// const getDay = new Date().getDay(); // hozirgi kunni olish | Yakshanba = 0
// console.log(getDay);

// const getTime = new Date().getTime(); // hozirgi vaqtni millisekundlarda olish
// console.log(getTime);

// const getHours = new Date().getHours(); // hozirgi soatni olish
// console.log(getHours);

// const getMinutes = new Date().getMinutes(); // hozirgi minutni olish
// console.log(getMinutes);

// const getMilliseconds = new Date().getMilliseconds(); // hozirgi millisekundlarni olish
// console.log(getMilliseconds);

// Agarda UTC so'zini qo'shsak javascript bizga time zone - (vaqt zonasi) bo'yicha Date larni ko'rsatadi

// const getUTCHours = new Date().getUTCHours(); // hozirgi soatni time zone - (vaqt zonasi) bo'yicha olish
// console.log(getUTCHours);

// const now = new Date();
// // console.log(now.getTime());
// console.log(now.setHours(16)); // soatimizni 18 qilib qo'ydik, millisekundlarda ko'rsatiladi
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let something = i ** 3;
}

let end = new Date();

// console.log(start.getTime());
// console.log(end.getTime());

alert(`Loop completed in ${end - start} in milliseconds`);
