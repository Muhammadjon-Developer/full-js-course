"use strict";

const theif = {
  jacket: "black",
  height:  1.7,
  colors: {
    hair: "gray",
    style: "curley"
  },
  howOut: () => {
    console.log("Fast with help doors");
  }
}

theif.howOut();

const {hair, style} = theif.colors; // = Destruptizatsiya obyekt katilaridan qiymatlarni olish

console.log(hair);
console.log(style);

// // console.log(theif.height); // 1.7

// // Metodlar:

// // delete theif.jacket; = o'chirish metodi - object dan biror bir narsa o'chirib yuborish
// // console.log(Object.keys(theif).length); = obyektimizning kalit so'zlarini massivga olib beradi

// // let count = 0;

// // for(let key in theif) {

//   // count++;

//   // if(typeof theif[key] === "object") {
//   //   for(let i in theif[key]) {
//   //     console.log(`Property ${i} has value ${theif[key][i]}`);
//   //   }
//   // }else {
//   //   console.log(`Property ${key} has value ${theif[key]}`);
//   // }
// }

// console.log(count);