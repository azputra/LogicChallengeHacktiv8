function csvToObject (text) {
    // Your code here
    var pemisah = text.split (',')
    // console.log ('ini pemisah', pemisah)
        var obj = {}
          obj.name = pemisah[0] 
          obj.email = pemisah[1]
          obj.gender = pemisah[2]
        return obj
    }
  
 // TEST CASES
 console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
 // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }
 
 console.log(csvToObject('Icha,icha@mail.com,female'));
 // { name: 'Icha', email: 'icha@mail.com', gender: 'female' }
 
 console.log(csvToObject('Dhani,dhani@mail.com,male'));
 // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }

console.log("coba2")
function csvToObject (text) {
    // Your code here
    var pemisah = text.split (',')
    // console.log ('ini pemisah', pemisah)
        var arr = []
            var obj = {
                name: '',
                email: '',
                gender: '',
              }
              var j = 0;
              for (var key in obj){
                obj[key]+=pemisah[j]
                j++
              }
              arr.push(obj)
        return arr
    }

  // TEST CASES
  console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
  // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }
  
  console.log(csvToObject('Icha,icha@mail.com,female'));
  // { name: 'Icha', email: 'icha@mail.com', gender: 'female' }
  
  console.log(csvToObject('Dhani,dhani@mail.com,male'));
  // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }