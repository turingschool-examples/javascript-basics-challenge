let someArray = [1, 2, 2, 2, 3, 3, 4, 5, 6]

function total(someArray) {
  let thisTotal = someArray.reduce(function (total, num) { 
    return total + num 
 }) 
 return thisTotal
}


function mean(someArray) { return total(someArray) / someArray.length }


function median(someArray) {
  //the middle number by count, or the avg of the two centermost numbers
  if (someArray.length % 2 === 0) {
    index1 = (someArray.length / 2)
    index2 = index1 + 1
    return (someArray[index1] + someArray[index2]) / 2
  } else {
    let index = Math.floor(someArray.length / 2)
    return someArray[index]
  }
}


function mode(someArray) {
  //the value which occurs most often in an array. a set with mutliple modes is multimodal
  let kvPairs = someArray.reduce(function(obj, num){
    // console.log(obj, num)
    if (!obj[num]) {
      obj[num] = 0
    } 
    obj[num]++
    return obj
  }, {})
  return kvPairs
}



console.log(total(someArray))
console.log(mean(someArray))
console.log(median(someArray))
console.log(mode(someArray))
// Write a function for each of the following. Each function will take an Array as the one argument..

// total - returns the total of all the values in the array
// mean - returns the mean (average) of the array
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency

module.exports = {total: total, mean: mean, median: median, mode: mode}
