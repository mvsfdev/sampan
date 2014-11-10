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
                expect(this.polyline.get("position")).to.be.null;
                expect(this.polyline.get("scale_x")).to.be.null;
                expect(this.polyline.get("scale_y")).to.be.null;
                expect(this.polyline.get("id")).to.be.ok;
                expect(this.polyline.get("title")).to.be.ok;
                expect(this.polyline.get("highlight")).to.be.null;
                expect(this.polyline.get("svg_attrs")).to.be.ok;
                expect(this.polyline.get("coords")).to.be.ok;
                expect(this.polyline.get("svg_attrs")).to.be.ok;

            });
        });
        describe("function", function() {
            it("should has function - toPath", function() {
                expect(this.polyline.toPath).to.be.ok;
            });
            it("should has function - setSVG_attrs", function() {
                expect(this.polyline.setSVG_attrs).to.be.ok;
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
