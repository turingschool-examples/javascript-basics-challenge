Array.prototype.total = function () {
  var total = 0;
  this.forEach(function(num) {
    total += num;
  });
  return total;
};

Array.prototype.mean = function () {
  var total = 0;
  this.forEach(function(num) {
    total += num;
  });
    var mean = total / this.length;
    return mean;
}

function sortNumber(a,b) {
    return a - b;
}

Array.prototype.median = function () {
  var sortedData = this.sort(sortNumber);
  if (sortedData.length % 2 !== 0) {
    var oddMedian = this[(this.length - 1) / 2]
    return oddMedian
  }
  else {
    var upperMedian = (this.length - 1) / 2;
    var lowerMedian = (this.length / 2);
    var evenMedian = (this[Math.floor(upperMedian)] + this[(lowerMedian)]) / 2;
    return evenMedian
  }
}

Array.prototype.mode = function () {
  frequency_counter = {}
  max = 1
  mode = {}
  for (var i = 0; i < this.length; i++) {
    if (frequency_counter[this[i]]) {
      frequency_counter[this[i]] += 1
    }
    else {
      frequency_counter[this[i]] = 1
    }

    if (frequency_counter[this[i]] > max) {
      mode = {}
      mode[this[i]] = frequency_counter[this[i]]
      max = mode[this[i]]
    }

    if (frequency_counter[this[i]] === max) {
      mode[this[i]] = frequency_counter[this[i]]
    }
  }
  return mode
}
