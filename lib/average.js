function total(numset) {
  return numset.reduce((a, b) => a + b, 0);
}

function mean(numset) {
  return (total(numset) / numset.length)
}

function median(numset) {
  var sorted = numset.sort();
  var mid = Math.ceil(numset.length / 2);

  if(numset.length % 2 == 0) {
    return mean([sorted[mid], sorted[mid - 1]]);
  } else {
    return sorted[mid];
  }
}

function mode(numset) {
  var modes = {};

  numset.forEach((number) => {
    modes[number] = (modes[number] || 0) + 1
  });

  return modes;
}

module.exports.total = total;
module.exports.mean = mean;
module.exports.median = median;
module.exports.mode = mode;
