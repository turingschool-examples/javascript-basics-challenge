function total(arr) {
  return arr.reduce(function(sum, value) {
    return sum + value;
  }, 0);
};

function mean(arr) {
  return total(arr) / arr.length
};

function median(arr) {
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });

  return sorted[Math.floor(sorted.length / 2)];
};

function mode(arr) {
  var count = makeModeObject(arr);
  var allCounts = Object.values(count);

  var modeValue = Math.max.apply(null, allCounts);

  for(var key in count) {
    if(count[key] !=  modeValue) {
      delete count[key];
    }
  }

  return count;
};

function makeModeObject(arr) {
  var counts = {};

  arr.forEach(function(num, index) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });

  return counts;
}

module.exports = {
  total,
  mean,
  median,
  mode
}
