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

function median(array) {
  var sorted = array.sort(function(a,b) { return a - b } )
  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2
  } else {
    return sorted[Math.floor(sorted.length / 2)]
  }
}

module.exports = {
  total,
  mean,
  median,
}
