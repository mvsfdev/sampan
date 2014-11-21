define(function(require, exports, module) {
    "use strict";
    
    var Svg = require("svg");
    //var sinon = require("sinon");
    var Backbone = require("backbone");
    var Module = require("modules/views/pointview");
    var Point = require("modules/models/point");

    // Test that the module exists.
    describe("views/point", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function() {
            var board = new Svg(1920,1080),
                point = new Point();
            this.view = new Module({model: point, 
                                    board: board});
        });
        
        after(function() {
            this.view = null;
        });

        describe("render", function() {
            it("render on model change", sinon.test(function() {

                sinon.stub(this.view);
                this.view.model.trigger("change");
                expect(this.view.render).to.be.calledOnce;

            }));
        });

        describe("callback function", function() {
            it("function can be callback", sinon.test(function() {
                this.view.model.on("drag",function() {this.view.enableDrag();},this);
                this.view.model.trigger("drag");
                expect(this.view.enableDrag).to.be.calledOnce;
                
                this.view.setNthXY();
                expect(this.view.setNthXY).to.be.calledOnce;
                this.view.scaleCoords();
                this.view.calcPath();
                expect(this.view.calcPath).to.be.calledOnce;
                expect(this.view.scaleCoords).to.be.calledOnce;
            }));
        });

        describe("some functions should be exist", function() {
            it("exist",function() {
                expect(this.view.getSVG).to.be.ok;
                expect(this.view.getShape).to.be.ok;
                expect(this.view.scaleCoords).to.be.ok;
                expect(this.view.calcPath).to.be.ok;
                expect(this.view.getModelCoords).to.be.ok;
                expect(this.view.drawPath).to.be.ok;
                expect(this.view.updateState).to.be.ok;
                expect(this.view.render).to.be.ok;
                expect(this.view.setModelCoords).to.be.ok;
                expect(this.view.enableDrag).to.be.ok;
                expect(this.view.dragstart).to.be.ok;
                expect(this.view.dragmove).to.be.ok;
                expect(this.view.dragup).to.be.ok;
                expect(this.view.totalPoint).to.be.ok;
                expect(this.view.getNthXY).to.be.ok;
                expect(this.view.setNthXY).to.be.ok;
            });
        });
    });
});
