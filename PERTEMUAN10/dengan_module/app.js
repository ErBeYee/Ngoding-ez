 const cekUsia = () => {
  const usia = 12;
  if (usia > 12) {
    console.log("Aku besar");
  } else {
    console.log("aku kecil");
  }
};

 const nama = " adit";

 const usia = new Promise((resolve, reject) => {
  const qq = false;

  qq === true ? resolve("hidup") : reject("mati");

  //   if (qq) {
  //     resolve("kamu hidup");
  //   } else {
  //     reject("kamu tewas");
  //   }
});
 async function deal() {
  try {
    const data1 = await usia;
    console.log(data1);
  } catch (error) {
    console.log(error);
  }
}


export {cekUsia,nama,usia,deal}