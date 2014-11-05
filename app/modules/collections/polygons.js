define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Polygon = require("modules/models/polygon");
    
    
    var Polygons = Backbone.Collection.extend({
	model: Polygon
    });

    module.exports = Polygons;
    
    
});
