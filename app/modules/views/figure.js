define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");

    var FigureView = Backbone.View.extend({
        initialize: function(options) {
            
        },

        events: {
            "mouseover": "sayName"
        },
        
        sayName: function(model) {
            
        }

    });
    module.exports = FigureView;
});
