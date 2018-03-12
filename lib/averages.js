let array = [2,2,4,6,8]

total = (array) => array.reduce((total,number) => total + number, 0)

mean = (array) => array.reduce((total, number) => total + number, 0) / array.length

median = (array) =>{
  array.sort()
  const half = Math.floor(array.length / 2 )
  return array.length % 2 ? array[half] : array[half - 1] + array[half] / 2.0 
}

mode = (array) => {
  array.sort()
  let maximum = 0, result, frequecy = 0;
  for (var i = 0; i < array.length; i++) {
    array[i] === array[i + 1] ? frequecy++ : frequecy = 0
    if (frequecy > maximum) {
      result = array[i];
      maximum = frequecy;
    }
  }
  return result
}



module.exports = {
  total,
  mean,
  median,
  mode
}