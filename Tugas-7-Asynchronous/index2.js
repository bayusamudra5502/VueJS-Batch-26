var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

// Lanjutkan code untuk menjalankan function readBooksPromise
function Runner(time) {
  if (books.length > 0) {
    const book = books.shift();

    readBooksPromise(time, book)
      .then((newTime) => {
        if (newTime > 0) {
          Runner(newTime);
        }
      })
      .catch(() => {});
  }
}

const WAKTU_AWAL = 10000;
Runner(WAKTU_AWAL);
