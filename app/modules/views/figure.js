define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");

    var FigureView = Backbone.View.extend({
        initialize: function(options) {
            this.drag_controls = options.paper.circle();
        },

        events: {
            "mouseover": "sayName"
        },
        
        sayName: function(model) {
            
        },
        
        // edit event trigger this function
        drag_point: function() {
            var x = this.get("position").x * this.get("scale_x"),
                y = this.get("position").y * this.get("scale_y");
            
            this.drag_controls.attr({
                "cx" : x,
                "cy" : y,
                "r" : 5,
                "fill" : "yellow",
                "stroke" : "red",
                "stroke-width": 2
            });
            this.model.transform('t'+ x + ','+ y);
        }
        
    });
    module.exports = FigureView;
});
