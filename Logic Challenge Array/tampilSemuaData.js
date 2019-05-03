var people = [
    [1, 'Dimitri', 'Hacktiv8'],
    [2, 'Dhani', 'Hacktiv8'],
    [3, 'Icha', 'Hacktiv8']
  ];

  function tampilSemuaData() {
      for (i = 0; i < people.length; i++) {
          console.log(people)
          for (j = 0; j < people.length; j++) { // panjang index
              if (j === 0) {
              console.log ('ID : ' , people[i][j])
          } else if (j === 1) {
              console.log ('Name : ' , people [i][j])
          } else if (j === 2){
              console.log ('Company : ' , people [i][j])
          }
          console.log()
        }
    }
}
tampilSemuaData (people)

console.log ('===========dengan console.log saja==========')

var people1 = [
    [1, 'Dimitri', 'Hacktiv8'],
    [2, 'Dhani', 'Hacktiv8'],
    [3, 'Icha', 'Hacktiv8']
  ];

  console.log('ID :', people1[0][0], 'Name :', people1[0][1], 'Company : ', people1[0][2])
  console.log('ID :', people1[1][0], 'Name :', people1[1][1], 'Company : ', people1[1][2])
  console.log('ID :', people1[2][0], 'Name :', people1[2][1], 'Company : ', people1[2][2])