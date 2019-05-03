function pesananCafe (name, age, money) {
    // var name = "tes" ;
    // var age = 23 ;
    // var money = 300000 ;
    // var minuman = "";
    // var harga = "";

    if (name === ""){
        console.log ("Anda Tidak Boleh Masuk")
    } else {
        if (age < 17){
        minuman = "Juice"
        harga = 50000
        } else {
            minuman = "Anggur"
            var harga = 300000
        } 
        if (money < harga){
            console.log ("Uang Tidak Cukup. Anda Harus Pulang")
        } else {
            money-=harga
            console.log ('Anda Bisa Pesan Minum '+minuman+'. Sisa Uang Anda '+money)
        }
    }
    return pesananCafe
}

console.log (pesananCafe ('putra', 20, 350000))