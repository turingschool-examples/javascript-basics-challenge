
isTriangle = (side_1, side_2, side_3) => {
  if (side_1 + side_2 > side_3 && side_2 + side_3 > side_1 && side_1 + side_3 > side_2 ){
    return true
  } else {
    return false
  }
}

module.exports = isTriangle;
