function total (array) {
  let sum = array.reduce(function (a, b) {
    return a + b;
  });
  return sum
};

function mean (array) {
  return total(array) / array.length;
};

function median (array) {
  let arraySort = array.sort(function (a, b) {
    return a - b;
  });
  if (arraySort.length % 2 === 0) {
    let lowMiddle = Math.floor((arraySort.length - 1) / 2);
    let highMiddle = Math.ceil((arraySort.length - 1) / 2);
    let median = (arraySort[lowMiddle] + arraySort[highMiddle]) / 2;
    return median
  } else {
    return arraySort[(Math.round(arraySort.length -1) / 2)]
  }
};

function mode (array) {
  let order = {};
  array.forEach(function(i) {
    if (order[i] === undefined) {
      order[i] = 1;
    } else {
      order[i] += 1;
    }
  });
  let frequency = {};
  for(key in order) {
    if (order[key] > 1) {
      frequency[key] = order[key];
    }
  }
  return frequency
};

module.exports = {total, mean, median, mode};
