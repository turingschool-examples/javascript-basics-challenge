function longestString(array){
  if (array.length === 0) {
    return null;
  }
  var longString = 0;
  var string;
  array.forEach(function(item) {
    if (longString < item.length) {
        longString = item.length;
        string = item;
       }
  });
  return string;
};

module.exports = { longestString }
