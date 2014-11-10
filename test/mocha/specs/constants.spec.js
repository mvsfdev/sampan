define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/constants");
    
    // Test that the module exists.
    describe("constants", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });

        it("should define some constants - point", function() {
            expect(Module.point.current_alarm.stroke).to.be.equal("yellow");
            expect(Module.point.current_alarm.fill).to.be.equal("red");
            expect(Module.point.previous_alarm.stroke).to.be.equal("red");
            expect(Module.point.previous_alarm.fill).to.be.equal("red");
        });

        it("should define some constants - polyline", function() {
            expect(Module.polyline.selected.stroke_width).to.be.equal(20);
            expect(Module.polyline.normal.stroke_width).to.be.equal(10);
            expect(Module.polyline.accessed.stroke).to.be.equal("yellow");
            expect(Module.polyline.secured.stroke).to.be.equal("green");
            expect(Module.polyline.failed.stroke).to.be.equal("red");
            expect(Module.polyline.disabled.stroke).to.be.equal("gray");
        });

        it("should define some constants - polygon", function() {
            expect(Module.polygon.accessed.stroke).to.be.equal("yellow");
            expect(Module.polygon.accessed.fill).to.be.equal("yellow");
            expect(Module.polygon.secured.stroke).to.be.equal("blue");
            expect(Module.polygon.secured.fill).to.be.equal("blue");
            expect(Module.polygon.failed.stroke).to.be.equal("red");
            expect(Module.polygon.failed.fill).to.be.equal("red");
            expect(Module.polygon.disabled.stroke).to.be.equal("gray");
            expect(Module.polygon.disabled.fill).to.be.equal("gray");
            
        });

        it("should define some constants - icon", function() {
            expect(Module.icon.accessed.stroke).to.be.equal("yellow");
            expect(Module.icon.secured.stroke).to.be.equal("green");
            expect(Module.icon.failed.stroke).to.be.equal("red");
            expect(Module.icon.disabled.stroke).to.be.equal("gray");
        });
    });
    
});
