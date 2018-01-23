function timesTable(number) {
  var result = '\n';
  for (var i = 1; i < (number + 1) ; i++) {
    for (var j = 1; j < (number + 1); j++) {
        result += (i*j) + ' ';
    }
    result += '\n';
}
return result
}
module.exports = { timesTable }
