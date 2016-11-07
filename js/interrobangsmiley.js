"use strict";

(function(exports) {
  function interrobangsmiley(exclaim, question, string, smiley) {
    return smiley(exclaim(question(string)));
  };

  exports.interrobangsmiley = interrobangsmiley;
})(this);
