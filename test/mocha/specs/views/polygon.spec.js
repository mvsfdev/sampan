define(function(require, exports, module) {
    "use strict";

    var Module = require("modules/views/polygon");

    // Test that the module exists.
    describe("views/polygon", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function (){
            this.view = new Module();
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
