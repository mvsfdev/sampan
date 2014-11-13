define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");

    var PointView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.model = options.model;
            this.shape = options.paper.circle();
            this.shape.attr("title", this.model.get("title"));
            this.el = this.shape.node;
            this.$el = $(this.shape.node);
            this.render();
            this.drag();
            this.listenTo(this.model, "change", this.render, this);
            this.listenTo(this.model, "destory", this.removed, this);
        },
        
        removed: function() {
            this.view.remove();
        },
        
        renderShape: function() {
            this.shape.attr({"cx":  this.model.get("x") * this.model.get("scale_x"),
                             "cy":  this.model.get("y") * this.model.get("scale_y"),
                             "r":  this.model.get("r") 
                            });
        },
        
        renderAttrs: function() {
            this.shape.attr(this.model.get("svg_attrs"));
        },
        

        render: function() {
            this.renderShape();
            this.renderAttrs();
        },

        drag: function() {
            var self = this;
             function move(dx, dy) {
                 self.update(dx - (self.dx || 0), dy - (self.dy || 0));
                 self.dx = dx;
                 self.dy = dy;
             }
            
             function up() {
                 self.dx = self.dy = 0;
             }

            this.update = function (x, y){
                var X = this.shape.attr("cx") + x,
                    Y = this.shape.attr("cy") + y,
                    scale_x = this.model.get("scale_x"),
                    scale_y = this.model.get("scale_y");
                var x0 = Math.round(X / scale_x),
                    y0 = Math.round(Y / scale_y);
                this.shape.attr({cx: X, cy: Y});
                this.model.set({
                    "x": x0,
                    "y": y0
                });
                console.log(this.model.get("x"));
            };
            
            this.shape.drag(move,up);
        }
    });

    module.exports = PointView;
    
});
