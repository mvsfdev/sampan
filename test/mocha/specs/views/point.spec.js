define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/views/point");
    //var sinon = require("sinon");
    //var sinonChai = require("sinon-chai");
    


    // Test that the module exists.
    describe("views/point", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function (){
            this.view = new Module();
        });

        after(function() {
            this.view = null;
        });

        // describe("'view' by default", function() {
        //     it("is remove point model", sinon.test(function() {
        //         this.spy(this.view, "remove");
        //         this.view.model.trigger("destory");
        //         expect(this.view.remove).to.be.calledOnce;
        //     }));
        // });
        
        
    });
});
