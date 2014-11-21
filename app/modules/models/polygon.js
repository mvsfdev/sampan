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
            this.coords = new Coords();
            this.set({
                "coords": [30,30,30,70,60,90],
                "title": "polygon",
                "pattern": "polygon"
            });
        }
    });
    module.exports = Polygon;
    
});
