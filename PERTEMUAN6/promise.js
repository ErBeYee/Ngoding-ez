//promise bisa dibuat dengan cara
// 1 pake variabel seperti dibwah ini

const a = 1;
console.log(a);

const abc = new Promise((berhasil, gagal) => {
  const cek = true;
  if (cek) {
    // resolve
    berhasil("done ga bang? DONE");
  } else {
    // reject
    gagal("done ga bang? NO");
  }
});
console.log(abc);

// then udah fiks berhasil
// cathc gaagl ya adik"
abc
  .then((data) => {
    console.log(data);
  })
  .catch((eror) => {
    console.log(eror);
  });

function abc() {
  return new Promise ((resolve) => {
    resolve("DONE");
  })
}
abc().then((data) => console.log(data));
