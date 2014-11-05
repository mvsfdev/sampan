define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Icon = require("modules/models/icon");
    var Icons = Backbone.Collection.extend({
	model: Icon
    });

    module.exports = Icons;
});
