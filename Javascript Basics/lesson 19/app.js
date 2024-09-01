"use strict";

/* const firstName = "Oybek"; // oddiy string yaratish
const str = new String(firstName); // aslida string lar ham object dan tashkil topgan, bu eski usyl

console.log(typeof firstName);
console.log(typeof str); */

const car = {
  motor: "X",
  color: "grey",
  isAirBag: true,
  speed: () => {
    console.log(420);
  },
};

const gm = {
  isAirBag: false,
};

// 👇 Bu eski usul foydalanish maslahat berilmaydi
/* const gm = {
  isAirBag: false,
};

gm.__proto__ = car; // car object ini prototype qilib beryapmiz

console.log(gm.color); // gm da emas balki uni prototype da bor 
gm.speed(); // gm obyektidagi prototype pini hususiyati yani car object dagi
 */

// 👇 Yangi usul chotkiy karochi
/* Object.setPrototypeOf(gm, car);
console.log(gm); */

const mercedes = Object.create(car);
console.log(mercedes);