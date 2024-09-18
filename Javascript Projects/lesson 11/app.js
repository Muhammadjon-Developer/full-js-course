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
    console.log(`Speed of car ${this.name} is ${this.kph}`); // property
  };
}

Car.prototype.sayHello = function () {
  console.log(`Hello ${this.name} !`); // method
};

const mercedes = new Car("Mercedes_cls63", "Black", 300); // funksiyani constructor qilib ishlatish
const bmw = new Car("Bmw_M5_Competition", "Gray", 305); // funksiyani constructor qilib ishlatish

mercedes.sayHello();
bmw.sayHello();

mercedes.speed();
bmw.speed();

console.log(mercedes);
console.log(bmw);
