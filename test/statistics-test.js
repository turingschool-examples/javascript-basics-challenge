const assert = require('chai').assert
require('../statistics')

context('statistics', function(){
  it('sum', function(){
    assert.equal([10, 20, 30].sum(), 60);
  });

  it('mean', function(){
    assert.equal([10, 20, 30].mean(), 20);
  });

  it('median (odd-numbered array)', function(){
    assert.equal([10, 20, 30].median(), 20);
  });

  it('median (even-numbered array)', function(){
    assert.equal([10, 10, 30, 40, 50, 60, 70, 70].median(), 45);
  });

  it('mode (one)', function(){
    assert.deepEqual([10, 20, 20, 30].mode(), {'2': ['20']});
  });

  it('mode (many)', function(){
    assert.deepEqual([10, 20, 30, 30, 30, 40, 40, 40, 50].mode(), {'3': ['30', '40']});
  });

});
