define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");

    var PolylineView = Backbone.View.extend({

        initialize: function(options) {
            this.shape = options.canvas.paper.path();
            this.shape.attr({
                "stroke": this.model.get("svg_attrs").stroke,
                "stroke-width": this.model.get("svg_attrs").stroke_width
            });

            this.el = this.shape;
            this.listenTo(this.model, "add", this.model.toPath(), this);
            this.listenTo(this.model, "add", this.render(), this);
            this.render();
        },
        
        render: function() {
            this.shape.attr({
                "path": this.model.toPath()
            });
        },

        events: {
            "click" : "selected",
            "mouseover": "sayName"
            
        },
        
        selected: function() {
            this.model.selected();
            this.shape.attr({
                "stroke-width": this.model.get("svg_attrs").stroke_width
            });
        },

        sayName: function(model) {
            var figure = this.el;
            figure.attr({
                title: this.model.get("id")
            });
        }
        
        
    });

    module.exports = PolylineView;
});
