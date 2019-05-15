function fpb (firstNumber, secondNumber) {
    // Your code here
    var hasil = 0;
    for (var i = 0; i < secondNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0){
            hasil = i;
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1