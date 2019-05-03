/*       *
        **
       ***
      ****
 +****
 ++***
 +++**
 ++++* */

 function bitangDenganSpace(bintang) {
    for (i = 1; i <= 5; i++) {
        var bintang = ''
        for (j = 5; j >= i; j--) {
            bintang += ' '
        } for (k = 1; k <= i; k++){
            bintang += '*'
        }
        console.log (bintang);
     }
}
bitangDenganSpace ('*')

 console.log ('===============OR==============')
 var simbol = ''
 function bintangPlus(simbol) {
    for (i = 1; i <= 5; i++) {
        simbol = ''
        for (j = 5; j >= i; j--) {
            simbol += '*'
        } for (k = 1; k <= i; k++){
            simbol += '+'
        }
        console.log (simbol);
     } 
}
bintangPlus (simbol)
    
 console.log ('================OR==============')

 function plusBintang (plus, bintang) {
    for (i = 1; i <= 5; i++) {
        var bintang = ''
        var plus = ''
        for (j = 5; j >= i; j--) {
            bintang += '*'
        } for (k = 1; k <= i; k++){
            plus += '+'
        }
        console.log (plus+bintang);
     }
}
plusBintang ('+', '*')