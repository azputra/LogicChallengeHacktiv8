function isPrime(number) {
    var hasilnya = true
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            hasilnya = false
        } 
    } return hasilnya
}

console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false