function total(numbers){
  return numbers.reduce(function(total, num){
    return total + num;
  })
}

module.exports = {total: total}
