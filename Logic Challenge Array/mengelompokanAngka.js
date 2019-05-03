/*Diberikan sebuah array dengan kumpulan angka didalamnya, ubah array menjadi array 2 dimensi
  dimana berisikan pengelompokan angka dengan urutan genap, ganjil dan habis dibagi 3:

  function mengelompokkanAngka(array)
  ex.
    array = [2, 4, 6], maka akan di kelompokan menjadi 3:
    [2, 4] => genap
    [] => ganjil
    [6] => angka yang habis dibagi 3
    dan hasilnya: [ [2, 4], [], [6] ]

*/
function mengelompokkanAngka(arr) { 
    var KelipatanTiga = []
    var Genap = []
    var Ganjil = []
    var result = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
          KelipatanTiga.push(arr[i]);
        } else if (arr[i] % 2 === 0) {
          Genap.push(arr[i]);
        } else if (arr[i] % 2 !== 0) {
          Ganjil.push(arr[i]);
        }
    } 
    result.push(Genap, Ganjil, KelipatanTiga)
    return result
}
     


console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
