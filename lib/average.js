Array.prototype.total = function () {
  var sum = 0
  for(i=0; i<this.length; i++){
    sum += this[i]
  }
  return sum
};

Array.prototype.mean = function () {
  return (this.total() / this.length)
};

function sortNumber(a,b) {
  return a - b;
}

Array.prototype.median = function () {
  var sortedData = this.sort(sortNumber);

  var count = sortedData.length
  var mid = count / 2

  if(count % 2 == 0) {
    return ([sortedData[mid-1], sortedData[mid]].mean())
  }
  else {
    return sortedData[mid-0.5]
  }
};

Array.prototype.mode = function () {
  var frequency_counter = {}
  var max = 1
  var modes = {}

  for(i=0; i<this.length; i++){
    if(frequency_counter[this[i]] === undefined) {
      frequency_counter[this[i]] = 1
    }
    else {
      frequency_counter[this[i]] += 1
    }

    if(frequency_counter[this[i]] == max) {
      modes[this[i]] = frequency_counter[this[i]]
    }
    if(frequency_counter[this[i]] > max) {
      var new_max = frequency_counter[this[i]]
      modes = {}
      modes[this[i]] = new_max
      max = new_max
    }
  }
  return modes
};
