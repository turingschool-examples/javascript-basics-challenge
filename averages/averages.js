function total(numbers) {
  var result = numbers.reduce(function(total, number) {
    return total + number
  }, 0)
  return result
}

function mean(numbers) { 
  var result = numbers.reduce(function (total, number) {
    return total + number
  }, 0) / numbers.length
  return result
}

function median(numbers) { 
  var sorted = numbers.sort(function(a,b) { return a - b } )
  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2
  } else {
    return sorted[Math.floor(sorted.length / 2)]
  }
}

module.exports = { total, mean, median }