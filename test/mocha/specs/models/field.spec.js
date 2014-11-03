define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/field");
    
    // Test that the module exists.
    describe("models/field", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.field = new Module();
        });
        
        after(function () {
            this.field = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.field.get("line")).to.be.null;
                expect(this.field.get("field_id")).to.be.null;
                expect(this.field.get("owner")).to.be.null;
                expect(this.field.get("wing")).to.be.null;
                expect(this.field.get("location")).to.be.null;
                expect(this.field.get("zone_id")).to.be.null;
                expect(this.field.get("state")).to.be.null;
                expect(this.field.get("status")).to.be.null
            });
        });
  });
});
