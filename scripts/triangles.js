function isTriangle(length1, length2, length3) {
  if ((length1 + length2 > length3) && (length2 + length3 > length1) && (length1 + length3 > length2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isTriangle
