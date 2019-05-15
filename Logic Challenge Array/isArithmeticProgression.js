function isArithmeticProgression (array) {
  // Your code here
  var number = array [1] - array [0]
  for (i = 0; i < array.length-1; i++) {
    //   console.log(array)
      var cariSelisih = array [i+1] - array[i]
      console.log (cariSelisih)
      if (cariSelisih !== number) {
          return false
      } 
    } 
    return true
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false