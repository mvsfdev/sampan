define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/segment");

  // Test that the module exists.
  describe("views/segment", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});