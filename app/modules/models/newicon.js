define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Figure = require("modules/models/newfigure");
    var Constants = require("modules/constants");
    
    var NewIcon = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                "background": Constants.icon.BOX,
                "mod_type": "PM",
                "title": "icon",
                "pattern": "icon"
            });
        }
    });
    
    module.exports = NewIcon;
    
});
