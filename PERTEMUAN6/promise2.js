const kn = new Promise((resolve) => {
  resolve("YOI");
});
// persi then catch 
// kn.then((data) => console.log(data));

// persi asyn await
async function eks () {
    const hasil = await kn;
    const hasil2 = await hasil2(hasil)
    const hasil3 = await hasil3(hasil2)
    console.log(hasil);
}
eks()


const ekss = async () => {}