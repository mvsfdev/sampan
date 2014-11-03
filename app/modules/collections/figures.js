define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Figure = require("modules/models/figure");
    
    var Figures = Backbone.Collection.extend({
        model: Figure
    });
    
    module.exports = Figures;
});
