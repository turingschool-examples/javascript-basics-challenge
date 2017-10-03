function total(arr) {
  return arr.reduce(function(sum, value) {
    return sum + value;
  }, 0);
};
module.exports = total;
