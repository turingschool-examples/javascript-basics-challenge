function total(nums){
  return nums.reduce(function(sum, num){
    return sum + num;
  });
};

function mean(nums){
  return total(nums) / nums.length
};

function median(nums){
  return mean(nums.slice(Math.ceil(nums.length/2)-1, (nums.length/2)+1))
};

function mode(nums){
  return nums.reduce(function(map, num){
    let now = map.numbers[num] = (map.numbers[num] || 0) + 1
    if (now > map.mostFrequent){
      map.mostFrequent = now
      map.mode = num
    };
    return map;
  }, { numbers: {}, mostFrequent: -Infinity, mode: null }, nums).mode;
};

function factorial(num){
  let factorial = 1;
  for(i = 1; i <= num; i++){
    factorial = factorial * i
  };
  return factorial;
};

module.exports = { total,
                   mean,
                   median,
                   mode,
                   factorial };