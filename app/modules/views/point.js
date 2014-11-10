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
            this.shape = options.canvas.paper.circle();
            this.el = this.shape;
            this.listenTo(this.model, "change:svg_attrs", this.render, this);
            this.listenTo(this.model, "destory", this.remove, this);
            this.render();
        },
        
        remove: function() {
            this.view.remove();
        },
        
        render: function() {
            this.el.attr({
                cx: this.model.get("position").x,
                cy: this.model.get("position").y,
                r:  this.model.get("r"),
                "title": this.model.get("title"),
                "svg_attrs": this.model.get("svg_attrs")
            });
        }
    });

    module.exports = PointView;
    
});
