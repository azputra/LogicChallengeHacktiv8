function konversiNumber(number){
    var jam = Math.floor(number/60); //membuat variabel jam jadi bulat bilangan contoh 124 / 60 = 2,4 jadi 2
    var menit = number % 60; // membuat variabel a dengan modulus contoh 124 modulus 60 = 2 sisanya 4 88 = 1 sisanya 28
    if(menit < 10){
      menit = '0' + menit;}
    
    return jam + ':' + menit;
  }
  
  console.log(konversiNumber(63)) //1:03
  console.log(konversiNumber(124)) //2:04
  console.log(konversiNumber(88))  //1:28