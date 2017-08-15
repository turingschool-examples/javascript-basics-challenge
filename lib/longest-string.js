function longestString(data) {
  var greatest_length = 0;
  var longest_string = "";
  for(var i = 0; i < data.length; i++) {
    if (typeof data[i] != 'string') {
      return null;
    }
    else if (data[i].length > greatest_length) {
      longest_string = data[i];
    }
  }
  return longest_string;
}

module.exports = longestString;
