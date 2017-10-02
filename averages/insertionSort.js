function insertionSort(array){
  let secondary = [];
  array.forEach(function(num){
    let previousNum = secondary[secondary.length-1];
    let previousIndex = secondary.indexOf(previousNum);
    let i = secondary.length;
    if(secondary.length == 0){
      secondary.push(num);
    }else if(num > previousNum){
      secondary.push(num);
    }else{
      let index = previousIndex;
      while(index >= 0){
        if(num < secondary[index] && index == 0){
          return secondary.splice(0, 0, num);
        }else if(num < secondary[index]) {
          index = (index - 1);
        }
        else{
          let newIndex = index + 1
          return secondary.splice(newIndex, 0, num);
        }
      };
    }
    return array;
  });
  return secondary;
};


module.exports = insertionSort
