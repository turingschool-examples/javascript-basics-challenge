const pry = require('pryjs');
function timesTable(number) {
  let table = [];
  let counter = 0;
  let max_number = number * number
  while(counter < max_number) {
    counter++;
    table.push(counter);
    if(counter % 5 == 0) {
      table.push('\n');
    };
  };
  return table.join(' ');
};
module.exports = timesTable;
