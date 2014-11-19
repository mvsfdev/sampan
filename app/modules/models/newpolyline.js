define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/newfigure");
    var Constants = require("modules/constants");
    var Coords = require("modules/collections/coords");
    var point = require("modules/models/point");

    var NewPolyline = Figure.extend({
        initialize: function(options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.set({
                "coords": [50,50,90,20,170,80],
                "title": "polyline",
                "pattern": "polyline"
            });

        }
    });
    module.exports = NewPolyline;
});
