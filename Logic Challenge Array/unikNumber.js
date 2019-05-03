var angka2 = [1,2,1,2,3,4,5]
function unikNumber(array) {
    var temp= []
    for (i = 0; i < array.length; i++) {
        // console.log(i)
        var count = 0 
        for (j = 0; j < array.length; j++) {
            // console.log(j)
           if (array[i] == array[j]){ // jika array i dan j sama di masukan ke count
               count++
            //    console.log (count)
           }
         } if (count == 1){ //jika jumlah count hanya 1 push ke dalam array
                temp.push(array[i])
         }
        }
    return temp 
}

console.log (unikNumber(angka2)) //3,4,5