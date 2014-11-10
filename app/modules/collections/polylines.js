define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    
    var Polyline = require("modules/models/polyline");
    
    
    var Polylines = Backbone.Collection.extend({
	model: Polyline,

        initialize: function() {
            this.current = this.at(0);
        },

        
        set_highlight: function() {
            var current = this.current;
            current.set({
                "highlight": true
            });
        },
        
        events: {
            "click": "set_current"
            

        },
        
        set_current: function() {
            var current = this.current;
            current.set({
                "highlight": false
            });
            
            current = this.data("index");
            current.set({
                "highlight": true
            });

        }


    });




    module.exports = Polylines;
});
