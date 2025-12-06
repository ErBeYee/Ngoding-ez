const akun = require("./services/akun.js");

const samson = akun.dataBaru("samson", 20000);


try {
  console.log(akun.getAkun(1));
} catch (error) {
  console.log("Terjadi eror", error.message);
}
akun.depo(1, 500000);

console.log("Transaksi:", akun.getAkun(1));
