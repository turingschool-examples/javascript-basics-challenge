function total(array) {
  let result = array.reduce((total, element) => {
    return total + element;
  });

  return result;
};

function mean(array) {
  return total(array) / array.length;
};

function median(array) {
  array = array.sort();
  let mid = Math.ceil(array.length / 2);
  if (array.length % 2 == 0) {
    return mean([array[mid], array[mid - 1]]);
  } else {
    return array[mid - 1];
  };
};

function mode(array) {
  let modes = {};

  array.forEach((element) => {
    modes[element] = (modes[element] || 0) + 1
  });

  return modes;
};



module.exports = {total, mean, median, mode};
