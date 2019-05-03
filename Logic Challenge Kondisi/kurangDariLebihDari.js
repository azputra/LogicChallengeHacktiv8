function kurangdari (no1, no2) {
    // var no1 = 
    // var no2 =
    if (no1 < no2) {
        console.log('true')
    } else if (no1 > no2) {
        console.log('false')
    } else {
        console.log ('tidak ada nilai yang dibandingkan')
    }
}

function lebihdari (no1, no2) {
    // var no1 = 
    // var no2 =
    if (no1 > no2) {
        return true
    } else if (no1 < no2) {
        return false
    } else {
        console.log ('tidak ada nilai yang dibandingkan')
    }
}

kurangdari (3, 8) //true
kurangdari (5, 2) //false
kurangdari () //tidak ada
console.log ('=========') // kalau di function memakai return true & false
console.log (lebihdari (3, 8)) //false
console.log (lebihdari (5, 2)) //true
lebihdari () //tidak ada