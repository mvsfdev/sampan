define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var fihure = require("modules/models/figure");

    var NewFigureView = Backbone.View.extend({
        initialize: function(options) {
            this.scale_x = Constants.figure.scale_x;
            this.scale_y = Constants.figure.scale_y;
            this.coords = this.model.get("coords");
            this.svg = this.getSVG();
            this.shape = this.getShape(options.board);
            this.shape.attr("title", this.model.get("title"));
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();
        },

        events: {
            "click": "setShadow"
        },
        
        getSVG: function() {
        },

        getShape: function(board) {
        },
        
        drawPath: function(dx,dy) {
        },

        updateState: function() {
            var state = this.model.get("state");
            switch(state) {
            case "normal":
                this.shape.attr(this.svg.normal);

                break;
            default:
                break;
            }
        },
        
        render: function() {
            this.drawPath();
            this.updateState();
        }

        
    });
    
    module.exports = NewFigureView;
});
