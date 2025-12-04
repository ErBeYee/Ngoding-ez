// kalau pakai querry seelctor itu nilai kemblianya adalah nodelist
// jadi kalau mau spesifik di tag tertentu harus disertai index nya
// kalau mau tau index ke berapa,dilihat dari urutan kode dari tag tersebut

const namaMahasantri = document.querySelectorAll("input.form-control")[0];
const nilaiMahasantri = document.querySelectorAll("input.form-control")[1];
const jurusanMahasantri = document.getElementById("jurusanSelect");
const tombolTambah = document.querySelector("bnt-success");
const namaEror = document.getElementById("namaEror");
const jurusanEror = document.getElementById("jurusanError");
const nialiEror = document.getElementById("nilaiEror");

// simulasi kaya buek tabel di mysql tapi iko pakai array object

const jurusan = [
  {
    id: 1,
    nama_jurusan: "Pengelolam Sistem dan Jaringan",
  },
  {
    id: 2,
    nama_jurusan: "Peminatan Pemrograman Web",
  },
  {
    id: 3,
    nama_jurusan: "Peminatan Pemrograman Mobile",
  },
];
// ini simulasi kay amenambahkan data di database mysql tpi persi array
const mahasantri = [
  {
    id: 1,
    nama: "Jajang Nursalim",
    jurusanId: 1,
    nilai: 80,
  },
  {
    id: 2,
    nama: "ujaang Nursalam",
    jurusanId: 2,
    nilai: 40,
  },
  {
    id: 3,
    nama: "Jenjang Nurdin",
    jurusanId: 3,
    nilai: 70,
  },
];

// ini untuk membantu menampilkan data array object dalam bentuk html
function tampilkantabel() {
  // untuk ambiak tbody seblum dimasuakkan ka table (tr,td)
  const tbody = document.querySelector("tbody");

  // tampilkan data array dengan looping
  mahasantri.forEach((data, index) => {
    const cariJurusan = jurusan.find((item) => item.id === data.jurusanId);
    tbody.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${data.nama}</td>
        <td>${cariJurusan ? cariJurusan.nama_jurusan : "-"}</td>
        <td>${data.nilai}</td>
        <td>${
          data.nilai >= 70
            ? '<span class="badge bg-success">Lulus</span>'
            : '<span class="badge bg-danger">Tidak Lulus</span>'
        } </td>
    </tr>
`;
  });
}
tampilkantabel();
