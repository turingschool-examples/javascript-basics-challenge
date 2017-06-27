var pry = require('pryjs')

function timesTable(n) {
  var row1 = []
  var all = []

  for(var i = 1; i <= n; i++) {
    row1.push(i)
  }
  all.push(row1)
  for(var i = 2; i <= n; i++) {
    var row2 = [];
    row1.forEach(function(arr) {
      row2.push(i * arr)
    })
    all.push(row2)
  }

  var table = ""
  for(var i=0; i<all.length; i++) {
    table += all[i].join(' ') + '\n'
  }
  // eval(pry.it)
  return table;
  // for(var i = 0; i < all[i].length; i++) {
  //   for(var z = 0; z < all.length; z++) {
  //     console.log(all[z][i])
  //   }
  // }
}

module.exports = timesTable
