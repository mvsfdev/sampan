define(function(require, exports, module) {
    "use strict";

    var PolygonView = require("modules/views/polygon");
    var Polygon = require("modules/models/polygon");
    var Raphael = require("raphael");
    var Constants = require("modules/constants");

    // Test that the module exists.
    describe("views/polygon", function() {
        it("should exist", function() {
            expect(PolygonView).to.exist;
        });
        before(function (){
            var paper = Raphael(0,0,1920,1080);
            var model = new Polygon();
            this.view = new PolygonView({paper : paper, model : model});
        });
        
        after(function() {
            this.view = null;
        });
        

        describe("views/polygon", function() {
            it("should exist function", function() {
                expect(this.view.render).to.exist;
                expect(this.view.changeHighlight).to.exist;

            });
        });
    });
});
