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
        },
        
        renderShape: function() {
            this.shape.attr({
                "path": this.model.get("path"),
                "title": this.model.get("title"),
                "stroke-width": Constants.polyline.width
            });
        },

        renderAttrs: function() {
            this.shape.attr(this.model.get("svg_attrs"));
        },

        render: function() {
            this.renderAttrs();
            this.renderShape();
        }

    });
    
    module.exports = PolylineView;
});
