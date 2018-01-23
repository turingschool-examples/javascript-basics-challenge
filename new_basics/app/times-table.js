function timesTable(number) {
  var array = [];
  for(var i = 1; i <= number; i++) {
    for(var j = 1; j <= number; j++) {
      array.push(i * j);
    }
    console.log(array)
    array = []
  }
  return array
}
