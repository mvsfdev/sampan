define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");
    var Point = require("modules/models/point");

    var PointView = FigureView.extend({
        initialize: function(board) {
            this.constructor.__super__.initialize.apply(this, [board]);
            this.model = new Point();
            this.shape = board.circle();
            this.el = this.shape.node;
            this.$el = $(this.shape.node);
            this.render();

            this.listenTo(this.model, "change", this.render, this);
            this.listenTo(this.model, "destory", this.removed, this);
        },
        
        removed: function() {
            this.view.remove();
        },
        
        renderShape: function() {
            this.shape.attr({cx :  this.model.get("x"),
                             cy :  this.model.get("y"),
                             r :  this.model.get("r"),
                             title: this.model.get("title")
                            });
        },
        
        renderAttrs: function() {
            this.shape.attr(this.model.get("svg_attrs"));
        },
        

        render: function() {
            this.renderShape();
            this.renderAttrs();
        }
    });

    module.exports = PointView;
    
});
