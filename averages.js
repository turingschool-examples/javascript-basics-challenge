function total(array) {
  return array.reduce( function(subtotal, num) {
    subtotal += num
    return subtotal
  }, 0)
}

function mean(array) {
  return total(array) / array.length
}

function median(array) {
  array.sort(function(a,b) { return a-b })
  count = array.length / 2
  var medianIndex = Math.floor(count)

  if (Number.isInteger(count)) {
    return mean([array[medianIndex - 1], array[medianIndex]])
  } else {
    return array[medianIndex]
  }
}

function mode(array) {
  var ValueFrequencies = findFrequencies(array)
  var maxValue = findMax(ValueFrequencies)
  return maxFrequencies(ValueFrequencies, maxValue)
}

function findFrequencies(array) {
  return array.reduce( function(returnObj, num) {
    returnObj[num] = returnObj[num] + 1 || 1
    return returnObj
  }, {})
}

function findMax(valueFrequencies) {
  return Math.max(...(Object.values(valueFrequencies)))
}

function maxFrequencies(full, max) {
  var filtered = {}
  for (var property1 in full) {
    if (full[property1] === max) {
      filtered[property1] = full[property1]
    }
  }
  return filtered
}

module.exports = {
  total,
  mean,
  median,
  mode
}
