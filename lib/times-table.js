module.exports = {
    timesTable: function timesTable(number) {
      var top_nums = [];
      while (number > 0) {
          top_nums.unshift(number)
          number--
      }
      final_string = ""
      for (i = 0; i < top_nums.length; i++) {
        for (j = 0; j < top_nums.length; j++) {
          final_string += top_nums[j] * top_nums[i] + " "
          if (j === top_nums.length - 1) {
            final_string += "\n"
          }
        }
      }
      return final_string
    }
  }




// Implement a function called `timesTable` which takes as
 // its input an integer representing a number of rows and produces a
  // string representing a times table with that number of rows.
//
// The numbers can be separated by any spaces or tabs, but each row must
// be on a new line.  Don't worry if the columns don't line up.
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
