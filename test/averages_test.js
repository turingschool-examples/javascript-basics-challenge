const assert = require('chai').assert;
const {total, mean, median, mode} = require('../lib/averages');

describe('Averages', () => {
  var array = [1,3,2,4];
  context('total', () => {
    it('finds the total of all values in array', () => {
      assert.equal(total(array), 10);
    });
  });

  context('mean', () => {
    it('finds the mean of an array', () => {
      assert.equal(mean(array), 2.5);
    });
  });

  context('median', () => {
    it('finds the median of an array', () => {
      assert.equal(median(array), 2.5);
    });

    it('finds the median of another array', () => {
      var array = [4, 2, 7, 5, 3];
      assert.equal(median(array), 4);
    });
  });

  context('mode', () => {
    it('finds the single mode of an array', () => {
      var array = [1,3,3,2,3,3];
      var expected = {"3": 4,
                      "1": 1,
                      "2": 1};

      assert.deepEqual(mode(array), expected);
    });
  });
});
