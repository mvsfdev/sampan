define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/views/point");
    var Point = require("modules/models/point");
    var Raphael = require("raphael");
    var Constants = require("modules/constants");


    // Test that the module exists.
    describe("views/point", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function (){
            var board = Raphael(0,0,1920,1080);
            //this.point = new Point();

            this.view = new Module(board);
            //console.log(this.view.el);
        });

        after(function() {
            this.view = null;
        });

        describe("'view' by default", function() {
            it("has default value", function() {
                expect(this.view.$el.attr("cx")).to.be.equal('20');
                expect(this.view.$el.attr("cy")).to.be.equal('90');
                expect(this.view.$el.attr("r")).to.be.equal(Constants.point.radius.toString());
            });
            // it("is remove point model", sinon.test(function() {
            //     this.spy(this.view, "remove");
            //     this.view.model.trigger("destory");
            //     expect(this.view.remove).to.be.calledOnce;
            // }));
        });
        
        
    });
});
