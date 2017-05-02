const assert = require('chai').assert;
const timesTable = require('../scripts/timesTable')
var pry = require('pryjs')

describe('timesTable', function(){
  context('produces a times table', function(){
    it('can print a times table', function(){
      assert.deepEqual(timesTable(5), '1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n')
    });
  });
});
