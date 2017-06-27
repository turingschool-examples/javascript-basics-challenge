function countNumbersBetween(array, lower, upper) {
    return (array.indexOf(upper) - array.indexOf(lower) - 1);
}

module.exports = countNumbersBetween;
