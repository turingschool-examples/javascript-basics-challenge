function total(numbers) {
    return numbers.reduce(function (sum, element) {
        return sum + element;
    }, 0);
}
function average(numbers) {
    return total(numbers) / numbers.length
}

module.exports = {
    total,
    average
};