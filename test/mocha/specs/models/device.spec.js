define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/models/device");

  // Test that the module exists.
  describe("models/device", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});