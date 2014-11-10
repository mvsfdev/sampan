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
                "mod_type": " "
            });
            this.setIconType();
            this.setSVG_attrs();
        },

        setIconType: function(mod_type) {
            var icon = " ";
            switch(mod_type) {
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
            }
            this.set("foreground", icon);
        },

        set_state: function() {
            this.set("state", "accessed");
            this.setSVG_attrs();
        },

        setSVG_attrs: function(state) {
            switch (this.get("state")) {
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
            }            
        }
    });

    module.exports = Icon;

});
