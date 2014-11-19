define(function(require, exports, module) {
    "use strict";
    
    // External dependencies.
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");

    var Constants = require("modules/constants");
    var Polyline = require("modules/models/newpolyline");
    var PolylineView = require("modules/views/polylineview");

    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        
        index: function() {
            var board = new Svg(1920,1080);
            //var board = new Svg("100%","100%");

            var polyline = new Polyline();
            this.polylineView = new PolylineView({board : board,
                                                   model : polyline
                                                  });

            console.log("Welcome to your / route.");
        }
    });
});
