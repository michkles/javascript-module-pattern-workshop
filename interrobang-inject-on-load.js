"use strict";

// inject dependencies when module is loaded

(function(exports, question, exclaim) {
  function interrobangInjectOnLoad(string) {
    return exclaim(question(string));
  };

  exports.interrobangInjectOnLoad = interrobangInjectOnLoad;
})(this,
   typeof exports === "undefined" ? question : require("./question").question,
   typeof exports === "undefined" ? exclaim : require("./exclaim").exclaim);
