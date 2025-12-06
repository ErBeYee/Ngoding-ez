const akun = require("./services/akun.js");

const samson = akun.dataBaru("samson", 10000);

try {
  console.log(akun.getAkun(1));
} catch (error) {
  console.log("Terjadi eror", error.message);
}

akun.depo(1, 500000);
console.log("Setelah", akun.getAkun(1));

akun.ambilduit(1, 50000);
console.log("Setelah", akun.getAkun(1));

console.log("Detail transaksi:", akun.transaksii(1));
