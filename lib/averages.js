function total(array){
  let sum = 0;
  array.forEach(function(value){
  	sum = sum + value;
  });
  return sum;
}
let array = [1,2,3,4,5,3];
console.log(total(array));

function mean(array){
  return (total(array)/array.length);
}
console.log(mean(array));

function median(array){
  array.sort(function(a, b){
    return a - b;
  });
  let arrayMiddle = Math.floor(array.length/2);
  if(array.length % 2){
    return array[arrayMiddle];
  } else {
    return (array[arrayMiddle - 1] + array[arrayMiddle]) / 2.0;
  }
}
console.log(median(array));

function mode(array){
  let valueCount    = {};
  let frequency = 0;
  let mode;
  array.forEach(function(value){
    valueCount[value] = (valueCount[value] || 0) + 1;

    if (frequency < valueCount[value]){
      frequency = valueCount[value];
      mode = value;
    }
  });
  return mode;
}
console.log(mode(array));
