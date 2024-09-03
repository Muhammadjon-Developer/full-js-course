'use strict'

// console.log(document.head) // butun html dagi head tegi va u ni ichidagi teglar ham
// console.log(document.body) // butun html dagi body tegi va u ni ichidagi teglar ham
// console.log(document.body.childNodes) // butun html dagi body tegi va u ni ichidagi teglar ham NodeList massivi ichida
/* for(let node of document.body.childNodes) { // node listdan text larni chiqarib tashlab elementlarni o'zini qaytaradi
  if(node.nodeName == "#text") {
    continue
  }
  console.log(node);
} */
// console.log(document.body.firstChild) // text
// console.log(document.body.lastChild) // script
// console.log(document.body.firstElementChild) // overlay classli elementni qaytaradi
// console.log(document.body.lastElementChild) // script elementi
// console.log(document.querySelector('#btn').parentNode.parentNode) // ota elementni qaytaradi
// console.log(document.querySelector('#btn').parentElement) // parent elementni qaytaradi (o'zini)
// console.log(document.querySelector('[data-current="b"]').nextSibling) // bu elementdan keyingi elementni yoki bo'shliqni olib beradi
// console.log(document.querySelector('[data-current="b"]').previousSibling) // bu elementdan oldingi elementni yoki bo'shliqni olib beradi
// console.log(document.querySelector('[data-current="b"]').nextElementSibling) // bu elementdan keyingi elementni olib beradi hech qanday bo'shliqlarsiz
// console.log(document.querySelector('[data-current="b"]').previousElementSibling) // bu elementdan oldingi elementni olib beradi hech qanday bo'shliqlarsiz
