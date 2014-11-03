define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");


    var Coord = Backbone.Model.extend({
	defaults: {
            x: null,
            y: null
	}
    });
    module.exports = Coord;
});
