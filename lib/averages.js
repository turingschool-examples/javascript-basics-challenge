function total(data) {
  var sum = 0;
  for(i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function mean(data) {
  var sum = total(data);
  var mean = (total(data) / data.length);
  return mean;
}

module.exports.total = total;
module.exports.mean = mean;
