define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/polygon");
    var Coords = require("modules/collections/coords");
    var Constants = require("modules/constants");
    
    // Test that the module exists.
    describe("models/polygon", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.polygon = new Module();
        });
        
        after(function () {
            this.polygon = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.polygon.get("scale_x")).to.be.ok;
                expect(this.polygon.get("scale_y")).to.be.ok;
                expect(this.polygon.get("id")).to.be.ok;
                expect(this.polygon.get("title")).to.be.ok;
                expect(this.polygon.get("highlight")).to.be.null;
                expect(this.polygon.get("svg_attrs")).to.be.ok;
                expect(this.polygon.get("configure")).to.be.null;
                expect(this.polygon.get("coords")).to.be.ok;
                expect(this.polygon.get("fill-opacity")).to.be.equal(Constants.highlight.fill_opacity);
                expect(this.polygon.get("svg_attrs")).to.be.ok;
                
            });
        });
        
        describe("function", function() {
            it("should has function - toPath", function() {
                expect(this.polygon.toPath).to.be.ok;
            });
            it("should has function - setSVG_attrs", function() {
                expect(this.polygon.updateAttrs).to.be.ok;
            });
        });
        
        describe("modification", function() {
            it("should has some values", function() {
                this.polygon.set(
                    "svg_attrs",Constants.polygon.selected);
                expect(this.polygon.get("svg_attrs")).to.be.equal(Constants.polygon.selected);
                
                this.polygon.set(
                    "svg_attrs",Constants.polygon.accessed);
                expect(this.polygon.get("svg_attrs")).to.be.equal(Constants.polygon.accessed);
                
                this.polygon.set(
                    "svg_attrs",Constants.polygon.secured);
                expect(this.polygon.get("svg_attrs")).to.be.equal(Constants.polygon.secured);
                
                this.polygon.set(
                    "svg_attrs",Constants.polygon.failed);
                expect(this.polygon.get("svg_attrs")).to.be.equal(Constants.polygon.failed);
                
                this.polygon.set(
                    "svg_attrs",Constants.polygon.disabled);
                expect(this.polygon.get("svg_attrs")).to.be.equal(Constants.polygon.disabled);
                
            });
        });

    });
});
