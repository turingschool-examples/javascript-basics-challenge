function timesTable(int) {
  var output = "";
  for(var i = 1; i < int + 1; i++) {
    for(var j = 1; j < int + 1; j++) {
      var number = i * j;
      output += number.toString() + ' ';
    }
    output += "\n";
  }
  return output;
}

module.exports = timesTable;