define(function(require, exports, module) {
    "use strict";
    
    var Svg = require("svg");
    //var sinon = require("sinon");
    var Backbone = require("backbone");
    var Module = require("modules/views/iconview");
    var Icon = require("modules/models/icon");

    // Test that the module exists.
    describe("views/icon", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function() {
            var board = new Svg(1920,1080),
                icon = new Icon();
            this.view = new Module({model: icon, 
                                    board: board});
        });
        
        after(function() {
            //this.view.remove();
        });

        describe("render", function() {
            it("render on model change", sinon.test(function() {

                sinon.stub(this.view);
                this.view.model.trigger("change");
                expect(this.view.render).to.be.calledOnce;

            }));
            
        });
    });
});
