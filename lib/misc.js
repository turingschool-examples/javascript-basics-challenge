String.prototype.leftJustify = function( length, char ) {
    var fill = [];
    while ( fill.length + this.length < length ) {
      eval(pry.this)
      fill[fill.length] = char;
    }
    return  this + fill.join('');
}

function longestString(strings){

  return strings.reduce(function(map, string){
    if (map.longest == null || string.length > map.longest.length) {
      map.longest = string;
    };
    return map;
  }, { longest: null }, strings ).longest;
};

function timesTable(size){
  rawTable = []
  format = `${size*size}`.length + 1

  for(i = 1; i <= size; i++){
    for(j = 1; j <= size; j++){
      rawTable.push(`${j * i}`.leftJustify(format, ' '))
    };
    rawTable.push('\n')
  };
  return rawTable.join('');
};

module.exports = { longestString,
                   timesTable }