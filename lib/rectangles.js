// You'll write a number of functions that calculate certain properies of a rectangle object. A rectangle object is just a JavaScript object with two properties - a `width` and a `height`. The input will look like this:
//
// ```javascript
// var rectangle = {width: 10, height: 20}
// ```
//
// You're expected to write the following functions:

// 1. `area(rectangle)` - returns the area of the rectangle
// 2. `perimeter(rectangle)` - returns the perimeter of the rectangle
// 3. `diagonal(rectangle)` - returns the length of the rectangle's diagonal
// 4. `isSquare(rectangle)` - returns `true` if the rectangle is a square and `false` otherwise

module.exports = {
    area: function area(rectangle) {
      return rectangle.width * rectangle.height;
    },
    perimeter: function perimiter(rectangle) {
      return (rectangle.width * 2) + (rectangle.height * 2)
    },
    diagonal: function diagonal(rectangle) {
      return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2));
    },
    isSquare: function isSquare(rectangle) {
      if (rectangle.width === rectangle.height) {
        return true
      } else {
        return false
      }
    }
}
