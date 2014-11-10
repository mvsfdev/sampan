define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");

    var PolylineView = FigureView.extend({
        initialize: function(attrs,options) {
            this.shape = options.canvas.paper.path();
            this.el = this.shape;
            this.render();

            this.listenTo(this.model, "change:svg_attrs", this.render, this);
            this.listenTo(this.model, "change:highlight", this.changeHighlight, this);
            this.listenTo(this.model, "change:path", this.render, this);
        },
        
        render: function() {
            this.shape.attr({
                "path": this.model.toPath(),
                "title": this.model.get("title"),
                svg_attrs: this.model.get("svg_attrs")
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
    
    module.exports = PolylineView;
});
