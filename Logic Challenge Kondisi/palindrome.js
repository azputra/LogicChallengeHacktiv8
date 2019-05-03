function fastestIsPalindrome(number) {
    var numberreal = Math.floor(number.length / 2);
    for (var i = 0; i < numberreal; i++)
    
      if (number[i] !== number[number.length - i - 1])
        return false;
    return true;
  }
  console.log (fastestIsPalindrome('14241'))
  console.log (fastestIsPalindrome('13241'))
  console.log ('======OR======')
  
  function palindrome(number) {
    numberinput = number;
    reversednumber = 0;
  
    while (numberinput > 0){
      var rightdigit = Math.floor (numberinput%10); //ex: jika no input 12321 di modulus 10 maka jadi 1232 12341 1234
      reversednumber = reversednumber*10+rightdigit; //ex dibalik = 0 * 10 = 0 di tambah 1232 1234
      numberinput = Math.floor (numberinput/10); //ex: 1232 1234 
    }
    if (number===reversednumber){
      return true; 
    } else {
      return false;
    }
  }
  
  console.log (palindrome(13231))
  console.log (palindrome(14231))
  console.log ('======OR======')

function balikNumber(number) {
    rubah = number.toString()
    kata = rubah.split('')
    balik = kata.reverse()
    sambung = balik.join ('')
    rubahlagi = Number(sambung)
    if (rubahlagi === number) {
        return true
    } else {
        return false
    }
}

  console.log (balikNumber(12321))
  console.log (balikNumber(12341))