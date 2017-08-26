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

function mode(array) {
  var numMapping = {}
  for(var i = 0; i < array.length; i++){
    if(numMapping[array[i]] === undefined){
      numMapping[array[i]] = 0
    }
    numMapping[array[i]] += 1
  }
  var greatestFreq = 0
  var mode
  for(var prop in numMapping){
    if(numMapping[prop] > greatestFreq){
      greatestFreq = numMapping[prop]
      mode = prop
    }
  }
  return parseInt(mode)
}

module.exports = {
  total,
  mean,
  median,
  mode,
}
