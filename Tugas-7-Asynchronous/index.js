// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks di sini
const WAKTU_AWAL = 10000;
let lastValue = WAKTU_AWAL;

const callback = (time) => {
  if (time !== lastValue && time > 0 && books.length > 0) {
    lastValue = time;

    const book = books.shift();
    readBooks(lastValue, book, callback);
  }
};

readBooks(WAKTU_AWAL, books.shift(), callback);
