module.exports = {
  timesTable: function timesTable(number) {
    var table = ""
    for(var r = 1; r < number + 1; r++) {
      for(var c = 1; c < number + 1; c++) {
        var result = c * r
        table += result
        if (result.toString().length > 1) {
          table += " "
        } else {
          table += "  "
        }
      }
      table += "\n"
    }
    return table
  }
}