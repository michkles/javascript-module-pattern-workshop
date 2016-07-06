var assert = require('chai').assert;

var interrobangInjectOnLoad = require("../../interrobang-inject-on-load").interrobangInjectOnLoad;

var question = require("../../question").question;
var exclaim = require("../../exclaim").exclaim;
var interrobangInjectOnRun = require("../../interrobang-inject-on-run").interrobangInjectOnRun;

describe("interrobangInjectOnLoad", function() {
  it("should add two question marks and an exclamation mark to passed string", function() {
    assert.equal(interrobangInjectOnLoad("hello"), "hello??!");
  });
});

describe("interrobangInjectOnRun", function() {
  it("should add two question marks and an exclamation mark to passed string", function() {
    assert.equal(interrobangInjectOnRun(exclaim, question, "hello"), "hello??!");
  });
});
