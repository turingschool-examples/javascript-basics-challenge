const assert = require('chai').assert
const longestString = require('../longest')

it('returns longest string', function() {
  assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples');
  assert.equal(longestString(['water', 'the', 'sjjfjfjfjfjfjfjfjfjffjfj']), 'sjjfjfjfjfjfjfjfjfjffjfj');
});
