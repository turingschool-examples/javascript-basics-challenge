const assert = require('chai').assert
require('../pad')

context('pad', function(){
  it('return undefined if number argument is invalid', function(){
    assert.equal([10, 20, 30].pad(), undefined);
    assert.equal([10, 20, 30].pad(-1), undefined);
  });

  it('returns array if number argument is 0', function(){
    assert.deepEqual([10, 20, 30].pad(0), [10, 20, 30]);
  });

  it('returns array if number argument < array.length', function(){
    assert.deepEqual([10, 20, 30].pad(2), [10, 20, 30]);
  });

  it('returns array if number argument = array.length', function(){
    assert.deepEqual([10, 20, 30].pad(3), [10, 20, 30]);
  });

  it('returns padded array with null', function(){
    assert.deepEqual([10, 20, 30].pad(4), [10, 20, 30, null]);
  });

  it('returns padded array with string', function(){
    assert.deepEqual([10, 20, 30].pad(5, 'apple'), [10, 20, 30, 'apple', 'apple']);
  });
});