let num = 5

function factorial(num) {
  let array = []
  for (n = 1; n <= num; n++) {
    array.push(n)
  }
  return array.reduce(function(total, number){
    return total * number
  }, 1)

}

console.log(factorial(5))

module.exports = {factorial: factorial}

