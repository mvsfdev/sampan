define(function(require, exports, module) {
    "use strict";
    
    // External dependencies.
    var Backbone = require("backbone");
    var Point = require("modules/models/point");
    var Polyline = require("modules/models/polyline");
    var Polygon = require("modules/models/polygon");
    var Icon = require("modules/models/icon");

    var FigureView = require("modules/views/figure");

    var Raphael = require("raphael");
    var Constants = require("modules/constants");

    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        
        index: function() {
            var paper = new Raphael("canvas",1920,1080);

            var point = new Point();
            this.pointView = new FigureView({paper : paper,model : point});
            this.pointView.model.setState("current");

            var polyline = new Polyline();
            this.polylineView = new FigureView({paper : paper,model : polyline});
            this.polylineView.model.setState("secured");

            var polygon = new Polygon();
            this.polygonView = new FigureView({paper : paper, model : polygon});

            var icon = new Icon();
            this.iconView = new FigureView({paper : paper, model : icon});

            console.log("Welcome to your / route.");
        }
    });
});
