pry = require('pryjs')


function longestString(array){
  var longest = "";
  for(i=0;i<array.length;i++){
    if(longest.length < array[i].length){
      longest = array[i];
    };
  };
  console.log(longest);
  return longest;
};


longestString(['apple', 'orange', 'froot', 'sasparilla'])
