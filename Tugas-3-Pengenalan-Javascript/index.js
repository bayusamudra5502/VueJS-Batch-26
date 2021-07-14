// SOAL 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var gabungan = pertama + " " + kedua;
console.log(gabungan);
console.log();

// SOAL 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var kataPertamaInt = parseInt(kataPertama);
var kataKeduaInt = parseInt(kataKedua);
var kataKetigaInt = parseInt(kataKetiga);
var kataKeempatInt = parseInt(kataKeempat);

var hasil = kataPertamaInt + kataKeduaInt * kataKetigaInt + kataKeempatInt;

console.log(hasil);
console.log();

// SOAL 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25); // do your own!

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);
