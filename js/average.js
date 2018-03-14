
function total(array){
    var total = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      return total
}

function mean(array){
    var sum = total(array);
    return sum/(array.length)
}

function median(array){
   var sorted = array.sort(function(a,b){
        if(a > b){return 1}
        else return -1
        })
    if(sorted.length %2 === 0 ){
        var means = []
        means.push(sorted[sorted.length/2])
        means.push(sorted[(sorted.length/2)+1])
        return mean(means)
    }
    else{
        return sorted[((sorted.length-1)/2)+1]
    }       
}

function mode(array){
    var occurrences = array.reduce(function(obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
      }, {});

    return Object.keys(occurrences).reduce((a, b) => occurrences[a] > occurrences[b] ? a : b);
}

 
    module.exports = {
        total,
        mean,
        median,
        mode
    }
    