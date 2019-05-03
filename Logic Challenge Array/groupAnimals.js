function groupAnimals(array) {
var tampung = [ [] ];
  var a = 0;
  array.sort() // menyusun kata pertama sesuai abjad outputnya anoa, ayam, cacing, kancil, kuda
  tampung[0].push(array[0]) // memasukkan binatang pertama yaitu anoa ke tampung menjadi [['anoa']]
  for(var i = 1 ; i < array.length ; i++){
    if(array[i][0] === tampung[a][0][0]){ // jika huruf pertama animals(animals[i][0]) outputnya a,a,c,k,k sama dengan huruf pertama tampung yaitu anoa berarti a
      tampung[a].push(array[i])
    }else{
      a++; //untuk menambax index
      tampung[a] = [array  [i]]
    }
  }
  return tampung
}
/*TEST CASES:*/
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]

console.log ("==========OR==========")

  function groupAnimals(animals) {
    // you can only write your code here!
    
    // array untuk hasil pengelompokan hewan
    var hasil = [];
    // variabel untuk indeks array hasil
    var indeks = 0;
    // fungsi sorting
    animals.sort();
    
    // perulangan sebanyak jumlah hewan di array animals
    for (var i = 0; i < animals.length; i++) {
      // jika array hasil masih kosong, maka hewan pertama dari array animals akan di-push 
      if (hasil.length === 0) {
        // push data hewan ke array hasil
        // [['ayam']]
        hasil.push([animals[i]]);
      // membandingkan karakter pertama hasil[indeks][0][0] dengan karakter pertama pada array animals   
      } else if (hasil[0][0][0] === animals[i][0]) {
        // jika karakter pertama dari nama hewan sama, maka akan dipush ke indeks array yang sama
        // [['ayam', 'anoa']]
        hasil[indeks].push(animals[i]);
      // jika 2 kondisi sebelumnya tidak terpenuhi (karakter pertama dengan nama hewan sebelumnya tidak sama  
      } else{
        // push hewan dari animals ke indeks array baru di dalam array hasil
        // [['ayam', 'anoa'], ['cacing']]
        hasil.push([animals[i]]);
        // indeks dari array hasil ditambah 1
        indeks++;
    }
  }
    // return output array hasil
    return hasil;
  }
  /*TEST CASES:*/
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
    // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]