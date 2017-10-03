function total(numbers) {
    return numbers.reduce(function (sum, element) {
        return sum + element;
    }, 0);
}

function average(numbers) {
    return total(numbers) / numbers.length
}

function median(numbers) {
    numbers.sort(function (a,b) {
        return a - b;
    });

    if (numbers.length === 0) return 0;

    let half = Math.floor(numbers.length / 2);

    if (numbers.length % 2)
        return numbers[half];
    else
        return (numbers[half - 1] + numbers[half]) / 2.0
}

function mode(numbers) {
    let result = {};
    numbers.forEach(function (number) {

        if (result[number]){
            result[number] ++
        } else {
            result[number] = 1
        }
    });
    return Object.keys(result).reduce(function (a,b) {
        if (result[a] > result[b]){
            return a
        }
        else {
            return b
        }
    })
}

module.exports = {
    total,
    average,
    median,
    mode
};