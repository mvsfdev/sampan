define(function(require, exports, module) {
    "use strict";
    
    // External dependencies.
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Point = require("modules/models/point");
    var Polyline = require("modules/models/polyline");
    var Polygon = require("modules/models/polygon");
    var Icon = require("modules/models/icon");
    var FigureView = require("modules/views/figure");
    var Svg = require("svg");
    var Constants = require("modules/constants");

    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        
        index: function() {
            var board = new Svg(1920,1080);
            //var board = new Svg("100%","100%");

            var shadow = board.filter(Svg.filter.shadow(0,2,"yellow",9));
            var no_shadow = board.filter(Svg.filter.shadow(0,2,"white",9));

            var point = new Point();
            this.pointView = new FigureView({board : board, model : point, shadow : shadow, no_shadow : no_shadow});
            this.pointView.model.setState("current");

            var polyline = new Polyline();
            this.polylineView = new FigureView({board : board,model : polyline, shadow : shadow, no_shadow : no_shadow});
            this.polylineView.model.setState("secured");

            var polygon = new Polygon();
            this.polygonView = new FigureView({board : board, model : polygon, shadow : shadow, no_shadow : no_shadow});

            var icon = new Icon();
            this.iconView = new FigureView({board : board, model : icon, shadow : shadow, no_shadow : no_shadow});

            console.log("Welcome to your / route.");
        }
    });
});
