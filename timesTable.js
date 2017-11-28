function timesTable (num) {
  let table = [];
  for(i = 1; i <= num; i++) {
    for(x = 1; x <= 5; x++) {
      table.push(x * i);
    }
    table.push('\n');
  }
  return table.join(' ');
};

module.exports = {timesTable};
