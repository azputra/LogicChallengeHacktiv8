/*psuecode
jika pangjang kata == 0
return kata
else 
ulang function balikkatarekursif dengan kata di substring dengan mengambil kata paling belakang
*/


function balikKataRekursif (kata) {
    if (kata.length === 0){
        return kata
    } else {
        
        return kata [kata.length-1] + balikKataRekursif (kata.substring (0, kata.length-1)) // ambil nilai belakang dan memasukan nilai yang belakang
    }
}
console.log(balikKataRekursif('javascript'))