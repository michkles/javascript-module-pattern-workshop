var assert = require('chai').assert;

var smiley = require("../../js/smiley").smiley;
var question = require("../../js/question").question;
var exclaim = require("../../js/exclaim").exclaim;
var interrobangsmiley = require("../../js/interrobangsmiley").interrobangsmiley;

describe("interrobang", function() {
  it("should add two question marks and an exclamation mark to passed string", function() {
    assert.equal(interrobangsmiley(exclaim, question, "hello", smiley), "hello??!:)");
  });
});
