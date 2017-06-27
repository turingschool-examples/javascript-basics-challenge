var pry = require('pryjs');

Array.prototype.total = function(){
  var total = 0
  for(var i = 0; i < this.length; i++){
    total += this[i]
  }
  return total
}

Array.prototype.mean = function(){
  return this.total() / this.length
}

Array.prototype.median = function(){
  var sorted = this.sort(function(a, b){
    return a - b
  })
  var length = this.length
  if (length % 2 === 0){
    return ((sorted[length/2] + sorted[(length/2)-1])/2).toFixed(1)
  } else {
    return sorted[Math.floor(length/2)]
  }
}

Array.prototype.mode = function(){
  var counts ={}
  for (var i = 0; i < this.length; i++){
    if (!counts[this[i]]){
      counts[this[i]] = 0
    }
    counts[this[i]]++
  }
  var newArray = []
  for (var i in counts){
    newArray.push([i, counts[i]])
  }
  var sorted = newArray.sort(function(a,b){return b[1] - a[1]})
  var modes = {}
  modes[sorted[0][0]] = sorted[0][1]
  for(var i = 1; i< sorted.length; i++){
    if(sorted[i][1] === sorted[0][1]){
      modes[sorted[i][0]] = sorted[i][1]
    }
  }
  return modes
}
module.extends = Array