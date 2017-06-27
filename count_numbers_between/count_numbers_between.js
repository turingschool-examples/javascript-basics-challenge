function countNumbersBetween(array, min, max) {
var num = 0;
  for (var x = 0; x<array.length; x++) {
    if (array[x] >= min && array[x]<= max){
      num += 1;
    }
  }
  console.log(num)
  return num
}

//countNumbersBetween([25, 2, 8], 0, 100);
//countNumbersBetween([-19, 1, 22], 0, 100);  
//countNumbersBetween([100, 200, 300], 100, 300); 
//countNumbersBetween([], -10, 10);
countNumbersBetween([5], 5, 5);
module.exports = countNumbersBetween