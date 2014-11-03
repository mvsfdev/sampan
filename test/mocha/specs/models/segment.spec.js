define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/models/segment");
    
    // Test that the module exists.
    describe("models/segment", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
            this.segment = new Module();
        });
        
        after(function () {
            this.segment = null;
        });
        describe("creation", function() {
            it("should has default values", function() {
                expect(this.segment.get("line")).to.be.null;
                expect(this.segment.get("segment_id")).to.be.null;
                expect(this.segment.get("owner")).to.be.null;
                expect(this.segment.get("wing")).to.be.null;
                expect(this.segment.get("start_sub")).to.be.null;
                expect(this.segment.get("end_sub")).to.be.null;
                expect(this.segment.get("zone_id")).to.be.null;
                expect(this.segment.get("state")).to.be.null;
                expect(this.segment.get("status")).to.be.null
            });
        });
    });
});
