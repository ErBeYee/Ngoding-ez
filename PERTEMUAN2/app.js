// BELAJAR TRY CATCH
// BLOK TRY ADALAH = KODE YANG KEMUNGKINAN BERHASIL DAN GAGAL
try {
    let hasil = 10 / 5;
    throw new Error("Eror boy");
    
    console.log(hasil);
    
} catch (error) {
    // cek property apa saja yang eror didalam object eror
    // console.log(Object.getOwnPropertyNames(error));
    

    // umumya menampilkan pesan eror itu mengguanakan properti message sperti dibwah ini
    // isi dari properti message adalah string dari throw error (jika ada)
    // jika tidak string error dari throw maka properti messege akan berhasil
    // default dari message bawaan dari jawascript
    // sperti dibwah ini
    console.log(error.message);
 } finally {
    // keyword finally oasti dijalankan
    console.log("mau ada eror atau tidak,tetap muncul boy");
    
}