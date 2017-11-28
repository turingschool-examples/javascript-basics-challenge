factoral = (num) => {
  if(num === 0) {
    return 1
  }
  else {
    array = Array.from(new Array(num), (x,i) => i + 1);
    return array.reduce(function(a,b){return a * b;});
  }
}

module.exports = {factoral}
