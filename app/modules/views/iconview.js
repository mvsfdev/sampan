define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var FigureView = require("modules/views/newfigure");

    var IconView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
        },
        
        getSVG: function() {

            return  Constants.icon;
        },

        getShape: function(board) {

            return board.paper.path();
        },
        
        drawPath: function(dx,dy) {
            var off_x = dx || 0,
                off_y = dy || 0,
                coordsAry = this.coords,
                path = "",
                icon = "",
                tp;
            path += this.svg.BOX;
                
            tp = this.model.get("mod_type");
            switch(tp) {
            case "PM":
                icon = this.svg.PM;
                break;
            case "RM":
                icon = this.svg.RM;
                break;
            case "LU":
                icon = this.svg.LU;
                break;
            case "TU":
                icon = this.svg.TU;
                break;
            default:
                break;
            }
            path += icon;
            this.shape.attr({path : path});
            //this.shape.transform("t" + (this.x + off_x) + "," + (this.y + off_y));
        }
    });
    
    module.exports = IconView;
});
