var factorial = function(num) { var total = 1;
  if (num < 0) { return undefined }
  var total = 1;
  for (i = 0; i <= num; i++) {
    if (i === 0) { continue }
    else { total *= i }
  }
  return total
}

module.exports = factorial;
