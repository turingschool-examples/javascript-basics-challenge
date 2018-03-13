const rawTimesTable = (num) => {
  var numbers = []
  for (var i = 0; i < num; i++) {
    numbers.push(i + 1)
  }
  var table = numbers.map((numA) => {
    return numbers.map((numB) => {
      return numA * numB
    })
  })
  return table
}

const timesTable = (num) => {
  var table = rawTimesTable(num).map((row) => {
    return row.join(" ")
  })
  console.log(table.join("\n"))
}

module.exports = [rawTimesTable, timesTable]
