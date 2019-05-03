function checkXO (kalimatXO) {
  if(kalimatXO.match(/x/g).length === kalimatXO.match(/o/g).length){ //menentukan jumlang .length x dan o sama atau tidak
      console.log(true)
    } else{
        console.log(false)
    }
    return checkXO
}

checkXO('xoxoxo') //true
checkXO('xox') //false
checkXO('xoox') //true
checkXO('xoxxo') //false

console.log ('====OR====')

function xo(str) {
    var hurufX = '0';
    var hurufO = '0';
    for (var i = 0; i <= str.length; i++){
        if (str[i] === 'x') {
            hurufX += 1;
        }else if (str[i] === 'o'){
            hurufO += 1;
        }
    }
    return hurufX === hurufO;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true