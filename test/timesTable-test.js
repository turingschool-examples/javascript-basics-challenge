// Implement a function called timesTable which takes as its input an integer representing a number of rows and produces a string representing a times table with that number of rows.
//
// The numbers can be separated by any spaces or tabs, but each row must be on a new line. Don't worry if the columns don't line up.
//
// For example, timesTable(5) should print the following out to the screen:

// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25


function timesTable(num) {
  var result = "";
  debugger
    for(var i = 1; i <= num; i++) {
      for(var j = 1; j <= num; j++) {
        result += (i * j + " ");
      }
      result + '\n'
    }

  return result

};
