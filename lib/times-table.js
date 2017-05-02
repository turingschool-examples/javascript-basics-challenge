var pry = require('pryjs');

function createArray(number){
  newArray = []
  for(i = 1; i <= number; i++){
    newArray.push(i);
  }
  return newArray;
}

function generateRows(base){
  rows = []
  for(i = 1; i <= base.length; i++){
    rows.push(base.map(function(element){
      return element * i;
    }))
  }
  return rows;
}

function timesTable(number){
  base = createArray(number);
  rows = generateRows(base);
  rows.forEach(function(array){
    rowToPrint = '';
    for(i = 0; i < array.length; i++){
      rowToPrint = rowToPrint + ' ' + array[i]
    }
    console.log(rowToPrint);
  })
}

module.exports.createArray = createArray;
module.exports.generateRows = generateRows;
module.exports.timesTable = timesTable;
