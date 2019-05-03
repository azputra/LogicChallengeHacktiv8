/* diberikan sekumpulan angka dalam array tentukan apakan sekumpulan angka tersebut merupakan deret aritmatika atau bukan pada fungsi terbentukDeretAritmatika(array)
ex.
array = [1,2,3,4,5,6] => angka punya selisih yang sama yaitu 1 jadi ini merupakan deret aritmatika

test cases ;
2,4,6,8 true
2,6,18,54 false
1,2,3,4,7,9 false
1,3,5,7,9 true */

function tentukanDeretAritmatika(arr) {
    var cek = 0; 
    for (var i=0; i<arr.length-2; i++ ){ // for-nya dibatesin jadi kurang 2 indeks, karena kondisi if i+1 i+2 
          if ((arr[i+1]-arr[i]) === (arr[i+2]-arr[i+1])){
            cek = true
        } else {
         cek=false;  
      } 
    }
    return cek;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false 
  
  console.log ('===============================')
  function tentukanDeretAritmatika(arr) {
    var cek = arr [1] - arr [0];
    for (var i=0; i<arr.length-1; i++ ){
         var selisih = arr[i+1] - arr[i]
         if (selisih !== cek){
            return false;
        } 
    }
    return true; 
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false 