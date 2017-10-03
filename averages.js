function total(array){
  return array.reduce((a,b) => a+b, 0)
};

function mean(array){
  return total(array)/array.length
};

function median(array){
  var pos = array.length
  var newpos = pos/2
  if (pos % 2 === 0){
    return (array[newpos] + array[newpos-1])/2
  } else {
    return array[newpos-0.5]
  };
};

function mode(array){
  var mode = []
  var collect = {}
  var maxNum = 0
  array.forEach(function(number) {
    if (!collect[number]){
      collect[number] = 1
    } else {
      collect[number]++
    }
    if (collect[number] > maxNum){
      mode = [number]
      maxNum = collect[number]
    } else if (collect[number] === maxNum){
      mode.push(number)
      maxNum = collect[number]
    }
  });
  return mode
};

module.exports = {
  total: total,
  mean: mean,
  median: median,
  mode: mode
};
