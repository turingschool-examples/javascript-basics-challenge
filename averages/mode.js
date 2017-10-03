var mode = function(arr){
    var frequencyHash = {};
    for(var i = 0; i < arr.length; i++){
        if(frequencyHash[arr[i]] === undefined){
            frequencyHash[arr[i]] = 0;
        }
            frequencyHash[arr[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in frequencyHash){
        if(frequencyHash[prop] > greatestFreq){
            greatestFreq = frequencyHash[prop];
            mode = prop;
        }
    }
    return mode;
}

module.exports = mode
