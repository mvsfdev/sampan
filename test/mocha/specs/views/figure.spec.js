define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/views/figure");
    var Figure = require("modules/models/figure");
    var Raphael = require("raphael");
    var Point = require("modules/models/point");

    // Test that the module exists.
    describe("views/figure", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function() {
            var paper = Raphael(0,0,1920,1080),
                point = new Point();
            this.view = new Module({paper : paper, model : point});
        });
        after(function() {
            this.view = null;
        });
        
    });
});
