define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var Figure = Backbone.Model.extend({
	defaults: {
            x : null,
            y : null,
            scale_x: Constants.figure.scale_x,
            scale_y: Constants.figure.scale_y,
            id: " ",
            title: " ",
            highlight: null,
            svg_attrs: null,
            configure: null,
            coords: null,
            state: " "
	},

        // for drag
        startDrag: function() {
        },

        moveShape : function(dx,dy) {
            this.set("x", this.get("x") + dx / this.get("scale_x"));
            this.set("y", this.get("y") + dy / this.get("scale_y"));
            this.makeShape(dx,dy);
        },

        makeShape: function() {
        },

        getElement: function(paper) {
        },

        getShape: function() {
        },

        getAttrs: function() {
        },

        setHighlights: function() {
            this.set("highlight", true);
            //return this;
        },

        toggleHighlight: function() {
            if(this.get("highlight") === true){
                this.set("highlight",false);
            }else{
                this.set("highlight",true);
            }
        },

        getNthXY: function(nth) {
            var i = nth, ary , x, y;
            if(nth === 0) {
                x = this.get("x") ;
                y = this.get("y") ;
            }
            else{
                i = nth - 1;
                ary = this.get("coords");
                x = ary[i * 2];
                y = ary[i * 2 + 1];
            }
            return [x * this.get("scale_x") ,
                    y * this.get("scale_y")];
        },
        
        // set coords
        setNthXY:function(nth,x,y) {
            var i , ary,
                scale_x = this.get("scale_x"),
                scale_y = this.get("scale_y");

            if(nth === 0) {
                this.set({"x" : x / scale_x,
                          "y" : y / scale_y
                         });
            }
            else{
                i = nth - 1;
                if (i < 0) return;
                ary = this.get("coords");
                ary[i * 2] = x / scale_x;
                ary[i * 2 + 1] = y / scale_y;
                this.set("coords", ary);
            }
            this.makeShape();
        },

        totalPoint: function() {
            var ary = [],i = 0, scale_x, scale_y, j, n = 0;
            scale_x = this.get("scale_x");
            scale_y = this.get("scale_y");
            ary[i++] = 0;
            ary[i++] = this.get("x") * scale_x;
            ary[i++] = this.get("y") * scale_y;
            var coords = this.get("coords");
            for(j = 0; j < coords.length / 2; j++) {
                ary[i++] = j + 1;
                ary[i++] = coords[j * 2] * scale_x ;
                ary[i++] = coords[j * 2 + 1] * scale_y ;
            }
            return ary;
        }
        





    });
    module.exports = Figure;
});
