function total(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b;
  });
};

function mean(numbers) {
  let total = numbers.reduce(function(a,b) {
    return a + b;
  });
  return total / numbers.length;
};

module.exports = {
  total: total,
  mean: mean

}
