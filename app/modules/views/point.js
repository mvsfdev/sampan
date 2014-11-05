define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");

    var PointView = Backbone.View.extend({
        initialize: function() {
            
            this.listenTo(this.model, "add", this.append, this);
            this.listenTo(this.model, "destory", this.remove, this);
            
            this.render();
        },
        
        append: function() {},
        
        remove: function() {
            this.view.remove();
        },
        
        events: {},
        
        render: function() {
            this.el.attr({
                cx: this.model.get("position").x,
                cy: this.model.get("position").y,
                r:  this.model.get("r")
            });
        }
        
    });

    module.exports = PointView;
    
});
