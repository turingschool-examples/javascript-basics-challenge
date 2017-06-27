function timesTable(number) {
  let firstRow = []
  let table = ""
  for(let i = number; i > 0; i--) {
    firstRow.push(i)
  }
  let ordered = firstRow.reverse()

  for(let i = 0; i < ordered.length; i++) {
    for (let j = 0; j < ordered.length; j++) {
      let product = ordered[i] * ordered[j]
      table = table + product.toString() + " "
    }
    table = table + "\n"
  }
  return table
}
module.exports = timesTable
