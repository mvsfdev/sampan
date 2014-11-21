define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/polygon");
    var Coords = require("modules/collections/coords");
    var Constants = require("modules/constants");
    
    // Test that the module exists.
    describe("models/polygon", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.polygon = new Module();
        });
        
        after(function () {
            this.polygon = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.polygon.get("title")).to.be.ok;
                expect(this.polygon.get("pattern")).to.be.ok;
                expect(this.polygon.get("coords")).to.be.ok;
                
            });
        });
    });
});
