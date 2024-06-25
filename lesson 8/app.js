'use strict'

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
}

const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const b = prompt('Necha baxo berasiz', '')
const c = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const d = prompt('Necha baxo berasiz', '')

seriesDB.series[a] = b
seriesDB.series[c] = d

console.log(seriesDB)