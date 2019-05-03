//buat lah hasil jika 1 = 1 jika 2 = 22 jika 3 = 333 dst

var angka2 = [1,2,1,2,3,4,5]
function tambahNumber(array) {
    var temp= []
    for (i = 0; i < array.length; i++) {
        // console.log(i)
        for (j = 0; j < array[i]; j++) {
            // console.log(j)
            temp = temp + array[i] // temp di tambah dengan array i
           }
        }
    return temp 
}

console.log (tambahNumber(angka2))