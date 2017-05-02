function factorial(number){
  if(number == 0){
    return 1;
  }
  else{
    var total = 1
    for(i = number; i != 0; i--){
      total = total * i;
    }
    return total;
  }
}

module.exports = factorial;
