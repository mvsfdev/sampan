define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var FigureView = require("modules/views/newfigure");

    var PolygonView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
        },
        
        getSVG: function() {

            return  Constants.polygon;
        },

        getShape: function(board) {

            return board.paper.path();
        },
        
        drawPath: function() {
            this.shape.attr({path : this.calcPath() + "Z"});
        }
    });
    
    module.exports = PolygonView;
});
