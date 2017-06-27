function timesTable(num) {
  var array = createArray(num)
  var table = ""

  for(i=1; i<=num; i++){
    array.forEach(function createTable(number){
      var total = (number * i)
      var pry = require('pryjs'); eval(pry.it);
      table = table + total + " "
    })
    table = table + "\n"
  }
  return table
}

function createArray(num) {
  var newArray = []
  for(i=1; i<=num; i++) {
    newArray.push(i)
  }
  return newArray
}

module.exports = timesTable
