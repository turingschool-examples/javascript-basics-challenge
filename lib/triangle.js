pry = require('pryjs')

function isTriangle(one, two, three) {
  var nums = [one, two, three].sort();
  if (one + two > three) {
    return true;
  } else if (one + three > two) {
    return true;
  } else if (two + three > one) {
    return true;
  } else {
    return false
  }
}

module.exports = {isTriangle}
