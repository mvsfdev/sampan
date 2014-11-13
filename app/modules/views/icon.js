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
            this.constructor.__super__.initialize.apply(this, [options]);
            this.model = options.model;
            this.shape = options.paper.path();
            this.el = this.shape.node;
            this.$el = $(this.shape.node);
            this.render();
            this.shape.transform('t290,190');

            this.listenTo(this.model, "change", this.render, this);
        },

        renderShape: function() {
            var path = this.model.get("background");
            path += this.model.get("foreground");

            this.shape.attr({
                "path": path,

                "title": this.model.get("title"),
                "stroke-width": Constants.icon.width
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
    
    module.exports = IconView;

});
