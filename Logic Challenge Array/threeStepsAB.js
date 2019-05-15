function threeStepsAB (text) {
  // variabel penampung string a dan b
  var a;
  var b;
  for (var i = 0; i < text.length; i++) {
      if (text[i] === 'a') { // cek string a index ke berapa
          a = i
      } else if (text [i] === 'b') { //cek string b index ke berapa
          b = i
      } 
      var hasil = a - b === 4 || b - a === 4;
  }
  return hasil
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false

console.log ("cara 2")

// function threeStepsAB (text) {
//     // variabel penampung string a dan b
//     var a;
//     var b;
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === 'a') { // cek string a index ke berapa
//             for (var j = 3; j < text.length; j++) {
//                 if (text[j] === 'b'){

//                 }
                
//             } 
//         } 
//     }
//     return hasil
//   }
  
//   // TEST CASES
//   console.log(threeStepsAB('lane borrowed')); // true
//   console.log(threeStepsAB('i am sick')); // false
//   console.log(threeStepsAB('you are boring')); // true
//   console.log(threeStepsAB('barbarian')); // true
//   console.log(threeStepsAB('bacon and meat')); // false