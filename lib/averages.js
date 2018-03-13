const total = (inputArray) => {
  let sum = inputArray.reduce((sum, number) => {
    sum = sum + number;
    return sum;
  }, 0)
  return sum;
}

const mean = (inputArray) => {
  return total(inputArray)/inputArray.length;
}

const median = (inputArray) => {
  let size = inputArray.length;
  if(size % 2 === 0) {
    let upperMiddle = inputArray[size/2]
    let lowerMiddle = inputArray[size/2 - 1]
    return mean([lowerMiddle, inupperMiddle]);
  } else {
    let middle = Math.floor(size/2)
    return inputArray[middle];
  }
}

const mode = (inputArray) => {
  let finalCount = inputArray.reduce((count, number) => {
    if(!count[number]) {
      count[number] = 0;
    }
    count[number]++;
    return count;
  }, {})
  let compare = 0;
  Object.keys(finalCount).forEach((number) => {
    if(finalCount[number] > compare) {
      compare = number;
    }
  })
  return compare;
}

module.exports = [total, mean, median, mode]
