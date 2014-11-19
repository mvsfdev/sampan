define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var FigureView = require("modules/views/newfigure");

    var PolylineView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
        },
        
        getSVG: function() {

            return  Constants.polyline;
        },

        getShape: function(board) {

            return board.paper.path();
        },
        
        drawPath: function(dx,dy) {
            var pattern = this.model.get("pattern"),
                off_x = dx || 0,
                off_y = dy || 0,
                x = this.model.get("x"),
                y = this.model.get("y"),
                coordsAry = this.coords,
                path = "";
            console.log(coordsAry);
            switch(pattern){
            case "polyline": 
                
                off_x /= this.scale_x;
                off_y /= this.scale_y;
                
                if (coordsAry.length > 0) {
                    path = "M" + x * this.scale_x + "," + y * this.scale_y; 
                    for ( var i = 0; i < coordsAry.length; i+=2){
                        path += "L" + (coordsAry[i] + off_x) * this.scale_x + "," + 
                            (coordsAry[i+1] + off_y) * this.scale_y  + " ";
                        coordsAry[i] = coordsAry[i] + off_x;
                        coordsAry[i+1] = coordsAry[i+1] + off_y;
                    }
                }
                this.shape.attr({path : path});
                break;
            default:
                break;
            }
        }

        
    });
    
    module.exports = PolylineView;
});
