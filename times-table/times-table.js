var pry = require('pryjs')

class timesTable {
  createTable(num) {
    if ( typeof num !== 'number' ) { return "Wrong." }
    var vals = this.createFirstRow(num)
    return this.fillTable(vals, num);
  }

  createFirstRow(num) {
    var arr = []
    for (var i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  fillTable(vals, num) {
    var output = '';
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
