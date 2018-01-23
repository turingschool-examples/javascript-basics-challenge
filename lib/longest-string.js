module.exports = {
  longestString: function longestString(collection) {
    if (collection.length == 0) {return undefined}
    var longestElement = undefined
    var maxElementLength = 1
    for(i = 0; i < collection.length; i++) {
      if(collection[i].length > maxElementLength) {
        longestElement = collection[i]
        maxElementLength = collection[i].length
      }
    }
    return longestElement
  }
}