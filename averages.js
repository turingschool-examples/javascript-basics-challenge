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

function mode(numbers){
  var modes = [], count = [], i, number, maxIndex = 0;
  for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }
  for (i in count)
  if (count.hasOwnProperty(i)) {
    if (count[i] === maxIndex) {
      modes.push(Number(i));
    }
  }
  return modes;
}

module.exports = {total: total, mean: mean, median: median, mode: mode}
