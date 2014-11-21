define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var fihure = require("modules/models/figure");

    var NewFigureView = Backbone.View.extend({
        initialize: function(options) {
            this.scale_x = Constants.figure.scale_x;
            this.scale_y = Constants.figure.scale_y;
            this.x = this.model.get("x") * this.scale_x;
            this.y = this.model.get("y") * this.scale_y;
            this.getModelCoords();
            this.svg = this.getSVG();
            this.shape = this.getShape(options.board);
            this.shape.attr("title", this.model.get("title"));
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            
            this.model.on("change",this.render,this);
            this.enableDrag();
            this.render();

        },

        events: {
            //"click": "setShadow"
        },
        
        getSVG: function() {
        },

        getShape: function(board) {
        },
        
        scaleCoords: function() {
            if(this.coords.length > 0){
                for(var i = 0; i < this.coords.length; i+=2){
                    this.coords[i] *= this.scale_x;
                    this.coords[i+1] *= this.scale_y;
                }
            }
        },
        
        calcPath: function(dx,dy) {
            var path = "";
            if (this.coords.length > 0) {
                path = "M" + this.coords[0] + "," + this.coords[1]; 
                for ( var i = 2; i < this.coords.length; i+=2){
                    path += "L" + this.coords[i]  + "," + 
                        this.coords[i+1] + " ";
                }
            }
            return path;
            
        },
        
        getModelCoords: function() {
            this.coords = [];
            this.model.getCoords(this.coords);
            this.scaleCoords();
        },

        drawPath: function() {

        },

        updateState: function() {
            var state = this.model.get("state");
            switch(state) {
            case "normal":
                this.shape.attr(this.svg.normal);

                break;
            default:
                break;
            }
        },

        render: function() {
            this.getModelCoords();
            this.drawPath();
            this.updateState();
            this.shape.transform("t" + this.x  + "," + this.y);
        },

        setModelCoords: function() {
            if(coords.length > 0) {
                var coords = new Array(this.coords.length), i;
                for( i = 0; i< coords.length; i += 2) {
                    coords[i]     = this.coords[i] / this.scale_x;
                    coords[i + 1] = this.coords[i + 1] / this.scale_y;
                }
                self.model.set("coords",coords);
            }
        },


        // Drag-n-Drop Function
        enableDrag : function() {
            console.log("start coords: " + this.coords);
            this.shape.data("self",this);
            this.shape.drag(this.dragmove,this.dragstart,this.dragup);
        },

        dragstart: function(){
            this.dx = this.dy = 0;
        },
        
        dragmove: function(dx,dy){
            var self = this.data("self");
            this.dx = dx;
            this.dy = dy;
            var x = self.x + dx,
                y = self.y + dy;
            self.shape.transform("t" + x + "," + y);
            //self.shape.transform("t" + (self.x + this.dx) + "," + (self.y + this.dy));
        },
        
        dragup: function(){
            var self = this.data("self");
            self.x += this.dx;
            self.y += this.dy;
            self.model.set({
                x: self.x / self.scale_x,
                y: self.y / self.scale_y
            });
            this.dx = this.dy = 0;
        },
        
        totalPoint: function() {
            var ary = [],i = 0, j;
            for(j = 0; j < this.coords.length / 2; j++) {
                ary[i++] = j;
                ary[i++] = this.coords[j * 2] + this.x;
                ary[i++] = this.coords[j * 2 + 1] + this.y;
            }
            return ary;
        },


        getNthXY: function(nth) {
            var i = nth,ary, x, y;
            if(nth >= 0) {
                i = nth;
                x = this.coords[i * 2] + this.x;
                y = this.coords[i * 2 + 1] + this.y;
            }
            return [x ,y];
        },

        setNthXY:function(nth,x,y) {
            var i , ary;

            if(nth >= 0) {
                i = nth;
                this.coords[i * 2] += x ;
                this.coords[i * 2 + 1] += y ;
            }
        }



        
    });
    
    module.exports = NewFigureView;
});
