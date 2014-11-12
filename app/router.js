define(function(require, exports, module) {
    "use strict";
    
    // External dependencies.
    var Backbone = require("backbone");
    var Point = require("modules/views/point");
    var Polyline = require("modules/views/polyline");
    var Raphael = require("raphael");
    var Constants = require("modules/constants");


    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        
        index: function() {
            var board = new Raphael(0,0,1920,1080);
            this.view = new Point(board);
            this.view.model.setState();
            this.view.model.setState("current");
            this.view.render();
            console.log("Welcome to your / route.");
        }
    });
});
