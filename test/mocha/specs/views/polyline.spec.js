define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/views/polyline");
    
    // Test that the module exists.
    describe("views/polyline", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        describe("views/polyline", function() {
            it("should exist", function() {
                expect(Module).to.exist;
            });
            before(function (){
                this.view = new Module();
            });
            
            after(function() {
                this.view = null;
            });
        });     
        
        
    });
});
