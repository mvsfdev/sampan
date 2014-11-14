define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var Figure = Backbone.Model.extend({
	defaults: {
            x : null,
            y : null,
            scale_x: Constants.figure.scale_x,
            scale_y: Constants.figure.scale_y,
            id: " ",
            title: " ",
            highlight: null,
            svg_attrs: null,
            configure: null,
            state: " "
	},

        // for drag
        startDrag: function() {
        },

        moveShape : function(dx,dy) {
            this.set("x", this.get("x") + dx / this.get("scale_x"));
            this.set("y", this.get("y") + dy / this.get("scale_y"));
            this.makeShape();
        },

        makeShape: function() {
        },

        getElement: function(paper) {
        },

        getShape: function() {
        },

        getAttrs: function() {
        },

        setHighlights: function() {
            this.set("highlight", true);
            //return this;
        }

        
    });
    module.exports = Figure;
});
