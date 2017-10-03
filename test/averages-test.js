const assert = require('chai').assert;
const averages = require('../lib/averages.js')

var array = [3, 5, 7]
var array2 = [3, 5, 7, 7]

describe('Average functionality', function(){
  it('total returns total', function(){
    assert.equal(averages.total(array), 15);
  });

  it('mean returns mean', function(){
    assert.equal(averages.mean(array), 5);
  });

  it('median returns median', function(){
    assert.equal(averages.median(array), 5);
  });

  it('mode returns object with mode and frequency', function(){
    assert.deepEqual(averages.mode(array2), {mode: 7, value: 2});
  });
});
