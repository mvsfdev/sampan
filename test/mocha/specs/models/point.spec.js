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
                expect(this.point.get("x")).to.be.equal(Constants.point.x);
                expect(this.point.get("y")).to.be.equal(Constants.point.y);
                expect(this.point.get("scale_x")).to.be.ok;
                expect(this.point.get("scale_y")).to.be.ok;
                expect(this.point.get("id")).to.be.ok;
                expect(this.point.get("title")).to.be.ok;
                expect(this.point.get("highlight")).to.be.null;
                expect(this.point.get("configure")).to.be.null;
                expect(this.point.get("r")).to.be.equal(Constants.point.radius);
                
                //expect(this.point.get("svg_attrs")).to.be.null;
                //expect(this.point.get("svg_attrs")).to.be.equal(Constants.point.current_alarm);
            });
        });
        
        describe("function", function() {
            it("should has function", function() {
                expect(this.point.getElement).to.be.exist;
                expect(this.point.getShape).to.be.exist;
                expect(this.point.getAttrs).to.be.exist;
                expect(this.point.setState).to.be.exist;
                expect(this.point.updateAttrs).to.be.exist;
                this.point.setState("current");
                expect(this.point.get("svg_attrs")).to.be.equal(Constants.point.current_alarm);
                this.point.getAttrs();
                expect(this.point.get("svg_attrs")).to.be.equal(Constants.point.current_alarm);
            });
        });
    });
});
