define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/views/polyline");
    var spy = sinon.spy();
    
    // Test that the module exists.
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
        describe("views/polyline", function() {
            it("should exist", function() {
                expect(Module).to.exist;
            });
            before(function (){
                this.view = new Module({canvas : '#div'});
            });
            
            after(function() {
                this.view = null;
            });
        });     
        
        
    });
});
