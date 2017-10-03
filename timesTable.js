function timesTable(size){
  for(var i = 1; i < size + 1; i++){
    for(var n = 1; n < size + 1; n++){
      var num = (i * n)
      process.stdout.write(num + "   ")
    }
  process.stdout.write("\n")
  }
}


module.exports = timesTable
