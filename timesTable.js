function timesTable(integer) {
  let collection = [];
  let str = '';
  for(i = 1; i < integer + 1; i++) {
    for(j = 1; j < integer + 1; j++) {
      collection.push(i * j);
    }
  }
  for(n = 0; n < integer; n++) {
    str += collection.splice(0, integer).join(" ") + '\n';
  }
  return str;
}

module.exports = timesTable