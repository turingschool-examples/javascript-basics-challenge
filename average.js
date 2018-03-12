

var array = [ 1 ,3 ,4 ,5, 6]

function total(data) {
  var total = 0;
  for (var i = 0; i < data.length ; i++){
    total += data[i];
  }
  return total
}



module.exports = {total : total}
