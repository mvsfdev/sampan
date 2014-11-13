define(function(require, exports, module) {
    "use strict";

    var IconView = require("modules/views/icon");
    var Icon = require("modules/models/icon");
    var Constants = require("modules/constants");
    var Raphael = require("raphael");

    // Test that the module exists.
    describe("views/icon", function() {
        it("should exist", function() {
            expect(IconView).to.exist;
        });
        before(function (){
            var paper = Raphael(0,0,1920,1080);
            var model = new Icon();
            this.view = new IconView({paper : paper, model : model});
        });
        
        after(function() {
            this.view = null;
        });
        

        describe("views/icon", function() {
            it("should exist function", function() {
                expect(this.view.render).to.exist;
            });
        });
    });
});
