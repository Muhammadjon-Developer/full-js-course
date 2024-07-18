"use strict";

const theif = {
  jacket: "black",
  height:  1.7,
  colors: {
    hair: "gray",
    style: "curley",
  }
}

console.log(theif.height);

delete theif.jacket; // o'chirish metodi - object dan biror bir narsa o'chirib yuborish

console.log(theif);