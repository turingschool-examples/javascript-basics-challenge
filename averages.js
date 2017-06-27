module.exports = {

  total: function(array){
    return array.reduce((x, y) => x + y)
  },

  mean: function(array){
    return (array.reduce((x, y) => x + y) / array.length).toFixed(1)
  },

  median: function(array){
    var sorted = array.sort(function(a, b){ return a-b;});
    var x = Math.trunc(sorted.length/2);

    if (array.length % 2)
      return sorted[x]
    else
     return (sorted[x-1] + sorted[x]) / 2
  },

  mode: function(array){ var count = {};
    array.forEach( function(num) {
      if (count[num]){
        count[num]++}
        else
        {count[num] = 1}
    });
    var max = undefined;
    Object.keys(count).forEach(function(num) {
      if (!max){
        max = count[num];
      }
      else if (max < count[num]){
        max = count[num];
      }
    });

    var modes = Object.keys(count).filter( function(num){
      return count[num] == max;
    });

    var result = {}
    modes.forEach( function(mode) {result[mode] = max });
    return result
 },


}



// Array.prototype.total = function (){
//   return this.reduce((x, y) => x + y);
// }
// Array.prototype.mean = function (){
//   return (this.total()/ array.length).toFixed(1);
// }
// Array.prototype.median = function (){
//   var sorted = array.sort(function(a, b){ return a-b;});
//   var x = Math.trunc(sorted.length/2);
//
//   if (array.length % 2)
//     return sorted[x]
//   else
//    return (sorted[x-1] + sorted[x]) / 2;
// }


// Array.prototype.mode = function(){
//   var count = {};
//   this.forEach( function(num) {
//     if (count[num]){
//       count[num]++}
//       else
//       {count[num] = 1}
//   });
//
//   var max = undefined;
//   Object.keys(count).forEach(function(num) {
//     if (!max){
//       max = count[num];
//     }
//     else if (max < count[num]{
//       max = count[num];
//     }
//   });
//
//   var modes = Object.keys(count).filter( function(num){
//     return count[num] == max;
//   });
//
//   var result = {}
//   modes.forEach( function(mode) {result[mode] = max });
//   return result
// }
