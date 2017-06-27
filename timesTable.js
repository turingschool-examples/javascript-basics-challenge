var pry = require('pryjs');

function timesTable(num){
  var data = []
  var row = []
  for (i = 1; i <= num; i++){
    row.push(i)
  }
  data.push(row)
  for(i = 2; i<=num; i++){
    var row2 = []
    row.forEach(function(num){
      row2.push(i*num)
    })
    data.push(row2)
  }

  var table = ""
  for(i = 0; i < data.length; i++){
      table += data[i].join("    ") + '\n'
  }
  return table
}

console.log(timesTable(5))

module.exports = timesTable