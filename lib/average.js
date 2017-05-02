pry = require('pryjs')

function arrayTotal(elements) {
  total = 0
  for (var i = 0; i < elements.length; i++) {
    total += elements[i]
  }
  return total
}

function arrayMean(elements) {
  total = 0
  for (var i = 0; i < elements.length; i++) {
    total += elements[i]
  }
  return total / elements.length
}

function arrayMode(array) {
  if(array.length == 0)
       return null;
   var modeMap = {};
   var maxEl = array[0], maxCount = 1;
   for(var i = 0; i < array.length; i++)
   {
       var el = array[i];
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

}

module.exports = {arrayTotal, arrayMean, arrayMode}
