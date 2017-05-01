
function isTriangle(l1, l2, l3){
    if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
      return false
    } else if(l1 == l2 && l2 == l3) {
      return true
    } else if(Math.pow(l1, 2) + Math.pow(l2, 2) === Math.pow(l3, 2)) {
      return true
    } else if(l1 +l2 > l3 && l1+l3> l2 && l2+l3>l1){
      return true
    } else {
      return false
    }
};





module.exports =isTriangle
