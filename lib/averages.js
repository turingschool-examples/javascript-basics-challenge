module.exports = {total, mean, median, mode}


function total(array){
  var sum = 0
  array.forEach(function(number){
    sum += number
  })
  return sum
}

function mean(array){
  var sum = 0
  array.forEach(function(number){
    sum += number
  })
  return sum/array.length
}

function median(array){
  var middle = Math.floor(array.length/2)
  return array[middle]
}

function mode(array){
  var counts = {}
  array.forEach(function(num){
    if (counts[num]) {counts[num] += 1} else {counts[num] = 1}
  })
  var mode = null
  Object.keys(counts).forEach(function(num){
    if (mode === null || counts[num] > mode.value) {
      mode = {mode: parseFloat(num), value: counts[num]}
    }
  })
  return mode
}
