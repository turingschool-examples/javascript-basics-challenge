function Array(value){
  
    this.value = value;
  }
var array = new Array([3, 5, 3, 5, 5, 40, 43])

Array.prototype.total = function() {
  return this.value.reduce(function(acc, val) {
  return acc + val;
  }, 0);
}
console.log("Total of all the values in the array: " + array.total())

Array.prototype.mean = function() {
  return this.value.reduce(function(acc, val) {
  return (acc + val);
  }, 0)/this.value.length;
}
console.log("The mean (average) of the array: " + array.mean())

Array.prototype.median = function() {
  this.value.sort(function(a, b){
    return a-b;
  });
  var half = Math.floor(this.value.length/2);
  if(this.value.length % 2){
        return this.value[half];
  }
    else {
        return (this.value[half-1] + this.value[half]) / 2.0;
      }
}
console.log("The median of the array: " + array.median())

Array.prototype.mode = function() {
  var value = this.value;
  var max = 1;
  var frequency = {}
  var mode = {}

    value.map(function(v){
      if (frequency[v]){
        frequency[v] += 1
  
        if (frequency[v] > max) {
        mode = {}
        mode[v] = frequency[v]
        max = mode[v]
        }
      }
      else {
        frequency[v] = 1
      }
    }); 
  console.log(mode)

 var a = [];
 for(o in mode) a.push(Number(o), mode[o]);
 return a
// str = JSON.stringify(mode);
// return str
  }
console.log("The mode of the array: " + array.mode())

module.exports = array