function cariMean(arr) {
    // you can only write your code here!
    var hasil = 0;
    
    for(var i = 0; i < arr.length; i ++) {
    // rumus mean jumlah seluruh data dibagi banyaknya data
    hasil += arr[i];
    }
    return Math.round(hasil/arr.length);
  }
  
  console.log (cariMean([1,2,3]))
  console.log (cariMean([1,2,3,4]))