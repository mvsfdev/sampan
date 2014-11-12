define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/views/polyline");
    var Raphael = require("raphael");
    //var spy = sinon.spy();
    
    // Test that the module exists.
    describe("views/polyline", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function (){
            var board = Raphael(0,0,1920,1080);
            this.view = new Module(board);
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
