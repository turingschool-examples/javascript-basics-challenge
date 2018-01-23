function total(array) {
  return array.reduce(function(sum, num) {
    return sum += num
  }, 0)
}

function mean(array)  {
  return total(array) / array.length
}

function median(array)  {
  var half = Math.floor(array.length / 2)
  var sorted = array.sort()
  if (array.length % 2 != 0)  {
    return sorted[half]
  }  else {
    middleValues = [sorted[half-1], sorted[half]]
    return mean(middleValues)
  }
}

function mode(array)  {
  var results = {};
  for(var i = 0; i < array.length; i++) {
    if (results[array[i]] === undefined)  {
      results[array[i]] = 1
    } else {
      results[array[i]]++
    }
  }
  var values = Object.keys(results)
  var maximum = Math.max(...values)
  var mode = new Object()
  mode[maximum] = results[maximum]
  return mode
}

module.exports = {
  total,
  mean,
  median,
  mode
}
