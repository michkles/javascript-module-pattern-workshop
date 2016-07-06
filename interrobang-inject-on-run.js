"use strict";

// inject dependencies when module is run

(function(exports) {
  function interrobangInjectOnRun(exclaim, question, string) {
    return exclaim(question(string));
  };

  exports.interrobangInjectOnRun = interrobangInjectOnRun;
})(this);
