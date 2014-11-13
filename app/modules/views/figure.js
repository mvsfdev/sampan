define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var FigureView = Backbone.View.extend({
        initialize: function(options) {
            this.shape = this.model.getElement(options.paper);
            this.shape.attr("title", this.model.get("title"));
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();
            this.model.on("change", this.render, this);
        },

        renderShape: function() {
            this.shape.attr(this.model.getShape());
        },

        renderAttrs: function() {
            this.shape.attr(this.model.getAttrs());
        },

        render: function() {
            this.renderShape();
            this.renderAttrs();
        },

        dragstart: function(){
        },
        
        dragmove: function(dx,dy){
        },
        
        dragup: function(){
        }
        
    });
    
    module.exports = FigureView;
});
