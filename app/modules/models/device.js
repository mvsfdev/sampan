define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");

    var Device = Backbone.Model.extend({
        defaults:{
            line: null,
            module_id: null,
            owner: null,
            wing: null,
            zone_id: null,
            state: null,
            status: null
            
        }
    });
    module.exports = Device;

});
