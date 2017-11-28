timesTable = (num) => {
  var table = "";
  for(var i = 1; i <= num; i++) {
    for(var j = 1; j <= num; j++) {
      table += (i * j) + " ";
    }
    table += "\n"
  }
  return table;
}

module.exports = timesTable
