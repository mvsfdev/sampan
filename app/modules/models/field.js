define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
       
    var Field = Backbone.Model.extend({
        defaults:{
            line: null,
            field_id: null,
            owner: null,
            wing: null,
            location: null,
            zone_id: null,
            state: null,
            status: null
            
        }
    });
    module.exports = Field;
});
