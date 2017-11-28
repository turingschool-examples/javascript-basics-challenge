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
      function getMean(array) {
        return array.reduce(getSum) / array.length;
      }
      return getMean(array)
    },
    median: function median(array) {
        var median = 0, arrayLen = array.length;
        array.sort();

        if (
            arrayLen % 2 === 0
        ) {
            median = (array[arrayLen / 2 - 1] + array[arrayLen / 2]) / 2;
        } else {
            median = array[(arrayLen - 1) / 2];
        }

        return median;
    },
    mode: function mode(array) {
      array.sort();
      var max=0,result,freq = 0;
      for(var i=0; i < array.length; i++){
          if(array[i]===array[i+1]){
              freq++;
          }
          else {
              freq=0;
          }
          if(freq>max){
              result = array[i];
              max = freq;
          }
      }
      return result;
    }
}
