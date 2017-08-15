var factorial = function(num) {
  if (num <= 0) {
    return "I can only factorialize positive numbers. Please try again.";
  } else if (typeof num !== 'number'){
    return "Wrong."
  } else {
    return factorialize(num);
  }
}

factorialize = function(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
}

module.exports = factorial;
