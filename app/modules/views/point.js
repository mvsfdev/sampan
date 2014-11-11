define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var FigureView = require("modules/views/figure");
    var Constants = require("modules/constants");
    var Point = require("modules/models/point");
    ///var Raphael = require("raphael");

    var PointView = FigureView.extend({
        initialize: function(board) {
            this.constructor.__super__.initialize.apply(this, [board]);
            this.model = new Point();
            //this.shape = options.canvas.paper.circle();
            //this.el = this.shape;
            this.listenTo(this.model, "change:svg_attrs", this.render, this);
            this.listenTo(this.model, "destory", this.remove, this);
            this.render(board);
        },
        
        remove: function() {
            this.view.remove();
        },
        
        render: function(board) {
            var cx =  this.model.get("position").x,
                cy =  this.model.get("position").y,
                r =  this.model.get("r");
            this.shape = board.circle(cx,cy,r);
            this.el = this.shape.node;
            this.$el = $(this.shape.node);
            //this.shape.drag(this.dragstart, this.dragmove, this.dragup);
            this.shape.attr(this.model.get("svg_attrs"));
        }
    });

    module.exports = PointView;
    
});
