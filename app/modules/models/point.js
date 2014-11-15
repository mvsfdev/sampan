define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/figure");
    var Constants = require("modules/constants");

    var Point = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                "x": Constants.point.x,
                "y": Constants.point.y,
                "r": Constants.point.radius,
                "title": "alarm"
            });
            this.setState();
        },

        getElement: function(board) {
            return board.paper.circle();
        },

        getShape: function() {
            return {
                "cx": this.get("x") * this.get("scale_x"),
                "cy": this.get("y") * this.get("scale_y"),
                "r": this.get("r")
            };
        },
        
        getAttrs: function() {
            this.updateAttrs();
            return this.get("svg_attrs");
        },

        setState: function(state) {
            var st = state || "previous";
            this.set("state", st);
            this.updateAttrs();
        },
        
        updateAttrs: function() {
            var state = this.get("state");
            switch(state) {
            case "current":
                this.set("svg_attrs", Constants.point.current_alarm);
                break;
            case "previous": 
                this.set("svg_attrs",Constants.point.previous_alarm);
                break;
                default :
                break;
            }
            
        }
    });

    module.exports = Point;
});

