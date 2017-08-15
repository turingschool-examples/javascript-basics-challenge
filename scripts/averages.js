function total(array) {
  let total = 0
  for (i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
}

function mean(array) {
  let total = 0
  for (i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total / array.length
}

function median(array) {
  let median = 0
  let arrlen = array.length
  array.sort()

  if (arrlen % 2 === 0) {
    median = (array[arrlen / 2 - 1] + array[arrlen / 2]) / 2
  } else {
    median = array[(arrlen - 1) / 2]
  }
  return median
}

// function mode(array)
// {
//     if(array.length == 0)
//         return null;
//     var modeMap = {}
//     var maxEl = array[0], maxCount = 1;
//     for(var i = 0; i < array.length; i++)
//     {
//         var el = array[i]
//         if(modeMap[el] == null)
//             modeMap[el] = 1
//         else
//             modeMap[el]++
//         if(modeMap[el] > maxCount)
//         {
//             maxEl = el
//             maxCount = modeMap[el]
//         }
//     }
//     return maxEl
// }

module.exports = {total, mean, median}
