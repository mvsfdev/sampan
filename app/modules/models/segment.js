define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");

    var Segment = Backbone.Model.extend({
        defaults:{
            line: null,
            segment_id: null,
            owner: null,
            wing: null,
            start_sub: null,
            end_sub: null,
            zone_id: null,
            state: null,
            status: null
            
        }
    });
    module.exports = Segment;
    
});
