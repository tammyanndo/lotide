const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  describe("#tail", () => {
    it("returns ['lighthouse', 'labs'] for ['Yo Yo', 'lighthouse', 'labs']", () => {
      assert.deepEqual(tail(['Yo Yo', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });

});
});
