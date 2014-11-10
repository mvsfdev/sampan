define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/figure");
    
    // Test that the module exists.
    describe("models/figure", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });            
        before(function(){
            this.figure = new Module();
        });
        
        after(function () {
            this.figure = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.figure.get("position")).to.be.null;
                expect(this.figure.get("scale_x")).to.be.null;
                expect(this.figure.get("scale_y")).to.be.null;
                expect(this.figure.get("id")).to.be.ok;
                expect(this.figure.get("title")).to.be.ok;
                expect(this.figure.get("highlight")).to.be.null;
                expect(this.figure.get("svg_attrs")).to.be.null;
                expect(this.figure.get("configure")).to.be.null
            });
        });
        describe("modification", function() {
            it("should has change values", function() {
                this.figure.set({
                    //position: {x:20, y:30},
                    scale_x: 1.2,
                    scale_y: 1.3,
                    id: 1,
                    title: "name",
                    highlight: true,
                    svg_attrs: "segment",
                    configure: "seg"
                });

                //expect(this.figure.get("position")).to.be.equal({x:20, y:30});
                expect(this.figure.get("scale_x")).to.be.equal(1.2);
                expect(this.figure.get("scale_y")).to.be.equal(1.3);
                expect(this.figure.get("id")).to.be.equal(1);
                expect(this.figure.get("title")).to.be.equal("name");
                expect(this.figure.get("highlight")).to.be.true;
                expect(this.figure.get("svg_attrs")).to.be.equal("segment");
                expect(this.figure.get("configure")).to.be.equal("seg")
            });

        });
        
        
    });
});
