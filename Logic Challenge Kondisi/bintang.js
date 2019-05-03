// soal ke 3 lakukan loop dari 1 -10 setiap loop lakukan console.log string '*'
// e.g i = 1
// * 
// i = 2 
// ** 
// i = 3
// *** 
// note lakukan penjumlahan string

var b = ""
function loopBintang(b) {
  for(var i = 1; i <= 10; i+=1) {
    console.log('i =', i);
    console.log(b+="*" , b.length);
  }
}
loopBintang(b)