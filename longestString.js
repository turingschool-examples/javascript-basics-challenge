module.exports = {
  longestString: function longestString(input) {
    if(input.length === 0){
      return null;
    }
    set = input[0]
    for(var i = 1; i < input.length; i ++){
      if(input[i].length > set.length){
        set = input[i]
      }
    }
    return set;
  }
}