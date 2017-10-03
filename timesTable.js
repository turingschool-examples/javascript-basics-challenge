var pry = require('pryjs')

function timesTable(number) {
  var toPrint = ""
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
      toPrint += " " + (i*j)
    }
  }
  
}

timesTable(5)
