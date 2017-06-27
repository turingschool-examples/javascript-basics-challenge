pry = require('pryjs');
Array.prototype.total = function(){
  return this.reduce(function(a,b){
    return a + b;
  }, 0);
};
Array.prototype.mean = function(){
  return this.total()/this.length;
};
Array.prototype.mode = function(){
  if(this.length == 0)
        return null;
    var modeMap = {};
    var maxEl = this[0], maxCount = 1;
    for(var i = 0; i < this.length; i++)
    {
        var el = this[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
};
Array.prototype.median = function(){
  sorted = this.sort(function (x, y) {  return x - y;  });
  var middle = Math.floor((sorted.length - 1) / 2);
  if (this.length % 2) {
        return sorted[middle];
    } else {
        return (sorted[middle] + sorted[middle + 1]) / 2.0;
    }
};


module.extends = Array;
