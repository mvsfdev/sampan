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
                "coords": this.coords,
                "svg_attrs": Constants.polygon.normal,
                "title": "polygon"
            });
            this.toPath();
            this.setState();
        },
        
        //event trigger this
        toPath: function() {
            var path = "";
            //var coordsAry = this.get('coords').toArray();
            var coordsAry = [{"x": 100, "y": 100}, {"x": 400, "y": 100}, {"x": 400, "y": 300},{"x": 100, "y": 300}];
            if (coordsAry.length > 0) {
                path += "M" + coordsAry[0].x * this.get("scale_x") + "," + 
                    coordsAry[0].y * this.get("scale_y") + " ";
                for ( var i = 1; i < coordsAry.length; i++){
                    path += "L" + coordsAry[i].x * this.get("scale_x") + "," + 
                        coordsAry[i].y * this.get("scale_y")+ " ";
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
