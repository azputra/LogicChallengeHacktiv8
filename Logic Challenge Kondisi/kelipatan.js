// buat soal 2 looping 1 - 100 penjumlahan ketika angka bekelipatan 5 console log yes jika tidak no

var jumlah = 0
function jumlahKelipatan(jumlah) {
    for(var i = 1; i <= 100; i++) {
      jumlah += i
      if (jumlah % 5 == 0){
        console.log( jumlah,"kelipatan 5")
      } else {
        console.log ( jumlah,"ini bukan kelipatan 5")
      } //jadi 1 + 1 = 2 di mod 5 tdk bisa 1 + 2 mod 5 tdk bisa 3 + 3 mod 5 tdk bisa 4 + mod 5 kelipatan 5 dst
  }
}

jumlahKelipatan(jumlah)