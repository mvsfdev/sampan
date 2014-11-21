define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    var Constants = require("modules/constants");

    var NewFigure = Backbone.Model.extend({
	defaults: {
            x: Constants.figure.x,
            y: Constants.figure.y,
            id: null,
            title: "",
            coords: [],
            state: "normal",
            selected: false,
            pattern: null
	},


        getCoords: function(cds) {
            if(this.attributes.coords.length > 0){
                for(var i = 0; i < this.attributes.coords.length; i++){
                    cds[i] = this.attributes.coords[i];
                }
            }
        },

        setCoords: function(cds) {
            this.attributes.coords = [];
            if(cds.length > 0){
                for(var i = 0; i < cds.length; i++){
                    this.attributes.coords[i] = cds[i];
                }
            }
        }


    });
    module.exports = NewFigure;
});
