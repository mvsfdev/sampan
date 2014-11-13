define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");
    var fihure = require("modules/models/figure");

    var FigureView = Backbone.View.extend({
        initialize: function(options) {
            this.shape = this.model.getElement(options.paper);
            this.shape.attr("title", this.model.get("title"));
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();
            
            this.shape.drag(this.move,this.up);
            this.model.on("change", this.render, this);
            var self = this;
        },

        renderShape: function() {
            this.shape.attr(this.model.getShape());
        },

        renderAttrs: function() {
            this.shape.attr(this.model.getAttrs());
        },

        render: function() {
            this.renderShape();
            this.renderAttrs();
        },


        move: function (dx,dy) {
            //this.update(dx - (this.dx || 0), dy - (this.dy || 0));
            this.dx = dx;
            this.dy = dy;


            // var scale_x = this.model.get("scale_x"),
            //     scale_y = this.model.get("scale_y"),
            //     x0 = this.model.get("x") / scale_x,
            //     y0 = this.model.get("y") / scale_y,
                
	    //     X = x0 + dx,
            //     Y = y0 + dy;
	    // var x1 = Math.round(X / scale_x),
	    //     y1 = Math.round(Y / scale_y);
            // this.model.set({"x" : x1,
            //                 "y" : y1
            //                });
            //console.log(this.model.get("x"));
            //console.log(2);
            //console.log((dx + "," + dy));
            self.update_x();
        },
        
        up: function () {
            this.dx = this.dy = 0;
            console.log(9);
        },
        
        update_x :  function (x, y){
            var scale_x = this.model.get("scale_x"),
                scale_y = this.model.get("scale_y"),
                x0 = this.model.get("x") / scale_x,
                y0 = this.model.get("y") / scale_y,
                
	        X = x0 + x,
                Y = y0 + y;
	    var x1 = Math.round(X / scale_x),
	        y1 = Math.round(Y / scale_y);
            this.model.set({"x" : x1,
                            "y" : y1
                           });
            console.log(this.model.get("x"));
            console.log(2);
        },
        

        dragstart: function(){
        },
        
        dragmove: function(dx,dy){
        },
        
        dragup: function(){
        }
        
    });
    
    module.exports = FigureView;
});
