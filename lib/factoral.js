var pry = require('pryjs');

function factoral(num){
  var factoral = 1;
  for(i=1; i <= num && num > 0; i++){
    factoral = i * factoral
  };
  return factoral
};

module.exports = factoral
