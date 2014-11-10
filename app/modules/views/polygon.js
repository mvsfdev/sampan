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
            this.shape = options.canvas.paper.path();
            this.el = this.shape;
            this.render_shape();
            this.render_attrs();
            this.listenTo(this.model, "change:svg_attrs", this.render_attrs(), this);
            this.listenTo(this.model, "change:highlight", this.changeHighlight(), this);
        },
        
        render_shape: function() {
            this.shape.attr({
                "path": this.model.toPath(),
                "title": this.model.get("title")
            });

            this.glow = this.shape.glow({
                "color": Constants.highlight.color,
                "width": Constants.highlight.width
            });
        },

        render_attrs: function () {
            this.shape.attr({
                "stroke": this.model.get("svg_attrs").stroke,
                "stroke-width": Constants.polygon.base.stroke_width,
                "fill-opacity": Constants.polygon.base.fill_opacity
            });
        },

        changeHighlight: function(model) {
            if (model.get("highlight")){
                this.glow.show();
            }else{
                this.glow.hide();
            }
        }
    });
    
    module.exports = PolygonView;
    
});
