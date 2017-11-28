function total(array) {
    return array.reduce((n, i) => n + i);
}

function mean(array) {
    return total(array) / array.length
}

function median(array) {
    array.sort(function(a, b) {return a - b;} );
    var half = Math.floor(array.length/2);
    if (array.length % 2) {
        return array[half];
    } else {
        return (array[half-1] + array[half]) / 2.0;
    }
}

function mode(array) {
    var count = {},
        max = 0,
        num,
        len = array.length,
        i = 0;

    for (; i < len; i++) {
        var a = array[i];
        if (!count[a]) count[a] = 0;

        count[a]++;
    }

    for (num in count)
        if (count[num] > max)
            max = num;

    return Number(max);
}

module.exports = {total: total, mean: mean, median: median, mode: mode}
