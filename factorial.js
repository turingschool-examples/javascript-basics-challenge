function factorial(num){
  if (typeof num != "number" || num < 0 || num == NaN ){
   return "Cannot Compute";
 } else {
   var total = 1
   for (var i = 0; i < num; i++){
    total *= (num - i)
   }
   return total
 }
}

module.exports = {factorial}