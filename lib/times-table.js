const pry = require('pryjs')

class Times {

  // timesTable(number){
  //   let row = ""
  //   for(var i=1;i<=number;i++){
  //     for(var j=1;j<=number;j++){
  //       row += j*i + " "
  //     }
  //     console.log(row + '\n')
  //     row = ""
  //   }
  // }
  timesTable(number){
    let solution = []
    let firstRow = this.getFirstRow(number)
    for(var j=1;j<=number;j++){
      let currentRow = firstRow.map(number => number * j)
      solution.push(currentRow)
    }
    console.log(solution)
    return solution
  }

  getFirstRow(number){
    let result = [];
    for(var i=1;i<=number;i++){
      result.push(i)
    }
    return result
  }

}

module.exports = Times
