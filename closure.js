function waktuHari(waktu) {
  return function (bangun) {
    console.log("kamu bangun pada " + waktu + " pukul " + bangun);
  };
}
let waktuPagi = waktuHari("pagi hari");
let wakktuSiang = waktuHari("siang hari");
let wakktuMalam = waktuHari("malam hari");

waktuPagi("7");
wakktuSiang("8");
wakktuMalam("9");
