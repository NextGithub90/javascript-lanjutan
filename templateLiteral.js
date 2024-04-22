// const siswa = [
//   {
//     nama: "azzam",
//     email: "azzam@gmail.com",
//   },
//   {
//     nama: "hazmi",
//     email: "hazmi@gmail.com",
//   },
//   {
//     nama: "hyper",
//     email: "hyper@gmail.com",
//   },
// ];

// let result = `<div class="nama">
// ${siswa
//   .map(
//     (m) =>
//       `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`
//   )
//   .join("")}
// </div>`;
// document.body.innerHTML = result;

const mhs = {
  nama: "azzam",
  jurusan: "tik",
  mataKuliah: ["robotik", "web", "fullstack"],
};

let result = `<div class="nama">nama : ${mhs.nama}</div>
<div class="jurusan"> jurusan : ${mhs.jurusan}</div>
<p>matakuliah : </p>
<ol>
${mhs.mataKuliah.map((e) => `<li>${e}</li>`).join("")}
</ol>
`;

document.body.innerHTML = result;
