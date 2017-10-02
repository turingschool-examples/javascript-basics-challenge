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

function median(numbers) {
  let sortedArray = numbers.sort(function(a,b) {
    return a - b;
  });
  return sortedArray[Math.floor(numbers.length / 2)];
};

module.exports = {
  total: total,
  mean: mean,
  median: median,

}
