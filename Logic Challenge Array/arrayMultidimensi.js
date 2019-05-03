console.log('========1')
var multiDimensiArray = [[[[[[[1, 2, 3, 4, 5]]]]]]];
console.log (multiDimensiArray[0][0][0][0][0][0][0]);
console.log (multiDimensiArray[0][0][0][0][0][0][1]);
console.log (multiDimensiArray[0][0][0][0][0][0][2]);
console.log (multiDimensiArray[0][0][0][0][0][0][3]);
console.log (multiDimensiArray[0][0][0][0][0][0][4]);
console.log('========2')
var multiDimensiArray1 = [[1], [2, 3], [4, [5, 6]]];
console.log (multiDimensiArray1[0][0]);
console.log (multiDimensiArray1[1][0]);
console.log (multiDimensiArray1[1][1]);
console.log (multiDimensiArray1[2][0]);
console.log (multiDimensiArray1[2][1][0]);
console.log (multiDimensiArray1[2][1][1]);
console.log('========3')
var multiDimensiArray2 = [1, [2, [3, [4, [5]]]]];
console.log (multiDimensiArray2[0]);
console.log (multiDimensiArray2[1][0]);
console.log (multiDimensiArray2[1][1][0]);
console.log (multiDimensiArray2[1][1][1][0]);
console.log (multiDimensiArray2[1][1][1][1][0]);
console.log('========4')
var multiDimensiArray3 = [[[1, [2], 3, [4], [[[[5]]]]]]];
console.log (multiDimensiArray3[0][0][0]);
console.log (multiDimensiArray3[0][0][1][0]);
console.log (multiDimensiArray3[0][0][2]);
console.log (multiDimensiArray3[0][0][3][0]);
console.log (multiDimensiArray3[0][0][4][0][0][0][0]);
console.log('========5')
var multiDimensiArray4 = [1, [[2, [3]], [4,[[5, 6, [[7, 8]]]]], 9, [[10]]]];
console.log (multiDimensiArray4[0]);
console.log (multiDimensiArray4[1][0][0]);
console.log (multiDimensiArray4[1][0][1][0]);
console.log (multiDimensiArray4[1][1][0]);
console.log (multiDimensiArray4[1][1][1][0][0]);
console.log (multiDimensiArray4[1][1][1][0][1]);
console.log (multiDimensiArray4[1][1][1][0][2][0][0]);
console.log (multiDimensiArray4[1][1][1][0][2][0][1]);
console.log (multiDimensiArray4[1][2]);
console.log (multiDimensiArray4[1][3][0][0]);