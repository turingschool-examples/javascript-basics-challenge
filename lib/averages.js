module.exports = {
    total: function total(array) {
      function getSum(total, num) {
        return total + num;
      }
      return array.reduce(getSum);
    },
    mean: function mean(array) {
      function getSum(total, num) {
        return total + num;
      }
      var sumTotal = array.reduce(getSum)
      function getMean(array) {
        return sumTotal / array.length;
      }
      return getMean(array)
    },
    median: function median(array) {

    },
    mode: function mode(array) {

    }
}
