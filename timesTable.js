function timesTable(num) {
  var table = ""
  var counter = 1
  while (counter <= num) {
    table += "\n"
    for (i= 1; i <= num; i++) {
    table += (counter * i) + " "
    }
  counter += 1
  }
  return table
}

module.exports = timesTable
