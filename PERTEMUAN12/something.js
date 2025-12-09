// ini kaya mau bikin tabel
const keyMahasantri = "mahasantri";
// jika set item maka harus ada stringify
localStorage.setItem(keyMahasantri, JSON.stringify([]));

// sbelum di push harus di ubah dlu kedalam obejct javasscript dngan parsing
// jika getitem maka harus ada parse
const data = JSON.parse(localStorage.getItem(keyMahasantri));
console.log(typeof data);

data.push({
  id: 1,
  nama: "Topa",
});
data.push({
  id: 2,
  nama: "Alwan",
});
console.log(data);

// klaua sdah ditambahkan  object nya selanjutnnya tambahin datanya ke local storge pakai stringify
const ambil = document.getElementById("tta")
data.forEach((element)=>{
  ambil.innerHTML +=`
  <li>${element.id}.${element.nama}</li>
  `
})
