const pry = require('pryjs')

const printFormat = function(set) {
    let printable = ""
    set.forEach(function(row) {
        row.forEach(function(number) {
            printable += `${number} `
        })
        printable += "\n"
    })
    return printable

}

const pushRow = function(i, width) {
    let row = []
    for (var j = 1; j <= width; j++) {
        row.push(i * j)
    }
    return row
}

const timesTable = function(width) {
    var set = []
    for (var i = 1; i <= width; i++) {
        var row = pushRow(i, width)
        set.push(row)
    }
    return printFormat(set)
}

module.exports = timesTable