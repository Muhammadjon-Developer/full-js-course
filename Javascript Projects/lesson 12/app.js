// "use strict";

// ****************** --------- ***********************
// 1) - Oddiy funksiyani contexti ya'ni this xar doim window global obyektiga qaram bo'ladi ya'ni osiladi. Agarda qat'iy rejim yoqiq bo'lsa (use srtict) context undefinedga teng.

// context this - xar doim nimadurga qaram(osiladi)

/* function logger(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

logger(1, 2); */

// ****************** --------- *******************
// 2) - Context this obyektning ichidagi metodda - obyektni o'ziga teng

/* const obj = {
  x: 10,
  y: 15,
  sum: function () {
    console.log(this);
  },
};

obj.sum(); */

// ***************** --------- ***********************
// 3) - Context this funksiya konstruktorda yangi obyektni ekzemplyariga teng

function Car(name, color) {
  this.name = name;
  this.color = color;
  this.isAirBag = true;
}

const ferrari = new Car("Ferrari", "Red");
console.log(ferrari);

// ***************** --------- ***********************
// Closure

/* const  a = 1;

function log() {
  const a = 2;
  console.log(a);
}

log(); */
