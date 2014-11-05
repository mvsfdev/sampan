define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/figure");

  // Test that the module exists.
  describe("views/figure", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});