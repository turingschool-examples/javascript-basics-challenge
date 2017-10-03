module.exports = {total, mean}

function total(input) {
  let sum = input.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return sum
};

function mean(input) {
  let average = input.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return average / input.length
};
