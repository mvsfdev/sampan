define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/figure");
    var Constants = require("modules/constants");
    var Coords = require("modules/collections/coords");
    
    var Polyline = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                svg_attrs: Constants.polyline.normal,
                "coords": null
            });
            this.coords = new Coords();
        },
        
        toPath: function(){
            var path = "";
            //var coordsAry = this.get('coords').toArray();
            var coordsAry = [{"x": 10, "y": 10}, {"x": 20, "y": 20}];
            if (coordsAry.length > 0) {
                path += "M" + coordsAry[0].get("x") * this.get("scale_x") + "," + 
                    coordsAry[0].get("y") * this.get("scale_y") + " ";
                for ( var i = 1; i < coordsAry.length; i++){
                    path += "L" + coordsAry[i].get("x") * this.get("scale_x") + "," + 
                        coordsAry[i].get("y") * this.get("scale_y")+ " ";
                }
            }
            return path;
        },
        
        
        
        selected: function() {
            this.set("svg_attrs", Constants.polyline.selected);
        },
        
        
        setSVG_attrs: function(state) {
            switch (state) {
            case 'accessed':
                this.set("svg_attrs", Constants.polyline.accessed);
                break;

            case 'secured':
                this.set("svg_attrs", Constants.polyline.secured);
                break;
                
            case 'fail' :
                this.set("svg_attrs", Constants.polyline.failed);
                break;
                
            case 'disable':
                this.set("svg_attrs", Constants.polyline.disabled);
                break;

                
            }            
        }
        
        
        
    });
    module.exports = Polyline;
});
