function total(numbers){
  return numbers.reduce(function(total, num){
    return total + num;
  })
}

function mean(numbers){
  return total(numbers) / numbers.length;
}

module.exports = {total: total, mean: mean}
