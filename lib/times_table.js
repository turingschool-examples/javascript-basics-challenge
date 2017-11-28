function timesTable(numRows) {
  let rows = '';

  for (let i = 1; i <= numRows; i++) {
    let row = '';
    for (var j = 1; j <= numRows; j++) {
      row += `${(i * j)}\t`;
    }
    rows += `${row}\n`;
  }

  return rows;
};

module.exports = timesTable;
