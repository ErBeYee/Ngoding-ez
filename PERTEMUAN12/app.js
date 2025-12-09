// insert into di mysql

// localStorage.setItem("nama", "samsom");

// // ambil data dan tampilkan di console

// console.log(localStorage.getItem("nama"));

// // =============================================
// const KEY = "jurusan";
// localStorage.setItem(KEY, "[ppw,psj,ppm]");
// console.log(localStorage.getItem(KEY));

// key adalah sebuah tabel
// setItem kaya insert into
// getitem kaya mau nampilin data
const PRODI = "prodi";
// Array
const data = ["teknik sipil", "hukum", "bisnis"];

// proses menambahkan data


// valid json
localStorage.setItem(PRODI, JSON.stringify(data));

const parsingobject = JSON.parse(localStorage.getItem(PRODI));
// console.log(parsingobject[1]);
parsingobject.forEach((element) => {
  console.log(element);
});
