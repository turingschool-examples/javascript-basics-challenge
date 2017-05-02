var _ = require("lodash");

function determineSize(lengthOne, lengthTwo, lengthThree) {
  var lengths = [{length: lengthOne}, {length: lengthTwo}, {length: lengthThree}];
  var sortedLengths = _.sortBy(lengths, 'length')
  var sorted = sortedLengths.map(function(length) {
    return length.length;
  });
  return sorted;
};

function isTriangle(lengthOne, lengthTwo, lengthThree) {
  var orderedLengths = determineSize(lengthOne, lengthTwo, lengthThree);
  var smallest = orderedLengths[0];
  var middle = orderedLengths[1];
  var largest = orderedLengths[2];
  var resultOne = ((largest + middle) > smallest);
  var resultTwo = ((largest + smallest) > middle);
  var resultThree = ((middle + smallest) > largest);
  return resultOne && resultTwo && resultThree;
};

module.exports = isTriangle;
