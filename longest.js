var pry = require('pryjs');

var animals = ["manbearpig", "manimal", "donkey", "tiger"]



function longest(data){
  var tempLongest = undefined
  data.forEach(string => {
    if (tempLongest === undefined || string.length > tempLongest.length){
      tempLongest = string;
    }
  })
  return tempLongest;
  }


module.exports = {longest: longest}
