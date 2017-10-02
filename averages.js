function total(array) {
  var sum = 0
  array.forEach(function(num) {
    sum += num;
  })
  return sum;
}

module.exports = {total}
