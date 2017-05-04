var pry = require('pryjs')

function getSum(total, num) {
    return total + num;
};

function total(list){
  return list.reduce(getSum)
};

function mean(list){
  return (total(list) / list.length)
};

function median(list) {

    list.sort( function(a,b) {return a - b;} );

    var half = Math.floor(list.length/2);

    if(list.length % 2)
        return list[half];
    else
        return (list[half-1] + list[half]) / 2.0;
}

function mode(list){
  eval (pry.it)
}

exports.total = total
exports.mean = mean
exports.median = median
exports.mode = mode
