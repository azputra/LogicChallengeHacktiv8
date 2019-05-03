// diberikan sekumpulan angka dan cari pasangan terbesar dari kumpulan angka tersebut;
   //ex 
   // number = 641573, number dapat di pecah menjadi beberapa pasang, yaitu 64, 41, 15, 57, 73
   // dari beberapa pasang tersebut didapati pasangan dengan nilai terbesar 73


   function pasanganTerbesar(number) {
    // var max, untuk compare nilai maksimal
     var max = 0
     // untuk mengubah number jadi string
     var number = number.toString()
   // untuk mengulang sepanjang number(String) ditambahkan 
     for (i = 0; i < number.length - 1; i++) {
       //var pasangan = merupakan mendapatkan pasangan terbesar dari Array 
       var pasangan = number[i] + number [i+1];
       // Kondisi mendapatkan nilai MAX
       if (max < pasangan ) {
         max = pasangan
       }
     }
     return max;
   }

  console.log (pasanganTerbesar(12783456)); //83
  console.log (pasanganTerbesar(910233)); // 91
  console.log (pasanganTerbesar(71856421)); // 85
  console.log (pasanganTerbesar(7991823)); // 99