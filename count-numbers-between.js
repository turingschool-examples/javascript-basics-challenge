function countNumbersBetween(array, b, c){
  var limArray = []
  for(var i = 0; i < array.length; i++){
    if(array[i] >= b && array[i]<= c){
    limArray.push(i);
    };
  }
  return limArray.length
}








module.exports = countNumbersBetween
