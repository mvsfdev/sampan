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
            this.coords = new Coords([
                 {"x": 10, "y": 10},
                 {"x": 200, "y": 20},
                 {"x": 90, "y": 190}
            ]);
            this.set({
                "x": Constants.polyline.x,
                "y": Constants.polyline.y,
                svg_attrs: Constants.polyline.normal,
                "coords": this.coords,
                "state": "accessed",
                "path": " ",
                "title": "polyline"
            });
            this.toPath();
            this.setState();
        },
        
        getElement: function(paper) {
            return paper.path();
        },

        getShape:  function() {
            return {
                "path": this.get("path")
            };
        },

        getAttrs: function() {
            this.updateAttrs();
            return this.get("svg_attrs");
        },

        toPath: function(){
            var path = "";
                //coordsAry = this.coords.toArray();
            
            var coordsAry = [{"x": 10, "y": 10}, {"x": 200, "y": 20},{"x": 90,"y": 190}];
            if (coordsAry.length > 0) {
                path += "M" + coordsAry[0].x * this.get("scale_x") + "," + 
                    coordsAry[0].y * this.get("scale_y") + " ";
                for ( var i = 1; i < coordsAry.length; i++){
                    path += "L" + coordsAry[i].x * this.get("scale_x") + "," + 
                        coordsAry[i].y * this.get("scale_y")+ " ";
                }
            }
            this.set("path", path);
        },
        
        setState: function(state) {
            var st = state || "secured";
            this.set("state", st);
            this.updateAttrs();
        },

        updateAttrs: function() {
            switch (this.get("state")) {
            case 'accessed':
                this.set("svg_attrs", Constants.polyline.accessed);
                break;
                
            case 'secured':
                this.set("svg_attrs", Constants.polyline.secured);
                break;
                
            case 'failed' :
                this.set("svg_attrs", Constants.polyline.failed);
                break;
                
            case 'disabled':
                this.set("svg_attrs", Constants.polyline.disabled);
                break;
            }            
            
            return true;
        }
        
    });
    module.exports = Polyline;
});
