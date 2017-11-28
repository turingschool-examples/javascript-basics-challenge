module.exports = {
    factorial: function factorial(number) {
    var d = 1;
     for (number; number > 1; number--) {
       d *= number;
     }
     return d;
  }
}
