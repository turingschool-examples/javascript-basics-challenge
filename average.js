pry = require('pryjs')

var array = [ 1 ,3 ,4 ,5, 6]

function total(data) {
  var total = 0;
  for (var i = 0; i < data.length ; i++){
    total += data[i];
  }
  return total
}

function mean(data){
  var sum = 0 ;
  for (var i = 0; i < data.length ; i++){
    sum += data[i];
  }
  return (sum / data.length)
}

//////////

function reOrganize(array, index, newIndex) {
  var temp = array[index];
  array[index] = array[newIndex];
  array[newIndex] = temp;
}

function bubbleSort(array){
  for( var index = 0 ; index < array.length; index++){
    for(var newIndex = 1; newIndex < array.length; newIndex++){
      if(array[newIndex-1] > array[newIndex]){
        reOrganize(array, newIndex-1, newIndex);
      }
    }
  }
  return array
}


function median(data){
  let median = 0;
  let length = data.length;
    data.sort();
    if (length % 2 === 0) {
      median = (data[length / 2 - 1] + data[length / 2]) / 2;
    } else {
      median = data[(length - 1) / 2];
    }
  return median;
}

function mode(data) {
  
}




module.exports = {total : total, mean: mean, median: median, mode: mode}
