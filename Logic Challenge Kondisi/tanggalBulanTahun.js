function menulisTanggalBulanTahun (tanggal, bulan, tahun) {
  //  var tanggal = 31;
  // var tahun = 2030;
  // var bulan = 2 ;
  
            // if (tanggal<1||tanggal>31||bulan<1||bulan>12||tahun<1900||tahun>2030){
            //   console.log ('Data Tidak Di Temukan')
            // } else {
  
    if (tanggal === Number ){
      console.log ('Isi Tanggal Terlebih Dahulu')
    } else if (bulan === Number) {
      console.log ('Isi Bulan Terlebih Dahulu') 
      } else if (tahun === Number) {
          console.log ('isi tahun terlebih dahulu')
        } else {
              switch (bulan) {
                  case 1:
                    bulan = "Januari";
                    break;
                  case 2:
                    if (tanggal > 29){
                        console.log ("Bulan February Hanya ada Tanggal Dari 1 - 29")
                    } else {
                        bulan = "February";
                    }
                    break;
                  case 3:
                    bulan = "March";
                    break;
                  case 4:
                    bulan = "April";
                    break;
                  case 5:
                    bulan = "May";
                    break;
                  case 6:
                    bulan = "June";
                    break;
                  case 7:
                    bulan = "July";
                    break;
                  case 8:
                    bulan = "August";
                    break;
                  case 9:
                    bulan = "September";
                    break;
                  case 10:
                    bulan = "October";
                    break;
                  case 11:
                    bulan = "November";
                    break;
                  case 12:
                    bulan = "December";
                    break;
                  }
                  console.log (tanggal, bulan, tahun)
                }
                return menulisTanggalBulanTahun
  }
  console.log (menulisTanggalBulanTahun (5,5,2019))