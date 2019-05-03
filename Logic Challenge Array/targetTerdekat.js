function targetTerdekat(arr) {
    var posisiO = arr.indexOf('o');
    // console.log(posisiO); //menentukan posisi O
    var posisiX = [];
    for(var i =0; i<arr.length;i++){
      if(arr[i]==='x'){
        posisiX.push(i); 
      }
    }
    // console.log(posisiX); //menentukan posisi X
    var terdekat = [];
    for(var j =0; j<posisiX.length;j++){
      var jarak = Math.abs(posisiX[j]-posisiO);
      terdekat.push(jarak);
    }
    // console.log(terdekat); 
    var jarakTerdekat = terdekat[0];
    if(terdekat.length<1){
      return 0;
    }else{
    for(var k =0; k<terdekat.length; k++){
      if(terdekat[k]<jarakTerdekat){
        jarakTerdekat=terdekat[k];
      }
    }  
    }
    
    return jarakTerdekat;
  }
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', ' ', 'o', ' ', 'x', 'x', ' ', 'x'])); // 2

console.log('============================')

  function targetTerdekat2(arr) {
    return arr.indexOf('x') - arr.indexOf('o') > 0 ? arr.indexOf('x') - arr.indexOf('o') : (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
  }

  // TEST CASES
  console.log(targetTerdekat2([' ', ' ', 'o', ' ', ' ', 'x', ' ', ' ', 'x'])); // 3
  console.log(targetTerdekat2(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat2(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat2([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat2([' ', ' ', 'o', ' ', 'x', 'x', ' ', 'x'])); // 2