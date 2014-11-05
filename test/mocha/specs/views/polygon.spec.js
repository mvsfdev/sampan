define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/polygon");

  // Test that the module exists.
  describe("views/polygon", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
  });
});