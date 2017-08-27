pry = require('pryjs')

function make(num) {
  if(num <= 1){
    return `cannot make table of ${num}`
  }
  else{
    var first = createFirstRow(num)
    return fillTable(first, num)
  }

}

function createFirstRow(num) {
  var arr = []
  for (var i = 1; i <= num; i++) {
    arr.push(i)
  }
  return arr
}

function fillTable(first, num) {
  var output = '';
  first.forEach(function(val) {
    if (output !== "") { output = output + "\n" }
    for (var i = 1; i <= num; i++) {
      output = output + (val * i).toString() + "  "
    }
  })
  return output
}

module.exports = {
  make,
}
