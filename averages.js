function total(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b;
  });
};

module.exports = {
  total: total
}
