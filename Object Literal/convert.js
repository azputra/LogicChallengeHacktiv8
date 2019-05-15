console.log("=====secara hardcore=====")

function convert(params) {
   var arr = []
   for (var i = 0; i < params.length; i++) {
    var hasil = {}
            // console.log("cons i", i)
            hasil.id = params [i][0]
            hasil.name = params [i][1]
            hasil.lastName = params [i][2]
            hasil.email = params [i][3]
            // console.log("conshasil id", hasil)
            // console.log("conshasil param", params.length)
            arr.push(hasil)
            // console.log("array", arr)
       }
   return arr
}

console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

console.log(convert([]));

console.log ("=====atau dengan secara dinamis=====")

function convert(params) {
  if (params !== 0) {
    var arr = []
    for (var i = 0; i < params.length; i++) {
      var obj = {
        id: 0,
        name: '',
        lastName: '',
        email: '',
      }
      var j = 0;
      for (var key in obj){
        obj[key]+=params[i][j]
        j++
      }
      arr.push(obj)
    }
    return arr
  }
}

console.log(convert([
    [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
    [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
  ]));

  console.log(convert([]));


//looping dengan while
// var i = 0
// while (i < data.length) {

// i++  
// }