function total(array){
  return array.reduce(function(total, num){
    return total + num;
  }, 0);
};

module.exports = total
