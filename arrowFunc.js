// let merekLaptop = ['lenovo', 'asus' , 'hp']
// merekLaptop.map((nama, index) => nama)
// console.log(merekLaptop)

// let merekLaptop = ["lenovo", "asus", "hp"];
// let jumblahKata = merekLaptop.map((nama, index) => ({ nama: nama, jumblahKata: nama.length }));
// console.table(jumblahKata);

// konsep this pada arrow function menggunakan constructor
// let Mahasiswa = function (nama, umur) {
//   this.nama = nama;
//   this.umur = umur;
//   this.Sayhello = function () {};
//   return `halo ${this.nama} umur kamu ${this.umur} hakkjksk`;
// };
// let Param = console.log(new Mahasiswa("param", 15));

// konsep this menggunakan js dom
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  //   console.log(this);
  let satu = "size";
  let dua = "caption";
  console.log(satu);
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
