function longestString(str){
  str.sort(function(a, b){
  return b.length - a.length;
})
  console.log(str[0])
  return str[0]
}
longestString(['horses', 'cats', 'pineapples']);
module.exports = longestString