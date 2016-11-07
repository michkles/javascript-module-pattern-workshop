"use strict";

(function(exports) {
  function smiley(string) {
    var items = [':)', ':D', '-D'];
    var item = items[Math.floor(Math.random()*items.length)];
    return string + item;
  };
  exports.smiley = smiley;
})(this);
