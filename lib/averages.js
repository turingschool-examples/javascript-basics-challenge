function total(values) {
  var total = values[0]
  values.splice(0, 1);
  for(var i = 0; i < values.length; i++) {
    total += values[i];
  };
  return total;
};

module.exports = total;
