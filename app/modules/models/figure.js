define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");



    var Figure = Backbone.Model.extend({
	defaults: {
            position: null,
            scale_x: null,
            scale_y: null,
            id: " ",
            title: " ",
            highlight: null,
            svg_attrs: null,
            configure: null
	}
    });
    module.exports = Figure;
});
