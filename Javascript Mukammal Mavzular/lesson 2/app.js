"use strict";

const uzs = document.querySelector("#uzs"),
  usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "json/current.json"); // so'rov jo'natishimiz kerak bo'lgan joy
  request.setRequestHeader("Content-Type", "application/json", "charset=utf-8"); // so'rovimiz sarlavhasi
  request.send(); // so'rovni yuborish

  request.addEventListener("load", () => {
    // load qachonki bizning ready state miz 4 bo'lsa ya'ni tugasi ishlaydi
    // status ga moslashib biron-bir hodisa qo'shish 
    if (request.status == 200) {
      const data = JSON.parse(request.response);
      usd.value = (+uzs.value / data.current.usd).toFixed(2);
    }else {
      usd.value = "Something went wrong";
    }
  });

  // So'rov nima qaytaradi:
  // 1. - status 200 - ok, 404 - not found, 500 - server error, 400 - client error. Son qaytaradi tushunish uchun yozib yo'qdim nimaligi.
  // 2. - statusText - OK, Not Found, Internal Server Error, Bad Request ... | Va statusText shunga o'xshash yozuv qaytaradi ya'ni status yozuvi.
  // 3. - response - so'rovimiz olib kelgan javob.
  // 4. - readyState -
  /* 0. - UNSENT - Client yaratildi. open() hali chaqirilmagan.
    1. - OPENED - open() chaqirildi.
    2. - HEADERS_RECEIVED - send() chaqirildi va sarlavhalar va holat mavjud.
    3. - LOADING - Downloading; answerText qisman ma'lumotlarni saqlaydi. 
    4. - DONE - Operatsiya tugallandi.
  */
});