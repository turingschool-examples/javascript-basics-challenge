pry = require('pryjs')

function bubbleSort(arr){
  var swapped = true;
  while(swapped) {
    swapped = false;
    for(var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]){
        var bigger = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = bigger;
        swapped = true;
      };
    };
  };
  return arr;
};

function total(array){
  var nums = 0;
  for(i=0; i<array.length; i++){
    nums = nums + array[i]
  };
  return nums
};

function mean(array){
  var nums = total(array) / array.length;
  return nums
};

function median(array){
  var sorted = bubbleSort(array);
  var middle = Math.ceil(array.length / 2);
  return array[middle-1]
};

function mode(array){
  var hash = {};
  mode = {}
  for(i=0; i<array.length; i++){
    if (!hash[array[i]]) hash[array[i]] =0;
    hash[array[i]] += 1
  };
  for(i=0; i<array.length; i++){
    if(hash[array[i].toString()] > Object.entries(mode)[0][1] ){
      mode = {}
      mode[array[i].toString()] = hash[array[i]]}
    }
    eval(pry.it)
};

module.exports.total = total;
module.exports.median = median;
module.exports.mean = mean;
module.exports.mode = mode;
