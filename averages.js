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

function mode(numbers) {
  mapping = {};
  for (let i = 0; i < numbers.length; i++) {
    (mapping[numbers[i]]) ? mapping[numbers[i]] += 1 : mapping[numbers[i]] = 1;
  };
  let arr = Object.keys(mapping).map(function(key) {
    return mapping[key];
  });
  let max = Math.max(...arr);
  return parseInt(Object.keys(mapping).find(key => mapping[key] === max));
};

module.exports = {
  total: total,
  mean: mean,
  median: median,
  mode: mode
}
