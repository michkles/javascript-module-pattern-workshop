var assert = require('chai').assert;
var smiley = require("../../js/smiley").smiley;

describe("smiley", function() {
  it("should return a random smiley like :) or :D", function() {
    // assert.include([':)', ':D', '-D'], smiley('hello??!'))
    assert.equal(sm("hello"), "hello??");
  })
})
