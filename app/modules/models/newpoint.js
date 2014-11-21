define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/newfigure");
    var Constants = require("modules/constants");

    var NewPoint = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                "r": Constants.point.radius,
                "pattern": "point",
                "title": "alarm"
                
            });
        }
    });

    module.exports = NewPoint;
});

