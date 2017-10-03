var num = process.argv[2];
console.log(multiplicationTable(num));

function multiplicationTable(number) {
  var number = number;
  var start, line = '';
  for (var i = 1; i < number; i++) {
    line = '';
    start = i;
    for (var j=1  ; j<number; j++) {
      line += (j*start).toString()+'    ' ;
    }
    console.log(line);
  }
}
