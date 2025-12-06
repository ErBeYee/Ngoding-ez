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
  const cariAkun = nasabah.data.find((nsb) => nsb.id === id);
  if (!cariAkun) {
    throw new Error("Maaf, Akun tidak ditemukan");
  }
  return cariAkun;
};
const depo = (id, jumlah) => {
  const acc = getAkun(id);
  if (jumlah <= 0) throw new Error("invalid");
  const saldoawal = acc.saldo;
  acc.saldo += jumlah;
  const saldoakhr = acc.saldo;

  acc.transaksi.push({
    transaksi: "Deposit",
    jumlah,
    saldoawal,
    saldoakhr,
  });
  return acc;
};

const ambilduit = (id, jumlah) => {
  const acc = getAkun(id);
  if (acc.saldo < jumlah) throw new Error("Piti ndk cukuik do");
  if (jumlah <= 0) throw new Error("invalid");

  const saldoawal = acc.saldo;
  acc.saldo -= jumlah;
  const saldoakhr = acc.saldo;

  acc.transaksi.push({
    transaksi: "Tarik Tunai",
    jumlah,
    saldoawal,
    saldoakhr,
  });
  return acc;
};

module.exports = { dataBaru, getAkun, ambilduit, depo };