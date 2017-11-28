module.exports = {
  timesTable: function timesTable(input){
    returnArr = [];
    for(var i = 1; i <= input; i ++){
      for(var j = 1; j <= input; j ++){
        returnArr.push(i * j);
      }
    }
    return returnArr.toString();
  }
} 