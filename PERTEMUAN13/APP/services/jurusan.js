const keyJurusan = "projek_jurusan";

if (!localStorage.getItem(keyJurusan)) {
  // maka kita isi dengan array kosong
  localStorage.setItem(keyJurusan, JSON.stringify([]));
}
const parseJurusan = JSON.parse(localStorage.getItem(keyJurusan));

// buat fungsi untuk nambahin data
function tambahJurusan() {
  // tangkap value dari input user
  const kode = document.getElementById("kode").value;
  const nama_jurusan = document.getElementById("nama_jurusan").value;

  // siapin data baru
  const dataBaru = {
    id: parseJurusan.length + 1,
    kode,
    nama_jurusan,
  };
  //   masukin ke obejk js
  parseJurusan.push(dataBaru);
  //   simpan ke local storage
  localStorage.setItem(keyJurusan, JSON.stringify(parseJurusan));

  Swal.fire({
    title: "Data Berhasil Ditambahkan :)",
    icon: "success",
    draggable: true,
  }).then(() => {
    window.location.href = "jurusan.html";
  });
}

function tampilkan() {
  const tbody = document.getElementById("tambah");

  tbody.innerHTML = "";
  parseJurusan.forEach((element, index) => {
    tbody.innerHTML += `
        <td>${index + 1}</td>
        <td>${element.kode}</td>
        <td>${element.nama_jurusan}</td>
        <td>
        <button class="btn btn-warning btn-rounded btn-icon">
        <i class="mdi mdi-lead-pencil" style="font-size:2em"></i>
        </button>
        <button onclick="konfirmasiHapus(${element.id})" class="btn btn-danger btn-rounded btn-icon">
        <i class="mdi mdi-delete-forever" style="font-size:2em"></i>
        </button>
        </td>
        `;
  });
}

function konfirmasiHapus(id) {
  const yakin = confirm("Yakin nih??");

  if (yakin) {
    hapusJurusan(id);
  }
}

function hapusJurusan(id) {
  const cariId = parseJurusan.findIndex((data) => data.id === id);

  parseJurusan.splice(cariId, 1);

  localStorage.setItem(keyJurusan, JSON.stringify(parseJurusan));
  tampilkan();
}

tampilkan();
