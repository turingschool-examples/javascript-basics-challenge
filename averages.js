// total from array
function getSum(total, num) {
  return total + num;
}

function getTotal(array) {
  return array.reduce(getSum)
}

// mean from array


function calculateAverage(array) {
  return (array.reduce(getSum) / array.length);
}





module.exports = { calculateAverage:calculateAverage, getTotal:getTotal }
