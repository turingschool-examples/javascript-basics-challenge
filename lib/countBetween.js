function countNumbersBetween(sample, lower, upper) {

  if(sample.length === 0) {
    return 0
  }
  else {
    var count = 0

    for(i=0; i<sample.length; i++){
      if((sample[i] >= lower) && (sample[i] <= upper)){
        count += 1
      }
    }
    return count
  }
}

module.exports = countNumbersBetween
