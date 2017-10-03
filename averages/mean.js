function mean(array){
  var sum = array.reduce(function(total, sum){
    return total + sum
  }, 0);
  return sum / array.length
};

module.exports = mean
