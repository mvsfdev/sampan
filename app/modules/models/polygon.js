define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/figure");
    var Coords = require("modules/collections/coords");
    var Constants = require("modules/constants");
    
    var Polygon = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.coords = new Coords();
            this.set({
                "x": Constants.polygon.x,
                "y": Constants.polygon.y,
                "coords": this.coords,
                "svg_attrs": Constants.polygon.normal,
                "title": "polygon"
            });
            this.makeShape();
            this.setState();
        },
        
        getElement: function(paper) {
            return paper.path();
        },

        getShape: function() {
            return {
            "path": this.get("path")
            };
        },

        getAttrs: function() {
            this.updateAttrs();
            return this.get("svg_attrs");
        },

        makeShape : function() {
            var x = this.get("x") , 
                y = this.get("y") ,
                scale_x = this.get("scale_x"),
                scale_y = this.get("scale_y"),
                path;
            var coordsAry = [{"x": 100, "y": 100}, {"x": 400, "y": 100}, {"x": 400, "y": 300},{"x": 100, "y": 300}];
            if (coordsAry.length > 0) {
                path = "M" + x * scale_x + "," + y * scale_y; 
                for ( var i = 0; i < coordsAry.length; i++){
                    path += "L" + (coordsAry[i].x + x) * scale_x + "," + 
                        (y + coordsAry[i].y) * scale_y  + " ";
                }
                path += "Z";
            }
            this.set("path", path);
        },

        //event trigger this
        setState: function(state) {
            var st = state || "secured";
            this.set("state", st);
            this.updateAttrs();
        },
        
        updateAttrs: function() {
            var state = this.get("state");
            switch (state) {
            case 'accessed':
                this.set("svg_attrs", Constants.polygon.accessed);
                break;
                
            case 'secured':
                this.set("svg_attrs", Constants.polygon.secured);
                break;
                
            case 'failed' :
                this.set("svg_attrs", Constants.polygon.failed);
                break;
                
            case 'disabled':
                this.set("svg_attrs", Constants.polygon.disabled);
                break;
            
                default :
                break;
            }
            
            
        }
        

    });
    module.exports = Polygon;
    
});
