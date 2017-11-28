function longestString(array) {
    array.sort(function(a, b){
        return b.length - a.length;
    })
    return(array.shift() || null);
}
var strings = ["word", "wordz", "wordzyword"];
console.log(longestString(strings));
console.log(longestString([]));

module.exports = longestString;