/*Switch Operator*/

console.log ("Menentukan Bilangan Genap/Ganjil Dengan Switch")
var angka1 = 1
var angka2 = 2
var operator = '+'


switch(operator) {
  case '+' :   {
    console.log((angka1)+(angka2));
    if ((angka1+angka2) % 2 == 0) {
    console.log ('genap');
  } else {
    console.log ('ganjil');
  } break; }
  case '*' :   { 
    console.log((angka1)*(angka2)); 
    if ((angka1*angka2) % 2 == 0) {
    console.log ('genap');
    } else {
      console.log ('ganjil');
    } break; }
  case '-' :   { 
    console.log((angka1)-(angka2)); 
    if ((angka1-angka2) % 2 == 0){
    console.log ('genap');
    } else {
      console.log ('ganjil');
    } break; }
  case '%' :   { 
    console.log((angka1)%(angka2)); 
    if ((angka1%angka2) % 2 == 0) {
    console.log ('genap');
    } else {
      console.log ('ganjil')
    } break; }
  default:  { 
    console.log('Tidak terjadi apa-apa'); 
    }
}

console.log ("Penjumlahan Bilangan Dengan Menggunakan Switch")

var angka1 = 4
var angka2 = 2
var operator = ''

switch(operator) {
  case '+' :   { console.log((angka1)+(angka2)); break; }
  case '*' :   { console.log((angka1)*(angka2)); break; }
  case '-' :   { console.log((angka1)-(angka2)); break; }
  case '%' :   { console.log((angka1)%(angka2)); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}