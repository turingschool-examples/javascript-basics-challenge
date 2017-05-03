Array.prototype.sum = function () {
  var sum = 0
  for(var i = 0; i < this.length; i++) {
    sum += this[i]
  };
  return sum
};

Array.prototype.mean = function () {
  var sum = 0
  for(var i = 0; i < this.length; i++) {
    sum += this[i]
  };
  return sum / this.length
};

Array.prototype.median = function () {
  this.sort
  if(this.length % 2 == 0) {
    var i1 = this.length / 2
    var i2 = i1 - 1
    return (this[i1] + this[i2]) / 2
  }else{
    var i = Math.floor(this.length / 2)
    return this[i]
  }
};

Array.prototype.mode = function () {
  this.sort;
  var counts = {};
  for (var i = 0; i < this.length; i++) {
    if(counts[this[i]] == undefined) {
      counts[this[i]] = 1
    }else{
      counts[this[i]] += 1
    };
  };
  var highestFrequency = Math.max.apply(Math, Object.values(counts));
  return max_by_value(counts, highestFrequency)
};

function max_by_value(counts, max) {
  var modes = {};
  modes[max] = []
  var keys = Object.keys(counts);
  for(var i = 0; i < keys.length; i++) {
    if(counts[keys[i]] == max){
      modes[max].push(keys[i]);
    };
  };
  return modes
};
