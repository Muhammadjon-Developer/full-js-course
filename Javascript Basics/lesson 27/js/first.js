'use strict'

const p = document.querySelectorAll('h1')
console.log(p)

// Javascript faylini boshqa bir javascript faylidan ulash, bu html ga dinamik tarzda qo'shiladi - bu uslubda avtomatik tarzda async qo'shilgan bo'ladi
/* const script = document.createElement('script')
script.src = 'script'
document.body.append(script) */

// Avmomatlashtirish (optimizatsiya) - bu uslubda avtomatik tarzda async qo'shilgan bo'ladi
function loadScript(src) {
  const script = document.createElement('script')
  script.src = src 
  // script.async = false // async ni o'chirib qo'yish
  document.body.append(script)
}

loadScript('js/sedond.js')
loadScript('js/third.js')


