function timesTable(number) {
  for(i = 1; i <= number; i++) {
    result = ""

    for(x = 1; x <= number; x++) {
      result += (i * x) + " "
    }

    console.log(result)
  }
}

module.exports = timesTable
