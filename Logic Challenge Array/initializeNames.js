function initializeNames(array){
    // Insert your brilliant code here
    var temp = 0
    var arrName = array.split(" ")
    if (array.length > 2){
    for (let i = 0; i < array.length; i++) {
        if (1 === 0) {
            temp.push(array[i])
        } if ( i === array.length-1) {
            temp.push(array[i])
        } else {
            temp.push(array[i][0]+".")
        }
     }
    }
}

console.log (initializeNames('Lois Mary Lane'))