const keyMahasantri = "santri";
const keyJurusan = "jurusan";

localStorage.setItem(keyMahasantri, JSON.stringify([]));
localStorage.setItem(keyJurusan, JSON.stringify([]));

const jurusan = JSON.parse(localStorage.getItem(keyJurusan));
const santri = JSON.parse(localStorage.getItem(keyMahasantri));

const itemJurusan = {
  id: 1,
  nama_jurusan: "Pengembangan Perangkat Lunak",
};

const itemSantri = {
  id: 1,
  nama_mahasantri: "Roberto",
  jurusanId: 1,
};
// datanya udah nambah tapi baru di Object js,
jurusan.push(itemJurusan);
jurusan.push(itemSantri);

localStorage.setItem(keyJurusan, JSON.stringify(jurusan));
localStorage.setItem(keyMahasantri, JSON.stringify(santri));

santri.forEach((element) => {
  const cariJurusan = jurusan.find((data) => data.id === element.jurusanId);

  console.log(
    `${element.id}.${element.nama_mahasantri} - ${cariJurusan.nama_jurusan}`
  );
});
