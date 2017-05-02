pry = require('pryjs')

function factorial(number){
  var total = 1
  for(i=number; i >0;  i--){
    total = total * i
  };
  console.log(total);
  return total;
};

factorial(6)
