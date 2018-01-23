// module.exports = {
//   factorial: function factorial(number) {
//     if (number == 0) {
//       return 1
//     } else if (number < 0) {
//       return undefined
//     }
//     return number * factorial(number - 1)
//   }
// }
module.exports = {
  factorial: function factorial(number) {
    if (number == 0) {return 1}
    if (number < 0) {return undefined}
    for(var i = number; --i; ) {
      number *= i
    }
    return number
  }
}