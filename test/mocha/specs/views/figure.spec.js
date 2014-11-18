define(function(require, exports, module) {
    "use strict";
    
    var Svg = require("svg");
    //var sinon = require("sinon");
    var Backbone = require("backbone");
    var Module = require("modules/views/figure");
    var Figure = require("modules/models/figure");
    var Polyline = require("modules/models/polyline");
    var Constants = require("modules/constants");

    // Test that the module exists.
    describe("views/figure", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function() {
            var board = Svg(),
                polyline = new Polyline({"x":30,"y": 50});
            this.navigate = sinon.stub();
            this.view = new Module({
            model: polyline, board: board}, {
                router: { navigate: this.navigate } 
            });
        });
        afterEach(function() {
            this.navigate.reset();
        });
        
        after(function() {
            this.view.remove();
        });

        describe("render", function() {
            it("render on model change", sinon.test(function() {

                sinon.stub(this.view);
                this.view.model.trigger("change");
                expect(this.view.render).to.be.calledOnce;

            }));
            
            it("test the render function can be excuted ", sinon.test(function() {
                //sinon.stub(this.view);
                //var renderShape = sinon.spy(this.view.renderShape);
                //this.view.renderShape();
                //expect(renderShape.called).to.be.true;
                //expect(this.view.renderShape).to.be.called;

            }));
        });
        
        
        describe("views/polyline", function() {
            it("should exist", function() {
                expect(Module).to.exist;
                var eventer = _.extend({}, Backbone.Events),
                    spy = sinon.spy();
                // Set up the spy. 
                eventer.on("foo", spy); 
                expect(spy.called).to.be.false;
                eventer.trigger("foo", 42);
                expect(spy.calledOnce).to.be.true; 
                expect(spy.callCount).to.equal(1);
                // Check calling arguments. 
                expect(spy.firstCall.args[0]).to.equal(42); 
                expect(spy.calledWith(42)).to.be.true;
                
            });
        });
        describe("views/polyline", function() {
            it("callback", function() {
                
                var eventer = _.extend({}, Backbone.Events),
                    spy = sinon.spy(this.view.render);
                //spy = sinon.spy(this.view.dragmove);
                expect(spy.called).to.be.false;
                //this.view.model.trigger("change");
                //sinon.assert.notCalled(spy);
                //expect(spy()).to.be.ok;
            //expect(spy.calledOnce).to.be.true; 
                
                //sinon.assert.callCount(spy,1);
                
            });                
        });



    });
});
