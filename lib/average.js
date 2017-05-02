Array.prototype.total = function () {
  let input = this;
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

Array.prototype.mean = function() {
  let input = this;
  let result = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
    count ++;
  }
  return result/count;
}

Array.prototype.median = function() {
  let input = this;
  input.sort();
  if (input.length % 2 != 0) {
    return input[Math.floor(input.length/2)]
  }
  let a = input[input.length/2]
  let b = input[(input.length/2) - 1]
  return (a + b) / 2;
}

Array.prototype.mode = function() {
  let input = this;
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (result[input[i]]) {
      result[input[i]] += 1;
    } else {
      result[input[i]] = 1;
    }
  }
  let initialVal = 0;
  let mode = 0;
  for (let val in result) {
    if (result[val] > initialVal) {
      initialVal = result[val];
      mode = val;
    }
  }
  let finalResult = {};
  finalResult[mode] = initialVal;
  return finalResult;
}

Array.prototype.pad = function(num) {
  let input = this;
  let newInput = [];
  for (let i = 0; i < input.length; i ++) {
    newInput.push(input[i]);
  }
  if (num > input.length) {
    while (newInput.length < num) {
      newInput.push(null);
    }
  }
  return newInput;
}
