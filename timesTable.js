pry = require('pryjs');

function timesTable(integer){
  var factorialIntegers = []
  for(var i = 1; i < integer + 1; i++){
    factorialIntegers.push(i)
  }
  for(var i = 1; i < integer + 1; i++){
    var newLine = []
    factorialIntegers.forEach(function(num){
      newLine.push(num*i)
    });
    console.log(newLine.join(" "));
  }
};

timesTable(9);
