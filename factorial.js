function factor(num){
  if(num == 0)
    return 1;
  else {
    return (num * factor(num-1));
  }
};

module.export = {factor: factor}
