
function timesTable(num) {
  if (num <= 0) {
    return null;
  }

  var display = ""

  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      var multiple = i * j;
      display += multiple + " ";
    }
    display += "/n";
  }
  return display;
}

module.exports = timesTable;
console.log(timesTable(5))
