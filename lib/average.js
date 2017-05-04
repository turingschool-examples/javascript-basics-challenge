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

function mode(list) {
    var counter = {};
    var mode = [];
    var max = 0;
    for (var i in list) {
        if (!(list[i] in counter))
            counter[list[i]] = 0;
        counter[list[i]]++;

        if (counter[list[i]] == max)
            mode.push(list[i]);
        else if (counter[list[i]] > max) {
            max = counter[list[i]];
            mode = [list[i]];
        }
    }
    return mode;
}

exports.total = total
exports.mean = mean
exports.median = median
exports.mode = mode
