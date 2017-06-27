function timesTable(num) {
  var square = num * num
  var array = createArray(square)
  // var pry = require('pryjs'); eval(pry.it);
  var table = ""

  for(i=1; i<=num; i++){
    array.forEach(function createTable(number){
      var total = (number * i)
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
