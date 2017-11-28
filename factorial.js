function factorial (num) {
  if (num === 0) {
    return 1;
  } else if (num % 2 < 0){
    return "Error, cannot use negative numbers"
  } else {
    let total = num;
    for (i = 1; i < num; i++) {
      total = total * i
    }
  return total
  }
};

module.exports = {factorial};
