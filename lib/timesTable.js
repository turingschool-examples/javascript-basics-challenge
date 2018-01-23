function timesTable(num) {
  var topRow = []

  for (var i = 1; i <= num; i++) {
    var number = parseInt(i)
    topRow.push(number)
  }

  var allNumbers = []
  topRow.forEach(function(x) {
    for (var i = 1; i <= num; i++) {
      allNumbers.push(x * i);
    }
  })

  var results = ''
  while (allNumbers.length > 0) {
    var row = allNumbers.splice(0, num)
    row.forEach(function(x) {
      results += (x + ' ')
    })
    results += '\n'
  }
  return results;
}

module.exports = {
  timesTable
}
