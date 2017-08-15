var pry = require('pryjs')

class timesTable {
  createTable(num) {
    var output = '';
    var vals = []
    for (var i = 1; i <= num; i++) {
      // output = output + i.toString() + " ";
      vals.push(i)
      // eval(pry.it)
    }
    vals.forEach(function(val) {
      if (output !== "") { output = output + "\n" };
      for (var i = 1; i <= num; i++) {
        output = output + (val * i).toString() + " ";
      }
    })
    return output;
  }
}

module.exports = timesTable;
