for (i = 1; i <= 6; i++) {
    var bintang = ''
    for (j = 5; j >= i; j--) {
        bintang += ' '
    } for (k = 1; k <= i; k++){
        bintang += '*'
    } for (l = 1; l <= i - 1; l++){
      bintang += '*'
  }
  console.log (bintang);
  }