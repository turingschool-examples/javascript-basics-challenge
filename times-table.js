var pry = require('pryjs');

function timesTable(num){

  var onesArray = Array.apply(null, Array(num + 1)).map(function (_, i) {return i;});
  onesArray.shift();
  var numString = onesArray.join(' ') + '\n';


  for(var i = 2; i <= num; i++){
    var row = []
      onesArray.forEach(function(num){
        row.push(i * num)
      })
      row.push('\n');
      numString += row.join(' ');
    }
    return numString

}

module.exports = timesTable
