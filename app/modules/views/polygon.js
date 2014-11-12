define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");

    var PolygonView = FigureView.extend({
        initialize: function() {
            // this.shape = options.canvas.paper.path();
            // this.el = this.shape;
            // this.render();
            // this.listenTo(this.model, "change:svg_attrs", this.render, this);
            // this.listenTo(this.model, "change:highlight", this.changeHighlight, this);
        },


        render: function () {
            this.shape.attr({
                "path": this.model.get("path"),
                "title": this.model.get("title"),

                "stroke": this.model.get("svg_attrs").stroke,
                "stroke-width": Constants.polygon.base.stroke_width,
                "fill-opacity": Constants.polygon.base.fill_opacity
            });

            this.glow = this.shape.glow({
                "color": Constants.highlight.color,
                "width": Constants.highlight.width
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
