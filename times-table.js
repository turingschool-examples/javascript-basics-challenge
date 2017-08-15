function timesTable(rows) {
  var result = '';
  for (var a = 1; a <= rows; a++) {
    var row = '';
    for (var b = 1; b <= rows; b++) {
      row += (a * b) + '\t';
    }
    row += '\n';
    result += row;
  }
  return result;
}

module.exports = timesTable
