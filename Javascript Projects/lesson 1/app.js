"use strict";

const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length) //classlar length ni anirlash
// console.log(btns[0].classList.item(0)) // blue - classlarni index si yordamida ko'rsatish

// btns[1].classList.add('blue') // class qo'shish
// btns.[1].classList.add('blue', 'red') // 2 ta class qo'shish
// console.log(btns[1])
// btns[0].classList.remove('blue') // class o'chirish
// btns[0].classList.toggle('blue') // shunday nomli class bo'lsa o'chirib tashlaydi, bo'lmasa qo'shadi

// btns[0].classList.add('red')

// if(btns[0].classList.contains('red')) { // contains o'z ichiga qamrab olsa yani biron-bir class element ichida bo'lsa bizning kodimizni alamga oshiradi
//   console.log('yeap')
// }

btns[0].addEventListener("click", () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red')
  // } else {
  //   btns[1].classList.remove('red')
  // }
  btns[1].classList.toggle("red");
});
