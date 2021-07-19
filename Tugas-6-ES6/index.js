// SOAL 1
const luasPersegiPanjang = (p, l) => p * l;
const kelilingPersegiPanjang = (p, l) => 2 * (p + l);

// Driver Code
console.log(luasPersegiPanjang(3, 5));
console.log(kelilingPersegiPanjang(3, 5));

// SOAL 2
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName: () => {
    console.log(`${firstName} ${lastName}`);
  },
});

// Driver Code
newFunction("William", "Imoh").fullName();

// SOAL 3
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

const { firstName, lastName, address, hobby } = newObject;

// Driver code
console.log(firstName, lastName, address, hobby);

// SOAL 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

//Driver Code
console.log(combined);

// SOAL 5
const planet = "earth";
const view = "glass";

const before = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`;

// Driver Code
console.log(before);
