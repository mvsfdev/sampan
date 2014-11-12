define(function(require, exports, module) {
    "use strict";
    
    var PolylineView = require("modules/views/polyline");
    var Raphael = require("raphael");
    var Polyline = require("modules/models/polyline");
    var Constants = require("modules/constants");
    
    // Test that the module exists.
    describe("views/polyline", function() {
        it("should exist", function() {
            expect(Polyline).to.exist;
        });
        before(function (){
            var paper = Raphael(0,0,1920,1080);
            var model = new Polyline();
            this.view = new PolylineView({paper : paper, model : model});

        });
        
        after(function() {
            this.view = null;
        });
        

        describe("views/polyline", function() {
            it("should exist function", function() {
                expect(this.view.render).to.exist;
                expect(this.view.changeHighlight).to.exist;

            });
        });
        
    });
});
