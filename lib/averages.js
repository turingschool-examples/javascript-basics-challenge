function total(values) {
  var total = values[0]
  values.splice(0, 1);
  for(var i = 0; i < values.length; i++) {
    total += values[i];
  };
  return total;
};

function median(values) {
  if (values.length % 2 == 0) {
    var median = (values[values.length / 2] + values[(values.length / 2) - 1]) / 2;
  } else {
    var median = values[(values.length - 1) / 2];
  };
  return median;
};

function mean(values) {
  var sum = total(values);
  var average = sum / values.length;
  return average;
};

module.exports = {total, median, mean};
