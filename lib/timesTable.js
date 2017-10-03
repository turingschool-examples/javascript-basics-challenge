module.exports = {generateTable}

function generateTable(num){
  var table = ""
  for(var j = 1; j <= num; j++){
    for(var i = 1; i <= num; i++){
      table += (i * j) + " "
    }
    table += "\n"
  }
  return table
}
