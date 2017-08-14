const total = (arr) => {
  return arr.reduce( (sum, value) => sum + value )
}

const mean = (arr) => {
  return total(arr) / arr.length
}

const compareNumbers = (a, b) => {
  return a - b;
}

const median = (arr) => {
  arr.sort(compareNumbers)
  if (arr.length % 2 === 0) {
    let upMiddle = Math.floor(arr.length / 2)
    let lowMiddle = upMiddle - 1
    return (arr[upMiddle] + arr[lowMiddle]) / 2
  } else {
    let middle = Math.floor(arr.length / 2)
    return arr[middle]
  }
}

const countOccurances = (arr) => {
  // const freq = {}
  return arr.reduce( (freq, value) => {
    freq[value] = (freq[value] || 0) + 1
    return freq
  }, {})
}

const mode = (arr) => {
  arr.sort(compareNumbers)
  const frequencies = countOccurances(arr),
        mostFreq = Object.keys(frequencies).sort((a,b) => frequencies[b]-frequencies[a]),
        result = {}
  result[mostFreq[0]] = frequencies[mostFreq[0]]
  return result
}

module.exports = {total, mean, median, mode}
