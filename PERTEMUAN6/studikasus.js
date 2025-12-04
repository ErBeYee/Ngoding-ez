// mwmbuat simulasi 3 promise yang saling berkaitan
// 3 promis tersebut di kelola menggunkan 1 fungsi asynchronous
// jadi funciton asynchronous digunkan untuak  mendapatkan hasil dari sebuah promise
// jadi lebih disaran kn kita kalau mau bkin kode itu pakeny async await
// daripada pake then catch

// case 1
// kta akan membuat funciton yang menhasilkna deret angka

function ambilDataNilai() {
  return new Promise((resolve) => {
    resolve([90, 80, 30, 50, 60, 88]);
  });
}
// console.log(ambilDataNilai());

// case 2
// menghitung total nilai hasil promise dari function ambilDataNilai()

function hitungNilai(param) {
  return new Promise((resolve) => {
    // jadi variabel itu hasilnya menampung nilai rata"
    const hasil =
      param.reduce((acc, current) => acc + current, 0) / param.length;
    resolve(hasil);
  });
}

// case 3
// buat fungsi lagi unutk menampilkna data hasil rata"
function ambilRata(nilai) {
  return new Promise((resolve) => {
    resolve("Hasil perhitungan nilai rata rata:" + nilai.toFixed(2));
  });
}
// |=======================================================================================| //
// |                                   Persi Asyn Await                                    | //
// |=======================================================================================| //

async function eksekusi() {
  const promise1 = await ambilDataNilai();
  const promise2 = await hitungNilai(promise1);
  const promise3 = await ambilRata(promise2);
  console.log(promise3);
}
eksekusi();
// |=======================================================================================| //

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// |=======================================================================================| //
// |                                   Persi Then Catch                                    | //
// |=======================================================================================| //
ambilDataNilai()
  .then((deretangka) => {
    return hitungNilai(deretangka);
  })
  .then((avg) => {
    return ambilRata(avg);
  })
  .then((hasil) => {
    console.log(hasil);
  });
// |=======================================================================================| //
