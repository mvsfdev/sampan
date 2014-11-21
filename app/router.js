define(function(require, exports, module) {
    "use strict";
    
    // External dependencies.
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");

    var Constants = require("modules/constants");
    var Polyline = require("modules/models/polyline");
    var PolylineView = require("modules/views/polylineview");
    var Polygon = require("modules/models/polygon");
    var PolygonView = require("modules/views/polygonview");
    var Point = require("modules/models/point");
    var PointView = require("modules/views/pointview");
    var Icon = require("modules/models/icon");
    var IconView = require("modules/views/iconview");
    var HotpointView = require("modules/views/hotpointview");

    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        
        index: function() {
            var board = new Svg(1920,1080);
            //var board = new Svg("100%","100%");

            this.polyline = new Polyline();
            this.polylineView = new PolylineView({board : board,
                                                  model : this.polyline
                                                 });

            this.polygon = new Polygon();
            this.polygonView = new PolygonView({board : board,
                                                model : this.polygon
                                               });
            
            var icon = new Icon();
            this.iconView = new IconView({board : board,
                                          model : icon
                                         });
            
            var point = new Point();
            this.pointView = new PointView({board : board,
                                            model : point
                                           });

            var polyline_points = this.polylineView.totalPoint();
            this.hot = new Array(polyline_points.length/3);
            for(var i = 0; i < polyline_points.length / 3; i++){
                this.hot[i] = new HotpointView({board : board, 
                                                figure: this.polylineView,
                                                nth: i
                                               });
            }
            var polygon_points = this.polygonView.totalPoint();
            this.hot = new Array(polygon_points.length/3);
            for(var g = 0; g < polygon_points.length / 3; g++){
                this.hot[g] = new HotpointView({board : board, 
                                                //model : this.polygon,
                                                figure: this.polygonView,
                                                nth: g
                                               });
            }            

            //var coords = [10,20,199,88,79,38];
             //this.polyline.setCoords(coords);
            // this.polygon.setCoords(coords);
            // console.log(this.polyline.get("coords"));

            // coords = [10,20,99,18,9,8];
            // var x = new Array();
            // this.polyline.getCoords(x);
            // //this.polylineView.render();
            // console.log(this.polyline.get("coords"));
            // console.log("x: " ,x);
            console.log("Welcome to your / route.");
        }
    });
});


