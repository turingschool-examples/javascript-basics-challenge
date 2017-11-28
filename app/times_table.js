exports.timesTable = function(number) {
  var num = 1;
  var firstArray = [];

  while (num <= number) {
    firstArray.push(num);
    num += 1;
  }

  var bigArray = [];

  for (var i = 0; i < firstArray.length; i++) {
    var newArray = firstArray.map(function(numThing){
      return numThing * firstArray[i];
    });
    bigArray.push(newArray)
  }

  var newerArray = bigArray.map(function(arr) {
    return String(arr);
  });
  return newerArray.join('\n');
};
