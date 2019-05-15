/*psuecode
bikin var penampung
slice agar huruf berkurang 1
jika word === 0 keluar count untuk berhenti jika sudah 0
word[0] === letter menyamakan huruf word ke 0 jika iya tambah count
else
jalankan kembali function
return hasil
*/

function countLetters (word, letter) {
  // Your code here
  var count = 0;
  var newWord = word.slice(1)

  if (word.length === 0){
  return count = 0
  }
  else if (word[0] === letter) {
    count++
  }
  else {
  } return count + countLetters (newWord, letter)
}

// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); //3 