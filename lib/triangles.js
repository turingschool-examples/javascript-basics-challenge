module.exports = {isTriangle}

function isTriangle(triangle) {
  if ((triangle.side_1^2 + triangle.side_2^2)
      === (triangle.side_3^2)) {
    return true
  } else {
    return false
  };
};
