function timesTable(num){
  var table = ""
  if (typeof num != "number" || num < 0 || num == NaN) {
    return "Cannot Compute";
  } else {
    for (var i = 1; i <= num; i++){
      for (var j = 1; j <= num; j++) {
        table += i * j + " "
      }
      table += "\n"
    }
  }
  console.log(table)
  return table
}

module.exports = { timesTable }