define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var NewHotpointView = Backbone.View.extend({
        initialize: function(options) {
            
            this.board = options.board;
            this.shape = options.board.circle();
            this.model = options.model;
            this.nth = options.nth || 0;
            this.figure = options.figure;
            var ary = this.figure.getNthXY(this.nth);
            this.x = ary[0];
            this.y = ary[1];
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();
            
            this.model.on("change", this.render, this);
            this.figure.on("change:this.coords", this.render,this);
            this.enableDrag();
        },

        renderShape: function() {
            this.shape.attr({
                cx : this.x,
                cy : this.y,
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
            this.renderShape();
            this.renderAttrs();
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
            self.x += dx - (this.dx || 0);
            self.y += dy - (this.dy || 0);

            self.figure.setNthXY(self.nth,self.x,self.y);
            self.renderShape();
            this.dx = dx;
            this.dy = dy;
            console.log(self.x);
        },
        
        dragup: function() {
            this.dx = this.dy = 0;
        },

        update: function() {
            
        }
    });

    module.exports = NewHotpointView;

});
