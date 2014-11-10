define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");

    var IconView = FigureView.extend({
        initialize: function(options) {
            this.shape = options.canvas.paper.path();
            this.el = this.shape;

            this.renderBackground();
            this.renderForeground();
            this.render_attrs();

            this.listenTo(this.model, "change:svg_attrs", this.renderBackground, this);
            this.listenTo(this.model, "change:highlight", this.changeHighlight(), this);
        },
        
        renderForeground: function() {
            this.shape.attr({
                "path": this.model.get("foreground")
            });
        },

        renderBackground: function() {
            this.shape.attr({
                "path": this.model.get("Background"),
                "title": this.model.get("title")
            });

            this.glow = this.shape.glow({
                "color": Constants.highlight.color,
                "width": Constants.highlight.width
            });
        },

        render_attrs: function() {
            this.shape.attr({
                "stroke": this.model.get("svg_attrs").stroke,
                "stroke-width": Constants.polygon.base.stroke_width
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
    
    module.exports = IconView;

});
