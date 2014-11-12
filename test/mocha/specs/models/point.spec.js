define(function(require, exports, module) {
    "use strict";

    var Module = require("modules/models/point");
    var Constants = require("modules/constants");
    
    // Test that the module exists.
    describe("models/point", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.point = new Module();
        });
        
        after(function () {
            this.point = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.point.get("scale_x")).to.be.ok;
                expect(this.point.get("scale_y")).to.be.ok;
                expect(this.point.get("id")).to.be.ok;
                expect(this.point.get("title")).to.be.ok;
                expect(this.point.get("highlight")).to.be.null;
                expect(this.point.get("configure")).to.be.null;
                expect(this.point.get("r")).to.be.equal(5);
                
                //expect(this.point.get("svg_attrs")).to.be.null;
                //expect(this.point.get("svg_attrs")).to.be.equal(Constants.point.current_alarm);
            });
        });
        
  });
});
