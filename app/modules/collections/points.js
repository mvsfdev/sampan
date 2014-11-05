define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Point = require("modules/models/point");
    
    
    var Points = Backbone.Collection.extend({
	model: Point
    });
    
    module.exports = Points;
    
});
