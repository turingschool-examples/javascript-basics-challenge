function timesTable(num) {
  var row =''

  for(var i = 1; i <= num; i++){
    var column = ''

    for(var j = 1; j <= num; j++){
      column += `${(i*j)}\t`
    }
    row += `${column}\n`
  }
  return row
}

module.exports = timesTable;
