// test ke 1
function waktuHari(waktu) {
  return function (bangun) {
    console.log("kamu bangun pada " + waktu + " pukul " + bangun);
  };
}
waktuHari("7")("pagi hari");
waktuHari("12")("siang hari hari");

// let waktuPagi = waktuHari("pagi hari");
// let wakktuSiang = waktuHari("siang hari");
// let wakktuMalam = waktuHari("malam hari");

// waktuPagi("7");
// wakktuSiang("8");
// wakktuMalam("9");

// test ke 2
// function add() {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// }
// counter = 10;
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();
// console.log(add());
// console.log(add());
// console.log(add());
