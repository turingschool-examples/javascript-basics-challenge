function total(data) {
  var sum = 0;
  for(i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

module.exports = total;
