const timesTable = (rows) => {
  result = ''
  for (let r = 1; r <= rows; r++ ) {
    let row = '';
    for (let c = 1; c <= rows; c++) {
      row += (r * c) + '\t'
    }
    row += '\n'
    result += row
  }
  return result
}

module.exports = timesTable
