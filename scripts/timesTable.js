var pry = require('pryjs')

function timesTable(number) {
  var array = createArray(number)
  var finalTable = ""
  for(i = 1; i <= number; i++) {
    array.forEach( function table(number){
      var row = number * i
      finalTable = finalTable + row + " "
    });
    finalTable = finalTable + "\n"
  }
  return finalTable
}

function createArray(number){
  var toArray = []
  for(j = 1; j <= number; j++) {
    toArray.push(j)
  }
  return toArray
}


module.exports = timesTable
