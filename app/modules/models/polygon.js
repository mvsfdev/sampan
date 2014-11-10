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
            this.set({
                "coords": null,
                "svg_attrs": Constants.polygon.normal
            });
            this.coords = new Coords();
            this.setSVG_attrs();
            //this.toPath();
        },
        
        //event trigger this
        toPath: function() {
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
                path += "Z";
            }
            this.set("path", path);
        },

        //event trigger this
        set_state: function() {
            this.set("state","accessed");
            this.setSVG_attrs();
        },
        
        // // event trigger this
        // set_highlight: function() {
        //     this.set("highlight", true);
        // },

        setSVG_attrs: function(state) {
            switch (this.get("state")) {
            case 'accessed':
                this.set("svg_attrs", Constants.polygon.accessed);
                break;
                
            case 'secured':
                this.set("svg_attrs", Constants.polygon.secured);
                break;
                
            case 'failed' :
                this.set("svg_attrs", Constants.polygon.failed);
                break;
                
            case 'disable':
                this.set("svg_attrs", Constants.polygon.disabled);
                break;
            }
            
            
        }
        

    });
    module.exports = Polygon;
    
});
