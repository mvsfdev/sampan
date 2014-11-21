define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/polyline");
    var Constants = require("modules/constants");
    var Coords = require("modules/collections/coords");

    // Test that the module exists.
    describe("models/polyline", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.polyline = new Module();
        });
        
        after(function () {
            this.polyline = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.polyline.get("title")).to.be.ok;
                expect(this.polyline.get("coords")).to.be.ok;
                expect(this.polyline.get("pattern")).to.be.ok;
            });
        });
    });
});
