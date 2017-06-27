function timesTable(n) {

  var table = ""

  for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
      var multiple = i*j
      if(multiple < 10) {
        spacing = "  "
      }
      else {
        spacing = " "
      }
      table = table + multiple + spacing
    }
    table = table + "\n"
  }

  return table
}

module.exports = timesTable
