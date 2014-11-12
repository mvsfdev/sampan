define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/figure");
    var Constants = require("modules/constants");
    
    var Icon = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                "background": Constants.icon.BOX,
                "svg_attrs": Constants.icon.normal,
                "state": " ",
                "mod_type": "PM",
                "title": "icon"
            });
            this.setIconType(this.get("mod_type"));
            this.setState();
        },

        setIconType: function(type) {
            var icon = " ";
            switch(type) {
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
