var timesTable = function(n) {
  var baseArray = [];
  for(var i = 1 ; i <= n ;i ++) {
    baseArray.push(i);
  }
  var count = 1;
  while(count <= n) {
    var nArray = baseArray.map(function(x){
      return x * count;
    });
    console.log(nArray.join("  "));
    count++;
  }
}

timesTable(6);