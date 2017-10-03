function total(array){
  return array.reduce((a,b) => a+b, 0)
};

function mean(array){
  return array.reduce((a,b) => a+b, 0) / array.length
};

function median(array){
  array.sort((a, b) => a - b);
  let lowMiddle = Math.floor((array.length - 1) / 2);
  let highMiddle = Math.ceil((array.length - 1) / 2);
  return (array[lowMiddle] + array[highMiddle]) / 2
};

function mode(arr){
  var mode = 0;
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < i; j++){
      if(arr[j] === arr[i]){
        mode = arr[j];
        count++;
        console.log(count);
      }
    }
  }
  return mode;
}


module.exports = {
  total: total,
  mean: mean,
  median: median,
  mode: mode
}
