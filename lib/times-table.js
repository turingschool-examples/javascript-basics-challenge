function timesTable(number) {
  var firstRow = [];
  for(var i = 0; i < number; i++) {
    firstRow.push(number - i);
  };
  var orderedFirstRow = firstRow.reverse();
  var table = "";
  for(var i = 0; i < orderedFirstRow.length; i++) {
    for (var j = 0; j < orderedFirstRow.length; j++) {
      var product = orderedFirstRow[i] * orderedFirstRow[j];
      table = table + product.toString() + " ";
    };
    table = table + "\n";
  };
  return table;
};
module.exports = timesTable;
