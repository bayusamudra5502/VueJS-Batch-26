// SOAL 1
var nilai = 80;
var indeks = null;

if (nilai >= 85) {
  indeks = "A";
} else if (nilai >= 75) {
  indeks = "B";
} else if (nilai >= 65) {
  indeks = "C";
} else if (nilai >= 55) {
  indeks = "D";
} else {
  indeks = "E";
}

console.log("Jadi indeksnya adalah", indeks);
console.log();

// SOAL 2
var tanggal = 5;
var bulan = 5;
var tahun = 2002;
var namaBulan = null;

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = null;
}

if (namaBulan) {
  console.log(tanggal, namaBulan, tahun);
} else {
  console.error("Nama bulan tidak dikenal");
}
console.log();

// SOAL 3
var n = 7;
for (var i = 0, str = "#"; i < n; i++, str += "#") {
  console.log(str);
}
console.log();

// SOAL 4
var m = 7;
for (var i = 1, eq = "="; i <= m; i++, eq += "=") {
  var msg = null;
  if (i % 3 === 0) {
    msg = "I love VueJS\n" + eq;
  } else if (i % 3 === 1) {
    msg = "I love programming";
  } else {
    msg = "I love Javascript";
  }

  console.log(i, "-", msg);
}
