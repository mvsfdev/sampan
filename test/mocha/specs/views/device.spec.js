define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/device");

  // Test that the module exists.
  describe("views/device", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});