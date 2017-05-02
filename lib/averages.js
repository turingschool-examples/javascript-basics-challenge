var pry = require('pryjs');

Array.prototype.total = function() {
   var finalTotal = this.reduce(function(total, number){
     return total + number;
   }, 0);
   return finalTotal
}

Array.prototype.mean = function() {
  return (this.total()) / (this.length);
}

Array.prototype.median = function() {
  if((this.length - 1) % 2 == 0){
    return this[(this.length - 1) / 2];
  }
  else {
    var eOne = this[Math.floor((this.length - 1) / 2)]
    var eTwo = this[Math.ceil((this.length - 1) / 2)]
    return (eOne + eTwo) / 2
  }
}

Array.prototype.mode = function() {
  var counter = {}
  this.forEach(function(e){
    if(counter[e]){
      counter[e]++;
    }
    else {
      counter[e] = 1;
    }
  });
  var highest = Math.max(...Object.values(counter));
  var determineMode = function(){
    for(var i = 0; i < counter.length; i++){
      if(counter[i] == highest){
        return counter[i];
      }
    }
  }
  eval(pry.it);

  return counter[index()];
}


module.exports.total = Array.prototype.total;
module.exports.mean = Array.prototype.mean;
module.exports.median = Array.prototype.median;
module.exports.mode = Array.prototype.mode;
