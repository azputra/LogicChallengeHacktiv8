function balikKata(kata) {
    var huruf = '';
   for (i=kata.length-1; i>=0; i--){
   huruf = huruf + kata[i];
   }
   return huruf;
}

console.log (balikKata('Javascript'))

console.log ('OR')

function kataBalik (kata) {
    return kata.split('').reverse('').join('');
    
  }

console.log(kataBalik ('makan apa saja'));