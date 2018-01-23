function factorial(num) {
  if (num === 0)  {
    return 1
  } else {
    components = []
    while(num > 0)  {
      components.push(num)
      num--
    }
    return components.reduce(function(product, value)  {
      return value * product
    }, 1)
  }
}

module.exports = {
  factorial
}
