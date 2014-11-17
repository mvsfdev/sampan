define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/polyline");
    var Constants = require("modules/constants");
    var Coords = require("modules/collections/coords");

    // Test that the module exists.
    describe("models/polyline", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.polyline = new Module();
        });
        
        after(function () {
            this.polyline = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.polyline.get("scale_x")).to.be.ok;
                expect(this.polyline.get("scale_y")).to.be.ok;
                expect(this.polyline.get("id")).to.be.ok;
                expect(this.polyline.get("title")).to.be.ok;
                expect(this.polyline.get("highlight")).to.be.null;
                expect(this.polyline.get("svg_attrs")).to.be.ok;
                expect(this.polyline.get("coords")).to.be.ok;
                expect(this.polyline.get("svg_attrs")).to.be.ok;
            });
        });
        describe("function", function() {
            it("should has function", function() {
                expect(this.polyline.getElement).to.be.exist;
                expect(this.polyline.getShape).to.be.exist;
                expect(this.polyline.getAttrs).to.be.exist;
                expect(this.polyline.makeShape).to.be.exist;
                expect(this.polyline.setState).to.be.exist;
                expect(this.polyline.updateAttrs).to.be.exist;
                this.polyline.setState("failed");
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.failed);
                this.polyline.getAttrs();
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.failed);
            });
        });

        describe("modification", function() {
            it("should has some values", function() {
                this.polyline.set(
                    "svg_attrs",Constants.polyline.selected);
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.selected);
                
                this.polyline.set(
                    "svg_attrs",Constants.polyline.accessed);
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.accessed);
                
                this.polyline.set(
                    "svg_attrs",Constants.polyline.secured);
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.secured);
                

                this.polyline.set(
                    "svg_attrs",Constants.polyline.failed);
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.failed);
                
                this.polyline.set(
                    "svg_attrs",Constants.polyline.disabled);
                expect(this.polyline.get("svg_attrs")).to.be.equal(Constants.polyline.disabled);
                
            });
        });

  });
});
