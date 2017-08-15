function total(list) {
  return list.reduce(function(sum, element) {
    return sum + element;
  }, 0);
}

function mean(list) {
  return total(list)/(list.length);
}

function median(list) {
  let sortedCollection = list.sort(function(a,b) {
    return a - b;
  });
  let middleNum = sortedCollection.length / 2;
  if(sortedCollection.length % 2 === 0) {
    return (sortedCollection[middleNum - 1] + sortedCollection[middleNum]) /2;
  } else {
    return sortedCollection[Math.floor(middleNum)];
  }
}

function mode(list) {
  let unique = {};
  for(i=0; i < list.length; i++) {
    let num = list[i] + '';
    if(unique[num] === undefined) {
      unique[num] = 1;
    } else {
      unique[num]++;
    }
  }
  return Object.keys(unique).sort(function(a,b){return unique[b]-unique[a]})[0];
}

module.exports = {
  total,
  mean,
  median,
  mode
}