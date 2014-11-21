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
                "mod_type": "PM",
                "title": "icon",
                "pattern": "icon"
            });
        }
    });
    
    module.exports = Icon;
    
});
