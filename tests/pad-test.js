const assert = require('chai').assert;
const pad = require('../scripts/pad');
var pry = require('pryjs');

describe('pad', function(){
  context('pad an array', function(){
    it('returns an array padded with null', function(){
      var myArray = [1, 2, 3];

      assert.deepEqual(myArray.pad(5), [1, 2, 3, null, null])
    });

    it('returns an array padded with argument given', function(){
      var myArray = [1, 2, 3];

      assert.deepEqual(myArray.pad(5, 'diabolical'), [1, 2, 3, 'diabolical', 'diabolical'])
    });

    it('returns a new array if padding value is 0', function(){
      var myArray = [1, 2, 3];

      assert.deepEqual(myArray.pad(0), [1, 2, 3])
    });
  });
});;
