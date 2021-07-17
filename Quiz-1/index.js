// SOAL 1
var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = "Saya Iqbal";

function jumlah_kata(text) {
  return text.trim().split(" ").length;
}

jumlah_kata(kalimat_1); // 6
jumlah_kata(kalimat_2); // 2

console.log(jumlah_kata(kalimat_1)); // 6
console.log(jumlah_kata(kalimat_2)); // 2
