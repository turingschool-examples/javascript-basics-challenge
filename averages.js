function total(array) {
  var totes = 0
  for (i=0; i<array.length; i++) {
    totes = totes + array[i]
  }
  return totes
}

function mean(array) {
  var totes = total(array)
  return totes/array.length
}

function median(array) {
  var length = array.length
  var sorted = array.sort(function (a, b) {
  return a - b
  })
  if (length % 2 === 0) {
    var firstIndex = length/2
    var secondIndex = (length/2) + 1
    return ((sorted[firstIndex - 1] + sorted[secondIndex - 1]) / 2)
  } else {
    var i = (length + 1) / 2
    return sorted[i - 1]
  }
}

function mode(array) {
  var obj = {};
  array.forEach( function (a) {
    if (a in obj) {
      obj[a] ++
    } else {
      obj[a] = 1
    }
  })
  return obj
}

module.exports = {total: total, mean: mean, median: median, mode: mode}
