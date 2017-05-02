const assert = require('chai').assert
const iArray = require('../statistics')

context('total', function(){
  it('for an array', function(){
    arr = iArray([10, 20, 30])
    assert.equal(arr.total(), 60);
  });
});

context('mean', function(){
  it('for an array', function(){
    arr = iArray([10, 20, 30])
    assert.equal(arr.mean(), 20);
  });
});

context('median', function(){
  it('for an odd numbered array', function(){
    arr = iArray([10, 20, 30])
    assert.equal(arr.median(), 20);
  });

  it('for an even numbered array', function(){
    arr = iArray([10, 20, 30, 40, 50, 60, 70, 80])
    assert.equal(arr.median(), 45);
  });
});

context('mode', function(){
  it('for an array with one mode', function(){
    arr = iArray([10, 20, 20, 30])
    assert.deepEqual(arr.mode(), {'2': ['20']});
  });

  it('for an array with two modes', function(){
    arr = iArray([10, 20, 30, 30, 30, 40, 40, 40, 50])
    assert.deepEqual(arr.mode(), {'3': ['30', '40']});
  });
});