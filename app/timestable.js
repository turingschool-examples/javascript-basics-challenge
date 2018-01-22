exports.timesTable = function(num) {
  var tableArray = []

  for (var i = 1; i <= num; i++) {
    tableArray.push(i);
  }

  var finalArray = [];
  finalArray.push(tableArray);

  for (var i = 1; i < tableArray.length; i++) {
    var rowArray = tableArray.map(function(num) {
      return num * tableArray[i];
    });
    finalArray.push(rowArray);
  }

  console.log(finalArray)

  var stringArray = finalArray.map(function(array) {
    return String(array);
  });

  console.log(stringArray)

  return stringArray.join('\n');
}
