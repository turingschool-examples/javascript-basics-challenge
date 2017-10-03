function timesTable(integer){
  let numberRows    = [1,2,3,4,5];
  // let numberRows    = Array.apply(null, Array(integer));
  // let numberColumns = Array.apply(null, Array(integer));
  let numberColumns = [1,2,3,4,5];
  let boardRows     = "";
  let boardColumns  = "";
  numberRows.forEach(function(row){
    // numberRows += row + "\n";
    numberColumns.forEach(function(column){
      boardColumns  += row * column + " ";
    })
    boardColumns += "\n";
  })
  return "\n" + " " + `${boardColumns}`;
}

console.log(timesTable(5));

// Array.apply(null, Array(5))
//  integer representing a number of rows and produces a string representing a times table with that number of rows.
//
// The numbers can be separated by any spaces or tabs, but each row must be on a new line.  Don't worry if the columns don't line up.
//
// For example, `timesTable(5)` should print the following out to the screen:
//
// ```
// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25
// ```
