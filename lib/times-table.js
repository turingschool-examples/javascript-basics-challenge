function timesTable(int) {
  let output = "";
  for(let i = 1; i < int + 1; i++) {
    for(let j = 1; j < int + 1; j++) {
      let number = i * j;
      output += number.toString() + ' ';
    }
    output += "\n";
  }
  return output;
}

module.exports = timesTable;