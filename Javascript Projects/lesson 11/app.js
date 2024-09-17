"use strict";

// const number = new Number(5);
// console.log(number);

// const func = new Function(); // yangi funksiya (anomim funksiya = anonymous), lekin juda eski yo'l bundan hechkim foydalanmaydi
// // console.log(func);
// console.dir(func);  // prototype, constructor

function Car(name, color, kph) {
  this.name = name;
  this.color = color;
  this.isAirBag = true;
  this.kph = kph;
  this.speed = () => {
    console.log(`Speed of car ${this.name} is ${this.kph}`);
  };
}

const mercedes = new Car("Mercedes_cls63", "Black", 250); // funksiyani constructor qilib ishlatish
const bmw = new Car("Bmw_M5_Competition", "Gray", 200); // funksiyani constructor qilib ishlatish

console.log(mercedes);
console.log(bmw);
