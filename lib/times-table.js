timesTable = (number) => {
  let result = '\n';
  for (var i = 1; i < (number + 1); i++) {
    for (var j = 1; j < (number + 1); j++) {
      result += (i * j) + ' ';
    }
    result += '\n';
  }
  return result 
}


console.log(timesTable(5))
    

module.exports = {
  timesTable
}