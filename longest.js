var pry = require('pryjs');

var animals = ["manbearpig", "manimal", "donkey", "tiger"]



function longest(data){
  var tempLongest = undefined
  if(data.length === 0) {
    return undefined;
  }
  data.forEach(string => {
    if (tempLongest === undefined){
      tempLongest = string;
    }
    else if (string.length > tempLongest.length){
      tempLongest = string;
    }
  })
  return tempLongest;
  }


module.exports = {longest: longest}
