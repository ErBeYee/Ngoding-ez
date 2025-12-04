const nasabah = require("../models/nasabah.js");

// function namabhin data
const dataBaru = (nama, saldo = 0) => {
  // buat variable untuk nampung nasabah baru
  const akunBaru = {
    id: nasabah.data.length + 1,
    nama,
    saldo,
    transaksi: [],
  };
  nasabah.data.push(akunBaru);
  return akunBaru;
};
const getAkun = (id) => {
  const cariAkun = nasabah.data.find((nsb) => {
    nsb.id === id;
  });
  if (!cariAkun) {
    throw new Error("Maaf, Akun tidak ditemukan");
  }
  return cariAkun;
};

module.exports = { dataBaru ,getAkun};
