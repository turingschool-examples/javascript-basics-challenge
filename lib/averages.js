var pry = require('pryjs')

function total(collection){
  var arrayLength = collection.length;
  var sum = 0
  for (var i = 0; i < arrayLength; i++) {
    sum += collection[i]
  }
  return sum
}

function meanAverage(collection){
  total(collection) / collection.length
}

function isEven(count){
  if (count % 2 == 0){
    return true
  }
  return false
}

function sortCollection(a,b){
  return a - b;
}

function medianAverage(collection){
  if (isEven(collection.length)){
    return meanAverage(collection)
  }
  else{
    var middlePosition = ((collection.length + 1) / 2);
    var sortedCollection = collection.sort(sortCollection);
    return sortedCollection[(middlePosition - 1)]
  }
}

function modeAverage(collection){
  var countTable = {};
  var count, collectionValue;
  var collectionLength = collection.length;

  for (var index = 0; index < collectionLength; index++) {
    collectionValue = collection[index];
    count = countTable[collectionValue] || 0;
    count ++;
    countTable[collectionValue] = count;
  }

  function compareCounts(a,b){
    return countTable[b] - countTable[a];
  }

  collection.sort(compareCounts);

  return collection[0];
}

exports.modeAverage = modeAverage
exports.medianAverage = medianAverage
exports.meanAverage = meanAverage
exports.total = total
