var pry = require('pryjs');

var averages = module.exports = {
  total: function total(collection) {
    return collection.reduce(function(base, num) {
      return base + num
    })
  },
  mean: function mean(collection) {
    return averages.total(collection)/(collection.length)
  },
  median: function median(collection) {
    if (collection.length % 2 == 0) {
      var i = (collection.length/2)
      return (collection[i-1] + collection[i])/2
    } else {
      var i = Math.floor(collection.length/2)
      return collection[i]
    }
  },
  mode: function mode(collection) {
    var maxKey = undefined
    var maxValue = 1
    var groupedNumbers = {}
    for(i = 0; i < collection.length; i++) {
      if (groupedNumbers[collection[i]] === undefined){
        groupedNumbers[collection[i]] = 0
      }
      groupedNumbers[collection[i]] += 1
      if (groupedNumbers[collection[i]] > maxValue) {
        maxValue = groupedNumbers[collection[i]];
        maxKey = i
      }
    }
    return collection[maxKey]
  }
}
