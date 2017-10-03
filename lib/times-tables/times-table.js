function timesTable(maxValue) {
  if (maxValue <= 0) {
    return null;
  }

  let displayBoard ="";
  for (var i = 1; i <= maxValue; i++){
    for (var x = 1; x <= maxValue; x++) {
      let multipleOf = i*x;
      displayBoard += multipleOf + " ";
    }
    displayBoard += "/n";
  }
  return displayBoard;
}

module.exports = timesTable;
