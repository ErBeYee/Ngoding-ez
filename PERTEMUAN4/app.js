const mahasiswa = [
  { id: 1, nama: "Alex", gender: "L", jurusanId: 1, nilai: 90 },
  { id: 1, nama: "albert", gender: "L", jurusanId: 2, nilai: 60 },
  { id: 1, nama: "Bagol", gender: "L", jurusanId: 1, nilai: 80 },
  { id: 1, nama: "Mia", gender: "P", jurusanId: 3, nilai: 40 },
  { id: 1, nama: "Abduldul", gender: "L", jurusanId: 1, nilai: 69 },
];

const jurusan = [
  { id: 1, kode: "inf", namaJurusan: "Informatika" },
  { id: 2, kode: "huk", namaJurusan: "Hukum" },
  { id: 3, kode: "eko", namaJurusan: "Ekonomi" },
];

const tbody = document.getElementById("body");
const tampilkanTabel = () => {
  mahasiswa.forEach((data, index) => {
    const cariJurusan = jurusan.find(
      (dataJurusan) => dataJurusan.id === data.jurusanId
    );
    tbody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${data.nama}</td>
        <td>${data.gender === "L" ? "Laki-laki" : "Perempuan"}</td>
        <td>${cariJurusan.namaJurusan}</td>
        <td>${data.nilai}</td>
        </tr>
        `;
  });
};
const hitungAvg = () => {
  const avg = document.getElementById("avg");
  const ambilNilai = mahasiswa.map((data) => data.nilai);
  // console.log(ambilNilai);
  const totalNilai = ambilNilai.reduce((acc, current) => acc + current, 0);

  const rata_rata = totalNilai / mahasiswa.length;
  avg.textContent = rata_rata.toFixed(2);
};
//  const totalJurusan = () => {
// const ttl = document.getElementById("jurusan")
// ttl.textContent =
//  }

const total_gender = () => {
  const gnderl = document.getElementById("jmlgenderl");
  const gnderp = document.getElementById("jmlgenderp");
  const laki = mahasiswa.filter((data) => data.gender === "L").length;
  const pere = mahasiswa.filter((data) => data.gender === "P").length;
  gnderl.textContent = laki;
  gnderp.textContent = pere;
};

// const rata_jurusan = () => {
//   const rtajurusan1 = document.getElementById("inf");
//   const rtajurusan2 = document.getElementById("eko");
//   const rtajurusan3 = document.getElementById("huk");

//   const inf = mahasiswa.filter((data) => data.jurusanId === 1);
//   const eko = mahasiswa.filter((data) => data.jurusanId === 2);
//   const huk = mahasiswa.filter((data) => data.jurusanId === 3);

//   const htung = nilai.reduce((acc ,current) => acc + current,0);
//   const rata_jrusan = htung / jurusan.length

//   rtajurusan1.textContent = inf
// };
// ------------------------------------------------------------------------------------------------------------ //
const rataPerjurusan = () => {
    // cari jurusan yang sama pakai filter
    // totalkan nilai dari semua jurusan pake reduce
    // eksekusi perhitungan rata-ratanya
    // total / banyaknya data
    // tampilkan ke dalam DOM 

    jurusan.forEach((jurusanData) => {
        // bandingkan data id jurusan dengan jurusan id yang ada di array mahasiswa
        const mahasiswaJurusan = mahasiswa.filter((data) => data.jurusanId === jurusanData.id);

        // hitung total masing masing jurusan
        const total = mahasiswaJurusan.reduce((acc, current) => acc + current.nilai, 0);

        // eksekusi perhitungan rata rata
        const avg = mahasiswaJurusan.length ? (total / mahasiswaJurusan.length).toFixed(2) : 0;

        // Looping DOM biar gak bikin satu persatu
        const target = document.getElementById(jurusanData.kode.toLowerCase());
        // tampilkan hasil dari perhitungan nilai rata-rata
        if (target) {
            target.textContent = avg;
        }
    });

};

const rengking = () => {
  const ambilrank = document.getElementById("tbody");
const urutan = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
urutan.forEach((mahasiswa, index) => {
  ambilrank.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${mahasiswa.nama}</td>
        <td>${mahasiswa.nilai}</td>
        </tr>
        `;
})
}
tampilkanTabel();
hitungAvg();
// totalJurusan();
total_gender();
rengking();
rataPerJurusan();
