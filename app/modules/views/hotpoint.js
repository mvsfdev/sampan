define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var HotpointView = Backbone.View.extend({
        // model : null, 
        // nth : null,
        // x : null,
        // y : null,

        initialize: function(options) {
            
            this.board = options.board;
            this.shape = options.board.circle();
            this.model = options.model;
            this.nth = options.nth || 0;
            var ary = this.model.getNthXY(this.nth);
            this.x = ary[0];
            this.y = ary[1];
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();
            
            this.model.on("change", this.render, this);
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
            var ary = this.model.getNthXY(this.nth);
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
            self.model.startDrag();
        },
        
        dragmove: function(dx,dy) {
            var self = this.data("self");
            //self.model.setNthXY(self.nth,
            //self.x + dx - (this.dx || 0) ,
            //self.y + dy - (this.dy || 0));
            self.x += dx - (this.dx || 0);
            self.y += dy - (this.dy || 0);

            self.model.setNthXY(self.nth,self.x,self.y);
            self.renderShape();
            this.dx = dx;
            this.dy = dy;

        },
        
        dragup: function() {
            this.dx = this.dy = 0;
        },

        update: function() {
            
        }
        

    });

    module.exports = HotpointView;

});
