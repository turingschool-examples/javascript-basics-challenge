var pry = require('pryjs')

function getSum(total, num) {
    return total + num;
};

function total(list){
  return list.reduce(getSum)
};

function mean(list){
  return (total(list) / list.length)
};

function median(list){
  if (evenMedian(list.count)) {
    return mean(list)
  }
  else {
    list.shift(1)
    evenMedian(list)
  }
}

function evenMedian(count){
  if (count % 2 == 0){
    var place = (count / 2)
    return (list[place])
  }
  return false
}

exports.total = total
exports.mean = mean
exports.median = median
