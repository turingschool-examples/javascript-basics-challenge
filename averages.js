module.exports = {
  total: function total(input){
    sum = 0
    for(var i = 0; i < input.length; i ++){
      sum += input[i];
    }
    return sum;
  }
}