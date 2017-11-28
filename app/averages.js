exports.total = function(array) {
  var newArray = array.reduce(function(total,start) {
    return total + start;
  }, 0);
  return newArray;
};

exports.mean = function(array) {
  var newArray = array.reduce(function(total,start) {
    return total + start;
  }, 0);
  return newArray / array.length;
};

exports.median = function(array) {
  var index1 = (array.length / 2) - 1;
  var index2 = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return (array[index1] + array[index1 + 1]) / 2;
  }
  else {
    return array[index2];
  }
};

exports.mode = function(array) {
  var newHash = {}

  for (i = 0; i < array.length; i++) {
    if (newHash[array[i]]) {
      newHash[array[i]] += 1
    }
    else {
      newHash[array[i]] = 1
    }
  }

  return Number(Object.keys(newHash).reduce(function(a, b){ return newHash[a] > newHash[b] ? a : b }));

};
