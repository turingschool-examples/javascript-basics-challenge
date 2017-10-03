function factorial(number){
  if (number < 0){
    return "number must be positive";
  }
  else if (number == 0){
    return 1;
  }
  else {
   return (number * factorial(number - 1));
  }
};
console.log(factorial(6));

module.exports = factorial;
