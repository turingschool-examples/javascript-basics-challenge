const pry = require('pryjs')

class ArrayStats{

  constructor(array){
    this.array = array
  }

  total(){
    return this.array.reduce((sum, number) => sum + number)
  }

  mean(){
    return this.total() / this.array.length
  }

  median(){
    let sorted = this.array.sort((a,b) => a-b)
    let middle = parseInt(sorted.length/2)
    if(sorted.length % 2 === 0){
      return (sorted[middle] + sorted[middle - 1]) / 2
    } else {
      return sorted[middle]
    }
  }

  mode(){
    let counts = this.getNumberFrequencies()
    let mostFrequentCount = 0
    let mostFrequentNumber = 0
    let result = {}

    for(const prop in counts){
      if(counts[prop] >= mostFrequentCount){
        mostFrequentCount = counts[prop]
        mostFrequentNumber = prop
      }
    }

    result[mostFrequentNumber] = mostFrequentCount
    return result
  }

  getNumberFrequencies(){
    return this.array.reduce((obj, number) => {
      !obj[number] ? obj[number] = 1 : obj[number]++
      return obj
    }, {})
  }
}

module.exports = ArrayStats
