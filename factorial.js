module.exports = {
  factorial: function factorial(input){
    if(input === 0){
      return 1;
    } 
    return input * factorial(input - 1);
  }
}