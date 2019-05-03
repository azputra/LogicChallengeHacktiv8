function cariMin(numberArr) {
    var min = numberArr.sort(function(a, b) { return a > b });
    return min [0]
}

function cariMax(numberArr) {
    var max = numberArr.sort(function(a, b) { return a < b});
    return max [0]
}

function cariAverage(numberArr) {
  var sum = numberArr.reduce ((a,b)=>a+b);
  var avg = Math.ceil (sum/numberArr.length);
  return avg
  }

function cariOdds(numberArr) {
var odds = [];
  for(i = 0; i < numberArr.length; i++) {
    if(numberArr[i] % 2 !== 0){
      odds.push(numberArr[i]);
    }
  }
  return odds;
}

function cariEvens(numberArr) {
var evens = [];
  for(i = 0; i < numberArr.length; i++) {
    if(numberArr[i] % 2 == 0){
      evens.push(numberArr[i]);
    }
  }
  return evens;
}

  function numberProcessing(numberArr) {
    //your code here
    var min = cariMin (numberArr)
    var max = cariMax (numberArr)
    var mean = cariAverage (numberArr)
    var odds = cariOdds (numberArr)
    var evens = cariEvens (numberArr)
    return 'Min : ' + min + ',' + ' Max : ' + max + ',' + ' Mean : ' + mean + ' Odds : ' + odds + ' Evens : ' + evens 
}
   
   

  console.log (numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"


   console.log ('============OR===========')

   function numberProcessing(numberArr) {
     var min = Math.min (...numberArr);
     var max = Math.max (...numberArr);
     var sum = numberArr.reduce ((a,b) => a+b);
     var avg = Math.ceil (sum/numberArr.length);
     var odds = []
     var evens = []

     for (i = 0; i < numberArr.length; i++) {
       if (numberArr[i] % 2 == 0){
         evens.push (numberArr[i])
       } else {
         odds.push (numberArr[i])
       }
     }
     return 'Min : ' + min + ',' + ' Max : ' + max + ',' + ' Mean : ' + avg + ' Odds : ' + odds + ' Evens : ' + evens
   }

   console.log (numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"