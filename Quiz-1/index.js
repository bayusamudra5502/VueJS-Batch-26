// SOAL 1
var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = "Saya Iqbal";

function jumlah_kata(text) {
  var hasil = text.trim().split(" ").length;
  console.log(hasil);

  return hasil;
}

jumlah_kata(kalimat_1); // 6
jumlah_kata(kalimat_2); // 2
console.log();

// SOAL 2
function next_date(tanggal, bulan, tahun) {
  var namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  var isKabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
  var newTanggal = tanggal;
  var newBulan = bulan;
  var newTahun = tahun;
  var isValid = true;

  if (tahun <= 0) {
    console.error("Tahun haruslah positif");
    isValid = false;
  }

  switch (bulan) {
    case (1, 3, 5, 7, 8, 10, 12):
      if (tanggal === 31) {
        newTanggal = 1;

        if (bulan === 12) {
          newTahun += 1;
          newBulan = 1;
        } else {
          newBulan += 1;
        }
      } else if (tanggal < 31 && tanggal > 0) {
        newTanggal += 1;
      } else {
        isValid = false;
        console.error("Tanggal tidak valid");
      }
      break;
    case (4, 6, 9, 11):
      if (tanggal === 30) {
        newTanggal = 1;
        newBulan += 1;
      } else if (tanggal < 31 && tanggal > 0) {
        newTanggal += 1;
      } else {
        isValid = false;

        console.error("Tanggal tidak valid");
      }
      break;
    case 2:
      if ((isKabisat && tanggal === 29) || (!isKabisat && tanggal === 28)) {
        newBulan += 1;
        newTanggal = 1;
      } else if (
        tanggal <= 0 ||
        (!isKabisat && tanggal > 28) ||
        (isKabisat && tanggal > 29)
      ) {
        isValid = false;
        console.error("Tanggal tidak valid");
      } else {
        newTanggal += 1;
      }
      break;
    default:
      console.error("Bulan tidak dikenal");
      isValid = false;
  }

  if (isValid) {
    hasil =
      newTanggal.toString() +
      " " +
      namaBulan[newBulan - 1] +
      " " +
      newTahun.toString();

    console.log(hasil);
    return hasil;
  } else {
    return "";
  }
}

var tanggal = 29;
var bulan = 2;
var tahun = 2020;

next_date(tanggal, bulan, tahun); // output : 1 Maret 2020

var tanggal = 28;
var bulan = 2;
var tahun = 2021;

next_date(tanggal, bulan, tahun); // output : 1 Maret 2021

var tanggal = 31;
var bulan = 12;
var tahun = 2020;

next_date(tanggal, bulan, tahun); // output : 1 Januari 2021
