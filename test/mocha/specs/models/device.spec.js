define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/device");
    
    // Test that the module exists.
    describe("models/device", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.device = new Module();
        });
        
        after(function () {
            this.device = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.device.get("line")).to.be.null;
                expect(this.device.get("module_id")).to.be.null;
                expect(this.device.get("owner")).to.be.null;
                expect(this.device.get("wing")).to.be.null;
                expect(this.device.get("zone_id")).to.be.null;
                expect(this.device.get("state")).to.be.null;
                expect(this.device.get("status")).to.be.null
            });
        });
    });
});
