# JavaScript Basics Challenge

In this challenge, you'll deepen your JavaScript fundamentals by completing a series of exercises. You'll need to follow the following steps to successfully complete this challenge:

* Fork this repository
* As you work through each section below, add a file (named according to what exercise you're on).
* Complete the exercise by writing your JS code and corresponding unit tests.
* **When you finish, create a Pull Request back to this repository with your completed challenge!**
* If you have questions, please tag an instructor in your PR.

### 1. Rectangles

You'll write a number of functions that calculate certain properies of a rectangle object. A rectangle object is just a JavaScript object with two properties - a `width` and a `height`. The input will look like this:

```javascript
var rectangle = {width: 10, height: 20}
```

You're expected to write the following functions:

1. `area(rectangle)` - returns the area of the rectangle
2. `perimeter(rectangle)` - returns the perimeter of the rectangle
3. `diagonal(rectangle)` - returns the length of the rectangle's diagonal
4. `isSquare(rectangle)` - returns `true` if the rectangle is a square and `false` otherwise

Here's a [resource](http://www.mathopenref.com/rectanglediagonals.html) on rectangle diagonals.

**Don't forget to write tests for each function!**

### 2. Triangles

Write a function called `isTriangle` which takes an input of three non-negative numbers.  It should return `true` if the three numbers could form the side lengths of a triangle and `false` otherwise.

The arguments don't correspond to specific sides. Be sure to handle edge cases such as negative numbers as input.

For example:

```
isTriangle(0,0,0) # => false, because a triangle can't have 0 length sides
isTriangle(-2,1,5) # => false, because a triangle can't have negative length sides

isTriangle(4,4,4) # => true, an equilateral triangle

isTriangle(6,8,10) # => true, a right triangle
isTriangle(8,6,10) # => true, the same right triangle
isTriangle(10,8,6) # => true, the same right triangle

isTriangle(4, 8, 50) #=> false, no such triangle exists
```

It might be helpful to read this [Wikipedia article about Pythagorean triples](http://en.wikipedia.org/wiki/Pythagorean_triple).

**Don't forget to write tests!**

### 3. Averages

Write a function for each of the following. Each function will take an Array as the one argument..

1. `total` - returns the total of all the values in the array
2. `mean` - returns the mean (average) of the array
3. `median` - returns the median of the array
4. `mode`- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency

**Don't forget to write tests for each function!**

### 4. Factorial

Write a `factorial` function which takes as its input a non-negative integer and calculates the factorial of that number.

The factorial of a number is the product of all integers from 1 up to that number.  For example:

```javascript
factorial(4) // 24 (4 * 3 * 2 * 1 == 24)
```

The factorial of 0 is defined to be 1.

Read the following [Wikipedia article](http://en.wikipedia.org/wiki/Factorial) for more information.

**Don't forget to write tests!**

### 5. Longest String

Write a function `longestString` which takes as its input an `Array` of `Strings` and returns the longest `String` in the `Array`.

For example:

```javascript
longestString(['horses', 'cats', 'pineapples']); // => "pineapples"
```

If the input `Array` is empty `longestString` should return `null`.

**By now, you're totally remembering to write tests!**

### 6. Times Table

Implement a function called `timesTable` which takes as its input an integer representing a number of rows and produces a string representing a times table with that number of rows.

The numbers can be separated by any spaces or tabs, but each row must be on a new line.  Don't worry if the columns don't line up.

For example, `timesTable(5)` should print the following out to the screen:

```
1  2  3  4  5
2  4  6  8  10
3  6  9  12 15
4  8  12 16 20
5  10 15 20 25
```

**By now, you're totally remembering to write tests!**

### 7. Guessing Game

Create a `GuessingGame` constructor function which is initialized with an integer called `answer`.

Define an instance method `guess` which takes an integer called `guess` as its input. `guess` should return the string `'high'` if the `guess` is larger than the `answer`, `'correct'` if the `guess` is equal to the `answer`, and `'low'` if the `guess` is lower than the `answer`.

Define an instance method `isSolved` which returns `true` if the most recent `guess` was correct and `false` otherwise.

For example:

```javascript
var game = new GuessingGame(20);

game.isSolved();   // => false

game.guess(5);     // => 'low'
game.guess(40);    // => 'high'
game.isSolved();   // => false

game.guess(20);    // => 'correct'
game.isSolved()    // => true
```

**Wooo you're done! Double check that you have tests covering each piece of functionality!**

### EXTENSION: Count Numbers Between

Write a function `countNumbersBetween` which takes three arguments as input:

1. An `Array` of integers
2. An integer lower bound
3. An integer upper bound

`countNumbersBetween` should return the number of integers in the `Array` that are between the two bounds, **including the bounds**.

It should return 0 if the `Array` is empty.

Some examples:

```javascript
countNumbersBetween([25, 2, 8], 0, 100);          // => 3
countNumbersBetween([-19, 1, 22], 0, 100);        // => 2
countNumbersBetween([100, 200, 300], 100, 300);   // => 3
countNumbersBetween([], -10, 10);                 // => 0
countNumbersBetween([5], 5, 5);                   // => 1
```
