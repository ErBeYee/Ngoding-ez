const akun = require("./services/akun.js");

const samson = akun.dataBaru("samson", 20000);
console.log(samson);

try {
  console.log(akun.getAkun(2));
} catch (error) {
  console.log("Terjadi eror", error.message);
}
