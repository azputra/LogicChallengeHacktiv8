var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

function pisahHuruf(text) {
  pisah = text.split(',');
  var pisah2 = []
  for (let i = 0; i < pisah.length; i++) {
    pisah3 = pisah[i].split(':');
    pisah2.push(pisah3)
  }
  return pisah2
}
console.log(pisahHuruf(text))