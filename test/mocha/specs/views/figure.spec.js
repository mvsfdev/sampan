define(function(require, exports, module) {
    "use strict";
    
    var Svg = require("svg");
    //var sinon = require("sinon");
    var Backbone = require("backbone");
    var Module = require("modules/views/figureview");
    var Figure = require("modules/models/figure");
    var Polyline = require("modules/models/polyline");
    var Polylineview = require("modules/views/polylineview");
    var Constants = require("modules/constants");

    // Test that the module exists.
    describe("views/figure", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
    });
});
