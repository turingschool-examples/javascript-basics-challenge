const assert = require('chai').assert;
const averages = require('../scripts/averages');
var pry = require('pryjs');

describe('average', function() {
  context('total', function(){
    it('returns the total of all of the values in an array', function(){
        var array = [2, 4, 6]

        assert.equal(averages.total(array), 12)
    });
  });

  context('mean', function(){
    it("returns the mean average of an array's values", function(){
      var array = [2, 4, 6]

      assert.equal(averages.mean(array), 4)
    });
  });

  context('median', function(){
    it("returns the median average of an array's values", function(){
      var array = [4, 8, 6];

      assert.equal(averages.median(array), 6)
    });
  });

  context('mode', function(){
    it("returns the mode of an array", function(){
      var array = [4, 4, 6, 7, 7, 7];

      assert.equal(averages.mode(array), 7)
    });
  });
});
