function total(array) {
  return array.reduce(getSum);
};

function getSum(total, num) {
  return total + num;
};

function mean(array) {
  return array.reduce(getSum) / array.length;
};

function median(array) {
  array.sort(sortNumbers);
  var middle = Math.floor(array.length / 2)
  if (array.length % 2 === 0) {
    return (array[middle] + array[middle - 1]) / 2
  } else {
    return array[middle]
  }
};

function sortNumbers(a, b) {
  return a - b;
}

function mode(array) {
  var modeMap = {};
  var highestNum = 0;
  var mode;
  array.forEach(function(item) {
    modeMap[item] = (modeMap[item] || 0) + 1;
    if (highestNum < modeMap[item]) {
        highestNum = modeMap[item];
        mode = item;
       }
  });
  return mode;
};



module.exports = {total, mean, median, mode}
