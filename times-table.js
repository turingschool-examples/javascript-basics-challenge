function timesTable(number) {
  var arr = (Array.apply(null, {length: (number + 1)}).map(Number.call, Number))
  arr.shift()
  var rows = arr.join(' ') + '\n'
  
  i = 2
  while(i <= number) {
    var newRow = []
    arr.forEach(function(num) {
      newRow.push(i * num)
    })
    newRow.push('\n')
    rows += newRow.join(' ')
    i++
  }
  return rows
}

module.exports = timesTable