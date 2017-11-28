function factorial(n) {
  var arr = []
  if (n === 0)
    arr.push(0)
  else
    for(i = n; i > 0; i--) {
      arr.push(i)
    }
  return arr.reduce(function(a,b){return a*b;});
}

module.exports = factorial
