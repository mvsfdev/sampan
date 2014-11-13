define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");

    var PolygonView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.model = options.model;
            this.shape = options.paper.path();
            this.el = this.shape.node;
            this.$el =$( this.shape.node);
            this.render();
            this.drag();
            this.listenTo(this.model, "change", this.render, this);
        },

        renderShape: function () {
            this.shape.attr({
                "path": this.model.get("path"),

                "title": this.model.get("title"),
                "stroke-width": Constants.polygon.base.stroke_width,
                "fill-opacity": Constants.polygon.base.fill_opacity
            });

        },

        renderAttrs: function () {
            this.shape.attr(this.model.get("svg_attrs"));
        },

        render: function () {
            this.renderShape();
            this.renderAttrs();
            this.transform();
        },
        
        transform: function() {
            var scale_x = this.model.get("scale_x"),
                scale_y = this.model.get("scale_y"),
                x = this.model.get("x") * scale_x,
                y = this.model.get("y") * scale_y;
            this.shape.transform("t" + x + "," + y);
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
                var scale_x = this.model.get("scale_x"),
                    scale_y = this.model.get("scale_y"),
                    x1 = this.model.get("x") * scale_x,
                    y1 = this.model.get("y") * scale_y,
                    X = x1 + x,
                    Y = y1 + y;
                var x0 = Math.round(X / scale_x),
                    y0 = Math.round(Y / scale_y);
                //this.shape.attr({cx: X, cy: Y});
                this.model.set({
                    "x": x0,
                    "y": y0
                });
                console.log(this.model.get("x"));
            };
            
            this.shape.drag(move,up);
        }
    });
    
    module.exports = PolygonView;
    
});

