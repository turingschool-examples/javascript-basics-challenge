function total(array) {
    return array.reduce();
}

function mean(array) {
    return total(array) / array.length
}

function median(array) {
    array.sort(function(a, b) {return a - b;} );
    var half = Math.floor(array.length/2);
    if (values.length % 2) {
        return values[half];
    } else {
        return (values[half-1] + values[half]) / 2.0;
    }
}

// const median = array => {
//     array.sort(function(a, b) {return a - b;} );
//     var mid = Math.floor(array.length / 2);
//     if (values.length % 2) {
//         return array[mid];
//     } else {
//         return (array[mid - 1] + array[mid]) / 2.0;
//     }
// }

function mode(array) {
    var count = {},
        maxCount = 0,
        num,
        len = arr.length,
        i = 0;

    for (; i < len; i++) {
        var a = array[i];
        if (!count[a]) count[a] = 0;

        count[a]++;
    }

    for (num in count)
        if (count[num] > maxCount)
            maxCount = num;

    return maxCount;
}
