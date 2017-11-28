function timesTable(num) {
  var result = "";
    for(var i = 1; i <= num; i++) {
      for(var j = 1; j <= num; j++) {
        result += i * j + " "
        if (j === num.length - 1) {
          result += '\n'
        }
      }
    }
  return result
};


module.exports = { timesTable }
