function cekUsia(umur) {
    try {
        if(typeof umur !== "number") {
        throw new Error("harus angka");
    }
    if ( umur > 20) {throw new Error("anda sudah dewasa");}
    else { throw new Error("anda belum dewaasa");}
    console.log("welkom");
    
    } catch (error) {
        console.log(error.message);
        
    }
    // cek jika yang dimasukkan bukan angka

}
cekUsia()