function factorial(num){
  var f=1;
  for(var x=1; x < num ; x++){
    f=(x+1)*f
  }
console.log(f)
return f
}
factorial(5)

module.exports = factorial