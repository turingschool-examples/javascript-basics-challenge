let num = 5

function timesTable(num) {
  let array1 = []
  for (n = 1; n <= num; n++) {
    array1.push(n)
  }

  let line2 = array1.map(function(number, index){
    return 2 * array1[index]
  })

  let line3 = array1.map(function(number, index){
    return 3 * array1[index]
  })
  let line4 = array1.map(function(number, index){
    return 4 * array1[index]
  })
  let line5 = array1.map(function(number, index){
    return 5 * array1[index]
  })

console.log(`${array1.join(' ')} \n${line2.join(' ')} \n${line3.join(' ')} \n${line4.join(' ')} \n${line5.join(' ')}`)
}

// console.log(timesTable(5))

// module.exports = { timesTable: timesTable }
module.exports = timesTable



