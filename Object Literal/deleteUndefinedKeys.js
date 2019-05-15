function deleteUndefinedKeys (object) {
    // Your code here
    var baru = {}
    for (var hasil in object){
        console.log('ini object hasil', object[hasil])
        if (object[hasil] !== undefined){
            baru[hasil]=object[hasil]
        }
    }
    return baru
}
  
  console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
  }));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
  }));
  // {}

  // delete object[key]