define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/polylines");

  // Test that the module exists.
  describe("views/polylines", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});