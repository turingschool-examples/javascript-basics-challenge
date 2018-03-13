const timesTable = (rows) => {
  let totalTable = []
  for (let i = 1; i < (rows + 1); i++) {
    let row = []
    for (let j = 1; j < (rows + 1); j++) {
      row.push(j*i);
    }
    totalTable.push(row);
  }
  return totalTable;
}

module.exports = timesTable;
