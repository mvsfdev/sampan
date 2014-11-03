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
                "foreground": null,
                "svg_attrs": Constants.icon.normal
            });
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
        }
    });
    module.exports = Icon;
});
