function timesTable(num) {
  if (num  === 0) {
    return 0;
  } else {
    var table = [];
    var string = "";
      for(var i = 1; i < num + 1; i++) {
        for (var j = 1; j < num + 1; j++) {
        table.push(i * j);
        }
      }
      for(n = 0; n < num; n++) {
        string += table.splice(0, num).join(" ") + "\n";
      }
    }
    return string
  }



module.exports = { timesTable }
