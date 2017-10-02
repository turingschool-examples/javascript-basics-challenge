pry = require('pryjs')

function timesTable(integer){
  var factorialIntegers = []
  for(var i = 1; i < integer + 1; i++){
    factorialIntegers.push(i)
  }
  var newLine = [" "]
  for(var i = 1; i < integer + 1; i++){
    factorialIntegers.forEach(function(num){
      newLine.push(num*i)
    });
    newLine.push("\n")
  }
  var string = newLine.join(" ");
  console.log(string);
};

// timesTable(5)
module.exports = timesTable
