var  penumpang = 4

function penumpangBecak(penumpang) {
    var maxspeed = 20
    if (penumpang == 2 || penumpang == 3 ) {
        return maxspeed - 5
      } else if (penumpang < 2) {
        return maxspeed - 2
      } else if (penumpang == 4) {
        return maxspeed - 7
      }  else (penumpang > 4)
      return "Tidak Bisa"
}

console.log (penumpangBecak(penumpang))