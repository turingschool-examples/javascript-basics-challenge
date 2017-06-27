/*jshint esversion: 6 */

function isTriangle(s1, s2, s3) {
  if(s1 <= 0 || s2 <= 0 || s3 <= 0) {
    return false;
  } else if(s1+s2>s3 && s1+s3>s2 && s2+s3>s1) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isTriangle
};
