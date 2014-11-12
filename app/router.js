define(function(require, exports, module) {
    "use strict";
    
    // External dependencies.
    var Backbone = require("backbone");
    var Point = require("modules/models/point");
    var Polyline = require("modules/models/polyline");
    var Polygon = require("modules/models/polygon");
    var Icon = require("modules/models/icon");

    var PointView = require("modules/views/point");
    var PolylineView = require("modules/views/polyline");
    var PolygonView = require("modules/views/polygon");
    var IconView = require("modules/views/icon");
    var Raphael = require("raphael");
    var Constants = require("modules/constants");

    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        
        index: function() {
            var paper = new Raphael(0,0,1920,1080);

            var point = new Point();
            this.view = new PointView({paper : paper,model : point});
            this.view.model.setState("current");

            var polyline = new Polyline();
            this.view = new PolylineView({paper : paper, model : polyline});

            var polygon = new Polygon();
            this.view = new PolygonView({paper : paper, model : polygon});

            
            var icon = new Icon();
            this.view = new IconView({paper : paper, model : icon});

            console.log("Welcome to your / route.");
        }
    });
});
