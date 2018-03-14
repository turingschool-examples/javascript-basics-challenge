var pry = require('pryjs');



function table(num){
  var table = []
  for(var a = 1; a <= num; a++){
    var oneRow = []
    for(var b = 1; b <= num; b++) {
      oneRow.push(b * a);
      eval(pry.it)
    }
    table.push(oneRow.join(" "));
  }
  return table.join("\n");
}




module.exports = {table: table}
