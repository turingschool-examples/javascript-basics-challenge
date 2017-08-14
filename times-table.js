function timesTable(num) {
  if (num === 0) {
    return 0
  } else {
    var table = ""
    var firstRow = [...Array(num + 1).keys()];
    firstRow.splice(0, 1);
    for(i = 1; i < num + 1; i++) {
      firstRow.forEach(function(columnNumber){
        table += (columnNumber * i) + " ";
      });
      table += "\n";
    }
    return table;
  }
}

module.exports = timesTable