var pry = require('pryjs');

Array.prototype.total = function(){
  var total = 0;
  for(i=0; i < this.length; i++){
    total = this[i] +total
  }
  return total;
}

Array.prototype.average = function(){
  return (this.total()/ this.length)
}

Array.prototype.median = function(){
  var a = this.sort()
  var half = Math.floor(a.length/2)

  if(a.length%2){
    return a[half]
  } else {
    return (a[half-1] + a[half])/2
  }

}
Array.prototype.mode = function(){
  var numbers = {};
  var frequency = 0;
  var mode = {};
  this.forEach(function findMode(num){
    numbers[num] = (numbers[num] || 0) +1;

    if(frequency < numbers[num]){
      frequency = numbers[num];
      mode[num] = numbers[num]
    };
  });
  return mode
};
