function longestString (array) {
  if (array.length === 0) {
    return null
  } else {
    return findLongest(array);
  }
}

function findLongest (array) {
  let longest = array[0]
    array.forEach(function(string) {
      if (string.length > longest.length) {
        longest = string;
      }
    });
  return longest; 
};

module.exports = {longestString};
