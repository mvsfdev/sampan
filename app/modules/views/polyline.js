define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");
    var Polyline = require("modules/models/polyline");

    var PolylineView = FigureView.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.shape = options.paper.path();
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();

            this.listenTo(this.model, "change", this.render, this);
            this.listenTo(this.model, "change:highlight", this.changeHighlight, this);
        },
        
        renderShape: function() {
            this.shape.attr({
                "path": this.model.get("path"),
                "title": this.model.get("title"),
                "stroke-width": Constants.polyline.width
            });
            this.glow = this.shape.glow({
                "color": Constants.highlight.color,
                "width": Constants.highlight.width
            }).hide();
        },

        renderAttrs: function() {
            this.shape.attr(this.model.get("svg_attrs"));
        },

        render: function() {
            this.renderAttrs();
            this.renderShape();
        },

        changeHighlight: function(model) {
            if (model.get("highlight")){
                this.glow.show();
            }else{
                this.glow.hide();
            }
        }
    });
    
    module.exports = PolylineView;
});
