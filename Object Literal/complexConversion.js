function complexConversion (text) {
    // Your code here
    var obj = {}
    var arr = []
    var pemisah = text.split (',')
    // console.log ('ini pemisah koma', pemisah)
    for (var i = 0; i < pemisah.length; i++) {
        var pemisah1 = pemisah[i].split(':')
        // console.log ('ini pemisah titikdua', pemisah1)
        for (var j = 0; j < pemisah1.length; j++) {
            arr.push(pemisah1[j])
            // console.log('push pemisah ke dalam array', arr)
        }
    }
    for (var k = 0; k < arr.length; k++) {
        // console.log('ini conslog looping k', arr)
        if ([k+1] % 2 != 0 && [k+1] !== arr.length-1){
            obj[arr[k]]=arr[k+1]  
        }
    } return obj
} 
  
  // TEST CASES
  console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(complexConversion('name:Erwin,gender:male,age:21'));
  // { name: 'Erwin', gender: 'male', age: '21' }
  
  console.log(complexConversion('city:Surabaya,province:East Java'));
  // { city: 'Surabaya', province: 'East Java' }