"use strict";

window.addEventListener("load", function() {
  console.log("interrobang inject on load:",
              interrobangInjectOnLoad("JavaScript"));

  console.log("interrobang inject on run:",
              interrobangInjectOnRun(exclaim, question, "JavaScript"));
});
