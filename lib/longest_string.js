const longestString = (input) => {
  if(input.length === 0) {
    return null;
  } else {
    let sorted = input.sort((a, b) => {
      return b.length - a.length;
    })
    return sorted[0];
  }
}

module.exports = longestString;
