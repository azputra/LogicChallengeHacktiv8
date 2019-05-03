//soal latihan ke 4 lakukan console.log string jika iterasi angka ganjil console.log "+" jika genap "*"
// lakukan penjumlahan string dan nested loop, jgn lupa gunaan cara untuk mengetahui panjang string
//lakukan manipulasi statement untuk loop ke 2
// di samping for biasanya ada { }

var star = ''
var plus = ''
function starPlus(star, plus) {
    for(var i = 1; i <= 5; i++) {
        if (i%2 != 0) {
        star += '*'
        console.log (star, star.length) ;
        star += '*'
        } else if (i%2 == 0) {
            for(var j = 1; j <= 2; j++)
            plus+='+'
            console.log(plus, plus.length);
        } 
    }
}
starPlus(star, plus)

    console.log ("-----------------OR-----------------")
    
for (var i = 0; i < 5; i++) {
    var tampil = '';
    var jenis = '';
    if (i%2 == 0) {
        for (var j = 0; j <= i; j++) {
        tampil += '+';
        }
        jenis = 'ganjil'
    } else {
        for (var k = 0; k <= i; k++) {
            tampil += '*';
        }
        jenis = 'genap'
    }
    console.log(tampil, tampil.length, jenis);
}

var ulangi = "Apakah anda mau mengulang?";
var counter = 0;

while(ulangi<=5){
    jawab += ulangi
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

console.log("Perulangan sudah dilakuakn sebanyak "+ ulangi +" kali");
