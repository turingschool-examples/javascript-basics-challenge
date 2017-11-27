module.exports = {
  timesTable: function timesTable(input){
    returnArr = [];
    for(var i = 0; i < input.length; i ++){
      for(var j = 0; j < input.length; j ++){
        returnArr.push(i * j);
      }
    }
    return returnArr
  }
} 