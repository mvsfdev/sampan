define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Figure = require("modules/models/figure");
    var Constants = require("modules/constants");
    
    var Icon = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                "x": Constants.icon.x,
                "y": Constants.icon.y,
                "background": Constants.icon.BOX,
                "svg_attrs": Constants.icon.normal,
                "state": " ",
                "mod_type": "PM",
                "title": "icon"
            });
            this.setIconType();
            this.setState();
        },

        getElement: function(board) {
            return board.paper.path();
        },

        getShape: function() {
            return {
                "path": this.get("foreground") + this.get("background")
            };
        },
        
        getAttrs: function() {
            this.updateAttrs();
            return this.get("svg_attrs");
        },

         makeShape: function(dx,dy) {
             var scale_x = this.get("scale_x"),
                 scale_y = this.get("scale_y"),
                 x = this.get("x") * scale_x,
                 y = this.get("y") * scale_y,
                 m = Svg.matrix().translate(dx,dy);
             //console.log(m);
             this.set("background",Svg.path.map(this.get("background"),m) );
             this.set("foreground",Svg.path.map(this.get("foreground"),m) );
             this.set("path",this.get("background") + this.get("foreground"));
             //console.log(Svg.matrix(x,y));        
         },

        setIconType: function() {
            var icon = " ",
                tp = this.get("mod_type");
            switch(tp) {
            case "PM":
                icon = Constants.icon.PM;
                break;
            case "RM":
                icon = Constants.icon.RM;
                break;
            case "LU":
                icon = Constants.icon.LU;
                break;
            case "TU":
                icon = Constants.icon.TU;
                break;
            default:
                break;
            }
            this.set("foreground", icon);
        },

        setState: function(state) {
            var st = state || "secured";
            this.set("state", st);
            this.updateAttrs();
        },

        updateAttrs: function() {
            var state = this.get("state");
            switch (state) {
            case 'accessed':
                this.set("svg_attrs", Constants.icon.accessed);
                break;

            case 'secured':
                this.set("svg_attrs", Constants.icon.secured);
                break;
                
            case 'failed' :
                this.set("svg_attrs", Constants.icon.failed);
                break;
                
            case 'disable':
                this.set("svg_attrs", Constants.icon.disabled);
                break;
            default:
                break;

            }            
        }

    });

    module.exports = Icon;

});
