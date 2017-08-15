function timesTable(number) {
  if (number <= 0) {
    return undefined
  } else {
    let table = []
    for (let i = 1; i <= number; i++) {
      let string = ''
      let row = []
      for (let j = i; j <= number * i; j += i) {
        string = string + j + ' '
        row.push(j)

        if (j === number * i) {
          string = string + '\n'
        }
      }
      table.push(row)
      console.log(string)
    }
    return table
  }
}

var exports = module.exports = { timesTable }