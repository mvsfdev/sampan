define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");


    var Figure = Backbone.Model.extend({
	defaults: {
            position: null,
            scale_x: null,
            scale_y: null,
            id: " ",
            title: "alarm",
            highlight: null,
            svg_attrs: null,
            configure: null,
            state: " "
	},

        // for drag
        move: function(dx, dy) {
            this.update(dx - (this.dx || 0), dy - (this.dy || 0));
            this.dx = dx;
            this.dy = dy;
        },
        
        up: function() {
            this.dx = this.dy = 0;
        },

        drag_controls_update: function (x, y){
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            var x0 = Math.round(X / this.get("scale_x")),
                y0 = Math.round(Y / this.get("scale_y"));
            
            this.set("position",{"x": x0, "y": y0});
            
            //this.drag(move, up);
            this.click_mod(this.model);
            return true;
        }

        
        
    });
    module.exports = Figure;
});
