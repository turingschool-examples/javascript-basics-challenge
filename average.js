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

module.exports = {
  total: total,
  mean: mean,
  median: median
}
