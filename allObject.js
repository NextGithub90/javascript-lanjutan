// object literal
// let Mahasiswa = {
//   nama: "azzam",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama} energi anda bertambah ${porsi}`);
//     return "terimaksih";
//   },
// };

// function declaration
/* function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`selamat makan ${this.nama} energi anda bertambah ${porsi}`);
    return `${this.energi}`;
  };
  mahasiswa.main = function (jam) {
    if (this.energi < 0) {
      return `energi anda habis `;
    }
    this.energi -= jam;
    console.log(`anda bermain game energi berkurang ${jam}`);
  };
  return mahasiswa;
}
let azzam = Mahasiswa("azzam", 10);
 */

//  function declaration versi object create
// const objectMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama} energi anda bertambah ${porsi}`);
//     return `${this.energi}`;
//   },
//   main: function (jam) {
//     if (this.energi < 0) {
//       return `energi anda habis `;
//     }
//     this.energi -= jam;
//     console.log(`anda bermain game energi berkurang ${jam}`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(objectMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   return mahasiswa;
// }
// let azzam = Mahasiswa("azzam", 10);

// constructor function versi prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `energi anda bertamabh ${porsi}`;
//   };
//   Mahasiswa.prototype.game = function (jam) {
//     this.energi -= jam;
//     return `energi anda berkurang ${jam}`;
//   };
// }
// let azzam = new Mahasiswa("azzam", 10);

// versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `energi anda bertamabh ${porsi}`;
//   }
//   game(jam) {
//     this.energi -= jam;
//     return `energi anda berkurang ${jam}`;
//   }
// }
// let azzam = new Mahasiswa("azzam", 10);
