const keyMahasantri = "mahasantri";
const keyJurusan = "jurusan";

if (!localStorage.getItem(keyMahasantri)) {
  localStorage.setItem(keyMahasantri, JSON.stringify([]));
}
if (!localStorage.getItem(keyJurusan)) {
  localStorage.setItem(keyJurusan, JSON.stringify([]));
}

const mahasantri = JSON.parse(localStorage.getItem(keyMahasantri));
const jurusan = JSON.parse(localStorage.getItem(keyJurusan));
if (jurusan.length === 0) {
  jurusan.push({
    id: 1,
    kode: "PPM",
    nama_jurusan: "Peminatan Pemrograman Mobile",
  });
  jurusan.push({
    id: 2,
    kode: "PPW",
    nama_jurusan: "Peminatan Pemrograman Web",
  });
  jurusan.push({
    id: 3,
    kode: "PSJ",
    nama_jurusan: "Pengelola Sistem dan Jaringan",
  });
}

localStorage.setItem(keyJurusan, JSON.stringify(jurusan));

function tampilkanJurusan() {
  const optJurusan = document.getElementById("jurusan");
  optJurusan.innerHTML = '<option value="" hidden>Pilih Data Jurusan</option>';
  jurusan.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.nama_jurusan;
    option.textContent = element.nama_jurusan;

    optJurusan.appendChild(option);
  });
}

function simpanData() {
  const nama = document.getElementById("nama").value;
  const jurusan = document.getElementById("jurusan").value;
  const nilai = document.getElementById("nilai").value;

  const dataBaru = {
    id: mahasantri.length + 1,
    nama_mahasantri: nama,
    jurusanId: jurusan,
    nilai: nilai,
  };
  mahasantri.push(dataBaru);
  localStorage.setItem(keyMahasantri, JSON.stringify(mahasantri));
  tampilkan()
}

function tampilkan() {
  const tbody = document.getElementById("tabel");
  tbody.innerHTML = "";
  mahasantri.forEach((element, index) => {
    tbody.innerHTML += `
        <td>${index + 1}</td>
        <td>${element.nama_mahasantri}</td>
        <td>${element.jurusanId}</td>
        <td>${element.nilai}</td>
        `;
  });
}

tampilkan();
tampilkanJurusan();
