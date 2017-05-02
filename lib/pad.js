
Array.prototype.pad = function(number, padder) {
  if(number <= this.length){
    return this;
  }
  else if(number > this.length){
    var difference = number - this.length;
    var clone = this.slice()
    for(var i = 0; i < difference; i++){
      if(padder){
        clone.push(padder)
      }
      else{
        clone.push('null')
      }
    }
    return clone;
  }
}

module.exports.pad = Array.prototype.pad;
