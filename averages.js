Array.prototype.total = function () {
  return this.reduce(function(total, num) {
    return total + num
  }, 0)
}

Array.prototype.mean = function () {
  total = this.total()
  return total / this.length
}

Array.prototype.median = function () {
  sortedArray = this.sort(function (a,b) {
    return a - b
  })
  middle = Math.ceil(this.length / 2)
  if (this.length % 2) {
    return sortedArray[(middle - 1)]
  } else {
    middles = sortedArray.slice((middle - 1), (middle + 1))
    return middles.mean()
  }
}

Array.prototype.mode = function () {
  const count = this.reduce((obj,key) => 
    Object.assign(obj, {[key]: (obj[key] || 0) + 1}), {})
    
  var modalKey = Object.keys(count).reduce((previous, key) =>
    count[previous] > count[key] ? previous : key
  )
  obj = {}
  obj[modalKey] = count[modalKey]
  return obj
}

module.exports = Array