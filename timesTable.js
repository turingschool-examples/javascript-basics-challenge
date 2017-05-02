pry = require('pryjs')


function timesTable(number){
  for(i=1; i<=number; i++){
    console.log(i)
    num = i
    for(n=1; n<number; n++){
      num += i;
      console.log(num)
    }
  }
}

timesTable(5)
