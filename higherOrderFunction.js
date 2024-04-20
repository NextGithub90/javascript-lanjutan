// tanpa menggunakan higher order
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//  menggunakan higher order
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeatLog(10);
