// SOAL 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();

for (var i = 0; i < daftarHewan.length; i++) {
  console.log(daftarHewan[i]);
}

console.log();

// SOAL 2

function introduce(data) {
  return (
    "Nama saya " +
    data.name +
    ", umur saya " +
    data.age +
    " tahun, alamat saya di " +
    data.address +
    ", dan saya punya hobby yaitu " +
    data.hobby
  );
}

var data = {
  name: "John",
  age: 30,
  address: "Jalan Pelesiran",
  hobby: "Gaming",
};

var perkenalan = introduce(data);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming"
console.log();

// SOAL 3
function hitung_huruf_vokal(text) {
  var vokal = 0;
  for (var i = 0; i < text.length; i++) {
    if (
      text[i].toLowerCase() === "a" ||
      text[i].toLowerCase() === "i" ||
      text[i].toLowerCase() === "u" ||
      text[i].toLowerCase() === "e" ||
      text[i].toLowerCase() === "o"
    )
      vokal++;
  }

  return vokal;
}
var hitung_1 = hitung_huruf_vokal("Muhammad");

var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1, hitung_2); // 3 2
console.log();

// SOAL 4
function hitung(n) {
  return 2 * n - 2;
}

console.log(hitung(0)); // -2
console.log(hitung(1)); // 0
console.log(hitung(2)); // 2
console.log(hitung(3)); // 4
console.log(hitung(5)); // 8
