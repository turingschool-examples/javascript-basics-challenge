/*jshint esversion: 6 */

const assert = require('chai').assert;
const averages = require('../averages');

describe('Averages,', function() {
  context('and extending the built-in array class: An Exploration.', function() {
    it('Returns the total of all the values in the array', function() {
      testArray = [1, 2, 3, 4, 5];
      assert.equal(testArray.total(), 15);

      testArray = [100, 0, -200, 0.5];
      assert.equal(testArray.total(), -99.5);
    });

    it('Returns the mean (average) of the array', function() {
      testArray = [1, 2, 3];
      assert.equal(testArray.mean(), 2);

      testArray = [-100, 0, 100, 5, 5, 14];
      assert.equal(testArray.mean(), 4);
    });

    it('Returns the median of the array', function() {
      testArray = [102, 56, 34, 99, 89, 101, 10];
      assert.equal(testArray.median(), 89);

      testArray = [102, 56, 34, 99, 89, 101, 10, 54];
      assert.equal(testArray.median(), 72.5);

      testArray = [10];
      assert.equal(testArray.median(), 10);

      testArray = [-10, 5, -5, 10, 0];
      assert.equal(testArray.median(), 0);

      testArray = [-0.1, -0.5, 1];
      assert.equal(testArray.median(), -0.1);
    });

    it('Returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency...or something like that...you get it.', function() {
      var testArray = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
      assert.deepEqual(testArray.mode(), {'6': 4});

      var testArray2 = [1, 1, 2, 3, 3];
      assert.deepEqual(testArray2.mode(), {'1': 2, '3': 2});
    });
  });
});
