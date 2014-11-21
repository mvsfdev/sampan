define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var FigureView = require("modules/views/figureview");

    var PointView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
        },
        
        getSVG: function() {

            return  Constants.point;
        },

        getShape: function(board) {

            return board.paper.circle();
        },
        
        drawPath: function(dx,dy) {

            var off_x = dx || 0,
                off_y = dy || 0;
                
            // this.shape.attr({cx : this.x + off_x,
            //                  cy : this.y + off_y,
            //                  r : this.svg.r
            //                 });
            this.shape.attr({r : this.svg.r});
        }
    });
    
    module.exports = PointView;
});
