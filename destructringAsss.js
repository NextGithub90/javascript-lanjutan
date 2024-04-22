// versi array
const coba = ["satu", "dua", "tiga"];
const [a, b, c] = coba;
// const [a, , c] = coba; skip itemssssss
console.log(a);
console.log(b);
console.log(c);

// versi objek
const mhs = {
  nama: "azzam",
  umur: 31,
};
const { nama, umur } = mhs;
console.log(nama);

// menukar itemssss
let y = 1;
let z = 2;
let resultv = ([y, z] = [z, y]);
console.log(resultv);

// return valeu paada function
function j() {
  return [3, 4];
}
let [h, x] = j();
console.log(x);
