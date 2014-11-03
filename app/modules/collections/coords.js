define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");
  var Coord = require("modules/models/coord");

  
    var Coords = Backbone.Collection.extend({
	model: Coord
    });
    //return Coords;
    module.exports = Coords;
    
});
