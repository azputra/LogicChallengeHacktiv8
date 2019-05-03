
var number = 5
function segitigaTerbalik(number) {
    for (i = 0; i < number; i++) {
        var bintang = ''
        for (j = number; j > i; j--) {
        bintang += '*'
        }
        console.log (bintang);
    }
}

segitigaTerbalik(number)

console.log('OR')

function segitigaTerbalik(bintang) {
    for (i = 0; i < 5; i++) {
        var bintang = ''
        for (j = 5; j > i; j--) {
        bintang += '*'
        }
        console.log (bintang);
    }
}
segitigaTerbalik ('*')