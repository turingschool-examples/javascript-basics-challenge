module.exports = {
    longestString: function longestString(array) {
      array.sort(function(a, b){
        return a.length - b.length;
      })
      var word = array.pop();
      if (word) {
        return word
      } else {
        return null
      }
  }
}
