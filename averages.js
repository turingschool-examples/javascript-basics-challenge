function total(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0)
}

function mean(numbers) {
  let sum = total(numbers)
  return sum / numbers.length
}

function median(numbers) {
  numbers.sort((a,b) => {
    return a - b
  })
  middle = Math.ceil(numbers.length / 2) - 1
  return numbers[middle]
}

function mode(numbers) {
  let result = {}
  numbers.forEach((number) => {
    if (result[number]) {
      result[number]++
    } else {
      result[number] = 1
    }
  })

  return Object.keys(result).reduce((a, b) => {
    return result[a] > result[b] ? a : b
  })
}

var exports = module.exports = { total, mean, median, mode }