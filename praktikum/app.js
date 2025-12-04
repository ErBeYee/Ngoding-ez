//kalau query selector itu nilai kembaliannya adalah nodeList
//jadi kalau mau spesifik di tag tertentu harus disertakan index nya
//nah, cara biar tau index ke berapa, dilihat urutan kode dari tag tersebut
 
const namaMahasantri = document.querySelectorAll("input.form-control")[0];
const nilaiMahasantri = document.querySelectorAll("input.form-control")[1];
const jurusanMahasantri = document.getElementById("jurusanSelect");
const tombolTambah = document.querySelector(".btn-success");
 
const namaEror = document.getElementById("namaEror");
const jurusanEror = document.getElementById("jurusanEror");
const nilaiEror = document.getElementById("nilaiError");
 
//simulasi kaya mau bikin tabel di database, tapi ini pake array objek
const jurusan = [
  { id: 1, nama: "Pengelolaan Sistem dan Jaringan" },
  { id: 2, nama: "Peminatan Pemrograman Web" },
  { id: 3, nama: "Peminatan Pemrograman Mobile" },
];
//
const mahasantri = [
  { id: 1, nama: "Jajang Nurjaman", jurusanId: 1, nilai: 80 },
  { id: 2, nama: "Atikah Sumringah", jurusanId: 2, nilai: 50 },
  { id: 3, nama: "Slamet Riyadi", jurusanId: 3, nilai: 70 },
];
 
//ini helper function
//untuk membantu menampilkan data array objek dalam bentuk tabel HTML
function tampilkanTabel() {
  //ini buat ambil tbody sebelum dimasukin tr dan td
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  //selanjutnya tampilin datanya array pake looping
  mahasantri.forEach((data, index) => {
    const cariJurusan = jurusan.find((item) => item.id === data.jurusanId);
    const status = data.nilai >= 70 ? "Lulus" : "Tidak Lulus";
    tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${data.nama}</td>
            <td>${cariJurusan ? cariJurusan.nama : "-"}</td>
            <td>${data.nilai}</td>
            <td>${status}</td>
        </tr>
    `;
  });
}
 
function loopingjurusan() {
  jurusan.forEach((data) => {
    const option = document.createElement("option");
    option.value = data.id;
    option.textContent = data.nama;
    jurusanMahasantri.appendChild(option);
  });
}
 
function tampilkanError(elemen, message) {
  elemen.classList.add("text-danger");
  elemen.textContent = message;
}
 
function bersihkanError(elemen) {
  elemen.textContent = "";
}
 
tombolTambah.addEventListener("click", function () {
  bersihkanError(namaEror);
  bersihkanError(jurusanEror);
  bersihkanError(nilaiEror);
 
  const nama = namaMahasantri.value.trim();
  const jurusanId = jurusanMahasantri.value;
  const nilaiInput = nilaiMahasantri.value.trim();
 
  let hasError = false;
 
  if (!nama) {
    tampilkanError(namaEror, "Nama tidak boleh kosong");
    hasError = true;
  }
 
  if (!jurusanId) {
    tampilkanError(jurusanEror, "Silakan pilih jurusan");
    hasError = true;
  }
 
  if (!nilaiInput) {
    tampilkanError(nilaiEror, "Nilai tidak boleh kosong");
    hasError = true;
  }
 
  if (hasError) return;
  const nilai = parseInt(nilaiInput);
  if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    tampilkanError(nilaiEror, "Nilai harus berupa angka 0–100");
    return;
  }
 
  const dataBaru = {
    id: mahasantri.length + 1,
    nama,
    jurusanId: parseInt(jurusanId),
    nilai,
  };
 
  mahasantri.push(dataBaru);
 
  inputNama.value = "";
  selectJurusan.value = "";
  inputNilai.value = "";
 
  tampilkanTabel();
});
 
loopingjurusan();
tampilkanTabel();