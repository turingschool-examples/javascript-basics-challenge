var timesTable = function(num) {
  var returnString = ""
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num; j++) {
      var ele = (i * j).toString();
      returnString += ele;
      for (k = 1; k <= (3 - ele.length); k++) { returnString += " " } 
    }
    returnString += "\n"
  }
  console.log(returnString);
  return returnString
}

module.exports = timesTable;
