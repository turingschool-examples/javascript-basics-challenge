function timesTable(input) {
  var timesTable = '';

  for (var i = 1; i <= input; i++) {
    var row = '';
    for (var j = 1; j <= input; j++) {
      row += (i * j) + " ";
    }
    timesTable += row + "\n";
  }

  return timesTable;
};

module.exports = timesTable;