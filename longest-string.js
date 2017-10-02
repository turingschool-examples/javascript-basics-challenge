function longestString(strings) {
    if (strings.length === 0)
        return null;
    else {
        return strings.sort(function (a,b) {
            return b.length - a.length
        })[0];
    }
}

module.exports = longestString;