// let merekLaptop = ['lenovo', 'asus' , 'hp']
// merekLaptop.map((nama, index) => nama)
// console.log(merekLaptop)

let merekLaptop = ["lenovo", "asus", "hp"];
let jumblahKata = merekLaptop.map((nama, index) => ({ nama: nama, jumblahKata: nama.length }));
console.table(jumblahKata);
