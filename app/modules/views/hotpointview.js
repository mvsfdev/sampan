define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var HotpointView = Backbone.View.extend({
        initialize: function(options) {
            this.board = options.board;
            this.shape = options.board.circle();
            this.nth = options.nth || 0;
            this.figure = options.figure;
            var ary = this.figure.getNthXY(this.nth);
            this.x = ary[0];
            this.y = ary[1];
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();
            
            this.listenTo(this.figure,"translate",this.translate);
            this.listenTo(this.figure,"destroy",this.removed);
            this.enableDrag();
        },

        removed: function() {
            this.remove();
        },

        renderShape: function(x,y) {
            this.shape.attr({
                cx : x,
                cy : y,
                r : Constants.hotpoint.r
            });
        },

        renderAttrs: function() {
            if(this.nth === 0) {
                this.shape.attr(Constants.hotpoint.start);
            }
            else{
                this.shape.attr(Constants.hotpoint.end);
            }
        },
        
        render: function() {
            var ary = this.figure.getNthXY(this.nth);
            this.x = ary[0];
            this.y = ary[1];
            this.renderShape(this.x,this.y);
            this.renderAttrs();
            this.translate(this.figure.x,this.figure.y);
        },
        
        translate: function(x,y) {
            this.shape.transform("t" + x  + "," + y);
        },

        enableDrag : function() {
            this.shape.data("self",this);
            this.shape.drag(this.dragmove,this.dragstart,this.dragup);
        },

        dragstart: function() {
            this.dx = this.dy = 0;
            var self = this.data("self");
        },
        
        dragmove: function(dx,dy) {
            var self = this.data("self");
            this.dx = dx;
            this.dy = dy;
            var x = self.x + dx,
                y = self.y + dy;
            self.renderShape(x,y);

            self.figure.setNthXY(self.nth,x,y);

        },
        
        dragup: function() {
            var self = this.data("self");
            self.x += this.dx;
            self.y += this.dy;
            self.figure.setNthXY(self.nth,self.x,self.y);
            self.figure.setModelCoords();
            this.dx = this.dy = 0;
        },

        update: function() {
            
        }
    });

    module.exports = HotpointView;

});
