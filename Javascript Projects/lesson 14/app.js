"use strict";

class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  calcSpeed() {
    return this.speed * 100;
  }
}

// Car ga voris qilamiz ya'ni Spark classi Car classi dan vorislanadi
class Damas extends Car {
  constructor(name, color, speed, isAirbag, extraBallon) {
    // biz ga Car classi dan kerakli hususiyatlarni va yangi hususiyatlarini yozamiz
    super(name, color, speed); // voris class dan husisuyatlarni olish uchun super constructor ishlatamiz va u bizda doimo birinchida turishi kerak = name, color
    this.isAirbag = isAirbag;
    this.extraBallon = extraBallon;
  }

  logger() {
    console.log(
      `Name of car ${this.name}, color is ${this.color}. Is air bag there ${this.isAirbag}. Is there extra ballon ${this.extraBallon}`
    );
  }
}

/* const mercedes = new Car("Mercedes-Benz", "Grey", 300);
const bmw = new Car("BMW", "Black", 305);

console.log(mercedes.calcSpeed());
console.log(bmw.calcSpeed());
console.log(mercedes);
console.log(bmw); */

const aboutCar = new Damas("Damas", "White", 105, true, 5);
aboutCar.logger();
console.log(aboutCar.calcSpeed());
console.log(aboutCar); // prototype = Car

