function timesTable(number_of_rows) {
  var times_table = "";
  for(var i = 1; i <= number_of_rows; i++) {
    for(var j = 1; j <= number_of_rows; j++) {
      times_table += (i * j) + "  ";
    }
    times_table += "\n"
  }
  return times_table;
}

module.exports = timesTable;
