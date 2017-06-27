

function timesTable(n) {
  //  make an array from 1 to n
  table = []
  table[0] = Array.from(new Array(n), (val, index) => index +1 ) ;
  multiplier = 1
  // make an array
  for (var i = 1; i < n; i++) {
    multiplier++
    new_row = [table[i-1][0] + 1]
    for (var p = 0; p < n-1; p++) {
      new_value = new_row[new_row.length -1] + multiplier
      new_row.push(new_value)
    }
    table.push(new_row)
  }

  // return table
  for (var row in table){
    console.log(table[row].toString().replace(/,/g, ' '))
  }
}

module.exports = timesTable
