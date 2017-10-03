function factorial(num) {
  let facto = 1;
  for (var i = 1; i <= num; i++) {
    facto = facto * i;
  };

  return facto;
};

module.exports = factorial;
