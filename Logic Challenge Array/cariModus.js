// var arr = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

// function cariModus(arr){
//   var  angka = [] ; // untuk memasukan angka 
//   var jumlahAngka = []; // untuk memasukan jumlah jumlahAngka dari angka 

// // 1. mencari angka untuk di masukan ke array    
//   for(var i = 0; i < arr.length ; i+=1){
//   var angka1 = angka.indexOf(arr[i]);//mencari angka di array angka 
// //2. menghitung jumlah jumlahangka dari angka 
//   if (angka1 === -1){ //karena gk ketemu, karena array angka masih kosong
//     angka.push(arr[i]);// angka di arr, masuk ke array angka
//     jumlahAngka.push(1);// dan jumlah jumlahangka di tambah 1 
//     }else { // jika ketemu, angka angka yang sama harus nambah jumlahangka nya 
//       jumlahAngka[angka1]++    
//     }
//   }
//   //3. looping mencari jumlahangka terbesar
//   var banyakAngka = 0 ;
//   for (var j = 0 ; j< jumlahAngka.length ; j+=1){
//     if(jumlahAngka[j] > banyakAngka){
//       banyakAngka = jumlahAngka[j]  // didapat kalau banyakAngka = 2 
//     }
//    }
//   //4. cari angka mana yang punya jumlah angka terbesar 
//   var jumlahTerbesar = jumlahAngka.indexOf(banyakAngka); // banyakAngka = 2, diindex keberapa pada array jumlahAngka yang mempunyai nilai 2 , jawabannya di index ke 1
//   if(banyakAngka === 1){
//     return -1
//   }else if(angka.length <= 1 ){
//     return -1
//   }else {
//   var output = angka[jumlahTerbesar]; // jumlahTerbesar = 1, nilai array angka di index ke 1 adalah 4
//   }
//   return output
// }

// console.log(cariModus(arr));

function cariModus(arr){
var arrModus = []
var jikasama = false;
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        jikasama  = true;
        arrModus.push(arr[i]);
      } else {
        jikasama  = false;
      }
    }
  }

  return (arrModus[0] === undefined || jikasama) ? -1 : arrModus[0];
}

// // TEST CASES
console.log(cariModus([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ])); //1
console.log(cariModus([10, 4, 5, 2, 4])); // 4