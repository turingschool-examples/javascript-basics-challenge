function timesTable(number) {
  let table = ""
  let row = 1
  while (row <= number) {
    table += "\n"
    for (i= 1; i <= number; i++) {
    table += (row * i) + " "
    }
  row += 1
  }
  return table;
}

module.exports = timesTable;
