define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/models/segment");

  // Test that the module exists.
  describe("models/segment", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});