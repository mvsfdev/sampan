define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/icon");
    var Constants = require("modules/constants");

    // Test that the module exists.
    describe("models/icon", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.icon = new Module();
        });
        
        after(function () {
            this.icon = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.icon.get("title")).to.be.ok;
                expect(this.icon.get("mod_type")).to.be.ok;
                expect(this.icon.get("pattern")).to.be.ok;

            });
        });
    });
});
