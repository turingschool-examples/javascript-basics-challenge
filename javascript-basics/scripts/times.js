var pry = require('pryjs');


function times(number) {
  var baseArray = range(number)
  var counter = 1
  while (counter <= number) {
    console.log(baseArray.map(x => x * counter))
    counter++
  }
}

function range(number) {
  var array = [];
  var counter = 1;
  while (counter <= number) {
    array.push(counter);
    counter++
  }
  return array
}

module.exports = {times, range}