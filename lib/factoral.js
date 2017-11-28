
function factoral(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factoral(num -1));
  }
}

module.exports = factoral
console.log(factoral(5))
