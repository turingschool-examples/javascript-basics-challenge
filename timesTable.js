function buff(val) {
  var buff = '';
  var pad = 4 - val;
    while( pad-- > 0 )
      buff += ' ';
  return buff;
}

function timesTable(n) {
  var result = ' x   ';
  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= n; j++) {
      if(i == 0 && j > 0){
        result += '[' + j + ']' + buff((j+'').length+2);
      }
      else if(j == 0 && i>0){
        result += '[' + i + ']';
      }
      else if(i>0 && j>0){
      result += buff((i*j+'').length ) + i*j;
      }
    }
    result += '\n'
  }
  return result
}

module.exports = timesTable
