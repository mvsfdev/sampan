define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/models/coord");

  // Test that the module exists.
  describe("models/coord", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
      before(function(){
          this.coord = new Module();
      });
      after(function(){
          this.coord = null;
      });
      describe("creation", function() {
          it("should has default values",function() {
          expect(this.coord.get("x")).to.be.null;
          expect(this.coord.get("y")).to.be.null;
          });
      });

      describe("modification", function() {
          it("modify default values",function() {
              this.coord.set({
                  x: 30,
                  y: 90
              });
              expect(this.coord.get("x")).to.be.equal(30);
              expect(this.coord.get("y")).to.be.equal(90);
          });
      });
  });
});
