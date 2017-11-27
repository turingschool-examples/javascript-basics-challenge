function total(input){
  sum = 0
  for(var i = 0; i < input.length; i ++){
    sum += input[i];
  }
  return sum;
}

module.exports = {
  total: function total(input){
    sum = 0
    for(var i = 0; i < input.length; i ++){
      sum += input[i];
    }
    return sum;
  },
  
  mean: function mean(input){
    return total(input) / input.length;
  },
  
  median: function(input){
    if (input.length % 2 == 0){
      return input[(input.length/2) - 1]
    }
    else{
      return input[Math.floor(input.length/2)]
    }
  }
}