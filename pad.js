pry = require('pryjs')


Array.prototype.pad = function(number, insert){
  if (number <= this.length){
    return this;
  }else{
    var padded = this;
    difference = number - padded.length;
    if (insert){
      for(i = 0; i<difference; i++){
        padded.push(insert);
      };
      return padded;
    }else{
      for(i = 0; i<difference; i++){
        padded.push(null);
      };
      return padded;
    };
  };
};



var array = [1,2,3,4,5];
array.pad(7);


module.exports = Array.prototype.pad;
