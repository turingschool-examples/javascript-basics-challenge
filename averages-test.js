const assert = require('chai').assert;
const total = require('./averages').total;
const mean = require('./averages').mean;
const median = require('./averages').median;
const mode = require('./averages').mode;

describe('Averages Tests', function() {
  context('total', function() {
    it('can sum array', function() {
      var arr = [0, 3, 2];
      var tot = total(arr);

      assert.equal(5, tot);
    });

    it('can sum negatives', function() {
      var arr = [-2, 5, -6];
      var tot = total(arr);

      assert.equal(-3, tot);
    });
  });

  context('mean', function() {
    it('can take mean', function() {
      var arr = [3, 4, 5, 6, 7];
      var me = mean(arr);

      assert.equal(5, me);
    });
  });

  context('median', function() {
    it('can take median with even number of elements', function() {
      var arr = [1, 2, 3, 4];
      var med = median(arr);

      assert.equal(2.5, med);
    });

    it('can take median with odd number of elements', function() {
      var arr = [1, 2, 3];
      var med = median(arr);

      assert.equal(2, med);
    });
  });

  context('mode', function() {
    it('can take mode if one exists', function() {
      var arr = ['blue', 'purple', 'purple', 'green'];
      var mo = mode(arr);

      assert.equal(mo['purple'], 2);
    });

    it('can take mode if multiple exist', function() {
      var arr = ['purple', 'purple', 'blue', 'blue', 'beige'];
      var mo = mode(arr);

      assert.equal(mo['purple'], 2);
      assert.equal(mo['blue'], 2);
    });

    it('can take mode if none exist', function() {
      var arr = ['green', 'lavender', 'yellow', 'its ya boy'];
      var mo = mode(arr);

      assert.equal(mo['green'], 1);
      assert.equal(mo['lavender'], 1);
      assert.equal(mo['yellow'], 1);
      assert.equal(mo['its ya boy'], 1);
    });
  });
});
