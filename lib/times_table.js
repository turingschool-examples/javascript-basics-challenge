
var array = []
var table = []

function timesTable(num) {
  for(var i = 1; i <= num; i++){
    array.push(i)
    let rows = []
    for (var j = 1; j <= num; j++) {
      rows.push(j*i);
    }
    table.push(rows.join(' '))
  }
  return table.join('\n')
}

module.exports = timesTable
