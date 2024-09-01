"use strict";

const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    seriesDB.count = +prompt("Nechta serial ko'rdingiz?");

    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko'rdingiz?");
    }
  },
  rememberMySeries: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt("Nechi baxo berasiz?");

      if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectLevelSeries(count) {
    if (count < 5) {
      console.log("Kam serial ko'ripsiz");
    } else if (count >= 5 && count < 10) {
      console.log("Siz classik tomoshabin ekansiz");
    } else if (count >= 10) {
      console.log("Siz serialchi zvezda ekansiz");
    } else {
      console.log("Error");
    }
  },
  detectLevelSeries: () => {
    if (count < 5) {
      console.log("Kam serial ko'ripsiz");
    } else if (count >= 5 && count < 10) {
      console.log("Siz classik tomoshabin ekansiz");
    } else if (count >= 10) {
      console.log("Siz serialchi zvezda ekansiz");
    } else {
      console.log("Error");
    }
  },
  showDb: () => {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },
  visibleDB: () => {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
  writeGenres: () => {
    /* for (let i = 0; i <= 2; i++) {
      const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
      if (genre === "" || genre === null) {
        console.log("Siz noto'g'ri ma'lumot berdingiz");
        i--;
      } else {
        seriesDB.genres[i] = genre;
      }
    } */

    let genres = prompt(
      "Yaxshi ko'rgan janringiz vergul yordamida yozing",
      "Misol: a, b, c"
    ).toLowerCase();
    if (genres === "" || genres === null) {
      console.log("Siz noto'g'ri ma'lumot berdingiz");
      i--;
    } else {
      seriesDB.genres = genres.split(", ");
      seriesDB.genres.sort();
    }

    seriesDB.genres.forEach((item, idx) => {
      console.log(`Yaxshi ko'rgan janringiz ${idx + 1} - nomi ${item}`);
    });
  },
};
