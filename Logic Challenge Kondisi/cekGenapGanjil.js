// soal latihan 1 cek angka dari 1 - 100 lalu di console log genap atau ganjil

var params = 100;
function genapGanjil(params) {
    for (var i = 0; i <= params; i++) {
        if (i % 2 == 0) {
            console.log ("angka ke -", i , "genap")
        } else {
            console.log ("angka ke -", i , "ganjil")
        }
        console.log('Iterasi ke-' + i)
    }
}
genapGanjil(params)

console.log ("=====OR=====")

var count = 1;
function genapGanjil(count) {
    
while( count <= 100) {
    if (count % 2 == 0){
        console.log ("angka ke -", count ,  "genap")
    } else {
        console.log ("angka ke -", count ,  "ganjil")
    }
  count++
}
}
genapGanjil(count)