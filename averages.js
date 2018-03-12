let someArray = [1, 2, 3, 4, 5, 6]

function total(someArray) {
  let thisTotal = someArray.reduce(function (total, num) { 
    return total + num 
 }) 
 return thisTotal
}


function mean(someArray) { return total(someArray) / someArray.length }


function median(someArray) {
  //the middle number by count, or the avg of the two centermost numbers
}


function mode(someArray) {
  //the value which occurs most often in an array. a set with mutliple modes is multimodal
}






console.log(total(someArray))
console.log(mean(someArray))
// Write a function for each of the following. Each function will take an Array as the one argument..

// total - returns the total of all the values in the array
// mean - returns the mean (average) of the array
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency


