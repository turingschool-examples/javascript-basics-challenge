var pry = require('pryjs');

function timesTable(num){
  var array = makeArray(num)
  var table = ""

  for(i=1; i<=num; i++){
    array.forEach( function makeTable(number){
      var product = (number * i)
      table = table + product + " "
    });
    table = table + "\n"
  }
  return table
}

function makeArray(num){
  var newArray = []
  for(i=1; i <= num; i++){
    newArray.push(i)
  }
  return newArray
}

module.exports = timesTable
