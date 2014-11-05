define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/icon");

  // Test that the module exists.
  describe("views/icon", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});