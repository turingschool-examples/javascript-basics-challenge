function factorial(num) {
  let f = 1;
  for (var i = 1; i <= num; i++) {
    f = f * i;
  };

  return f;
};

module.exports = factorial;
