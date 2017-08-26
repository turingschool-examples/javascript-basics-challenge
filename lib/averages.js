function total(array) {
  result = 0
  array.forEach(function(number) {
    result += number
  })
  return result
}

function mean(array) {
  var result = total(array)
  result = result / array.length
  return result
}

module.exports = {
  total,
  mean,
}
