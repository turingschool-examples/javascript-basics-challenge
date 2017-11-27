function theFactorial(input){
  if(input = 1){
    return 1;
  }
  else{
    return input * theFactorial(input - 1);
  }
}

module.exports = {
  factorial: function factorial(input){
    if(input === 0){
      return 1;
    }
    else{
      return theFactorial(input) 
    }
  }
}