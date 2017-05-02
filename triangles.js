pry = require('pryjs')

function bubbleSort(arr){
  var swapped = true;
  while(swapped) {
    swapped = false;
    for(var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]){
        var bigger = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = bigger;
        swapped = true;
      };
    };
  };
  return arr;
};

function isTriangle(side_one, side_two, side_three){
  var sides = [side_one, side_two, side_three];
    for (i=0; i<sides.length; i++){
      if (sides[i] <=0){
        return false;
      }
    }
    if (sides[0] == sides[1] && sides[0] == sides[2]){
      return true;
    }
    else if(  Math.pow(bubbleSort(sides)[0], 2) +
              Math.pow(bubbleSort(sides)[1], 2) ==
              Math.pow(bubbleSort(sides)[2], 2)
            ){
                return true;
    }else{
      return false;
    }
}


module.exports.isTriangle = isTriangle;
