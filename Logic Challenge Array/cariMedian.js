function cariMedian(arr) {
    var nilai;
    var median;
     if(arr.length%2!==0){
     nilai= Math.floor(arr.length/2);
     median = arr[nilai];  
     }else{
       if(arr.length%2===0){
         nilai=Math.floor(arr.length/2);
         median=(arr[nilai]+arr[nilai-1])/2;
         
       }
     }
     return median;
    }
  
  console.log (cariMedian([1,2,3]))
  console.log (cariMedian([1,2,3,4]))