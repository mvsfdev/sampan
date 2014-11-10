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
                "position": {x: 20, y: 90},
                "r": Constants.point.radius,
                "state": "current"
            });
        },

        set_state: function() {
            this.set("state", "previous");
            this.setSVG_attrs();
        },
        
        setSVG_attrs: function(model) {
            if (this.get("state") == "current"){
                this.set({
                    "svg_attrs": Constants.point.current_alarm
                });
            }else{this.set({
                "svg_attrs": Constants.point.previous_alarm
            });
                 }
        }        
        
    });
    module.exports = Point;
});
