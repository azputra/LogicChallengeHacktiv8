/*psuecode
jika str === 0
return true
jika tidak
buat var untuk menentukan huruf depan [0]
buat var untuk menentukan huruf belajang [str.length-1]
if depan !== belakang
return false
jika tidak return function checkPalindormeRekursif
 */

function checkPalindormeRekursif(str) {
    // console.log(str.length)
    if (str.length === 0) {
    return true
    } else {
    var depan = str[0]
    var belakang = str[str.length-1]
    } if (depan !== belakang) {
    return false
    } else {
    return checkPalindormeRekursif (str.slice(1, str.length-1))
    }
}

console.log (checkPalindormeRekursif('apag'))