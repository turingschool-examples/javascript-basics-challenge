Number.prototype.between = function (min, max) {
  return this > min -1 && this < max + 1;
};

countNumbersBetween = (array, num1, num2) => {
  count = 0
  array.forEach(function(num) {
    if(num.between(num1, num2)) {
      count++;
    }
  })
  return count
}

module.exports = countNumbersBetween
