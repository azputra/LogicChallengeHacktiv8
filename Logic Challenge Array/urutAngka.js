function urutAngka(arr){
    var angka = arr.length;
    for (var i = angka-1; i>=0; i++){ 
      for(var j = 1; j<=i; j++){ // untuk looping urutan
        if(arr[j-1]>arr[j]){
            var c = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = c;
         }
      }
    }
    return arr;
 }

 console.log(urutAngka([3,1,2,4,5,7,6]))