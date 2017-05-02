module.exports = function(collection, lowerBound, upperBound) {
  inBounds = 0;
  for (i=0; i < collection.length; i++) {
    if (collection[i] >= lowerBound && collection[i] <= upperBound) {
      inBounds += 1;
    }
  }
  return inBounds;
}
