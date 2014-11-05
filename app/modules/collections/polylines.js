define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    
    var Polyline = require("modules/models/polyline");
    
    
    var Polylines = Backbone.Collection.extend({
	model: Polyline
    });

    module.exports = Polylines;
});
