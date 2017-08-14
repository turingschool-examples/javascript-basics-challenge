const total = (arr) => {
  return arr.reduce( (sum, value) => sum + value )
}

const mean = (arr) => {
  return total(arr) / arr.length
}

module.exports = {total, mean}
