define(function(require, exports, module) {
    "use strict";

    var Svg = require("svg");
    var Module = require("modules/views/hotpointview");
    var Polyline = require("modules/models/polyline");
    var PolylineView = require("modules/views/polylineview");
    var FigureView = require("modules/views/figureview");

    // Test that the module exists.
    describe("views/hotpoint", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function() {
            var board = Svg(),
                polyline = new Polyline({"x":30,"y": 50});

            this.polylineview = new PolylineView({model: polyline, 
                                                  board: board
                                                 });
            this.view = new Module({board: board,
                                    figure: this.polylineview
                                   });
        });
        after(function() {
            this.view = null;
        });
        
        describe("the function should be exist", function() {
            it("should exist", function() {
                expect(this.view.renderShape).to.be.ok;
                expect(this.view.renderAttrs).to.be.ok;
                expect(this.view.render).to.be.ok;
                expect(this.view.enableDrag).to.be.ok;
                expect(this.view.dragstart).to.be.ok;
                expect(this.view.dragmove).to.be.ok;
                expect(this.view.dragup).to.be.ok;
            });
        });
        // describe("render", function() {
        //     it("render on model change", sinon.test(function() {
        //         sinon.stub(this.view);
        //         this.view.figure.model.trigger("change");
        //         expect(this.view.renderShape).to.be.calledOnce;
        //     }));
        // });

    });
    
});
