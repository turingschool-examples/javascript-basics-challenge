function total(numbers){
  return numbers.reduce(function(total, num){
    return total + num;
  })
}

function mean(numbers){
  return total(numbers) / numbers.length;
}

function median(numbers){
  var median = 0;
  var length = numbers.length;
    numbers.sort();
    if (length % 2 === 0) {
      median = (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
    } else {
      median = numbers[(length - 1) / 2];
    }
  return median;
}

module.exports = {total: total, mean: mean, median: median}
