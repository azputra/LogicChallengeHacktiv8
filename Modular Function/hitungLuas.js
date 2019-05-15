function square (number) {
    var r = number*number;
    return r
  }
  
  function pi () {
    var phi = 3.14
    return phi
  }
  
  var area = pi() * square(7);
  var output = Math.ceil(area)
  console.log(output); // 154