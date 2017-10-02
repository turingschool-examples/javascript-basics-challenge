function timesTable(number) {
  let output = "";
  for (let i = 1; i < number + 1; i++) {
    for (let j = 1; j < number + 1; j++) {
      let num = i * j;
      output = output.concat(" " + num.toString());
    };
   output = output.concat("\n");
  };
  return output;
  console.log('test');
};

console.log(timesTable(5));

module.exports = {
  timesTable: timesTable
}
