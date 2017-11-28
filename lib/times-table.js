function timesTable(int) {
  let output = "";
  for(let i = 1; i < int + 1; i++) {
    for(let j = 1; j < int + 1; j++) {
      let number = i * j;
      output += number.toString() + ' ';
    }
    output += "\n";
  }
  return output;
}

module.exports = timesTable;

// 6. Times Table

// Implement a function called timesTable which takes as its input an integer representing a number of rows and produces a string representing a times table with that number of rows.

// The numbers can be separated by any spaces or tabs, but each row must be on a new line. Don't worry if the columns don't line up.

// For example, timesTable(5) should print the following out to the screen:

// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25

// By now, you're totally remembering to write tests!

// function timesTable(number) {
//   let output = "";
//   for (let i = 1; i < number + 1; i++) {
//     for (let j = 1; j < number + 1; j++) {
//       let num = i * j;
//       output += ` ${num.toString()}`;
//     };
//     output += "\n";
//   };
//   return output;
// };