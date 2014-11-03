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
                expect(this.icon.get("position")).to.be.null;
                expect(this.icon.get("scale_x")).to.be.null;
                expect(this.icon.get("scale_y")).to.be.null;
                expect(this.icon.get("id")).to.be.null;
                expect(this.icon.get("title")).to.be.null;
                expect(this.icon.get("highlight")).to.be.null;
                expect(this.icon.get("svg_attrs")).to.be.a.object;
                expect(this.icon.get("configure")).to.be.null;
                expect(this.icon.get("background")).to.be.equal(Constants.icon.BOX);
                expect(this.icon.get("foreground")).to.be.null;

            });
        });
        describe("modification", function() {
            it("should has default values", function() {
                this.icon.setIconType("PM");
                expect(this.icon.get("foreground")).to.be.equal(Constants.icon.PM);
            });
        });
        
    });
});
