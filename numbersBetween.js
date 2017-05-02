pry = require('pryjs')

function countNumbersBetween(array, lower, upper){
  counter = 0;
  for(i=0; array.length > i; i++){
    if(lower <= array[i] && array[i]<=upper){
      counter +=1;
    };
  };
  return counter;
};


countNumbersBetween([1,2,3,4,5], 3, 5);
