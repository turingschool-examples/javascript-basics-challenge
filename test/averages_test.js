const assert = require('chai').assert;
require('../averages');
testArray = [1,2,3,4,5,6,7,8];
describe('Array class now has new methods:', function(){
  it('can call total on an array', function(){
    assert.equal(testArray.total(), 36);
  });
  it('can call mean on an array', function(){
    assert.equal(testArray.mean(), 4.5);
  });
  it('can call median on an array', function(){
    assert.equal(testArray.median(), 4.5);
  });
  it('can call mode on an array', function(){
    assert.equal([1,2,3,3,4,5].mode(), 3);
  });
});
