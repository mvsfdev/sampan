define(function(require, exports, module) {
    "use strict";

    var Module = require("modules/models/point");
    var Constants = require("modules/constants");
    
    // Test that the module exists.
    describe("models/point", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.point = new Module();
        });
        
        after(function () {
            this.point = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.point.get("title")).to.be.ok;
                expect(this.point.get("pattern")).to.be.ok;
                expect(this.point.get("r")).to.be.equal(Constants.point.radius);
            });
        });
        
    });
});
