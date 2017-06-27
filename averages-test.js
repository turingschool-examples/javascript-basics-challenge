const assert = require('chai').assert;
const total  = require('./averages.js');
const mean   = require('./averages.js');
const median = require('./averages.js');
const mode   = require('./averages.js');

var arrayOne   = [1, 2, 3, 4, 5];
var arrayTwo   = [1, 6, 5, 9, 2];
var arrayThree = [4, 4, 4, 4, 4];

// import {area} from 'basicsChallenge';
describe('Calling methods on arrays', () => {
  it("can assert total of arrays correctly", function(){
    assert.equal(arrayOne.total(), 15);
    assert.equal(arrayTwo.total(), 23);
    assert.equal(arrayThree.total(), 20);
  });

  it("can assert mean of arrays correctly", function(){
    assert.equal(arrayOne.mean(), 3);
    assert.equal(arrayTwo.mean(), 4.6);
    assert.equal(arrayThree.mean(), 4);
  });

  it("can assert median of arrays correctly", function(){
    assert.equal(arrayOne.median(), 3);
    assert.equal(arrayTwo.median(), 5);
    assert.equal(arrayThree.median(), 4);
  });

  it("can assert mode of arrays correctly", function(){
    assert.equal(arrayOne.mode()["1"], 1);
    assert.equal(arrayOne.mode()["2"], 1);
    assert.equal(arrayOne.mode()["3"], 1);
    assert.equal(arrayOne.mode()["4"], 1);
    assert.equal(arrayOne.mode()["5"], 1);

    assert.equal(arrayTwo.mode()["1"], 1);
    assert.equal(arrayTwo.mode()["6"], 1);
    assert.equal(arrayTwo.mode()["5"], 1);
    assert.equal(arrayTwo.mode()["9"], 1);
    assert.equal(arrayTwo.mode()["2"], 1);

    assert.equal(arrayThree.mode()["4"], 5);
  });
});
